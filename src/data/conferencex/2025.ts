import basu from '../../static/assets/2025_speakers/basu.jpg'
import kesiraju from '../../static/assets/2025_speakers/kesiraju.jpg'
import manal from '../../static/assets/2025_speakers/manal.jpg'
import mcann from '../../static/assets/2025_speakers/mcann.webp'
import mike from '../../static/assets/2025_speakers/mike.png'
import ming from '../../static/assets/2025_speakers/ming.jpg'
import pant from '../../static/assets/2025_speakers/pant.jpg'
import platnick from '../../static/assets/2025_speakers/platnick.webp'
import sridhar from '../../static/assets/2025_speakers/sridhar.webp'
import supekar from '../../static/assets/2025_speakers/supekar.jpg'
import wang from '../../static/assets/2025_speakers/wang.webp'
import waslander from '../../static/assets/2025_speakers/waslander.webp'
import william from '../../static/assets/2025_speakers/william.jpeg'
import accenture from '../../static/assets/conferencex-2025/logo-accenture.webp'
import citadel from '../../static/assets/conferencex-2025/logo-citadel.webp'
import dionysusHealth from '../../static/assets/conferencex-2025/logo-dionysus-health.svg'
import florida from '../../static/assets/conferencex-2025/logo-florida.webp'
import flybits from '../../static/assets/conferencex-2025/logo-flybits.webp'
import googleHealth from '../../static/assets/conferencex-2025/logo-google-health.webp'
import humanTrust from '../../static/assets/conferencex-2025/logo-human.webp'
import interac from '../../static/assets/conferencex-2025/logo-interac.webp'
import morningstar from '../../static/assets/conferencex-2025/logo-morningstar.webp'
import northeastern from '../../static/assets/conferencex-2025/logo-northeastern.webp'
import perplexity from '../../static/assets/conferencex-2025/logo-perplexity.webp'
import pwc from '../../static/assets/conferencex-2025/logo-pwc.webp'
import radical from '../../static/assets/conferencex-2025/logo-radical-ventures.webp'
import stanford from '../../static/assets/conferencex-2025/logo-stanford.webp'
import trail from '../../static/assets/conferencex-2025/logo-trail.webp'
import uoft from '../../static/assets/conferencex-2025/logo-uoft.webp'
import vector from '../../static/assets/conferencex-2025/logo-vector.webp'
import wef from '../../static/assets/conferencex-2025/logo-wef.webp'
import you from '../../static/assets/conferencex-2025/logo-you.webp'
import kpmg from '../../static/assets/home/logo-kpmg.webp'
import { hintonPanelPhoto, showcasePhoto } from './2024'
import type { Recap } from './types'

