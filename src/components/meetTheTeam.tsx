import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import TeamCard from './teamcard'
import '../static/styles/teamcard.css'
import aaina from '../static/assets/team-2026/aaina-garg.jpg'
import avina from '../static/assets/team-2026/avina-chan.jpg'
import caitlyn from '../static/assets/team-2026/caitlyn-hundey.jpg'
import capucine from '../static/assets/team-2026/capucine-crouzet.jpg'
import charlize from '../static/assets/team-2026/charlize-medina.jpg'
import demeng from '../static/assets/team-2026/demeng-chen.jpg'
import hana from '../static/assets/team-2026/hana-greenberg.jpg'
import huzaifa from '../static/assets/team-2026/huzaifa-ahmer.jpg'
import ibraheem from '../static/assets/team-2026/ibraheem-hussain.jpg'
import isabella from '../static/assets/team-2026/isabella-wen.jpg'
import karishma from '../static/assets/team-2026/karishma-persad.jpg'
import maryam from '../static/assets/team-2026/maryam-fayyaz.jpg'
import seongmin from '../static/assets/team-2026/seongmin-chang.jpg'
import suhani from '../static/assets/team-2026/suhani-darda.jpg'
import zainab from '../static/assets/team-2026/zainab-khalil.jpg'

const teamMembers = [
    {
        name: 'Caitlyn Hundey',
        role: 'Co-President',
        image: caitlyn,
        description:
            'Caitlyn Hundey is a fourth-year Bachelor of Information student at the University of Toronto. With experience designing digital products, conducting user research, and building design systems, she brings a people-first perspective to AI and is excited to create practical opportunities for students to learn, collaborate, and think critically about the technology shaping their lives.',
    },
    {
        name: 'Hana Greenberg',
        role: 'Co-President',
        image: hana,
        description:
            "Hana Greenberg is a third-year undergraduate studying Political Science, Applied Data Science, and Creative Writing at the University of Toronto. With experience in Human-Computer Interaction research, she is interested in uncovering how emerging technologies can affect human relationships and communities. As Co-President, she is excited to bring an interdisciplinary perspective, highlighting the intersections between technology and society through UofT AI's events and programs.",
    },
    {
        name: 'Ibraheem Hussain',
        role: 'Co-Director of Software Development',
        image: ibraheem,
        description:
            'Ibraheem Hussain is a third-year Computer Science student at the University of Toronto. With experience building full-stack applications, AI-powered tools and production software systems, he brings a strong technical and collaborative perspective to UofT AI. As Co-Director of Software Development, he is excited to build impactful projects, support student developers and create opportunities for students to explore and apply emerging AI technologies. Outside of university, Ibraheem loves playing soccer and biking in his free time.',
    },
    {
        name: 'Isabella Wen',
        role: 'Co-Director of Community Engagement',
        image: isabella,
        description:
            'Isabella Wen is a first-year student intending to study Public Policy at the University of Toronto. Isabella became obsessed with all kinds of media and social connection, advocating for social issues through podcasting, research, and event hosting. She has been recognized by UNICEF Canada and The National Observer, and spoke on CBC The Current about emerging technologies.',
    },
    {
        name: 'Demeng Chen',
        role: 'Co-Director of Software Development',
        image: demeng,
        description:
            "Demeng Chen is a third-year Bioinformatics and Computational Biology Specialist and Computer Science Major at the University of Toronto. He's previously interned as a software engineer at Microsoft and Shopify, and has also worked on computational biology research at SickKids. At UofT AI, he works on the software and technical projects that support the club and its events.",
    },
    {
        name: 'Suhani Darda',
        role: 'Co-Director of Community Engagement',
        image: suhani,
        description:
            'Suhani Darda is a second-year Computer Engineering student at the University of Toronto with experience developing AI and machine learning projects focused on sustainability. As Co-Director of Community Engagement at UofT AI, she is excited to host events that make AI more accessible and bring students together to learn, collaborate, and turn ideas into impact.',
    },
    {
        name: 'Huzaifa Ahmer',
        role: 'Finance Director',
        image: huzaifa,
        description:
            'Huzaifa Ahmer is a Computer Science and Economics student at the University of Toronto with experience in software development and co-founding his own streetwear brand. As Finance Director at UofT AI, he helps fund student programming and build sponsor relationships, supporting events where students can explore AI and meet people working in the field.',
    },
    {
        name: 'Zainab Khalil',
        role: 'Co-Director of Publishing',
        image: zainab,
        description:
            'Zainab Khalil is a Biology, Environmental Science and Business student at the University of Toronto with experience in writing and research. As Co-Director of Publishing, she hopes to bring together perspectives from different disciplines to explore how AI is shaping different fields and the people within them.',
    },
    {
        name: 'Karishma Persad',
        role: 'Co-Director of Partnerships',
        image: karishma,
        description:
            'Karishma Persad is a second-year student studying Cognitive Science, Applied Data Science, and Linguistics at the University of Toronto. She enjoys making connections with everyone in her everyday life, which inspired her to learn why humans behave the way they do and how to use human cognitive processes to improve their experience with tech. As a Co-Director of Partnerships at UofT AI, she works on bridging the gap between the real tech industry and the students of the club to provide opportunities and collaborations to support the success of ambitious students.',
    },
    {
        name: 'Maryam Fayyaz',
        role: 'Co-Director of Publishing',
        image: maryam,
        description:
            "Maryam Fayyaz is a third-year student at the University of Toronto studying Statistics, Cognitive Science and Computer Science. After being a part of last year's ConferenceX, she is interested in the development of AI governance and regulation, as well as how AI can ethically be integrated into various industries without harmful implications. She hopes to spread her passion for AI research with the broader student community, and hopes they can find some insights from this year's Toronto AI Review.",
    },
    {
        name: 'Avina Chan',
        role: 'Co-Director of Partnerships',
        image: avina,
        description:
            'Avina Chan is a third-year student at the University of Toronto studying Bioinformatics, Computer Science, and Statistics. With experience in go-to-market strategy, healthcare AI, and technology, she brings a cross-functional perspective to AI and is interested in how emerging technologies can translate into meaningful real-world applications. She is excited to create practical opportunities for students to learn, collaborate, and engage thoughtfully with the technologies shaping the future.',
    },
    {
        name: 'Seongmin Chang',
        role: 'Director of Technical Learning',
        image: seongmin,
        description:
            "Seongmin Chang is a Mathematics & Its Applications Specialist student at the University of Toronto. After a year as an AI engineer at a startup, he's seen how easily the whole industry, not only students, falls into chasing every new release without building anything that lasts. At UofT AI, he hopes to help students cut through the noise and connect what they learn in class to what the field actually needs.",
    },
    {
        name: 'Capucine Crouzet',
        role: 'Director of Marketing',
        image: capucine,
        description:
            'Capucine Crouzet is a second-year Computer Science, Mathematics & Statistics student at the University of Toronto, aiming to specialize in Artificial Intelligence. She is passionate about graphic design and photography, with experience in communication and branding initiatives. Outside of UofT AI, she enjoys skiing, spending time with friends, and travelling.',
    },
    {
        name: 'Charlize Medina',
        role: 'Director of Communications',
        image: charlize,
        description:
            "Charlize Medina is a Public Policy and Political Science student at the University of Toronto. She is driven by a passion for social and economic development and brings experience supporting strategic initiatives across the public, private, and nonprofit sectors. Her interest in AI stems from her curiosity about how emerging technologies are transforming society. As Director of Communications, she leads UofT AI's external communications and stakeholder engagement, connecting the organization with the broader AI community.",
    },
    {
        name: 'Aaina Garg',
        role: 'Director of Conference',
        image: aaina,
        description: 'Bio coming soon.',
    },
]

const MeetTheTeam: React.FC = () => {
    return (
        <Box className="meet-the-team-container">
            <Box className="container-items">
                <h2 className="meet-the-team-h2">
                    <span className="underline">M</span>eet The Team
                </h2>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacingX={6}
                    spacingY={5}
                    justifyItems="center"
                    maxW="1200px"
                    mx="auto"
                >
                    {teamMembers.map((member) => (
                        <Box key={member.name} width="100%" maxW="500px">
                            <TeamCard {...member} />
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default MeetTheTeam
