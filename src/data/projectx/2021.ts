import { logos } from './logos'
import {
    JUDGES_2020,
    JUDGES_2021,
    RESOURCES,
    SPONSOR_TIERS_2020_2021,
    TEAM_2020_2021,
    TIMELINE_2020_2021,
} from './shared'
import type { ProjectXCycle } from './types'

export const cycle2021: ProjectXCycle = {
    year: 2021,
    href: '/projectx/2021',
    description:
        'ProjectX 2021 was UofT AI’s ML research competition on health. This archived page keeps its documents, financial aid, timeline, judging panel, participating teams and sponsors.',
    summary: 'Health · $75,000 prize pool',
    archived: { title: 'ProjectX 2021 has ended.' },
    themeLabel: '2021 ML research focus',
    theme: 'Health',
    topics: ['Epidemiology', 'Clinical Practice', 'Genetics'],
    facts: [{ label: 'Prize pool', value: '$75,000' }],
    documents: { items: RESOURCES },
    support: {
        title: 'Participants financial aid',
        items: [
            {
                title: 'For individuals',
                paragraphs: [
                    'Travelling or struggling to cover the cost of attending?',
                    "We've got your back! Fill out our bursary application form below to cover the cost of travel (per individual).",
                ],
            },
            {
                title: 'For teams',
                paragraphs: [
                    'Please submit the following information package to your respective university departments to request financial support on covering travelling expenses.',
                ],
            },
        ],
    },
    timeline: { title: 'Timeline', items: TIMELINE_2020_2021 },
    people: [
        {
            id: 'judging-panel',
            title: 'Judging panel',
            people: [...JUDGES_2020, ...JUDGES_2021],
        },
        { id: 'team', title: 'Our team', people: TEAM_2020_2021 },
    ],
    logos: {
        title: 'Participating teams',
        groups: [
            {
                logos: logos(
                    'uoft',
                    'torino',
                    'carnegie',
                    'caltech',
                    'mcgill',
                    'johns-hopkins',
                    'wisconsin',
                    'uchile',
                    'columbia',
                    'umass',
                    'alberta',
                    'usc',
                    'waterloo',
                    'ucsd',
                    'queens',
                    'uottawa',
                    'upenn',
                    'michigan',
                    'sfu',
                    'yale',
                    'cornell',
                    'ubc',
                    'illinois',
                    'northwestern',
                    'montreal',
                    'mcmaster',
                ),
            },
            ...SPONSOR_TIERS_2020_2021,
        ],
    },
}
