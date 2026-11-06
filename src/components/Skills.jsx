import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section
      className="section-wrap content-section"
      id="skills"
    >
      <p className="section-kicker">02 / TECH STACK</p>

      <h2 className="section-heading">
        Tools I work with.
      </h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article
            className="skill-card"
            key={group.title}
          >
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}