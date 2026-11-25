import projectx640 from '../static/assets/home/projectx-640.webp'
import projectx1100 from '../static/assets/home/projectx-1100.webp'
import conferencex640 from '../static/assets/home/conferencex-640.webp'
import conferencex1100 from '../static/assets/home/conferencex-1100.webp'
import hinton from '../static/assets/home/speaker-hinton.webp'
import wolfram from '../static/assets/home/speaker-wolfram.webp'
import stein from '../static/assets/home/speaker-stein.webp'
import fleet from '../static/assets/home/speaker-fleet.webp'
import gans from '../static/assets/home/speaker-gans.webp'
import wigdor from '../static/assets/home/speaker-wigdor.webp'
import gauthier from '../static/assets/home/speaker-gauthier.webp'
import ey from '../static/assets/home/logo-ey.webp'
import rbc from '../static/assets/home/logo-rbc.webp'
import intact from '../static/assets/home/logo-intact.webp'
import canvas from '../static/assets/home/logo-canvas.webp'
import bmo from '../static/assets/home/logo-bmo.webp'
import bell from '../static/assets/home/logo-bell.webp'
import cifar from '../static/assets/home/logo-cifar.webp'
import kpmg from '../static/assets/home/logo-kpmg.webp'
import mars from '../static/assets/home/logo-mars.webp'
import vector from '../static/assets/home/logo-vector.webp'
import ripple from '../static/assets/ripple-logo.svg'
import uoft from '../static/assets/uoft-logo.png'
import wombo from '../static/assets/wombo-logo.svg'
import type { Fact } from '@/components/kit/FactRow'
import type { Logo } from '@/components/kit/LogoWall'
import type { Person } from '@/components/kit/Person'
import whoWeAre from '../static/assets/who-we-are.webp'
import ourMission from '../static/assets/our-mission.webp'

export const ABOUT = [
    {
        title: 'Who we are',
        photo: whoWeAre,
        photoAlt: 'UofT AI members together on stage',
        text: 'Outside our conferences and hackathons, members learn about AI together and work on projects with people from industry.',
    },
    {
        title: 'Our mission',
        photo: ourMission,
        photoAlt:
            'A UofT AI member talking with a guest at the Vector Institute booth',
        text: 'We want undergraduates to find the part of AI they care about and work on it with other students.',
    },
]

/**
 * Every figure must be traceable to a published source and labelled with the
 * year it describes. Only figures that are lower bounds get a "+".
 */
export const STATS: Fact[] = [
    { value: 500, label: 'ConferenceX 2024 attendees', suffix: '+' },
    { value: 150, label: 'ProjectX 2021 competitors', suffix: '+' },
    { value: 70, label: 'ProjectX 2020 prize pool', prefix: '$', suffix: 'K' },
    { value: 36, label: 'universities in ProjectX 2020–22' },
]

export type Program = {
    id: string
    kicker: string
    name: string
    to: string
    description: string
    facts: { label: string; value: string }[]
    photo: {
        src: string
        srcSet: string
        alt: string
        /** Keeps the subject in view when the photo is cropped to the frame. */
        position: string
    }
}

export const PROGRAMS: Program[] = [
    {
        id: 'projectx',
        kicker: '01 · Competition',
        name: 'ProjectX',
        to: '/projectx',
        description:
            "North America's largest undergraduate ML research competition. It's open to every discipline, from computer science to the humanities. You can propose a new technology, process or policy, or submit academic research.",
        facts: [
            { label: '2026 theme', value: 'What is Progress?' },
            { label: 'First held', value: '2020' },
        ],
        photo: {
            src: projectx1100,
            srcSet: `${projectx640} 640w, ${projectx1100} 1100w`,
            alt: 'A speaker presenting on stage at ProjectX',
            position: '50% 30%',
        },
    },
    {
        id: 'conferencex',
        kicker: '02 · Conference',
        name: 'ConferenceX',
        to: '/conferencex',
        description:
            'Two days of talks and panels on AI and society, plus a showcase of Toronto AI startups.',
        facts: [
            { label: '2026 theme', value: 'The Intelligence Test' },
            { label: 'Dates', value: 'Jan 24 and 25, 2026' },
        ],
        photo: {
            src: conferencex1100,
            srcSet: `${conferencex640} 640w, ${conferencex1100} 1100w`,
            alt: 'A speaker presenting at a podium',
            position: '60% 40%',
        },
    },
]

