import { useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router'
import { PROGRAMS } from '../../data/home'

/**
 * Programs told as a scroll story: the photo stays pinned on the left and
 * changes as each chapter on the right reaches the middle of the screen.
 */
const ProgramStory = () => {
    const [active, setActive] = useState(0)
    const chapterRefs = useRef<(HTMLElement | null)[]>([])

    useEffect(() => {
        const onScroll = () => {
            let next = 0
            chapterRefs.current.forEach((el, i) => {
                if (
                    el &&
                    el.getBoundingClientRect().top < window.innerHeight / 2
                )
                    next = i
            })
            setActive(next)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <section className="hm-section hm-programs" id="programs">
            <div className="hm-kicker">Programs</div>
            <h2 className="hm-h2">
                Three ways in. <em>Compete, attend, or learn.</em>
            </h2>
            <div className="hm-story">
                <div className="hm-frame" aria-hidden="true">
                    {PROGRAMS.map((program, i) => (
                        <img
                            key={program.title}
                            src={program.photo}
                            alt=""
                            className={i <= active ? 'is-on' : undefined}
                        />
                    ))}
                    <span className="hm-frame-count">
                        0{active + 1} / 0{PROGRAMS.length}
                    </span>
                    <span className="hm-frame-bar">
                        <i
                            style={{
                                width: `${100 / PROGRAMS.length}%`,
                                transform: `translateX(${active * 100}%)`,
                            }}
                        />
                    </span>
                </div>
                <div>
                    {PROGRAMS.map((program, i) => (
                        <article
                            key={program.title}
                            ref={(el) => {
                                chapterRefs.current[i] = el
                            }}
                            className={`hm-chapter${i === active ? ' is-on' : ''}`}
                        >
                            <img
                                className="hm-chapter-photo"
                                src={program.photo}
                                alt={program.photoAlt}
                                loading="lazy"
                            />
                            <span className="hm-chapter-kicker">
                                {program.kicker}
                            </span>
                            <h3>{program.title}</h3>
                            <p>{program.description}</p>
                            <dl>
                                {program.facts.map(({ label, value }) => (
                                    <div key={label}>
                                        <dt>{label}</dt>
                                        <dd>{value}</dd>
                                    </div>
                                ))}
                            </dl>
                            <RouterLink className="hm-link" to={program.to}>
                                Explore {program.title} →
                            </RouterLink>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProgramStory
