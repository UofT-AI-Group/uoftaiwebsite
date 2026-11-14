import projectxPhoto from '../static/assets/projectx.webp'
import conferencexPhoto from '../static/assets/conferencex.webp'
import learnaiPhoto from '../static/assets/learnai.webp'
import hinton from '../static/assets/Geoffrey-Hinton.jpg'
import wolfram from '../static/assets/conf-2026-assets/stephen_wolfram.webp'
import stein from '../static/assets/conf-2026-assets/janice.jpg'
import fleet from '../static/assets/conf-2026-assets/david.jpg'
import gans from '../static/assets/conf-2026-assets/joshua.webp'
import wigdor from '../static/assets/conf-2026-assets/daniel.webp'
import gauthier from '../static/assets/conf-2026-assets/yvan.jpg'
import bmoLogo from '../static/assets/bmo-logo.png'
import bellLogo from '../static/assets/bell-logo.png'
import cifarLogo from '../static/assets/cifar-logo.png'
import kpmgLogo from '../static/assets/kpmg-logo.png'
import marsLogo from '../static/assets/mars-logo.png'
import rippleLogo from '../static/assets/ripple-logo.svg'
import uoftLogo from '../static/assets/uoft-logo.png'
import vectorLogo from '../static/assets/vector-institute-logo.png'
import womboLogo from '../static/assets/wombo-logo.svg'

export const HERO_WORDS = ['ProjectX', 'ConferenceX', 'LearnAI']

export const STATS = [
    { value: 1500, label: 'ConferenceX 2026 attendees' },
    { value: 40, label: 'countries represented' },
    { value: 200, label: 'ProjectX competitors' },
    { value: 40, label: 'universities in ProjectX' },
]

/** `solid` logos are filled shapes, so they are desaturated instead of turned white. */
export const PARTNERS = [
    { name: 'BMO', logo: bmoLogo },
    { name: 'Bell', logo: bellLogo },
    { name: 'CIFAR', logo: cifarLogo },
    { name: 'KPMG', logo: kpmgLogo },
    { name: 'MaRS', logo: marsLogo, solid: true },
    { name: 'Ripple Ventures', logo: rippleLogo },
    { name: 'University of Toronto', logo: uoftLogo },
    { name: 'Vector Institute', logo: vectorLogo },
    { name: 'WOMBO', logo: womboLogo },
]

export const PROGRAMS = [
    {
        kicker: '01 · Competition',
        title: 'ProjectX',
        to: '/projectx',
        photo: projectxPhoto,
        photoAlt: 'A speaker presenting on stage at ProjectX',
        description:
            "North America's largest undergraduate ML research competition. Open to every discipline, from computer science to the humanities: propose a new technology, process or policy, or pursue academic research.",
        facts: [
            { label: '2026 theme', value: 'What is Progress?' },
            { label: 'Competitors', value: '200+ from 40+ universities' },
        ],
    },
    {
        kicker: '02 · Conference',
        title: 'ConferenceX',
        to: '/conferencex',
        photo: conferencexPhoto,
        photoAlt: 'A panel discussion at ConferenceX',
        description:
            'Two days of talks and panels where humanity meets technology, with researchers, founders and policymakers on one stage.',
        facts: [
            { label: '2026 theme', value: 'The Intelligence Test' },
            { label: 'Attendance', value: '1,500+, 40+ countries' },
        ],
    },
    {
        kicker: '03 · Course',
        title: 'LearnAI',
        to: '/learnai',
        photo: learnaiPhoto,
        photoAlt: 'A speaker at a LearnAI session',
        description:
            'A 4-month course that bridges the gap between theoretical knowledge and practical application in AI.',
        facts: [
            { label: 'Length', value: '4 months' },
            { label: 'Next cohort', value: 'Coming soon' },
        ],
    },
]

export const SPEAKERS = [
    {
        name: 'Geoffrey Hinton',
        role: 'Nobel laureate, University of Toronto',
        photo: hinton,
        event: 'ConferenceX 2024',
    },
    {
        name: 'Stephen Wolfram',
        role: 'CEO & Founder, Wolfram Institute',
        photo: wolfram,
        event: 'ConferenceX 2026',
    },
    {
        name: 'Janice Stein',
        role: 'Founding Director, Munk School',
        photo: stein,
        event: 'ConferenceX 2026',
    },
    {
        name: 'David Fleet',
        role: 'CIFAR AI Chair, Google DeepMind',
        photo: fleet,
        event: 'ConferenceX 2026',
    },
    {
        name: 'Joshua Gans',
        role: 'Chief Economist, Creative Destruction Lab',
        photo: gans,
        event: 'ConferenceX 2026',
    },
    {
        name: 'Daniel Wigdor',
        role: 'Professor of CS, University of Toronto',
        photo: wigdor,
        event: 'ConferenceX 2026',
    },
    {
        name: 'Yvan Gauthier',
        role: 'AI Safety, National Research Council',
        photo: gauthier,
        event: 'ConferenceX 2026',
    },
]

export const MILESTONES = [
    { year: '2020', title: 'ProjectX', detail: '$65k in prizes.' },
    { year: '2021', title: 'ProjectX', detail: '$75k in prizes.' },
    { year: '2022', title: 'ProjectX', detail: '$40k+ in prizes.' },
    {
        year: '2024',
        title: 'ConferenceX',
        detail: 'Panel with Geoffrey Hinton.',
    },
    { year: '2025', title: 'ConferenceX', detail: 'January 25, 2025.' },
    {
        year: '2026',
        title: 'The Intelligence Test',
        detail: '1,500+ attendees from 40+ countries.',
    },
    {
        year: '2027',
        title: 'ConferenceX',
        detail: 'Proposed theme: The Past and Future of AI.',
        upcoming: true,
    },
]
