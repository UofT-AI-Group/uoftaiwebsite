import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

/**
 * Numeric figures must come from a published source and say which year they
 * describe, e.g. "ConferenceX 2024 attendees".
 */
export type Fact = {
    label: string
    value: number | string
    prefix?: string
    suffix?: string
}

const bigNumber =
    'block text-[clamp(40px,5vw,72px)] font-light tracking-[-0.04em] tabular-nums'

/** Counts up from 0 the first time it scrolls into view. */
const CountUp = ({
    to,
    prefix = '',
    suffix = '',
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
        <b ref={ref} className={bigNumber}>
            {prefix}
            {value.toLocaleString('en-US')}
            {suffix}
        </b>
    )
}

/**
 * Label and value pairs. `lg` sets big figures in a ruled grid with the label
 * underneath; `sm` is an inline row for event details like dates and venues.
 */
export const FactRow = ({
    facts,
    size = 'lg',
    countUp = false,
    className,
}: {
    facts: Fact[]
    size?: 'sm' | 'lg'
    /** Animates numeric values on first view. Ignored with reduced motion. */
    countUp?: boolean
    className?: string
}) =>
    size === 'lg' ? (
        <dl
            className={cn(
                'grid grid-cols-2 border-t border-hair lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]',
                className,
            )}
            style={{ '--cols': Math.min(facts.length, 4) } as CSSProperties}
        >
            {facts.map(({ label, value, prefix = '', suffix = '' }) => (
                <div
                    key={label}
                    className="flex flex-col-reverse justify-end pt-7 pr-5 pb-7 lg:pb-0"
                >
                    <dt className="text-[12.5px] text-dim">{label}</dt>
                    <dd>
                        {countUp && typeof value === 'number' ? (
                            <CountUp
                                to={value}
                                prefix={prefix}
                                suffix={suffix}
                            />
                        ) : (
                            <b className={bigNumber}>
                                {prefix}
                                {typeof value === 'number'
                                    ? value.toLocaleString('en-US')
                                    : value}
                                {suffix}
                            </b>
                        )}
                    </dd>
                </div>
            ))}
        </dl>
    ) : (
        <dl
            className={cn(
                'flex flex-wrap gap-x-7 gap-y-2 text-[13px] text-dim',
                className,
            )}
        >
            {facts.map(({ label, value, prefix = '', suffix = '' }) => (
                <div key={label}>
                    <dt>{label}</dt>
                    <dd className="mt-0.5 text-lg text-white">
                        {prefix}
                        {value}
                        {suffix}
                    </dd>
                </div>
            ))}
        </dl>
    )
