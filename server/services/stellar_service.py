# services/stellar_service.py

from soroban_client import SorobanServer, Contract

RPC_URL = "https://rpc-futurenet.stellar.org"
CONTRACT_ID = "YOUR_DEPLOYED_CONTRACT_ID"
SOURCE_WALLET = "YOUR_WALLET_PUBLIC_KEY"

server = SorobanServer(RPC_URL)
contract = Contract(CONTRACT_ID, server)

def approve_scholarship(student_address: str, amount: int):
    try:
        return contract.invoke(
            function="approve_scholarship",
            args=[student_address, amount],
            source=SOURCE_WALLET
        )
    except Exception as e:
        return {"error": str(e)}
