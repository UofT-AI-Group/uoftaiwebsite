import { useEffect, useRef, useState } from 'react'
import { PARTNERS, STATS } from '../../data/home'

/** Counts up from 0 the first time it scrolls into view. */
const CountUp = ({ to, suffix = '+' }: { to: number; suffix?: string }) => {
    const ref = useRef<HTMLElement>(null)
    const [value, setValue] = useState(to)

    useEffect(() => {
        const el = ref.current
        if (
            !el ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
            el.getBoundingClientRect().top < window.innerHeight
        )
            return
        let frame = 0
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return
                observer.disconnect()
                const start = performance.now()
                const step = (now: number) => {
                    const t = Math.min(1, (now - start) / 1400)
                    setValue(Math.round(to * (1 - (1 - t) ** 3)))
                    if (t < 1) frame = requestAnimationFrame(step)
                }
                frame = requestAnimationFrame(step)
            },
            { threshold: 0.6 },
        )
        observer.observe(el)
        return () => {
            observer.disconnect()
            cancelAnimationFrame(frame)
        }
    }, [to])

    return (
        <b ref={ref}>
            {value.toLocaleString('en-US')}
            {suffix}
        </b>
    )
}

const Stats = () => (
    <section className="hm-section" id="about">
        <div className="hm-kicker">In numbers</div>
        <h2 className="hm-h2">
            An incubator for the next generation of AI talent.{' '}
            <em>Learn, build, and meet your future co-founders.</em>
        </h2>
        <div className="hm-stats">
            {STATS.map(({ value, label }) => (
                <div key={label}>
                    <CountUp to={value} />
                    <span>{label}</span>
                </div>
            ))}
        </div>
        <div className="hm-logos">
            {PARTNERS.map(({ name, logo, solid }) => (
                <img
                    key={name}
                    src={logo}
                    alt={name}
                    className={solid ? 'hm-logo-solid' : undefined}
                />
            ))}
        </div>
    </section>
)

export default Stats