export const FEATURED_SPEAKER: Person & { event: string } = {
    name: 'Geoffrey Hinton',
    role: 'Nobel laureate, University of Toronto',
    photo: hinton,
    event: 'ConferenceX 2024',
}

export const SPEAKERS_2026: Person[] = [
    {
        name: 'Stephen Wolfram',
        role: 'CEO and Founder, Wolfram Institute',
        photo: wolfram,
    },
    {
        name: 'Janice Stein',
        role: 'Founding Director, Munk School',
        photo: stein,
    },
    {
        name: 'David Fleet',
        role: 'CIFAR AI Chair, Google DeepMind',
        photo: fleet,
    },
    {
        name: 'Joshua Gans',
        role: 'Chief Economist, Creative Destruction Lab',
        photo: gans,
    },
    {
        name: 'Daniel Wigdor',
        role: 'Professor of Computer Science, University of Toronto',
        photo: wigdor,
    },
    {
        name: 'Yvan Gauthier',
        role: 'AI Safety, National Research Council',
        photo: gauthier,
    },
]

export type PastEvent = {
    year: number
    name: string
    to: string
    detail: string
    upcoming?: boolean
}

/** One entry per event, oldest first, so every cell in the grid has the same shape. */
export const EVENTS: PastEvent[] = [
    {
        year: 2020,
        name: 'ProjectX',
        to: '/projectx/2020',
        detail: '$65,000 in prizes',
    },
    {
        year: 2021,
        name: 'ProjectX',
        to: '/projectx/2021',
        detail: '$75,000 in prizes',
    },
    {
        year: 2022,
        name: 'ProjectX',
        to: '/projectx/2022',
        detail: '$40,000+ in prizes',
    },
    {
        year: 2023,
        name: 'ProjectX',
        to: '/projectx/2023',
        detail: '$10,000+ in prizes',
    },
    {
        year: 2024,
        name: 'ProjectX',
        to: '/projectx/2024',
        detail: '$10,000+ in prizes',
    },
    {
        year: 2024,
        name: 'ConferenceX',
        to: '/conferencex/2024',
        detail: 'Panel with Geoffrey Hinton',
    },
    {
        year: 2025,
        name: 'ConferenceX',
        to: '/conferencex/2025',
        detail: 'Startup showcase and research fair',
    },
    {
        year: 2026,
        name: 'ConferenceX',
        to: '/conferencex/2026',
        detail: 'Theme: The Intelligence Test',
    },
    {
        year: 2026,
        name: 'ProjectX',
        to: '/projectx',
        detail: 'Theme: What is Progress?',
    },
    {
        year: 2027,
        name: 'ConferenceX',
        to: '/conferencex',
        detail: 'Proposed theme: The Past and Future of AI',
        upcoming: true,
    },
]

export const SPONSORS_2026: Logo[] = [
    { name: 'EY', src: ey, width: 119 },
    { name: 'RBC', src: rbc, width: 91 },
    { name: 'Intact', src: intact, width: 274 },
    { name: 'Canvas', src: canvas, width: 406 },
]

export const PAST_PARTNERS: Logo[] = [
    { name: 'BMO', src: bmo, width: 314 },
    { name: 'Bell', src: bell, width: 210 },
    { name: 'CIFAR', src: cifar, width: 375 },
    { name: 'KPMG', src: kpmg, width: 299 },
    { name: 'MaRS', src: mars, width: 120 },
    { name: 'Ripple Ventures', src: ripple, width: 404 },
    { name: 'University of Toronto', src: uoft, width: 329 },
    { name: 'Vector Institute', src: vector, width: 330 },
    { name: 'WOMBO', src: wombo, width: 369 },
]
