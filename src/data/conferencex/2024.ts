import angela from '../../static/assets/Angela-Sim.jpg'
import armando from '../../static/assets/Armando-Benitez.jpg'
import ben from '../../static/assets/Ben-Zion.jpg'
import chitra from '../../static/assets/Chitra-Sridhar.jpg'
import colin from '../../static/assets/Colin-Toal.jpg'
import geoffrey from '../../static/assets/Geoffrey-Hinton.jpg'
import geoffreySpeaking from '../../static/assets/Geoffrey-Hinton-Speaking.jpg'
import gallery from '../../static/assets/gallery.jpg'
import lisa from '../../static/assets/Lisa-Mah.jpg'
import mike from '../../static/assets/Mike-Schaekermann.jpg'
import ruslan from '../../static/assets/Ruslan-Salakhutdinov.jpg'
import santoshi from '../../static/assets/Santoshi-Tadanki.jpg'
import showcase from '../../static/assets/Showcase.jpg'
import sunil from '../../static/assets/Sunil-Sharma.jpg'
import tomi from '../../static/assets/Tomi-Poutanen.jpg'
import bell from '../../static/assets/home/logo-bell.webp'
import bmo from '../../static/assets/home/logo-bmo.webp'
import cifar from '../../static/assets/home/logo-cifar.webp'
import kpmg from '../../static/assets/home/logo-kpmg.webp'
import mars from '../../static/assets/home/logo-mars.webp'
import vector from '../../static/assets/home/logo-vector.webp'
import ripple from '../../static/assets/ripple-logo.svg'
import uoft from '../../static/assets/uoft-logo.png'
import wombo from '../../static/assets/wombo-logo.svg'
import type { Recap } from './types'

export const hintonPanelPhoto = {
    src: geoffreySpeaking,
    alt: 'Geoffrey Hinton speaking at ConferenceX 2024',
    position: '50% 25%',
}

export const showcasePhoto = {
    src: showcase,
    alt: 'A speaker presenting on stage at ConferenceX 2024',
}

export const recap2024: Recap = {
    year: 2024,
    path: '/conferencex/2024',
    summary: 'Panel with Geoffrey Hinton',
    description:
        'ConferenceX 2024 had a panel with Geoffrey Hinton, a startup showcase, an AI-generated art gallery and talks from industry leaders.',
    archive: { title: 'ConferenceX 2024 has ended.' },
    hero: {
        subtitle: 'Where technology meets humanity',
        action: {
            label: 'ConferenceX 2024 highlights',
            href: '/conferencex/2024#highlights',
        },
    },
    intro: {
        title: 'Conference mission',
        paragraphs: [
            "We're breaking down barriers to ensure every idea has the chance to spark the next AI breakthrough. Our goal is simple yet ambitious: to forge a future with AI that's as inclusive, ethical, and forward-thinking as the community shaping it.",
        ],
    },
    highlights: {
        title: 'ConferenceX 2024 highlights',
        items: [
            {
                title: 'Panel discussion with Geoffrey Hinton',
                text: 'Geoffrey Hinton, the “Godfather of AI” and co-founder of the Vector Institute has profoundly shaped the field of deep learning through his groundbreaking neural network research at the University of Toronto. As a panelist at the UofT AI Conference X 2024, Hinton discussed the future of AI, ethical considerations, and societal impacts, drawing on his decades of expertise and the transformative potential of advanced AI technologies. His contributions, recognized with the Turing Award in 2018, continue to influence the development and application of AI worldwide.',
                photo: hintonPanelPhoto,
            },
            {
                title: 'Startup showcase',
                text: 'Some of Toronto’s most promising AI startups took center stage in an exclusive startup showcase. Attendees experienced live demonstrations of groundbreaking AI technologies, offering a firsthand look at innovations set to transform industries. Beyond product demos, active recruitment of top student talent took place, providing an exciting opportunity for networking and career exploration within Toronto’s vibrant AI community.',
                photo: showcasePhoto,
            },
            {
                title: 'AI-generated art gallery',
                text: 'An AI-generated art gallery presented a striking collection of artwork created entirely by artificial intelligence. The exhibition highlighted how AI is being used in creative processes, offering attendees a unique perspective on the intersection of technology and art. The gallery provided an insightful look into how AI can contribute to the future of artistic expression.',
                photo: {
                    src: gallery,
                    alt: 'AI-generated artwork on display at ConferenceX 2024',
                },
            },
        ],
    },
    speakers: {
        title: 'Featured speakers',
        people: [
            {
                name: 'Geoffrey Hinton',
                role: 'Co-founder @The Vector Institute',
                photo: geoffrey,
            },
            {
                name: 'Tomi Poutanen',
                role: 'Co-founder @The Vector Institute',
                org: 'CEO of Signal 1',
                photo: tomi,
            },
            {
                name: 'Colin Toal',
                role: 'Principal BD AI/ML @ AWS',
                photo: colin,
            },
            {
                name: 'Sunil Sharma',
                role: 'Managing Director @Techstars',
                photo: sunil,
            },
            {
                name: 'Dr. Armando Benitez',
                role: 'Managing Director, Quantitative Analytics, Capital Markets @BMO',
                photo: armando,
            },
            {
                name: 'Ruslan Salakhutdinov',
                role: 'Ex-Director of Research @Apple',
                photo: ruslan,
            },
            {
                name: 'Angela Sim',
                role: 'Chief Technology Resiliency @BMO',
                photo: angela,
            },
            {
                name: 'Chitra Sridhar',
                role: 'Head of Services: Lighthouse @KPMG',
                photo: chitra,
            },
            {
                name: 'Lisa Mah',
                role: 'Director of Ventures',
                org: '@The Creative Destruction Lab',
                photo: lisa,
            },
            {
                name: 'Ben-Zion',
                role: 'Co-founder & CEO @Wombo.ai',
                photo: ben,
            },
            {
                name: 'Mike Schaekermann',
                role: 'Research Scientist @ Google',
                photo: mike,
            },
            {
                name: 'Santoshi Tadanki',
                role: 'Data Analytics and AI Strategy @RBC',
                photo: santoshi,
            },
        ],
    },
    sponsors: {
        title: 'Confirmed sponsors',
        groups: [
            {
                height: 40,
                logos: [
                    { name: 'Bell', src: bell, width: 210 },
                    { name: 'BMO', src: bmo, width: 314 },
                    { name: 'CIFAR', src: cifar, width: 375 },
                    { name: 'KPMG', src: kpmg, width: 299 },
                    { name: 'MaRS', src: mars, width: 120 },
                    { name: 'University of Toronto', src: uoft, width: 329 },
                    { name: 'Vector Institute', src: vector, width: 330 },
                    { name: 'WOMBO', src: wombo, width: 369 },
                    { name: 'Ripple Ventures', src: ripple, width: 404 },
                ],
            },
        ],
    },
}
