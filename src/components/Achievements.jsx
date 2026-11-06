const achievements = [
  {
    title: 'Barclays Hack-O-Hire',
    detail: 'Selected among the Top 42 teams.',
  },
  {
    title: 'Sparkulate Business Hackathon',
    detail: 'Winner.',
  },
  {
    title: 'RIT Hackathon 2026',
    detail: '2nd Runner-Up — AI for Social Good.',
  },
  {
    title: 'Smart India Hackathon 2025',
    detail: 'Semifinalist.',
  },
  {
    title: 'Cummins Water Innovation Challenge',
    detail: 'Top 13.',
  },
]

export default function Achievements() {
  return (
    <section
      className="section-wrap content-section"
      id="achievements"
    >
      <p className="section-kicker">04 / MILESTONES</p>

      <h2 className="section-heading">
        A few milestones.
      </h2>

      <div className="achievement-list">
        {achievements.map((item, index) => (
          <article
            className="achievement-row"
            key={item.title}
          >
            <span className="achievement-index">
              0{index + 1}
            </span>

            <h3>{item.title}</h3>

            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}