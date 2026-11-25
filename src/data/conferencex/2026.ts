import { Brain, Globe, Lightbulb, Rocket, Trophy, Users } from 'lucide-react'
import alex from '../../static/assets/conf-2026-assets/Alex.webp'
import ameen from '../../static/assets/conf-2026-assets/Ameen.jpg'
import andre from '../../static/assets/conf-2026-assets/Andre.webp'
import andrew from '../../static/assets/conf-2026-assets/Andrew.webp'
import anson from '../../static/assets/conf-2026-assets/Anson.webp'
import asad from '../../static/assets/conf-2026-assets/Asad.webp'
import atrisha from '../../static/assets/conf-2026-assets/atrisha.webp'
import bernhardt from '../../static/assets/conf-2026-assets/Bernhardt.jpg'
import daniel from '../../static/assets/conf-2026-assets/daniel.webp'
import davidRokeby from '../../static/assets/conf-2026-assets/David_Rokeby.png'
import david from '../../static/assets/conf-2026-assets/david.jpg'
import evan from '../../static/assets/conf-2026-assets/Evan.jpg'
import farhan from '../../static/assets/conf-2026-assets/Farhan.webp'
import fatima from '../../static/assets/conf-2026-assets/Fatima.webp'
import haris from '../../static/assets/conf-2026-assets/Haris.jpg'
import ishika from '../../static/assets/conf-2026-assets/Ishika.webp'
import janice from '../../static/assets/conf-2026-assets/janice.jpg'
import jeremy from '../../static/assets/conf-2026-assets/Jeremy.webp'
import jonathan from '../../static/assets/conf-2026-assets/Jonathan.webp'
import joshua from '../../static/assets/conf-2026-assets/joshua.webp'
import kino from '../../static/assets/conf-2026-assets/Kino.jpg'
import kristina from '../../static/assets/conf-2026-assets/kristina.png'
import lawrence from '../../static/assets/conf-2026-assets/lawrence.webp'
import luis from '../../static/assets/conf-2026-assets/luis.webp'
import maryam from '../../static/assets/conf-2026-assets/Maryam.webp'
import michaelLi from '../../static/assets/conf-2026-assets/Michael_li.jpg'
import michaelPage from '../../static/assets/conf-2026-assets/Michael_Page.webp'
import nick from '../../static/assets/conf-2026-assets/Nick.webp'
import olivia from '../../static/assets/conf-2026-assets/Olivia.webp'
import peja from '../../static/assets/conf-2026-assets/Peja.webp'
import rauno from '../../static/assets/conf-2026-assets/Rauno.jpg'
import rupa from '../../static/assets/conf-2026-assets/Rupa.jpg'
import savannah from '../../static/assets/conf-2026-assets/savannah.jpg'
import sean from '../../static/assets/conf-2026-assets/Sean.jpg'
import selen from '../../static/assets/conf-2026-assets/Selen.jpg'
import shane from '../../static/assets/conf-2026-assets/shane.jpg'
import showcase from '../../static/assets/conf-2026-assets/showcase.webp'
import panel2025 from '../../static/assets/conf-2026-assets/speaker_pic.jpg'
import stephen from '../../static/assets/conf-2026-assets/stephen_wolfram.webp'
import taha from '../../static/assets/conf-2026-assets/Taha.webp'
import vikram from '../../static/assets/conf-2026-assets/Vikram.jpg'
import yashwinie from '../../static/assets/conf-2026-assets/Yashwinie.webp'
import yvan from '../../static/assets/conf-2026-assets/yvan.jpg'
import zhijing from '../../static/assets/conf-2026-assets/zhijing.webp'
import canvas from '../../static/assets/home/logo-canvas.webp'
import ey from '../../static/assets/home/logo-ey.webp'
import intact from '../../static/assets/home/logo-intact.webp'
import rbc from '../../static/assets/home/logo-rbc.webp'
import boothPhoto from '../../static/assets/our-mission.webp'
import type { Recap, ScheduleDay } from './types'

const panelPhoto = {
    src: panel2025,
    alt: 'A panel on stage at ConferenceX 2025, seen from the back of the audience',
}

const day1: ScheduleDay = {
    id: 'day-1',
    label: 'Day 1 · Sat, Jan 24',
    title: 'How the human tests the machine',
    summary:
        'Explore how far we can push the boundaries of AI, and where we must draw boundaries.',
    items: [
        {
            start: '8:30 AM',
            end: '9:30 AM',
            title: 'Registration & Networking with Light Breakfast',
            tag: 'General',
            location: 'Pre-Function Space',
        },
        {
            start: '9:30 AM',
            end: '9:40 AM',
            title: 'Opening Remarks & Welcome',
            tag: 'General',
            location: 'Main Theatre',
        },
        {
            start: '9:45 AM',
            end: '10:10 AM',
            title: 'Understanding and Mitigating the Risks of AI',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: Yvan Gauthier',
        },
        {
            start: '10:15 AM',
            end: '10:35 AM',
            title: 'What Does It Mean to Trust an AI System?',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: Andrei Muresanu',
        },
        {
            start: '10:40 AM',
            end: '11:20 AM',
            title: 'AI for Scientific Discovery',
            tag: 'Panel',
            location: 'Main Theatre',
            detail: 'Speakers: Luis Martin Mejia Mendoza, Maryam Emami, Jonathan Stokes',
            moderator: 'Darshil Patel',
        },
        {
            start: '11:25 AM',
            end: '11:30 AM',
            title: 'RBC Talk',
            tag: 'Sponsor Talk',
            location: 'Main Theatre',
        },
        {
            start: '11:30 AM',
            end: '12:00 PM',
            title: 'Lightning Start-Up Pitches',
            tag: 'Lightning Startup Pitches',
            location: 'Main Theatre',
            detail: 'Startups: Friedman AI, Meissner, Remi, Root AI, TalkToMedi, Nocthare, Offline',
        },
        {
            start: '12:00 PM',
            end: '1:20 PM',
            title: 'Lunch & Networking',
            tag: 'Networking',
            location: 'Pre-Function Space',
        },
        {
            start: '1:25 PM',
            end: '2:05 PM',
            title: 'Building in the Shadow of Foundation Models',
            tag: 'Panel',
            location: 'Main Theatre',
            detail: 'Speakers: Taha Mubashir, Nick Chen',
            moderator: 'Jai Mansukhani',
        },
        {
            start: '1:25 PM',
            end: '2:05 PM',
            title: 'Winning in a Tough Tech Market',
            tag: 'Workshop',
            location: 'Workshop Room',
            detail: 'Lead: Fatima Taj',
        },
        {
            start: '2:10 PM',
            end: '2:40 PM',
            title: 'How GenAI is Transforming Data Science, Engineering and Ops',
            tag: 'Intact Panel',
            location: 'Main Theatre',
            detail: 'Speakers: Michael Li, Yaswanth Yimadabathuni',
        },
        {
            start: '2:40 PM',
            end: '3:10 PM',
            title: 'Afternoon Networking',
            tag: 'Networking',
            location: 'Pre-Function Space',
        },
        {
            start: '3:15 PM',
            end: '3:45 PM',
            title: 'Talk with David, Research Scientist at Google DeepMind',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: David Fleet',
        },
        {
            start: '3:50 PM',
            end: '4:10 PM',
            title: 'State of Multi-Agent Alignment',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: Zhijing Jin (online)',
        },
        {
            start: '3:50 PM',
            end: '4:35 PM',
            title: 'Testing the Boundaries: Comparative Jailbreaking Across Large Language Models',
            tag: 'Workshop',
            location: 'Workshop Room',
            detail: 'Workshop led by Savannah Harlan and Rauno Arike.',
        },
        {
            start: '4:15 PM',
            end: '4:35 PM',
            title: 'Normative Models of AI Alignment',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: Atrisha Sarkar',
        },
        {
            start: '4:40 PM',
            end: '5:00 PM',
            title: 'Technosocial AI Governance in Healthcare',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: Michael Page',
        },
        {
            start: '5:00 PM',
            end: '5:05 PM',
            title: 'Closing Remarks',
            tag: 'General',
            location: 'Main Theatre',
        },
    ],
}

const day2: ScheduleDay = {
    id: 'day-2',
    label: 'Day 2 · Sun, Jan 25',
    title: 'How the machine tests the human',
    summary:
        'Explore whether AI challenges the way we live, learn, think, create and work.',
    items: [
        {
            start: '8:30 AM',
            end: '9:30 AM',
            title: 'Registration & Networking',
            tag: 'General',
            location: 'Pre-Function Space',
        },
        {
            start: '9:30 AM',
            end: '9:40 AM',
            title: 'Opening Remarks & Welcome',
            tag: 'General',
            location: 'Main Theatre',
        },
        {
            start: '9:45 AM',
            end: '10:30 AM',
            title: 'AI & Creativity: BMO Lab Interactive Exhibition – Voice Scroll',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: David Rokeby',
        },
        {
            start: '10:35 AM',
            end: '11:05 AM',
            title: 'Dehumanizing AI',
            tag: 'Fireside Chat',
            location: 'Main Theatre',
            detail: 'Speaker: Janice Stein',
            moderator: 'Sean Mullin',
        },
        {
            start: '11:10 AM',
            end: '11:50 AM',
            title: 'Are We Entering an Era of Abundance? AI and the Economic Value of Intelligence.',
            tag: 'Panel',
            location: 'Main Theatre',
            detail: 'Speakers: Joshua Gans, Kristina McElheran, Lawrence Zhang',
            moderator: 'Matthew da Mota',
        },
        {
            start: '11:55 AM',
            end: '12:10 PM',
            title: 'Less is more: Aesthetic liking is inversely related to metabolic expense by AI and human visual systems',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: Dirk Bernhardt-Walther',
        },
        {
            start: '12:10 PM',
            end: '1:00 PM',
            title: 'Lunch & Networking',
            tag: 'Networking',
            location: 'Pre-Function Space',
        },
        {
            start: '1:00 PM',
            end: '1:30 PM',
            title: 'AI & Language Panel',
            tag: 'Panel',
            location: 'Main Theatre',
            detail: 'Speakers: Andrew Liu, Gerald Penn and Jekaterina Novikova.',
        },
        {
            start: '1:00 PM',
            end: '1:30 PM',
            title: 'Building an AI Product Team',
            tag: 'Workshop',
            location: 'Workshop Room',
            detail: 'Workshop led by Romi Dhamrait.',
        },
        {
            start: '1:35 PM',
            end: '1:55 PM',
            title: 'What Might the World Look Like With AI in 2030?',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: Anson Ho',
        },
        {
            start: '2:00 PM',
            end: '2:20 PM',
            title: 'Measuring AI delegation in the Workspace',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: Jeremy Tyers',
        },
        {
            start: '2:00 PM',
            end: '2:30 PM',
            title: 'Augmented Creativity Lab',
            tag: 'Workshop',
            location: 'Workshop Room',
            detail: 'Workshop led by Savannah Harlan.',
        },
        {
            start: '2:25 PM',
            end: '2:45 PM',
            title: 'Embracing Ubiquitous Technology to Complement, Scale, and Extend Traditional Healthcare',
            tag: 'Research',
            location: 'Main Theatre',
            detail: 'Speaker: Alex Mariakakis',
        },
        {
            start: '2:45 PM',
            end: '3:15 PM',
            title: 'Afternoon Networking',
            tag: 'Networking',
            location: 'Pre-Function Space',
        },
        {
            start: '3:20 PM',
            end: '3:35 PM',
            title: 'EY Talk',
            tag: 'Guest Talk',
            location: 'Main Theatre',
        },
        {
            start: '3:40 PM',
            end: '4:10 PM',
            title: "Why AI's Next Fortune Lies in What You Build, Not What Powers It",
            tag: 'Panel',
            location: 'Main Theatre',
            detail: 'Speaker: Daniel Wigdor',
            moderator: 'Maeesha Biswass',
        },
        {
            start: '4:15 PM',
            end: '4:35 PM',
            title: 'Talk with Andre, Senior Manager of Cloud & AI at BMO',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: Andre Albuquerque',
        },
        {
            start: '4:40 PM',
            end: '5:20 PM',
            title: 'Talk with Stephen, CEO & Founder of Wolfram Institute',
            tag: 'Guest Talk',
            location: 'Main Theatre',
            detail: 'Speaker: Stephen Wolfram (online)',
        },
        {
            start: '5:20 PM',
            end: '5:25 PM',
            title: 'Closing Remarks',
            tag: 'General',
            location: 'Pre-Function Space',
        },
    ],
}

