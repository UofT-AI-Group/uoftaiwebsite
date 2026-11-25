import { cn } from '@/lib/utils'
import { useSection } from './sectionContext'

/** `width` is the logo's width when scaled to 120px tall. */
export type Logo = { name: string; src: string; width: number }

export type LogoGroup = {
    /** e.g. "ConferenceX 2026 sponsors" or a tier name. */
    title?: string
    logos: Logo[]
    /** Rendered logo height in px. Use larger values for higher tiers. */
    height?: number
    /**
     * Sizes logos by area instead of height, so square crests and long
     * wordmarks carry similar weight. `height` then applies to a logo about
     * 2.5 times as wide as it is tall; others scale from there, within limits.
     */
    balance?: boolean
}

const balancedHeight = (width: number, height: number) => {
    const aspect = width / 120
    const scaled = height * Math.sqrt(2.5 / aspect)
    return Math.round(Math.min(height * 1.5, Math.max(height * 0.65, scaled)))
}

/**
 * Sponsor and partner logos in groups or tiers. Sponsors require their logos
 * on white in their original colours, so the white surface is applied last
 * and can't be overridden, and no filters are ever applied to the images.
 * Outside a white `Section` it becomes an inset white panel.
 */
export const LogoWall = ({
    groups,
    className,
}: {
    groups: LogoGroup[]
    className?: string
}) => {
    const { tone } = useSection()
    const inset = tone !== 'white'

    return (
        <div
            className={cn(
                inset && 'px-6 py-2 md:px-10 [&>*:first-child]:border-t-0',
                className,
                'bg-white text-ink',
            )}
        >
            {groups.map(({ title, logos, height = 40, balance = false }) => (
                <div
                    key={title ?? logos[0]?.name}
                    className="grid gap-5 border-t border-ink/12 py-8 md:grid-cols-12 md:gap-8"
                >
                    {title && (
                        <h3 className="text-[13px] text-ink/60 md:col-span-3 md:pt-2">
                            {title}
                        </h3>
                    )}
                    <ul
                        className={cn(
                            'flex flex-wrap items-center gap-x-10 gap-y-7 md:gap-x-14',
                            title ? 'md:col-span-9' : 'md:col-span-12',
                        )}
                    >
                        {logos.map(({ name, src, width }) => {
                            const h = balance
                                ? balancedHeight(width, height)
                                : height
                            return (
                                <li key={name}>
                                    <img
                                        src={src}
                                        alt={name}
                                        width={Math.round((width * h) / 120)}
                                        height={h}
                                        loading="lazy"
                                        className="w-auto"
                                        style={{ height: h }}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            ))}
        </div>
    )
}
