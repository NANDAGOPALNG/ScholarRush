import React, { useState } from "react";

// Animated background blob component
const Blob = ({ color, style, animation }) => (
  <div
    style={{
      position: "absolute",
      borderRadius: "50%",
      filter: "blur(90px)",
      opacity: 0.35,
      zIndex: 0,
      ...style,
      background: color,
      animation: animation,
    }}
  />
);

// Animated neural network SVG
const NeuralNetworkSVG = () => (
  <svg
    width="600"
    height="400"
    viewBox="0 0 600 400"
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 0,
      opacity: 0.35,
      pointerEvents: "none",
    }}
  >
    <defs>
      <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#a259ff" stopOpacity="1" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="neural" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a259ff" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle
      cx="300"
      cy="200"
      r="48"
      fill="url(#pulse)"
      style={{
        animation: "pulseGlow 2s infinite alternate",
        filter: "url(#glow)",
      }}
    />
    <polyline
      points="300,200 150,90"
      stroke="url(#neural)"
      strokeWidth="4"
      fill="none"
      style={{ strokeDasharray: 200, strokeDashoffset: 0, animation: "neuralDraw 2.5s infinite alternate" }}
      filter="url(#glow)"
    />
    <polyline
      points="300,200 450,90"
      stroke="url(#neural)"
      strokeWidth="4"
      fill="none"
      style={{ strokeDasharray: 200, strokeDashoffset: 0, animation: "neuralDraw2 2.5s infinite alternate-reverse" }}
      filter="url(#glow)"
    />
    <polyline
      points="300,200 120,320"
      stroke="url(#neural)"
      strokeWidth="4"
      fill="none"
      style={{ strokeDasharray: 200, strokeDashoffset: 0, animation: "neuralDraw3 2.5s infinite alternate" }}
      filter="url(#glow)"
    />
    <polyline
      points="300,200 480,320"
      stroke="url(#neural)"
      strokeWidth="4"
      fill="none"
      style={{ strokeDasharray: 200, strokeDashoffset: 0, animation: "neuralDraw4 2.5s infinite alternate-reverse" }}
      filter="url(#glow)"
    />
    <circle cx="150" cy="90" r="12" fill="#a259ff" filter="url(#glow)" />
    <circle cx="450" cy="90" r="12" fill="#fbbf24" filter="url(#glow)" />
    <circle cx="120" cy="320" r="12" fill="#fbbf24" filter="url(#glow)" />
    <circle cx="480" cy="320" r="12" fill="#a259ff" filter="url(#glow)" />
    <circle cx="300" cy="200" r="22" fill="#fff" filter="url(#glow)" opacity="0.7" />
    <style>
      {`
        @keyframes pulseGlow {
          0% { r: 48; opacity: .7; }
          100% { r: 60; opacity: 1; }
        }
        @keyframes neuralDraw {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes neuralDraw2 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 200; }
        }
        @keyframes neuralDraw3 {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes neuralDraw4 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 200; }
        }
      `}
    </style>
  </svg>
);

