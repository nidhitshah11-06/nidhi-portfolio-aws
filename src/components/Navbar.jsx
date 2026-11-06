
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="portfolio-navbar">
      <a href="#home" className="nav-brand">
        <span className="brand-mark">N</span>
        <span>NIDHI SHAH<span className="brand-dot">.</span></span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
      </div>

      <a href="#tech-vault" className="nav-vault-button">
        <span>⌘</span> Tech Vault
        <span className="nav-arrow">↗</span>
      </a>
    </nav>
  );
}

export default Navbar;
