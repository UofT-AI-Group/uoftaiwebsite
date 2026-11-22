import { MILESTONES } from '../../data/home'

const Timeline = () => (
    <section className="hm-section">
        <div className="hm-kicker">Since 2020</div>
        <h2 className="hm-h2">
            Every year, a little bigger. <em>Here's what's next.</em>
        </h2>
        <ol className="hm-rail">
            {MILESTONES.map(({ year, title, detail, upcoming }) => (
                <li key={year} className={upcoming ? 'is-next' : undefined}>
                    <b>{year}</b>
                    <h4>{title}</h4>
                    <p>{detail}</p>
                </li>
            ))}
        </ol>
    </section>
)

export default Timeline
