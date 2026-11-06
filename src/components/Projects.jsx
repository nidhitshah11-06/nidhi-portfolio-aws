import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section
      className="section-wrap content-section"
      id="projects"
    >
      <p className="section-kicker">03 / SELECTED WORK</p>

      <h2 className="section-heading">
        Projects with a purpose.
      </h2>

      <p className="section-subtitle">
        A selection of systems and prototypes I’ve worked on.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.id}
          >
            <div className="project-topline">
              <span>{project.name}</span>
              <small>{project.status}</small>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Repository <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}