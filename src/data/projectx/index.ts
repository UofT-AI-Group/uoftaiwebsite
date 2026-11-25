import type { Edition } from '@/components/kit/ArchiveList'
import { cycle2020 } from './2020'
import { cycle2021 } from './2021'
import { cycle2022 } from './2022'
import { cycle2023 } from './2023'
import { cycle2024 } from './2024'
import { cycle2026 } from './2026'
import type { ProjectXCycle } from './types'

/** The cycle `/projectx` opens on. */
export const CURRENT_CYCLE = cycle2026

/** Past cycles, newest first. Each has its own page at its `href`. */
export const PAST_CYCLES = [
    cycle2024,
    cycle2023,
    cycle2022,
    cycle2021,
    cycle2020,
]

export const findPastCycle = (year: string | undefined) =>
    PAST_CYCLES.find((cycle) => String(cycle.year) === year)

export const toEdition = ({ year, href, summary }: ProjectXCycle): Edition => ({
    year,
    title: 'ProjectX',
    href,
    detail: summary,
})
