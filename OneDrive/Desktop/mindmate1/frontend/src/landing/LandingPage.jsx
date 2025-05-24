import './styles/landing.css';
import FeaturesSection from './components/FeaturesSection';
import logo from "../landing/assets/brain.svg";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="main-bg">
      {/* Navbar */}
      <header className="nav-row">
        <div className="nav-left">
          <img src={logo} alt="MindMate logo" className="nav-logo" />
          <span className="nav-title">MindMate</span>
        </div>
        <div className="nav-right">
          <button className="nav-btn nav-signin" onClick={() => navigate("/auth")}>Sign In</button>
          <button className="nav-btn nav-signup" onClick={() => navigate("/auth")}>Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="center-main">
        <div className="center-logo-wrap">
          <img src={logo} alt="MindMate glowing brain" className="center-logo" />
        </div>
        <h1 className="main-title">
          <span className="main-title-gradient1">Your Emotional</span>{' '}
          <span className="main-title-gradient2">Wellbeing<br/>Companion</span>
        </h1>
        <p className="main-subtitle">
          An AI companion that understands your emotions and<br />
          helps you navigate your mental wellbeing journey.
        </p>
        <div className="cta-row">
          <button className="cta-btn cta-main" onClick={() => navigate("/auth")}>Start Your Journey</button>
          <button className="cta-btn cta-secondary" onClick={() => navigate("/auth")}>Sign In</button>
        </div>
        <div className="feature-icons-row">
          <div className="feature-highlight">✔️ Private & Secure</div>
          <div className="feature-highlight">✔️ 24/7 Support</div>
          <div className="feature-highlight">✔️ Personalized</div>
          <div className="feature-highlight">✔️ Science-backed</div>
        </div>
      </main>

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
}

export default LandingPage;
