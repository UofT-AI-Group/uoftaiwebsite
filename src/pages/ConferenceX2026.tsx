import ConferenceYearTabs from '../components/ConferenceYearTabs'
import {
    Box,
    Container,
    VStack,
    Text,
    Flex,
    Card,
    Image,
    SimpleGrid,
} from '@chakra-ui/react'
import Accord from '../components/faq_accordian'
import { ConferenceXTitle } from '../components/Typography'
import { ButtonOutline } from '../components/Button'
import logo from '../static/assets/UofTAI_Logo_bw.png'

import accenture from '../static/assets/2025-confx-spons/conference 2025 logos/Accenture-logo.png'
import trail from '../static/assets/2025-confx-spons/conference 2025 logos/trail.png'
import stan from '../static/assets/2025-confx-spons/conference 2025 logos/block-s-right.webp'
import citadel from '../static/assets/2025-confx-spons/conference 2025 logos/Citadel_LLC_Logo.svg.png'
import deep from '../static/assets/2025-confx-spons/conference 2025 logos/DeepMind_new_logo.svg.png'
import ghealth from '../static/assets/2025-confx-spons/conference 2025 logos/Google_Health_logo.svg.png'
import dhealth from '../static/assets/2025-confx-spons/conference 2025 logos/Main-menu-logo.svg'
import ne from '../static/assets/2025-confx-spons/conference 2025 logos/Northeastern-University-Logo.png'
import perp from '../static/assets/2025-confx-spons/conference 2025 logos/Perplexity_AI_logo.svg.png'
import rad from '../static/assets/2025-confx-spons/conference 2025 logos/radical-ventures-header-logo.webp'
import human from '../static/assets/2025-confx-spons/conference 2025 logos/human.avif'
import uoft from '../static/assets/2025-confx-spons/conference 2025 logos/University_of_Toronto-Logo.wine.png'
import vector from '../static/assets/2025-confx-spons/conference 2025 logos/Vector-Institute_Logo.png'
import uf from '../static/assets/2025-confx-spons/conference 2025 logos/University-of-Florida-Logo.png'
import econ from '../static/assets/2025-confx-spons/conference 2025 logos/World_Economic_Forum_logo.svg.png'
import you from '../static/assets/2025-confx-spons/conference 2025 logos/You.com_Secondary_Vertical_Gradient.png'

import speaker_pic from '../static/assets/conf-2026-assets/speaker_pic.jpg'
import gallery from '../static/assets/our-mission.jpg'
import showcase from '../static/assets/conf-2026-assets/showcase.png'

import yvan from '../static/assets/conf-2026-assets/yvan.jpg'
import hossein from '../static/assets/conf-2026-assets/hossein.jpg'
import luis from '../static/assets/conf-2026-assets/luis.png'
import maryam from '../static/assets/conf-2026-assets/Maryam.png'
import jonathan from '../static/assets/conf-2026-assets/Jonathan.png'
import ameen from '../static/assets/conf-2026-assets/Ameen.jpg'
import olivia from '../static/assets/conf-2026-assets/Olivia.png'
import selen from '../static/assets/conf-2026-assets/Selen.jpg'
import rupa from '../static/assets/conf-2026-assets/Rupa.jpg'
import sean from '../static/assets/conf-2026-assets/Sean.jpg'
import evan from '../static/assets/conf-2026-assets/Evan.jpg'
import ishika from '../static/assets/conf-2026-assets/Ishika.png'
import shane from '../static/assets/conf-2026-assets/shane.jpg'
import asad from '../static/assets/conf-2026-assets/Asad.png'
import haris from '../static/assets/conf-2026-assets/Haris.jpg'
import vikram from '../static/assets/conf-2026-assets/Vikram.jpg'
import taha from '../static/assets/conf-2026-assets/Taha.png'
import nick from '../static/assets/conf-2026-assets/Nick.png'
import kino from '../static/assets/conf-2026-assets/Kino.jpg'
import fatima from '../static/assets/conf-2026-assets/Fatima.png'
import jeremy from '../static/assets/conf-2026-assets/Jeremy.png'
import peja from '../static/assets/conf-2026-assets/Peja.png'
import micheal_li from '../static/assets/conf-2026-assets/Michael_li.jpg'
import michael from '../static/assets/conf-2026-assets/Michael_Page.png'
import yashwinie from '../static/assets/conf-2026-assets/Yashwinie.png'
import zhijing from '../static/assets/conf-2026-assets/zhijing.webp'
import savannah from '../static/assets/conf-2026-assets/savannah.jpg'
import rauno from '../static/assets/conf-2026-assets/Rauno.jpg'
import atrisha from '../static/assets/conf-2026-assets/atrisha.png'
import david from '../static/assets/conf-2026-assets/david.jpg'