export const recap2026: Recap = {
    year: 2026,
    path: '/conferencex/2026',
    summary: 'Theme: The Intelligence Test',
    description:
        'ConferenceX 2026, The Intelligence Test, was held on January 24 and 25, 2026 in Toronto. This archived page lists its speakers, schedule and sponsors as published before the event.',
    archive: {
        title: 'ConferenceX 2026 took place on January 24 and 25, 2026.',
        note: 'Because of extreme weather, Day 2 moved online to Zoom with an updated schedule.',
    },
    hero: {
        subtitle: 'The Intelligence Test',
        status: 'January 24–25, 2026',
    },
    intro: {
        title: 'What is ConferenceX 2026?',
        paragraphs: [
            'ConferenceX is an annual conference hosted by the University of Toronto AI Group, aimed at fostering an inclusive, ethical, and innovative future for Artificial Intelligence.',
            'This year’s event features keynote talks from industry leaders, an exciting startup showcase highlighting emerging AI companies, and a comprehensive research fair showcasing cutting-edge academic work.',
            'Our mission is to inspire collaboration across academia, industry, and aspiring professionals while creating meaningful connections that drive the future of AI forward.',
        ],
        photo: panelPhoto,
        link: {
            label: "Check out last year's conference",
            href: '/conferencex/2025#highlights',
        },
    },
    theme: {
        title: 'The Intelligence Test',
        paragraphs: [
            'In 1950, Alan Turing proposed a game of imitation: could a human mind tell the difference between machine and human? His thought experiment, The Turing Test, challenged us to imagine a world where the boundary between humans and machine intelligence might blur.',
            'Seventy-six years later, the test, however, feels quaint; every day we see machines that can pass it. And in building AI, we have discovered something more interesting than whether or not they can convince us. Turing imagined humans as testing machines, but the relationship has become reciprocal. AI can now probe our reasoning, expose our biases, and challenge our assumptions across domains. The interrogation runs both ways.',
        ],
        statement: {
            title: 'ConferenceX 2026: The Intelligence Test, explores intelligence as mutual examination.',
            text: 'We are interested in what we learn when humans and machines challenge each other, asking who – if one at all – is really in control.',
        },
        days: [
            {
                title: 'Day 1: How the human tests the machine',
                text: day1.summary,
            },
            {
                title: 'Day 2: How the machine tests the human',
                text: day2.summary,
            },
        ],
    },
    highlights: {
        title: 'ConferenceX 2026 sneak peek',
        items: [
            {
                title: 'Speakers',
                text: 'We’re bringing together leading voices across academia, industry, and the public sector for two days of deep exploration. ConferenceX is hosting more than 15 speakers per day, capturing topics for all interests in AI. Featuring researchers, founders, and practitioners from Google DeepMind, Vector Institute, Wolfram Institute, Shopify, Microsoft, National Research Council Canada, Creative Destruction Lab, the Munk School of Global Affairs and Public Policy, and more, the conference will generate an unforgettable discussion about how we evaluate AI and how they challenge our understanding in return.',
                photo: panelPhoto,
            },
            {
                title: 'Startup showcase',
                text: 'Toronto’s most innovative AI startups will take center stage with live demonstrations of cutting-edge technologies. Attendees will experience firsthand how these companies are pushing the boundaries of what is possible, from scientific discoveries to next-generation applications. This is your opportunity to witness the future being built and connect with the founders, as well as venture capitalists, shaping it.',
                photo: {
                    src: showcase,
                    alt: 'A full auditorium watching a panel on stage',
                },
            },
            {
                title: 'Workshops',
                text: 'Beyond the main stage, ConferenceX features hands-on workshops where theory becomes practice and attendees learn real skills. Explore the frontiers of AI security through comparative jailbreaking experiments, examine the ethical boundaries of AI decision-making, learn how to augment creativity, and be better prepared for the tech industry in the age of AI. These interactive sessions offer a chance to grapple directly with the tensions and possibilities that define our AI moment.',
                photo: {
                    src: boothPhoto,
                    alt: 'A UofT AI member talking with a guest at the Vector Institute booth',
                },
            },
        ],
    },
    offerings: {
        title: 'Why attend ConferenceX?',
        items: [
            {
                icon: Users,
                title: 'World-class speakers',
                text: 'Learn from leading AI researchers, executives, and innovators shaping the future of artificial intelligence.',
            },
            {
                icon: Lightbulb,
                title: 'Cutting-edge research',
                text: 'Explore the latest breakthroughs in machine learning, neural networks, and AI safety from top institutions.',
            },
            {
                icon: Trophy,
                title: 'Startup showcase',
                text: 'Discover innovative AI startups and pitch your own ideas to investors and industry experts.',
            },
            {
                icon: Rocket,
                title: 'Career opportunities',
                text: 'Connect with recruiters from top tech companies actively seeking AI talent.',
            },
            {
                icon: Globe,
                title: 'Global community',
                text: 'Network with 1,500+ attendees from 40+ countries, all passionate about AI innovation.',
            },
            {
                icon: Brain,
                title: 'Hands-on workshops',
                text: 'Participate in interactive sessions on LLMs, computer vision, and responsible AI development.',
            },
        ],
    },
    speakers: {
        title: 'Featured speakers',
        initialCount: 6,
        people: [
            {
                name: 'Stephen Wolfram',
                role: 'CEO & Founder',
                org: 'Wolfram Institute',
                photo: stephen,
            },
            {
                name: 'Janice Stein',
                role: 'Founding Director',
                org: 'Munk School of Global Affairs & Public Policy',
                photo: janice,
            },
            {
                name: 'David Fleet',
                role: 'CIFAR AI Chair; Lead',
                org: 'Google DeepMind Toronto',
                photo: david,
            },
            {
                name: 'Joshua Gans',
                role: 'Professor; Chief Economist',
                org: 'University of Toronto; Creative Destruction Lab',
                photo: joshua,
            },
            {
                name: 'Yvan Gauthier',
                role: 'Principal Advisor, AI Safety',
                org: 'National Research Council of Canada',
                photo: yvan,
            },
            {
                name: 'Daniel Wigdor',
                role: 'Professor of Computer Science; Founder',
                org: 'University of Toronto; AXL',
                photo: daniel,
            },
            {
                name: 'Luis Martin Mejia Mendoza',
                role: 'Research Officer',
                org: 'National Research Council Canada',
                photo: luis,
            },
            {
                name: 'Maryam Emami',
                role: 'CEO',
                org: 'AI Materia',
                photo: maryam,
            },
            {
                name: 'Jonathan Stokes',
                role: 'Professor; Principal Investigator',
                org: 'McMaster University; Stokes Lab',
                photo: jonathan,
            },
            {
                name: 'Ameen Neami',
                role: 'Chief Technology Officer',
                org: 'Friedman AI',
                photo: ameen,
            },
            {
                name: 'Olivia Leng',
                role: 'Founder',
                org: 'Meissner',
                photo: olivia,
            },
            {
                name: 'Selen Öncüloğlu',
                role: 'Co-Founder',
                org: 'Remi',
                photo: selen,
            },
            {
                name: 'Rupa Vempulapalli',
                role: 'Co-Founder',
                org: 'Remi',
                photo: rupa,
            },
            {
                name: 'Sean Kim',
                role: 'Co-Founder',
                org: 'Root AI',
                photo: sean,
            },
            {
                name: 'Evan Jiang',
                role: 'Co-Founder',
                org: 'Root AI',
                photo: evan,
            },
            {
                name: 'Ishika Mittal',
                role: 'Founder',
                org: 'Ordo',
                photo: ishika,
            },
            {
                name: 'Shane Vainer',
                role: 'Founder',
                org: 'Nocthare',
                photo: shane,
            },
            {
                name: 'Asad Hussain',
                role: 'Co-Founder',
                org: 'Offline',
                photo: asad,
            },
            {
                name: 'Haris Malik',
                role: 'Co-Founder',
                org: 'Offline',
                photo: haris,
            },
            {
                name: 'Vikram Narra',
                role: 'Co-Founder',
                org: 'Offline',
                photo: vikram,
            },
            {
                name: 'Taha Mubashir',
                role: 'Partner',
                org: 'Inovia Capital',
                photo: taha,
            },
            {
                name: 'Nick Chen',
                role: 'Partner',
                org: 'Golden Ventures',
                photo: nick,
            },
            {
                name: 'Kino Song',
                role: 'Co-Founder',
                org: 'TalkToMedi',
                photo: kino,
            },
            {
                name: 'Fatima Taj',
                role: 'Senior Software Engineer',
                org: 'Yelp',
                photo: fatima,
            },
            {
                name: 'Jeremy Tyers',
                role: 'Financial Services AI Leader',
                org: 'Microsoft',
                photo: jeremy,
            },
            {
                name: 'Peja Bulatovic',
                role: 'Director of AI Engineering',
                org: 'Intact',
                photo: peja,
            },
            {
                name: 'Michael Li',
                role: 'Manager',
                org: 'Intact Data Lab',
                photo: michaelLi,
            },
            {
                name: 'Yashwinie Shivanand',
                role: 'AI Governance Specialist',
                org: 'Environment and Climate Change Canada',
                photo: yashwinie,
            },
            {
                name: 'Zhijing Jin',
                role: 'Professor',
                org: 'University of Toronto',
                photo: zhijing,
            },
            {
                name: 'Savannah Harlan',
                role: 'Master of Public Policy Candidate 2026; Independent Researcher',
                org: 'Munk School of Global Affairs & Public Policy; Trajectory Labs',
                photo: savannah,
            },
            {
                name: 'Rauno Arike',
                role: 'Researcher; Former Research Contractor',
                org: 'Aether; AI Security Institute',
                photo: rauno,
            },
            {
                name: 'Atrisha Sarkar',
                role: 'Professor',
                org: 'University of Western Ontario',
                photo: atrisha,
            },
            {
                name: 'Michael Page',
                role: 'Director of AI Commercialization',
                org: 'Unity Health',
                photo: michaelPage,
            },
            {
                name: 'David Rokeby',
                role: 'Director; Professor',
                org: 'BMO Lab for Creative Research; University of Toronto',
                photo: davidRokeby,
            },
            {
                name: 'Kristina McElheran',
                role: 'Professor; Faculty Fellow',
                org: 'Rotman School of Management; Schwartz Reisman Institute',
                photo: kristina,
            },
            {
                name: 'Lawrence Zhang',
                role: 'Head of Policy',
                org: 'Centre for Canadian Innovation and Competitiveness',
                photo: lawrence,
            },
            {
                name: 'Dirk Bernhardt-Walther',
                role: 'Professor, Department of Psychology',
                org: 'University of Toronto',
                photo: bernhardt,
            },
            {
                name: 'Anson Ho',
                role: 'Researcher',
                org: 'Epoch AI',
                photo: anson,
            },
            {
                name: 'Farhan Thawar',
                role: 'Head of Engineering',
                org: 'Shopify',
                photo: farhan,
            },
            {
                name: 'Andrew McNamara',
                role: 'Director, Applied Machine Learning',
                org: 'Shopify',
                photo: andrew,
            },
            {
                name: 'Alex Mariakakis',
                role: 'Professor; Principal Investigator',
                org: 'University of Toronto; Computational Health and Interaction Lab',
                photo: alex,
            },
            {
                name: 'Andre Albuquerque',
                role: 'Senior Manager, Cloud & AI',
                org: 'BMO',
                photo: andre,
            },
        ],
    },
    testimonials: {
        title: 'Testimonials',
        items: [
            {
                quote: 'ConferenceX 2025 was a well-organized event and gave me the opportunity to network with potential recruiters as well as learn more about the organizations that they represent.',
                name: 'Rio McKen',
                role: 'Student, University of Toronto',
            },
            {
                quote: 'I believe it was a well-run event. There were a lot of opportunities for networking and it was personally not too exhausting for me since food and refreshments were well provided and the venue was cozy.',
                name: 'Rachel Lo',
                role: 'Student, University of Toronto',
            },
            {
                quote: 'I had a great time, everything went well.',
                name: 'Yvonne Leung, Ph.D.',
                role: 'Research Scientist, UHN',
            },
        ],
    },
    faq: {
        title: 'Frequently asked questions',
        items: [
            {
                question: 'When and where is the conference being held?',
                answer: 'The event runs 8:30AM to 5:00PM EST on January 24th and 25th, 2026 at the Schwartz Reisman Institute for Technology and Society.',
            },
            {
                question: 'Will food and refreshments be provided?',
                answer: 'Start the day with some hot coffee and light breakfast snacks! Lunch and drinks will be provided to attendees, with easy access to a water fountain throughout the day.',
            },
            {
                question:
                    'How much AI knowledge is required to attend ConferenceX?',
                answer: 'ConferenceX 2026 is open to anyone who’s interested in the AI community! We welcome attendees with all experience levels, whether they’re students, founders, or industry professionals.',
            },
            {
                question: 'Is there a limit to the number of attendees?',
                answer: 'Yes, ticket sales are limited. Seating is based on a first-come, first-served basis. Buy your ticket early to secure your spot.',
            },
        ],
    },
    schedule: {
        title: 'Schedule',
        days: [day1, day2],
    },
    sponsors: {
        title: 'Sponsors',
        groups: [
            {
                height: 44,
                logos: [
                    { name: 'Canvas', src: canvas, width: 406 },
                    { name: 'EY', src: ey, width: 119 },
                    { name: 'Intact', src: intact, width: 274 },
                    { name: 'RBC', src: rbc, width: 91 },
                ],
            },
        ],
    },
}
