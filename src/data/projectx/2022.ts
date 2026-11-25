import aidanMitchellBoudreau from '../../static/assets/projectx/2022/aidan-mitchell-boudreau.webp'
import ashwinKarthikeyan from '../../static/assets/projectx/2022/ashwin-karthikeyan.webp'
import chloeZhao from '../../static/assets/projectx/2022/chloe-zhao.webp'
import elginLin from '../../static/assets/projectx/2022/elgin-lin.webp'
import jaiMansukhani from '../../static/assets/projectx/2022/jai-mansukhani.webp'
import jeannieYoo from '../../static/assets/projectx/2022/jeannie-yoo.webp'
import pranavKansal from '../../static/assets/projectx/2022/pranav-kansal.webp'
import sohaibSaqib from '../../static/assets/projectx/2022/sohaib-saqib.webp'
import varunLodaya from '../../static/assets/projectx/2022/varun-lodaya.webp'
import type { Person } from '@/components/kit/Person'
import { logos } from './logos'
import { RESOURCES } from './shared'
import type { ProjectXCycle } from './types'

const TEAM: Person[] = [
    { name: 'Jeannie Yoo', role: 'Co-President', photo: jeannieYoo },
    { name: 'Varun Lodaya', role: 'Co-President', photo: varunLodaya },
    {
        name: 'Aidan Mitchell-Boudreau',
        role: 'Co-Director of Partnerships',
        photo: aidanMitchellBoudreau,
    },
    {
        name: 'Jai Mansukhani',
        role: 'Co-Director of Partnerships',
        photo: jaiMansukhani,
    },
    {
        name: 'Ashwin Karthikeyan',
        role: 'Director of Education',
        photo: ashwinKarthikeyan,
    },
    { name: 'Chloe Zhao', role: 'Director of Marketing', photo: chloeZhao },
    { name: 'Elgin Lin', role: 'Director of Finance', photo: elginLin },
    {
        name: 'Pranav Kansal',
        role: 'Director of Community Engagement',
        photo: pranavKansal,
    },
    { name: 'Sohaib Saqib', role: 'Conference Chair', photo: sohaibSaqib },
]

export const cycle2022: ProjectXCycle = {
    year: 2022,
    href: '/projectx/2022',
    description:
        'ProjectX 2022 was UofT AI’s ML research competition on human-computer interaction. This archived page keeps its documents, timeline, team, participating teams and partners.',
    summary: 'Human-Computer Interaction · $40,000+ prize pool',
    archived: { title: 'ProjectX 2022 has ended.' },
    themeLabel: '2022 ML research focus',
    theme: 'Human-Computer Interaction',
    topics: ['Human-Computer Interaction', 'Human-Human Interaction'],
    facts: [{ label: 'Prize pool', value: '$40,000+' }],
    documents: { items: RESOURCES },
    timeline: {
        title: 'Project X 2023 timeline',
        items: [
            {
                date: 'September 01',
                title: 'Confirm university participation',
                detail: 'Participation confirmation deadline for universities.',
            },
            {
                date: 'September 14',
                title: 'Team registration deadline',
                detail: 'Students will form groups and be onboarded with short presentations from UofT AI, the head judge, and partners.',
            },
            {
                date: 'October 01',
                title: 'Competition starts',
                detail: 'Teams begin research with focus on one of two themes: human-computer interaction or human-human interaction.',
            },
            {
                date: 'December 14',
                title: 'Final deliverable due',
                detail: 'Final draft of research paper is due from all participating teams.',
            },
            {
                date: 'January 21',
                title: 'Winners announced',
                detail: 'Winning teams are announced by our panel of researchers and industry experts! Awards ceremony for winning teams held at the UofT AI conference.',
            },
        ],
    },
    people: [{ id: 'team', title: 'Our team', people: TEAM }],
    logos: {
        title: 'Participating teams',
        groups: [
            {
                logos: logos(
                    'uoft',
                    'usc',
                    'illinois',
                    'york',
                    'wisconsin',
                    'ubc',
                    'mcgill',
                    'waterloo',
                    'sfu',
                    'imperial-college-london',
                    'cornell',
                    'warwick',
                    'montreal',
                    'princeton',
                    'umass',
                ),
            },
            {
                title: 'Our partners',
                logos: logos('vector', 'nvidia', 'intel', 'deepmind', 'google'),
                height: 56,
            },
        ],
    },
}
