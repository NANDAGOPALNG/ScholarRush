import './features-section.css';
import chatIcon from '../assets/chat.svg';
import brainIcon from '../assets/brain.svg';
import calendarIcon from '../assets/calendar.svg';
import logo from '../assets/brain.svg';

function FeaturesSection() {
  return (
    <section className="features-section-bg">
      <h2 className="features-heading">Features Designed for Your Wellbeing</h2>
      <div className="features-cards-row">
        {/* Emotion-Aware Chat */}
        <div className="feature-card">
          <div className="feature-icon feature-icon-purple">
            <img src={chatIcon} alt="Emotion-Aware Chat" width={44} height={44} />
          </div>
          <div className="feature-title">Emotion-Aware Chat</div>
          <div className="feature-desc">
            AI-powered conversations that understand and respond to your emotions, providing support when you need it most.
          </div>
        </div>
        {/* Mood Tracking */}
        <div className="feature-card">
          <div className="feature-icon feature-icon-brain">
            <img src={brainIcon} alt="Mood Tracking" width={44} height={44} />
          </div>
          <div className="feature-title">Mood Tracking</div>
          <div className="feature-desc">
            Track your emotional patterns to gain insights into your well-being and identify what influences your mood.
          </div>
        </div>
        {/* Guided Journaling */}
        <div className="feature-card">
          <div className="feature-icon feature-icon-yellow">
            <img src={calendarIcon} alt="Guided Journaling" width={44} height={44} />
          </div>
          <div className="feature-title">Guided Journaling</div>
          <div className="feature-desc">
            Express your thoughts with AI-assisted prompts for self-reflection and personal growth.
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="features-footer">
        <img src={logo} alt="MindMate logo" className="footer-logo" />
        <span className="footer-brand">MindMate</span>
        <div className="footer-copyright">
          © 2025 MindMate. All rights reserved.
        </div>
      </footer>
    </section>
  );
}

export default FeaturesSection;
