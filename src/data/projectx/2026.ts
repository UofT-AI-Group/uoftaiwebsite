import benjaminSanchezLengeling from '../../static/assets/projectx/2026/benjamin-sanchez-lengeling.webp'
import evanLight from '../../static/assets/projectx/2026/evan-light.webp'
import fernandoYanez from '../../static/assets/projectx/2026/fernando-yanez.webp'
import helenaWright from '../../static/assets/projectx/2026/helena-wright.webp'
import konradSamsel from '../../static/assets/projectx/2026/konrad-samsel.webp'
import nickJia from '../../static/assets/projectx/2026/nick-jia.webp'
import paoloGranata from '../../static/assets/projectx/2026/paolo-granata.webp'
import saiTedla from '../../static/assets/projectx/2026/sai-tedla.webp'
import sebastianJaimungal from '../../static/assets/projectx/2026/sebastian-jaimungal.webp'
import veraKhovanskaya from '../../static/assets/projectx/2026/vera-khovanskaya.webp'
import type { ProjectXCycle } from './types'

const SUBMISSION_FORM = 'https://forms.gle/J99tMADBSikDDf9E6'
const GUIDELINES =
    'https://docs.google.com/document/d/1xiWhXU9ofkp9TH71-RpKnl-ZcfvX4405wvNZdgxzFpw/edit?tab=t.0'

