export default function About() {
  return (
    <section
      className="section-wrap content-section"
      id="about"
    >
      <p className="section-kicker">01 / ABOUT</p>

      <h2 className="section-heading">
        Curiosity, translated into systems.
      </h2>

      <p className="section-intro">
        I’m a third-year Information Technology student at
        MKSSS Cummins College of Engineering for Women, Pune.
        My interests span backend engineering, financial
        technology, machine learning and cybersecurity.

        I enjoy understanding a problem deeply, then building
        something practical around it.
      </p>

      <div className="about-facts">
        <div>
          <span>01</span>
          <b>Problem-first</b>
          <p>Start with the problem, not the framework.</p>
        </div>

        <div>
          <span>02</span>
          <b>Security-aware</b>
          <p>Think about privacy, reliability and access.</p>
        </div>

        <div>
          <span>03</span>
          <b>Always learning</b>
          <p>Build, test, learn and improve.</p>
        </div>
      </div>
    </section>
  )
}