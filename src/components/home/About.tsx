import { useEffect, useRef, useState } from 'react'
import { ABOUT, STATS } from '@/data/home'
import { wrap } from '@/lib/layout'
import { cn } from '@/lib/utils'
import SectionHeading from './SectionHeading'

/** Counts up from 0 the first time it scrolls into view. */
const CountUp = ({
    to,
    prefix = '',
    suffix = '+',
}: {
    to: number
    prefix?: string
    suffix?: string
}) => {
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
        <b
            ref={ref}
            className="block text-[clamp(40px,5vw,72px)] font-light tracking-[-0.04em] tabular-nums"
        >
            {prefix}
            {value.toLocaleString('en-US')}
            {suffix}
        </b>
    )
}

const About = () => (
    <section
        id="about"
        aria-labelledby="about-title"
        className="scroll-mt-(--site-header-height) py-20 lg:py-30"
    >
        <div className={wrap}>
            <SectionHeading id="about-title" kicker="About">
                For undergraduates who want to build with AI
            </SectionHeading>
            <div className="mt-14 grid items-start gap-10 lg:grid-cols-[7fr_5fr]">
                {ABOUT.map(({ title, photo, photoAlt, text }, i) => (
                    <figure
                        key={title}
                        className={cn('group', i === 1 && 'lg:mt-30')}
                    >
                        <div className="overflow-hidden rounded-sm">
                            <img
                                src={photo}
                                alt={photoAlt}
                                loading="lazy"
                                className="aspect-[3/2] w-full object-cover transition-transform duration-800 ease-out-soft group-hover:scale-[1.03] motion-reduce:transition-none"
                            />
                        </div>
                        <figcaption className="mt-4.5 max-w-115">
                            <h3 className="text-xs tracking-[0.16em] text-brand uppercase">
                                {title}
                            </h3>
                            <p className="mt-2.5 font-sans text-base/[1.6] text-[#b9b9bf]">
                                {text}
                            </p>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <dl className="mt-16 grid grid-cols-2 border-t border-hair lg:grid-cols-4">
                {STATS.map(({ value, label, prefix, suffix }) => (
                    <div
                        key={label}
                        className="flex flex-col-reverse justify-end pt-7 pr-5 pb-7 lg:pb-0"
                    >
                        <dt className="text-[12.5px] text-dim">{label}</dt>
                        <dd>
                            <CountUp
                                to={value}
                                prefix={prefix}
                                suffix={suffix}
                            />
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    </section>
)

export default About
