const EMAIL = 'nidhitshah11@gmail.com'

export default function Contact() {
  return (
    <section
      className="section-wrap contact-section"
      id="contact"
    >
      <p className="section-kicker">05 / CONTACT</p>

      <h2 className="section-heading">
        Have an interesting problem?
      </h2>

      <p>
        I’m always open to thoughtful conversations about
        engineering, fintech, AI and security.
      </p>

      <div className="contact-actions">
        <a
          href={`mailto:nidhitshah11@gmail.com`}
          className="primary-button"
        >
          Email me ↗
        </a>

        <a
          href="https://www.linkedin.com/in/nidhi-s-86a45026a"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>

        <a
          href="https://github.com/Nidhi116Shah"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  )
}