// Realistic brain-in-a-circle logo (SVG, glowing, animated)
const BrainLogo = () => (
  <div
    style={{
      marginBottom: "1.1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    }}
  >
    <div
      style={{
        width: 84,
        height: 84,
        borderRadius: "50%",
        background: "radial-gradient(circle, #a259ffbb 0%, #ffd60044 70%, transparent 100%)",
        boxShadow: "0 0 32px 10px #a259ff55, 0 0 0 8px #fbbf2444",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "logoPulse 2.5s infinite alternate",
        position: "relative",
      }}
    >
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        style={{
          display: "block",
          background: "#fff",
          borderRadius: "50%",
          padding: 7,
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
    </div>
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

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(
      isLogin
        ? `Logging in as ${form.email}`
        : `Signing up as ${form.username} (${form.email})`
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #232946 0%, #a259ff 100%)",
        overflow: "hidden",
      }}
    >
      {/* Animated background blobs */}
      <Blob
        color="#a259ff"
        style={{ width: 320, height: 320, top: 40, left: 40 }}
        animation="blobMove1 10s ease-in-out infinite alternate"
      />
      <Blob
        color="#fbbf24"
        style={{ width: 240, height: 240, bottom: 60, right: 60 }}
        animation="blobMove2 12s ease-in-out infinite alternate"
      />
      {/* Neural network SVG */}
      <NeuralNetworkSVG />

      {/* Glass card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(35,41,70,0.92)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px #a259ff33",
          padding: "2.5rem 2rem 2rem 2rem",
          minWidth: 320,
          maxWidth: 350,
          width: "90vw",
          backdropFilter: "blur(8px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Glowing brain logo */}
        <BrainLogo />

        <h1
          style={{
            color: "#a259ff",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
            letterSpacing: "0.01em",
            textAlign: "center",
            background:
              "linear-gradient(90deg, #a259ff 0%, #fbbf24 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "pulseTitle 2.5s infinite alternate",
          }}
        >
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        <p
          style={{
            color: "#fbbf24",
            fontSize: "1.05rem",
            textAlign: "center",
            marginBottom: "1.7rem",
            fontWeight: 500,
            animation: "pulseSubtitle 2.5s infinite alternate",
          }}
        >
          Your AI companion for emotional wellbeing
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={form.username}
              onChange={handleChange}
              required
              style={{
                padding: "0.8rem",
                borderRadius: "10px",
                border: "1.5px solid #a259ff33",
                background: "#232946",
                color: "#fff",
                fontSize: "1rem",
                outline: "none",
                boxShadow: "0 2px 8px #0001",
                transition: "border 0.18s, box-shadow 0.18s",
              }}
              onFocus={e =>
                (e.target.style.boxShadow = "0 0 0 3px #a259ff55")
              }
              onBlur={e =>
                (e.target.style.boxShadow = "0 2px 8px #0001")
              }
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: "0.8rem",
              borderRadius: "10px",
              border: "1.5px solid #a259ff33",
              background: "#232946",
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
              boxShadow: "0 2px 8px #0001",
              transition: "border 0.18s, box-shadow 0.18s",
            }}
            onFocus={e =>
              (e.target.style.boxShadow = "0 0 0 3px #a259ff55")
            }
            onBlur={e =>
              (e.target.style.boxShadow = "0 2px 8px #0001")
            }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              padding: "0.8rem",
              borderRadius: "10px",
              border: "1.5px solid #a259ff33",
              background: "#232946",
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
              boxShadow: "0 2px 8px #0001",
              transition: "border 0.18s, box-shadow 0.18s",
            }}
            onFocus={e =>
              (e.target.style.boxShadow = "0 0 0 3px #a259ff55")
            }
            onBlur={e =>
              (e.target.style.boxShadow = "0 2px 8px #0001")
            }
          />
          <button
            type="submit"
            style={{
              background:
                "linear-gradient(90deg, #a259ff 0%, #fbbf24 100%)",
              color: "#232946",
              fontWeight: 700,
              fontSize: "1.1rem",
              border: "none",
              borderRadius: "10px",
              padding: "0.95rem 0",
              marginTop: "0.3rem",
              boxShadow: "0 0 12px #a259ff33",
              cursor: "pointer",
              transition: "background 0.18s, color 0.18s, transform 0.18s",
              outline: "none",
            }}
            onMouseDown={e =>
              (e.target.style.transform = "scale(0.96)")
            }
            onMouseUp={e =>
              (e.target.style.transform = "scale(1)")
            }
            onMouseLeave={e =>
              (e.target.style.transform = "scale(1)")
            }
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div
          style={{
            margin: "1.1rem 0 0.7rem 0",
            color: "#bcbcbc",
            fontSize: "0.97rem",
            textAlign: "center",
            width: "100%",
            position: "relative",
          }}
        >
          <span
            style={{
              background: "rgba(35,41,70,0.92)",
              padding: "0 0.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            or
          </span>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: "100%",
              height: 1,
              background: "#444",
              zIndex: 0,
              transform: "translateY(-50%)",
            }}
          />
        </div>
        <button
          type="button"
          style={{
            background: "#fff",
            color: "#232946",
            fontWeight: 600,
            fontSize: "1rem",
            border: "none",
            borderRadius: "10px",
            padding: "0.7rem 0",
            width: "100%",
            marginBottom: "0.7rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.7rem",
            boxShadow: "0 2px 10px #0002",
            cursor: "pointer",
            transition: "background 0.18s, transform 0.18s",
            outline: "none",
          }}
          onMouseDown={e =>
            (e.target.style.transform = "scale(0.96)")
          }
          onMouseUp={e =>
            (e.target.style.transform = "scale(1)")
          }
          onMouseLeave={e =>
            (e.target.style.transform = "scale(1)")
          }
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google"
            style={{
              width: 22,
              height: 22,
              marginRight: 8,
              background: "#fff",
              borderRadius: "50%",
            }}
          />
          Sign up with Google
        </button>
        <div
          style={{
            marginTop: "0.5rem",
            color: "#e5e7eb",
            textAlign: "center",
            fontSize: "1rem",
          }}
        >
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                style={{
                  color: "#a259ff",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  textDecoration: "underline",
                  transition: "color 0.18s",
                }}
                onClick={() => setIsLogin(false)}
                onMouseOver={e => (e.target.style.color = "#fbbf24")}
                onMouseOut={e => (e.target.style.color = "#a259ff")}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                style={{
                  color: "#a259ff",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  textDecoration: "underline",
                  transition: "color 0.18s",
                }}
                onClick={() => setIsLogin(true)}
                onMouseOver={e => (e.target.style.color = "#fbbf24")}
                onMouseOut={e => (e.target.style.color = "#a259ff")}
              >
                Sign In
              </button>
            </>
          )}
        </div>
        {message && (
          <div
            style={{
              marginTop: "1rem",
              color: "#fbbf24",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            {message}
          </div>
        )}
      </div>

      {/* Keyframes for blobs, logo, and title */}
      <style>
        {`
        @keyframes blobMove1 {
          0% { transform: scale(1) translateY(0);}
          100% { transform: scale(1.08) translateY(-30px);}
        }
        @keyframes blobMove2 {
          0% { transform: scale(1) translateY(0);}
          100% { transform: scale(1.12) translateY(30px);}
        }
        @keyframes pulseTitle {
          0% { text-shadow: 0 0 8px #a259ff44, 0 0 0 #fbbf24; }
          100% { text-shadow: 0 0 18px #a259ff99, 0 0 12px #fbbf24; }
        }
        @keyframes pulseSubtitle {
          0% { color: #fbbf24; }
          100% { color: #fffbe7; }
        }
        @keyframes logoPulse {
          0% { box-shadow: 0 0 32px 10px #a259ff55, 0 0 0 8px #fbbf2444; }
          100% { box-shadow: 0 0 48px 16px #a259ff88, 0 0 0 16px #fbbf2444; }
        }
        `}
      </style>
    </div>
  );
};

export default AuthPage;
