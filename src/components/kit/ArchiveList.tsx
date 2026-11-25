import { ArrowRight } from 'lucide-react'
import { Tag } from '@/components/ui/tag'
import { cn } from '@/lib/utils'
import { RailDot } from './RailDot'
import { SmartLink } from './SmartLink'

export type Edition = {
    year: number | string
    title: string
    href: string
    detail?: string
    /** Marks the edition that hasn't happened yet. */
    upcoming?: boolean
}

/**
 * Every edition of a program, one row each, newest first by convention. The
 * row for the page you're on is marked as current instead of linking away.
 */
export const ArchiveList = ({
    editions,
    current,
    className,
}: {
    editions: Edition[]
    /** `href` of the edition being viewed. */
    current?: string
    className?: string
}) => (
    <ol className={cn('border-b border-hair', className)}>
        {editions.map(({ year, title, href, detail, upcoming }) => {
            const here = href === current
            return (
                <li
                    key={href}
                    className="group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 border-t border-hair py-5 sm:gap-x-10"
                >
                    <b
                        className={cn(
                            'min-w-[4ch] text-[clamp(26px,3vw,40px)]/none font-light tracking-[-0.03em] tabular-nums transition-colors duration-250 motion-reduce:transition-none',
                            here ? 'text-brand' : 'group-hover:text-brand',
                        )}
                    >
                        {year}
                    </b>
                    <div className="min-w-0">
                        <h3 className="flex items-center gap-3 text-base">
                            <SmartLink
                                to={href}
                                aria-current={here ? 'page' : undefined}
                                className="focus-ring after:absolute after:inset-0"
                            >
                                {title}
                                <span className="sr-only"> {year}</span>
                            </SmartLink>
                            {upcoming && <RailDot state="next" />}
                            {here && (
                                <Tag variant="brand" aria-hidden="true">
                                    Viewing
                                </Tag>
                            )}
                        </h3>
                        {detail && (
                            <p className="mt-1 font-sans text-[13px]/[1.45] text-dim">
                                {detail}
                            </p>
                        )}
                    </div>
                    <ArrowRight
                        aria-hidden="true"
                        className={cn(
                            'size-4 self-center text-dim transition-[translate,color] duration-250 ease-out-soft group-hover:translate-x-1 group-hover:text-fg motion-reduce:transition-none',
                            here && 'invisible',
                        )}
                    />
                </li>
            )
        })}
    </ol>
)