import david_r from '../static/assets/conf-2026-assets/David_Rokeby.png'
import janice from '../static/assets/conf-2026-assets/janice.jpg'
import joshua from '../static/assets/conf-2026-assets/joshua.webp'
import kristina from '../static/assets/conf-2026-assets/kristina.png'
import lawrence from '../static/assets/conf-2026-assets/lawrence.jpg'
import bernhardt from '../static/assets/conf-2026-assets/Bernhardt.jpg'
import anson from '../static/assets/conf-2026-assets/Anson.png'
import farhan from '../static/assets/conf-2026-assets/Farhan.png'
import andrew from '../static/assets/conf-2026-assets/Andrew.png'
import alex from '../static/assets/conf-2026-assets/Alex.png'
import daniel from '../static/assets/conf-2026-assets/daniel.png'
import andre from '../static/assets/conf-2026-assets/Andre.png'

import stephen from '../static/assets/conf-2026-assets/stephen_wolfram.jpg'

import { HashLink } from 'react-router-hash-link'
import eyLogo from '../static/assets/2026-confx-spons/EY.png'
import canvasLogo from '../static/assets/2026-confx-spons/canvas.png'
import intactLogo from '../static/assets/2026-confx-spons/intact.png'
import '../static/styles/conferenceX.css'
import { useEffect, useState } from 'react'

