import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <img src={logo} alt="MindMate logo" className={styles.logo} />
        <span className={styles.title}>MindMate</span>
      </div>
      <button className={styles.cta}>Get Started</button>
    </nav>
  );
}

export default Navbar;
