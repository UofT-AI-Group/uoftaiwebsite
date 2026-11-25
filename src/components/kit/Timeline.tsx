import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { RailDot } from './RailDot'
import type { RailState } from './RailDot'
import { SmartLink } from './SmartLink'

export type Milestone = {
    /** A year or a short date. Read out after the title so repeated titles stay distinct. */
    date: string | number
    title: string
    href?: string
    detail?: ReactNode
    state?: RailState
}

/**
 * Milestones along a ruled rail, in order. Wraps to two columns on small
 * screens and up to five on large ones.
 */
export const Timeline = ({
    items,
    className,
}: {
    items: Milestone[]
    className?: string
}) => (
    <ol
        className={cn(
            'grid grid-cols-2 gap-x-6 lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))] lg:gap-x-0',
            className,
        )}
        style={{ '--cols': Math.min(items.length, 5) } as CSSProperties}
    >
        {items.map(({ date, title, href, detail, state = 'past' }) => (
            <li
                key={`${date}-${title}`}
                aria-current={state === 'next' ? 'step' : undefined}
                className="relative border-t border-rail pt-6.5 pr-4.5 pb-12"
            >
                <RailDot state={state} className="absolute -top-1 left-0" />
                <b
                    className={cn(
                        'block text-3xl font-light tracking-[-0.03em]',
                        state === 'next' && 'text-brand',
                    )}
                >
                    {date}
                </b>
                <h3 className="mt-2.5 text-sm">
                    {href ? (
                        <SmartLink to={href} className="link-grow focus-ring">
                            {title}
                            <span className="sr-only"> {date}</span>
                        </SmartLink>
                    ) : (
                        title
                    )}
                </h3>
                {detail && (
                    <p className="mt-1.5 font-sans text-[13px]/[1.45] text-dim">
                        {detail}
                    </p>
                )}
            </li>
        ))}
    </ol>
)
