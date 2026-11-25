import { logos } from './logos'
import { RESOURCES } from './shared'
import type { ProjectXCycle } from './types'

export const cycle2023: ProjectXCycle = {
    year: 2023,
    href: '/projectx/2023',
    description:
        'ProjectX 2023 was UofT AI’s ML research competition on computational efficiency. This archived page keeps its documents, timeline and participating teams.',
    summary: 'Computational Efficiency · $10,000+ prize pool',
    archived: { title: 'ProjectX 2023 has ended.' },
    themeLabel: '2023 ML research focus',
    theme: 'Computational Efficiency',
    topics: ['Human-Computer Interaction', 'Human-Human Interaction'],
    facts: [{ label: 'Prize pool', value: '$10,000+' }],
    documents: { title: 'Other details', items: RESOURCES },
    timeline: {
        title: 'ProjectX 2023 timeline',
        items: [
            { date: 'October 14th, 2023', title: 'Research begins' },
            { date: 'Mid-November, 2023', title: 'Mid-competition check in' },
            { date: 'December 20, 2023', title: 'Submissions due' },
            {
                date: 'Mid-January, 2024',
                title: 'Winners announced',
                detail: '@ UofTAI Conference',
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
