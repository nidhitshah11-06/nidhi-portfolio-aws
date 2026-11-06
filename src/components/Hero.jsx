
import "./Hero.css";

function Hero() {
  return (
    <section className="portfolio-hero" id="home">
      <div className="hero-glow"></div>

      <div className="hero-left">
        <div className="hero-status">
          <span className="status-dot"></span>
          INFORMATION TECHNOLOGY STUDENT
        </div>

        <p className="hero-intro">HELLO, WORLD! I'M</p>

        <h1>
          Nidhi <span>Shah.</span>
        </h1>

        <h2>
          Building technology
          <br />
          <span>with purpose.</span>
        </h2>

        <p className="hero-description">
          I enjoy solving complex problems through
          technology, with a focus on fintech,
          artificial intelligence and cybersecurity.
          I believe good engineering starts with
          understanding the problem.
        </p>

        <div className="hero-tags">
          <span>Fintech</span>
          <span>Artificial Intelligence</span>
          <span>Cybersecurity</span>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="hero-primary-btn">
            Explore my work <span>↗</span>
          </a>

          <a href="#tech-vault" className="hero-secondary-btn">
            <span>⌘</span> Enter Tech Vault
          </a>
        </div>

        <div className="hero-social-links">
          <a
            href="https://www.linkedin.com/in/nidhi-s-86a45026a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/Nidhi116Shah"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          <div className="hero-card-top">
            <div className="hero-card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="hero-card-title">
              nidhi@portfolio ~
            </span>

            <span className="hero-card-lock">⌘</span>
          </div>

          <div className="hero-card-body">
            <p className="code-comment">
              // A quick introduction
            </p>

            <p className="code-command">
              <span>$</span> whoami
            </p>

            <h3>Engineer in progress.</h3>

            <p className="code-command">
              <span>$</span> interests
            </p>

            <div className="code-value">
              <span>["Fintech",</span>
              <span>"AI",</span>
              <span>"Cybersecurity"]</span>
            </div>

            <p className="code-command">
              <span>$</span> philosophy
            </p>

            <p className="code-output">
              Build things that solve real problems.
            </p>

            <div className="hero-card-footer">
              <span className="status-dot"></span>
              <span>READY TO EXPLORE</span>
              <a href="#tech-vault">Open Tech Vault →</a>
            </div>
          </div>
        </div>

        <div className="hero-floating-label">
          <span>✳</span> Curious by design.
        </div>
      </div>
    </section>
  );
}

export default Hero;
