import React from "react";

const BrainLogo = ({ size = 84, style = {} }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: "radial-gradient(circle, #a259ffbb 0%, #ffd60044 70%, transparent 100%)",
      boxShadow: "0 0 32px 10px #a259ff55, 0 0 0 8px #fbbf2444",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      animation: "logoPulse 2.5s infinite alternate",
      position: "relative",
      ...style,
    }}
  >
    <svg
      width={size * 0.64}
      height={size * 0.64}
      viewBox="0 0 54 54"
      style={{
        display: "block",
        background: "#fff",
        borderRadius: "50%",
        padding: size * 0.13,
        boxShadow: "0 0 16px #a259ff44",
      }}
    >
      <defs>
        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a259ff" />
          <stop offset="100%" stopColor="#ffd600" />
        </linearGradient>
      </defs>
      <circle cx="27" cy="27" r="26" fill="#f9fafb" stroke="url(#brainGradient)" strokeWidth="2"/>
      <path
        d="M17 34 Q13 27 17 20 Q21 13 27 17 Q33 13 37 20 Q41 27 37 34 Q33 41 27 37 Q21 41 17 34 Z"
        fill="none"
        stroke="url(#brainGradient)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      <path
        d="M27 17 Q29 22 27 27 Q25 32 27 37"
        fill="none"
        stroke="#a259ff"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M27 17 Q25 22 27 27 Q29 32 27 37"
        fill="none"
        stroke="#ffd600"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </svg>
    <style>
      {`
        @keyframes logoPulse {
          0% { box-shadow: 0 0 32px 10px #a259ff55, 0 0 0 8px #fbbf2444; }
          100% { box-shadow: 0 0 48px 16px #a259ff88, 0 0 0 16px #fbbf2444; }
        }
      `}
    </style>
  </div>
);

export default BrainLogo;
