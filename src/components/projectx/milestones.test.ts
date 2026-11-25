import { expect, test } from 'vitest'
import { withStates } from './milestones'

const items = [
    { date: 'Oct 20', title: 'Applications closed', until: '2026-10-20' },
    { date: 'Nov 27', title: 'Mentorship event', until: '2026-11-27' },
    { date: 'Jan 15', title: 'Submissions due', until: '2027-01-15' },
]

const states = (now: string) =>
    withStates(items, new Date(now)).map(({ state }) => state)

test('highlights the first milestone that has not passed in Toronto', () => {
    expect(states('2026-11-24T12:00:00-05:00')).toEqual([
        'past',
        'next',
        'future',
    ])
    // Already November 28 in UTC, but still the 27th in Toronto.
    expect(states('2026-11-27T23:30:00-05:00')).toEqual([
        'past',
        'next',
        'future',
    ])
    expect(states('2026-11-28T00:30:00-05:00')).toEqual([
        'past',
        'past',
        'next',
    ])
})

test('treats undated milestones as done', () => {
    const undated = items.map(({ date, title }) => ({ date, title }))
    expect(withStates(undated).map(({ state }) => state)).toEqual([
        'past',
        'past',
        'past',
    ])
})
