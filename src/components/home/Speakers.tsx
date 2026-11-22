import { SPEAKERS } from '../../data/home'

const Speakers = () => (
    <section className="hm-section" id="speakers">
        <div className="hm-kicker">On our stage</div>
        <h2 className="hm-h2">
            Who students have heard from.{' '}
            <em>Researchers, founders and policymakers.</em>
        </h2>
        <div className="hm-speakers">
            {SPEAKERS.map(({ name, role, photo, event }) => (
                <figure key={name}>
                    <div className="hm-speaker-photo">
                        <img src={photo} alt={name} loading="lazy" />
                    </div>
                    <figcaption>
                        <b>{name}</b>
                        <span>{role}</span>
                        <em>{event}</em>
                    </figcaption>
                </figure>
            ))}
        </div>
    </section>
)

export default Speakers
