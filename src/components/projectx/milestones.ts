import type { Milestone as KitMilestone } from '@/components/kit/Timeline'
import type { Milestone } from '@/data/projectx/types'

const torontoDate = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto',
})

/**
 * Marks each milestone as done, next or still to come. Milestones without an
 * `until` date count as done, so past cycles need no dates at all.
 */
export const withStates = (
    items: Milestone[],
    now = new Date(),
): KitMilestone[] => {
    const today = torontoDate.format(now)
    let nextFound = false
    return items.map(({ until, ...item }) => {
        if (!until || until < today) return { ...item, state: 'past' }
        const state = nextFound ? 'future' : 'next'
        nextFound = true
        return { ...item, state }
    })
}