export const recap2025: Recap = {
    year: 2025,
    path: '/conferencex/2025',
    summary: 'Startup showcase and research fair',
    description:
        'ConferenceX 2025, Pioneering the Future of Innovative and Ethical AI, was held on January 25, 2025 in Toronto. This archived page lists its speakers, FAQ and sponsors as published before the event.',
    archive: { title: 'ConferenceX 2025 took place on January 25, 2025.' },
    hero: {
        subtitle: 'Pioneering the Future of Innovative and Ethical AI',
        status: 'January 25, 2025',
    },
    intro: {
        title: 'What is ConferenceX?',
        paragraphs: [
            'ConferenceX is an annual conference hosted by the University of Toronto AI Group, aimed at fostering an inclusive, ethical, and innovative future for Artificial Intelligence. This year, ConferenceX 2025 will take place on January 25th in Toronto. By featuring keynote talks, a startup showcase, and an AI research fair, the event aspires to inspire collaboration across academia, industry, and aspiring professionals.',
        ],
        link: {
            label: "Check out last year's conference",
            href: '/conferencex/2024#highlights',
        },
    },
    highlights: {
        title: 'ConferenceX 2025 sneak peek',
        items: [
            {
                title: 'Speakers',
                text: 'After welcoming hundreds of attendees and Nobel laureate Geoffrey Hinton in 2024, we’ve stepped it up for ConferenceX 2025, and confirmed a lineup of over 15 distinguished speakers in the AI landscape across Ontario, California, Massachusetts, and New York! The day will be packed with engaging talks from researchers, brilliant founders, and industry experts from Google Health, Google DeepMind, Citadel, Accenture, World Economic Forum, and more. Check out our complete list of speakers below.',
                photo: hintonPanelPhoto,
            },
            {
                title: 'Startup showcase',
                text: 'Some of Toronto’s most promising AI startups took center stage in an exclusive startup showcase. Attendees experienced live demonstrations of groundbreaking AI technologies, offering a firsthand look at innovations set to transform industries. Beyond product demos, active recruitment of top student talent took place, providing an exciting opportunity for networking and career exploration within Toronto’s vibrant AI community.',
                photo: showcasePhoto,
            },
        ],
    },
    speakers: {
        title: 'Featured speakers',
        people: [
            {
                name: 'Vik Pant',
                role: 'Partner, Chief Data Scientist and Emerging Technology Leader at PwC Canada',
                photo: pant,
            },
            {
                name: 'William Cunningham',
                role: 'Researcher at the Vector Institute for AI',
                photo: william,
            },
            {
                name: 'Manal Siddique',
                role: 'Accenture Canada’s Responsible AI Lead',
                photo: manal,
            },
            {
                name: 'Kaustabh Supekar',
                role: 'Clinical Associate Professor, Psychiatry and Behavioural Sciences at Stanford University',
                photo: supekar,
            },
            {
                name: 'Vivienne Ming',
                role: 'Founder, Chair, & Chief Scientist at The Human Trust',
                org: 'Founder & Chief Scientist at Dionysus Health',
                photo: ming,
            },
            {
                name: 'Aravind Kesiraju',
                role: 'Principal Software Engineer, Morningstar',
                photo: kesiraju,
            },
            {
                name: 'Chitra Sridhar',
                role: 'Partner at KPMG Canada',
                photo: sridhar,
            },
            {
                name: 'Sanjana Basu',
                role: 'Partner at Radical Ventures',
                photo: basu,
            },
            {
                name: 'Mike Schaekermann',
                role: 'Senior Research Scientist at Google Health',
                photo: mike,
            },
            {
                name: 'Bryan McCann',
                role: 'Co-Founder and CTO at you.com',
                photo: mcann,
            },
            {
                name: 'Steven Waslander',
                role: 'Director, Toronto Robotics and AI Lab',
                org: 'Professor at the Institute for Aerospace Studies, University of Toronto',
                photo: waslander,
            },
            {
                name: 'Daniel Platnick',
                role: 'Senior AI Scientist, Flybits',
                photo: platnick,
            },
            {
                name: 'William Wang',
                role: 'Quantitative Developer, Citadel',
                org: 'Prev. Senior Machine Learning Engineer, Shopify',
                photo: wang,
            },
        ],
    },
    faq: {
        title: 'FAQ',
        items: [
            {
                question: 'When and where is the conference being held?',
                answer: 'The event takes place on Saturday, January 25th from 9:00AM to 5:00PM EST at the Schwartz Reisman Institute for Technology and Society. Registration is from 9:00AM to 10:00AM, with opening remarks starting at 10:00AM.',
            },
            {
                question: 'Will food and refreshments be provided?',
                answer: 'Start the day with some hot coffee and light breakfast snacks! Lunch and drinks will be provided to attendees, also with easy access to a water fountain throughout the day!',
            },
            {
                question:
                    'How much AI knowledge is required to attend ConferenceX?',
                answer: 'ConferenceX 2025 is open to anyone who’s interested in the AI community! We welcome attendees with all experience levels, whether they’re students, founders, industry professionals or more!',
            },
            {
                question: 'Is there a limit to the number of attendees?',
                answer: 'Yes, ticket sales are limited. Seating is based on first come, first served basis. Buy your ticket now to secure your spot!',
            },
        ],
    },
    sponsors: {
        title: 'Partners and sponsors',
        groups: [
            {
                title: 'Partners',
                height: 34,
                logos: [
                    { name: 'Accenture', src: accenture, width: 458 },
                    { name: 'Stanford University', src: stanford, width: 80 },
                    { name: 'Citadel', src: citadel, width: 1000 },
                    { name: 'Google Health', src: googleHealth, width: 709 },
                    { name: 'The Human Trust', src: humanTrust, width: 138 },
                    {
                        name: 'Dionysus Health',
                        src: dionysusHealth,
                        width: 296,
                    },
                    {
                        name: 'Northeastern University',
                        src: northeastern,
                        width: 375,
                    },
                    { name: 'Perplexity', src: perplexity, width: 499 },
                    { name: 'Radical Ventures', src: radical, width: 416 },
                    {
                        name: 'Toronto Robotics and AI Laboratory',
                        src: trail,
                        width: 185,
                    },
                    { name: 'University of Toronto', src: uoft, width: 338 },
                    { name: 'University of Florida', src: florida, width: 641 },
                    { name: 'Vector Institute', src: vector, width: 330 },
                    { name: 'World Economic Forum', src: wef, width: 195 },
                    { name: 'You.com', src: you, width: 137 },
                ],
            },
            {
                title: 'Sponsors',
                height: 40,
                logos: [
                    { name: 'Morningstar', src: morningstar, width: 531 },
                    { name: 'Flybits', src: flybits, width: 412 },
                    { name: 'KPMG', src: kpmg, width: 299 },
                    { name: 'PwC', src: pwc, width: 185 },
                    { name: 'Interac', src: interac, width: 121 },
                ],
            },
        ],
    },
}