const ConferenceX = () => {
    const gradient2026 =
        'linear-gradient(135deg, #160d2f 0%, #2c1d5e 40%, #3b4fa3 100%)'
    const [countdown, setCountdown] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
    })

    useEffect(() => {
        const target = new Date('2026-01-24T00:00:00-05:00').getTime()
        const timer = setInterval(() => {
            const now = Date.now()
            const diff = Math.max(target - now, 0)
            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((diff / (1000 * 60)) % 60)
            setCountdown({
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])
    const day1Speakers = [
        {
            name: 'Yvan Gauthier',
            role: 'Principal Advisor, AI Safety',
            company: 'National Research Council of Canada',
            img: yvan,
        },
        {
            name: 'Hossein Rahnama',
            role: 'CEO; Professor',
            company: 'Flybits; MIT Media Lab',
            img: hossein,
        },

        {
            name: 'Luis Martin Mejia Mendoza',
            role: 'Research Officer',
            company: 'National Research Council Canada',
            img: luis,
        },
        {
            name: 'Maryam Emami',
            role: 'CEO',
            company: 'AI Materia',
            img: maryam,
        },
        {
            name: 'Jonathan Stokes',
            role: 'Professor; Principal Investigator',
            company: 'McMaster University; Stokes Lab',
            img: jonathan,
        },

        {
            name: 'Ameen Neami',
            role: 'Chief Technology Officer',
            company: 'Friedman AI',
            img: ameen,
        },
        {
            name: 'Olivia Leng',
            role: 'Founder',
            company: 'Meissner',
            img: olivia,
        },
        {
            name: 'Selen Öncüloğlu',
            role: 'Co-Founder',
            company: 'Remi',
            img: selen,
        },
        {
            name: 'Rupa Vempulapalli',
            role: 'Co-Founder',
            company: 'Remi',
            img: rupa,
        },
        {
            name: 'Sean Kim',
            role: 'Co-Founder',
            company: 'Root AI',
            img: sean,
        },
        {
            name: 'Evan Jiang',
            role: 'Co-Founder',
            company: 'Root AI',
            img: evan,
        },
        {
            name: 'Ishika Mittal',
            role: 'Founder',
            company: 'Ordo',
            img: ishika,
        },
        {
            name: 'Shane Vainer',
            role: 'Founder',
            company: 'Nocthare',
            img: shane,
        },
        {
            name: 'Asad Hussain',
            role: 'Co-Founder',
            company: 'Offline',
            img: asad,
        },
        {
            name: 'Haris Malik',
            role: 'Co-Founder',
            company: 'Offline',
            img: haris,
        },
        {
            name: 'Vikram Narra',
            role: 'Co-Founder',
            company: 'Offline',
            img: vikram,
        },

        {
            name: 'Taha Mubashir',
            role: 'Partner',
            company: 'Inovia Capital',
            img: taha,
        },
        {
            name: 'Nick Chen',
            role: 'Partner',
            company: 'Golden Ventures',
            img: nick,
        },
        {
            name: 'Kino Song',
            role: 'Co-Founder',
            company: 'TalkToMedi',
            img: kino,
        },
        {
            name: 'Fatima Taj',
            role: 'Senior Software Engineer',
            company: 'Yelp',
            img: fatima,
        },

        {
            name: 'Jeremy Tyers',
            role: 'Financial Services AI Leader',
            company: 'Microsoft',
            img: jeremy,
        },
        {
            name: 'Peja Bulatovic',
            role: 'Director of AI Engineering',
            company: 'Intact',
            img: peja,
        },
        {
            name: 'Michael Li',
            role: 'Manager',
            company: 'Intact Data Lab',
            img: micheal_li,
        },

        {
            name: 'Yashwinie Shivanand',
            role: 'AI Governance Specialist',
            company: 'Environment and Climate Change Canada',
            img: yashwinie,
        },
        {
            name: 'Zhijing Jin',
            role: 'Professor',
            company: 'University of Toronto',
            img: zhijing,
        },
        {
            name: 'Savannah Harlan',
            role: 'Master of Public Policy Candidate 2026; Independent Researcher',
            company:
                'Munk School of Global Affairs & Public Policy; Trajectory Labs',
            img: savannah,
        },
        {
            name: 'Rauno Arike',
            role: 'Researcher; Former Research Contractor',
            company: 'Aether; AI Security Institute',
            img: rauno,
        },
        {
            name: 'Atrisha Sarkar',
            role: 'Professor',
            company: 'University of Western Ontario',
            img: atrisha,
        },

        {
            name: 'Michael Page',
            role: 'Director of AI Commercialization',
            company: 'Unity Health',
            img: michael,
        },

        {
            name: 'David Fleet',
            role: 'CIFAR AI Chair; Lead',
            company: 'Google DeepMind Toronto',
            img: david,
        },

        // // -----------------------------
        // // DAY 2 SPEAKERS
        // // -----------------------------
        // // const day2Speakers = [
        {
            name: 'David Rokeby',
            role: 'Director; Professor',
            company: 'BMO Lab for Creative Research; University of Toronto',
            img: david_r,
        },
        {
            name: 'Janice Stein',
            role: 'Founding Director',
            company: 'Munk School of Global Affairs & Public Policy',
            img: janice,
        },

        {
            name: 'Joshua Gans',
            role: 'Professor; Chief Economist',
            company: 'University of Toronto; Creative Destruction Lab',
            img: joshua,
        },
        {
            name: 'Kristina McElheran',
            role: 'Professor; Faculty Fellow',
            company: 'Rotman School of Management; Schwartz Reisman Institute',
            img: kristina,
        },
        {
            name: 'Lawrence Zhang',
            role: 'Head of Policy',
            company: 'Centre for Canadian Innovation and Competitiveness',
            img: lawrence,
        },
        {
            name: 'Bernhardt-Walther',
            role: 'Professor, Department of Psychology',
            company: 'University of Toronto',
            img: bernhardt,
        },
        {
            name: 'Anson Ho',
            role: 'Researcher',
            company: 'Epoch AI',
            img: anson,
        },
        {
            name: 'Farhan Thawar',
            role: 'Head of Engineering',
            company: 'Shopify',
            img: farhan,
        },
        {
            name: 'Andrew McNamara',
            role: 'Director, Applied Machine Learning',
            company: 'Shopify',
            img: andrew,
        },
        {
            name: 'Alex Mariakakis',
            role: 'Professor; Principal Investigator',
            company:
                'University of Toronto; Computational Health and Interaction Lab',
            img: alex,
        },
        {
            name: 'Daniel Wigdor',
            role: 'Professor of Computer Science; Founder',
            company: 'University of Toronto; AXL',
            img: daniel,
        },
        {
            name: 'Andre Albuquerque',
            role: 'Senior Manager, Cloud & AI',
            company: 'BMO',
            img: andre,
        },
        {
            name: 'Stephen Wolfram',
            role: 'CEO & Founder',
            company: 'Wolfram Institute',
            img: stephen,
        },
    ]

    return (
        <Box fontFamily={'Tabular, sans-serif'} minH={'200vh'} pt={28}>
            <Box
                bg="white"
                py={2}
                position="relative"
                zIndex={500}
                style={{ pointerEvents: 'auto' }}
            >
                <ConferenceYearTabs />
            </Box>

            <Box
                bgImage={gradient2026}
                bgPosition={'50%'}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                height={'90vh'}
                width={'100%'}
                mt={0}
                pt={[40, 64]}
                pointerEvents="none"
            >
                <VStack
                    alignItems={'center'}
                    spacing={5}
                    textAlign="center"
                    pointerEvents="auto"
                >
                    <ConferenceXTitle />
                    <Text
                        fontWeight={'regular'}
                        fontSize={[14, 18]}
                        color={'light'}
                    >
                        Pioneering the Future of Innovative and Ethical AI
                    </Text>
                    <Text
                        fontWeight={'regular'}
                        fontSize={[14, 18]}
                        color={'light'}
                    >
                        January 24–25, 2026
                    </Text>
                    <Box>
                        <HashLink
                            smooth
                            to={
                                'https://www.eventbrite.ca/e/uoft-ai-conferencex-2026-the-intelligence-test-tickets-1979117760498?aff=oddtdtcreator'
                            }
                        >
                            <ButtonOutline variant="light">
                                Secure a ticket
                            </ButtonOutline>
                        </HashLink>
                    </Box>
                    <Flex
                        alignItems="center"
                        gap={3}
                        bg="rgba(255,255,255,0.15)"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize={[12, 14]}
                        color="light"
                        fontWeight="semibold"
                    >
                        <Text>Countdown to Day 1:</Text>
                        <Flex gap={3}>
                            <Box textAlign="center">
                                <Text fontSize={[16, 18]} fontWeight="bold">
                                    {countdown.days}
                                </Text>
                                <Text fontSize={[10, 12]}>Days</Text>
                            </Box>
                            <Box textAlign="center">
                                <Text fontSize={[16, 18]} fontWeight="bold">
                                    {countdown.hours}
                                </Text>
                                <Text fontSize={[10, 12]}>Hours</Text>
                            </Box>
                            <Box textAlign="center">
                                <Text fontSize={[16, 18]} fontWeight="bold">
                                    {countdown.minutes}
                                </Text>
                                <Text fontSize={[10, 12]}>Minutes</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </VStack>
            </Box>
            <Box backgroundColor={'dark'} p={[5, 20]} position={'relative'}>
                <Image
                    src={logo}
                    position={'absolute'}
                    h={['150px', '310px']}
                    top={'55%'}
                    left={'80%'}
                    zIndex={0}
                />
                <Text
                    color={'light'}
                    fontSize={['25px', '40px']}
                    zIndex={100}
                    position={'relative'}
                >
                    What is ConferenceX?
                </Text>
                <Text
                    color={'light'}
                    fontSize={['14px', '24px']}
                    //maxW={'600px'}
                    w={'75%'}
                    pt={8}
                    zIndex={100}
                    position={'relative'}
                >
                    ConferenceX is the University of Toronto’s annual AI
                    conference, built to foster a future where technology and
                    humanity progress together. We believe that the best way to
                    shape the future of AI is through rigorous discourse,
                    diverse community building, and debate. Held in the heart of
                    the world’s leading AI research hub, ConferenceX unites
                    pioneers across the various domains AI impacts. Each year,
                    we host an incredible lineup of leading speakers, hands-on
                    workshops, expert panels, and showcases. This year,
                    ConferenceX will be taking place January 24-25, 2026.
                </Text>
                <Box pt={10}>
                    <HashLink
                        smooth
                        to={'/conferencex-2025#conference2024higlights'}
                    >
                        <ButtonOutline variant="light">
                            <Text fontSize={['12px', '16px']}>
                                Check out last year's conference
                            </Text>
                        </ButtonOutline>
                    </HashLink>
                </Box>
            </Box>
            <Box backgroundColor={'light'} p={[5, 20]}>
                <Text
                    color={'dark'}
                    fontSize={['25px', '32px']}
                    fontWeight="semibold"
                    mb={4}
                >
                    Theme – The Intelligence Test
                </Text>
                <VStack alignItems="flex-start" spacing={4} color="dark">
                    <Text fontSize={['14px', '18px']}>
                        In 1950, Alan Turing proposed a game of imitation: could
                        a human mind tell the difference between machine and
                        human? His thought experiment, The Turing Test,
                        challenged us to imagine a world where the boundary
                        between humans and machine intelligence might blur.
                    </Text>
                    <Text fontSize={['14px', '18px']}>
                        Seventy-six years later, the test, however, feels
                        quaint; every day we see machines that can pass it. And
                        in building AI, we have discovered something more
                        interesting than whether or not they can convince us.
                        Turing imagined humans as testing machines, but the
                        relationship has become reciprocal. AI can now probe our
                        reasoning, expose our biases, and challenge our
                        assumptions across domains. The interrogation runs both
                        ways.
                    </Text>
                    <Box
                        bg="rgba(17, 17, 17, 0.05)"
                        border="1px solid rgba(17, 17, 17, 0.12)"
                        borderRadius="lg"
                        p={[4, 5]}
                        boxShadow="sm"
                    >
                        <Text fontSize={['15px', '19px']} fontWeight="semibold">
                            ConferenceX 2026: The Intelligence Test, explores
                            intelligence as mutual examination.
                        </Text>
                        <Text fontSize={['14px', '18px']} mt={2}>
                            We are interested in what we learn when humans and
                            machines challenge each other, asking who – if one
                            at all – is really in control.
                        </Text>
                    </Box>
                    <Box pt={2}>
                        <Text fontSize={['16px', '20px']} fontWeight="semibold">
                            Day 1: How the human tests the machine
                        </Text>
                        <Text fontSize={['14px', '18px']}>
                            Explore how far we can push the boundaries of AI,
                            and where we must draw boundaries.
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize={['16px', '20px']} fontWeight="semibold">
                            Day 2: How the machine tests the human
                        </Text>
                        <Text fontSize={['14px', '18px']}>
                            Explore whether AI challenges the way we live,
                            learn, think, create and work.
                        </Text>
                    </Box>
                </VStack>
            </Box>
            <Box
                bgImage={gradient2026}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                p={[5, 20]}
                position={'relative'}
                zIndex={10}
            >
                <div id="conference2024higlights"></div>
                <Text fontSize={['18px', '24px']} color={'light'}>
                    ConferenceX 2026 Sneakpeak
                </Text>

                <VStack
                    alignItems={'center'}
                    spacing={[12, 16]}
                    mt={['40px', '70px']}
                >
                    <Flex
                        justifyContent={'center'}
                        alignItems={'top'}
                        flexWrap={'wrap'}
                        mb={['24px', '32px']}
                    >
                        <Image
                            src={speaker_pic}
                            boxSize={['200px', '220px']}
                            borderRadius={'50%'}
                            objectFit="cover"
                        />
                        <Box
                            maxW={'1000px'}
                            minW={'300px'}
                            ml={['0px', '40px']}
                            w={'80%'}
                        >
                            <Text
                                color={'light'}
                                fontSize={['18px', '24px']}
                                pb={'10px'}
                            >
                                Speakers
                            </Text>
                            <Text color={'light'} fontSize={['14px', '18px']}>
                                We’re bringing together leading voices across
                                academia, industry, and the public sector for
                                two days of deep exploration. ConferenceX is
                                hosting more than 15 speakers per day, capturing
                                topics for all interests in AI. Featuring
                                researchers, founders, and practitioners from
                                Google DeepMind, Vector Institute, Wolfram
                                Institute, Shopify, Microsoft, National Research
                                Council Canada, Creative Destruction Lab, the
                                Munk School of Global Affairs and Public Policy,
                                and more, the conference will generate an
                                unforgettable discussion about how we evaluate
                                AI and how they challenge our understanding in
                                return.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        justifyContent={'center'}
                        alignItems={'top'}
                        flexWrap={'wrap'}
                        mb={['24px', '32px']}
                    >
                        <Image
                            src={showcase}
                            boxSize={['200px', '220px']}
                            borderRadius={'50%'}
                            objectFit="cover"
                        />
                        <Box
                            maxW={'1000px'}
                            minW={'300px'}
                            ml={'40px'}
                            w={'80%'}
                        >
                            <Text
                                color={'light'}
                                fontSize={['18px', '24px']}
                                pb={'10px'}
                            >
                                Startup Showcase
                            </Text>
                            <Text color={'light'} fontSize={['14px', '18px']}>
                                Toronto’s most innovative AI startups will take
                                center stage with live demonstrations of
                                cutting-edge technologies. Attendees will
                                experience firsthand how these companies are
                                pushing the boundaries of what is possible, from
                                scientific discoveries to next-generation
                                applications. This is your opportunity to
                                witness the future being built and connect with
                                the founders, as well as venture capitalists,
                                shaping it.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        justifyContent={'center'}
                        alignItems={'top'}
                        flexWrap={'wrap'}
                        mb={['24px', '32px']}
                    >
                        <Image
                            src={gallery}
                            boxSize={['200px', '220px']}
                            borderRadius={'50%'}
                            objectFit="cover"
                        />
                        <Box
                            maxW={'1000px'}
                            minW={'300px'}
                            ml={['0px', '40px']}
                            w={'80%'}
                        >
                            <Text
                                color={'light'}
                                fontSize={['18px', '24px']}
                                pb={'10px'}
                            >
                                Workshops
                            </Text>
                            <Text color={'light'} fontSize={['14px', '18px']}>
                                Beyond the main stage, ConferenceX features
                                hands-on workshops where theory becomes practice
                                and attendees learn real skills. Explore the
                                frontiers of AI security through comparative
                                jailbreaking experiments, examine the ethical
                                boundaries of AI decision-making, learn how to
                                augment creativity, and be better prepared for
                                the tech industry in the age of AI. These
                                interactive sessions offer a chance to grapple
                                directly with the tensions and possibilities
                                that define our AI moment.
                            </Text>
                        </Box>
                    </Flex>
                </VStack>

                <Box mt={'70px'} mb={'40px'}>
                    <Box maxW={'1200px'} mx={'auto'} mb={'40px'}>
                        <Text
                            fontSize={['32px', '48px']}
                            color={'light'}
                            fontFamily="'Tenor Sans', sans-serif"
                        >
                            Featured Speakers
                        </Text>
                    </Box>

                    <SimpleGrid
                        columns={[1, 1, 2, 3]}
                        spacing={'24px'}
                        maxW={'1200px'}
                        mx={'auto'}
                    >
                        {day1Speakers.map((speaker) => (
                            <Box
                                key={speaker.name}
                                bg="#2A1A3A"
                                border="1px solid rgba(255,255,255,0.1)"
                                borderRadius="14px"
                                boxShadow="0 2px 8px rgba(0,0,0,0.2)"
                                overflow="hidden"
                                w="384px"
                                h="513.5px"
                            >
                                <Box w="100%" h="365.5px" overflow="hidden">
                                    <Image
                                        src={speaker.img || logo}
                                        w="100%"
                                        h="100%"
                                        objectFit="cover"
                                        objectPosition="center 1%"
                                    />
                                </Box>
                                <Box p="24px" minH="140px">
                                    <Text
                                        fontSize={['18px', '20px']}
                                        color="#FFFFFF"
                                        mb="8px"
                                        fontFamily="'Tenor Sans', sans-serif"
                                        fontWeight={400}
                                    >
                                        {speaker.name}
                                    </Text>
                                    {speaker.role && (
                                        <Text
                                            fontSize={['13px', '14px']}
                                            color="rgba(255,255,255,0.6)"
                                            fontFamily="'Inter', sans-serif"
                                            fontWeight={400}
                                            lineHeight="1.4"
                                            mb="4px"
                                        >
                                            {speaker.role}
                                        </Text>
                                    )}
                                    {speaker.company && (
                                        <Text
                                            fontSize={['13px', '14px']}
                                            color="#FFFFFF"
                                            fontFamily="'Inter', sans-serif"
                                            fontWeight={500}
                                            lineHeight="1.4"
                                        >
                                            {speaker.company}
                                        </Text>
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

                <Text fontSize={'24px'} color={'light'} mt={'70px'} mb={'20px'}>
                    FAQ
                </Text>
                <Accord
                    scheduleText={
                        'The event runs 9:00AM to 5:00PM EST on January 24th and 25th, 2026 at the Schwartz Reisman Institute for Technology and Society.'
                    }
                    knowledgeAnswer={
                        "ConferenceX 2026 is open to anyone who's interested in the AI community! We welcome attendees with all experience levels, whether they're students, founders, industry professionals or more."
                    }
                />

                <Text fontSize={'24px'} color={'light'} mt={'70px'} mb={'20px'}>
                    Sponsors
                </Text>
                <Box
                    bg={'rgba(255, 255, 255, 0.18)'}
                    p={['12px', '20px']}
                    borderRadius={'lg'}
                    boxShadow={'lg'}
                    maxW={'1200px'}
                    mx="auto"
                    mt={['12px', '20px']}
                >
                    <Box maxW={'1100px'} mx="auto">
                        <Flex
                            justifyContent={'center'}
                            alignItems={'center'}
                            gap={['40px', '64px', '88px']}
                            flexWrap={'wrap'}
                            py={['12px', '20px']}
                        >
                            <Image
                                src={canvasLogo}
                                h={['140px', '170px']}
                                maxW={'280px'}
                                objectFit="contain"
                            />
                            <Image
                                src={eyLogo}
                                h={['120px', '120px']}
                                maxW={'240px'}
                                objectFit="contain"
                            />
                            <Image
                                src={intactLogo}
                                h={['140px', '170px']}
                                maxW={'280px'}
                                objectFit="contain"
                            />
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ConferenceX