export const cycle2026: ProjectXCycle = {
    year: 2026,
    href: '/projectx',
    description:
        'ProjectX 2026, UofT AI’s undergraduate AI research competition on the theme “What is Progress?”: streams, timeline, events, judges, mentors and FAQ.',
    summary: 'Theme: What is Progress?',
    themeLabel: '2026 research theme',
    theme: 'What is Progress?',
    status: 'Applications closed. Submissions due January 15, 2027',
    intro: [
        [
            'Project X is UofT AI’s undergraduate AI research competition. Over four months, teams research and present original work on AI innovation, regulation, and the speed of progress. It’s open to anyone at or below the undergraduate level, and every team needs a faculty advisor from an accredited institution by ',
            { strong: 'January 15' },
            '.',
        ],
    ],
    actions: [
        { label: 'Submit your work', href: SUBMISSION_FORM },
        { label: 'Participant guidelines', href: GUIDELINES },
    ],
    streams: {
        lede: 'Teams compete in one of two streams:',
        items: [
            {
                title: 'Research Stream',
                description: 'An original AI research paper (4-10 pages).',
            },
            {
                title: 'Proposal + Pitch Stream',
                description:
                    'A written proposal (3-5 pages) and a live pitch for an AI product, startup, or policy idea.',
            },
        ],
    },
    timeline: {
        title: 'Timeline',
        lede: 'October 2026 to February 2027.',
        items: [
            {
                date: 'Oct 20',
                title: 'Applications closed',
                until: '2026-10-20',
            },
            {
                date: 'Nov 7',
                title: 'Kickoff and Networking Mixer (in person)',
                until: '2026-11-07',
            },
            {
                date: 'Nov 27',
                title: 'Virtual Mentorship and Networking Event',
                until: '2026-11-27',
            },
            {
                date: 'Dec',
                title: 'Research Methods Workshop (Research Stream)',
                detail: 'Date TBA',
                until: '2026-12-31',
            },
            {
                date: 'Dec',
                title: 'Pitch and Proposal Talk and Q&A (Proposal + Pitch Stream)',
                detail: 'Date TBA',
                until: '2026-12-31',
            },
            {
                date: 'Jan',
                title: 'Virtual Office Hours (Research Stream)',
                detail: 'Date TBA',
                until: '2027-01-15',
            },
            {
                date: 'Jan',
                title: 'Virtual Office Hours (Proposal + Pitch Stream)',
                detail: 'Date TBA',
                until: '2027-01-15',
            },
            {
                date: 'Jan 15',
                title: 'Final submission deadline',
                until: '2027-01-15',
            },
            {
                date: 'Feb',
                title: 'ConferenceX presentations and awards',
                detail: 'Date TBA',
                until: '2027-02-28',
            },
        ],
    },
    events: [
        {
            title: 'Kickoff and Networking Mixer',
            date: 'November 7, 2026',
            format: 'In person',
            location: 'OISE 2214, University of Toronto',
            description:
                'The welcome event for accepted teams. Teams presented their projects and met mentors and faculty advisors.',
        },
        {
            title: 'Virtual Mentorship and Networking Event',
            date: 'November 27, 2026',
            format: 'Virtual (Zoom)',
            description:
                'Another chance for every team to meet mentors and advisors, this time online.',
        },
        {
            title: 'Research Methods Workshop',
            date: 'December 2026 (date TBA)',
            format: 'Virtual (Zoom)',
            description:
                'How to conduct and write AI research, covering literature reviews, methodology, citations, and paper structure. Built for the Research Stream but open to every team, and recorded for anyone who can’t attend.',
        },
        {
            title: 'Pitch and Proposal Talk and Q&A',
            date: 'December 2026 (date TBA)',
            format: 'TBA',
            description:
                'A talk on entrepreneurship in tech and on building a strong pitch and written proposal, followed by a Q&A on proposal structure and what judges look for. Aimed at the Proposal + Pitch Stream, and Research Stream teams are welcome.',
        },
        {
            title: 'Virtual Office Hours',
            date: 'January 2027 (date TBA)',
            format: 'Virtual (Zoom)',
            description:
                'A drop-in session where teams from both streams can ask questions about their submissions before the January 15 deadline.',
        },
        {
            title: 'ConferenceX',
            date: 'February 2027 (date TBA)',
            format: 'Live presentations and awards ceremony',
            description:
                'Finalists present their work live to the judges, and the winning team from each stream gives a 10-minute slide presentation. Every team can attend virtually.',
        },
    ],
    people: [
        {
            id: 'judges',
            title: 'Judges',
            lede: [
                'Each stream will have three to five judges, all professors or AI experts. They score every submission against that stream’s rubric and attend ConferenceX.',
            ],
            featured: [
                {
                    name: 'Paolo Granata',
                    role: 'St. Michael’s College, University of Toronto',
                    photo: paoloGranata,
                    bio: 'Paolo Granata is a faculty member of Book and Media Studies at St. Michael’s College, University of Toronto, where he also holds affiliations with the Schwartz Reisman Institute for Technology and Society and the School of Cities. An award-winning educator and cross-disciplinary media scholar, his research spans media ethics, philosophy of technology, semiotics, and digital equity. In 2019 he founded the Media Ethics Lab at UofT, a research hub dedicated to examining the ethical, political, and societal dimensions of digital media and emerging technologies. He is a Marshall McLuhan Centenary Fellow, a Senior Fellow at Massey College, and has held visiting professorships at institutions across Italy, Brazil, and China. His work as a cultural strategist contributed to Toronto’s designation as a UNESCO Creative City in 2017.',
                },
            ],
        },
        {
            id: 'mentors',
            title: 'Mentors',
            lede: [
                [
                    'These mentors attended the ',
                    { strong: 'November 7' },
                    ' kickoff or have offered to support Project X teams. Teams can contact them for guidance at any point in the sprint.',
                ],
            ],
            people: [
                {
                    name: 'Sai Tedla',
                    role: 'Computational photography, generative models, multimodal AI',
                    photo: saiTedla,
                },
                {
                    name: 'Nick Jia',
                    role: 'AI security, governance, agentic systems',
                    photo: nickJia,
                },
                {
                    name: 'Fernando Yanez',
                    role: 'Intelligent adaptive teaching',
                    photo: fernandoYanez,
                },
                {
                    name: 'Helena Wright',
                    role: 'AI and work, digital labour',
                    photo: helenaWright,
                },
                {
                    name: 'Konrad Samsel',
                    role: 'Clinical AI, health policy',
                    photo: konradSamsel,
                },
            ],
        },
        {
            id: 'faculty-advisors',
            title: 'Faculty Advisors',
            lede: [
                [
                    'Every team needs a faculty advisor by ',
                    { strong: 'January 15' },
                    ' to vouch for its submission in a short signed note. Advisors met teams at the ',
                    { strong: 'November 7' },
                    ' kickoff, and the faculty members below have offered to advise Project X teams.',
                ],
            ],
            people: [
                {
                    name: 'Evan Light',
                    role: 'iSchool (Faculty of Information)',
                    photo: evanLight,
                },
                {
                    name: 'Vera Khovanskaya',
                    role: 'Faculty of Information; Computer Science; Schwartz Reisman Institute',
                    photo: veraKhovanskaya,
                },
                {
                    name: 'Benjamin Sanchez-Lengeling',
                    role: 'Chemical Engineering; Vector Institute; Acceleration Consortium',
                    photo: benjaminSanchezLengeling,
                },
                {
                    name: 'Sebastian Jaimungal',
                    role: 'Department of Statistical Sciences',
                    photo: sebastianJaimungal,
                },
            ],
        },
    ],
    faq: [
        {
            question: 'What is the theme?',
            answer: [
                '“What is Progress?” Teams explore questions about AI innovation, regulation, and the speed of progress in society.',
            ],
        },
        {
            question: 'What are the two streams?',
            answer: [
                'The Research Stream produces an original AI research paper (4-10 pages). The Proposal + Pitch Stream produces a written proposal (3-5 pages) and live pitch for an AI product, startup, or policy idea.',
            ],
        },
        {
            question: 'Who can participate?',
            answer: [
                'Project X is open to anyone at or below the undergraduate level. International teams are welcome.',
            ],
        },
        {
            question: 'Do I need a faculty advisor?',
            answer: [
                'Yes. All teams must have a faculty advisor from an accredited institution confirmed by January 15, 2027.',
            ],
        },
        {
            question: 'What recognition do teams receive?',
            answer: [
                {
                    list: [
                        [
                            { strong: 'Winners' },
                            ' (one team per stream) present at ConferenceX and receive a certificate signed by the judges and UofT AI executives.',
                        ],
                        [
                            { strong: 'Honourable mentions' },
                            ' (four per stream) receive a certificate signed by the judges and UofT AI executives.',
                        ],
                        [
                            { strong: 'Every participant' },
                            ' receives a “Project X Finalist Competitor” certificate signed by UofT AI executives.',
                        ],
                    ],
                },
                'Teams that can’t attend ConferenceX in person because of distance or cost can join virtually.',
            ],
        },
        {
            question: 'What is ConferenceX?',
            answer: [
                'It’s UofT AI’s showcase at the end of the sprint, where finalists from each stream present their work live. It takes place in February 2027, with the exact date and location TBA.',
            ],
        },
        {
            question: 'Where can I find the competition guidelines?',
            answer: [
                [
                    'The ',
                    { text: 'participant guidelines', href: GUIDELINES },
                    ' cover both streams.',
                ],
            ],
        },
        {
            question: 'I already applied. Where do I submit my work?',
            answer: [
                [
                    'Submit through the ',
                    { text: 'application form', href: SUBMISSION_FORM },
                    ' by January 15, 2027. Every team uploads two PDFs: the faculty advisor’s note, plus the research paper (Research Stream) or written proposal (Proposal + Pitch Stream).',
                ],
            ],
        },
    ],
    contactEmail: 'projectxuoft@gmail.com',
}
