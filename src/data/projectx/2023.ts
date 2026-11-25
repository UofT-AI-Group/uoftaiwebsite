import { logos } from './logos'
import { RESOURCES } from './shared'
import type { ProjectXCycle } from './types'

export const cycle2023: ProjectXCycle = {
    year: 2023,
    href: '/projectx/2023',
    description:
        'ProjectX 2023, UofT AI’s ML research competition on computational efficiency: research areas, documents, timeline and participating teams.',
    summary: 'Computational Efficiency · $10,000+ prize pool',
    themeLabel: '2023 ML research focus',
    theme: 'Computational Efficiency',
    topics: ['Human-Computer Interaction', 'Human-Human Interaction'],
    facts: [{ label: 'Prize pool', value: '$10,000+' }],
    resources: RESOURCES,
    timeline: {
        title: 'Timeline',
        lede: 'October 2023 to January 2024.',
        items: [
            { date: 'Oct 14', title: 'Research Begins' },
            { date: 'Mid-Nov', title: 'Mid-Competition Check In' },
            { date: 'Dec 20', title: 'Submissions Due' },
            {
                date: 'Mid-Jan',
                title: 'Winners Announced',
                detail: 'At the UofT AI Conference',
            },
        ],
    },
    logos: {
        title: 'Participating teams',
        groups: [
            {
                logos: logos(
                    'uoft',
                    'waterloo',
                    'laurier',
                    'queens',
                    'ubc',
                    'alberta',
                    'mcgill',
                    'montreal',
                    'harvard',
                    'cornell',
                    'duke',
                    'upenn',
                    'carnegie',
                    'johns-hopkins',
                    'irvine',
                    'uwash',
                    'northwestern',
                    'texas',
                    'warwick',
                    'wisconsin',
                    'singapore',
                ),
            },
        ],
    },
}
