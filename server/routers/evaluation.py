from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from services.groq_service import GroqEvaluator
from models.schemas import ApplicationData, EvaluationResult
from typing import Optional
from services.stellar_service import approve_scholarship  # import the good stuff

import asyncio

router = APIRouter(prefix="/evaluate", tags=["Evaluation"])


@router.post("/", response_model=EvaluationResult)
async def evaluate_application(data: ApplicationData):
    """Endpoint for full application evaluation"""
    try:
        evaluator = GroqEvaluator()
        result = await evaluator.full_evaluation(data)
         if result.eligible and data.stellar_wallet:
             stellar_tx = approve_scholarship(data.stellar_wallet, 5000000)
             result.stellar_tx_result = stellar_tx
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/stream")
async def stream_evaluation(data: ApplicationData):
    """Streaming evaluation endpoint"""
    evaluator = GroqEvaluator()

    async def generate():
        async for chunk in evaluator.stream_evaluation(data):
            yield f"data: {chunk}\n\n"
            await asyncio.sleep(0.1)  # Control stream speed

    return StreamingResponse(generate(), media_type="text/event-stream")
