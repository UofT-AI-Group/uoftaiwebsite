import { cn } from '@/lib/utils'

export type RailState = 'past' | 'next' | 'future'

/**
 * The marker used wherever the site places something in time. Only `next`
 * pulses, so the pulse always means "this is the one coming up".
 */
export const RailDot = ({
    state = 'past',
    className,
}: {
    state?: RailState
    className?: string
}) => (
    <span
        aria-hidden="true"
        className={cn(
            'inline-block size-[7px] shrink-0 rounded-full',
            state === 'next' &&
                'animate-[ping-ring_2.2s_ease-out_infinite] bg-brand motion-reduce:animate-none',
            state === 'past' && 'bg-rail-dot',
            state === 'future' && 'border border-rail-dot bg-ink',
            className,
        )}
    />
)
