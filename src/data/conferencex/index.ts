import type { Edition } from '@/components/kit/ArchiveList'
import { recap2024 } from './2024'
import { recap2025 } from './2025'
import { recap2026 } from './2026'
import { upcoming2027 } from './2027'
import type { Recap } from './types'

export const UPCOMING = upcoming2027

/** Newest first. */
export const RECAPS: Recap[] = [recap2026, recap2025, recap2024]

export const PAST_EDITIONS: Edition[] = RECAPS.map(
    ({ year, path, summary }) => ({
        year,
        title: 'ConferenceX',
        href: path,
        detail: summary,
    }),
)

export const ALL_EDITIONS: Edition[] = [
    {
        year: UPCOMING.year,
        title: 'ConferenceX',
        href: UPCOMING.path,
        detail: `Proposed theme: ${UPCOMING.theme}`,
        upcoming: true,
    },
    ...PAST_EDITIONS,
]
