import '../styles/landing.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-glow"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Your <span className="gradient-text">AI Companion</span> for Mental Well-being
        </h1>
        <p className="hero-subtitle">
          Empathetic support, mood tracking, and guided journaling—right when you need it.
        </p>
        <button className="hero-btn">Start Chatting Now</button>
      </div>
    </section>
  );
}

export default Hero;
