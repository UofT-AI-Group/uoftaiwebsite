import ConferenceYearTabs from '../components/ConferenceYearTabs'
import React from 'react'
import {
    Box,
    VStack,
    Text,
    Flex,
    Card,
    Image,
    SimpleGrid,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Button,
    Icon,
} from '@chakra-ui/react'
import FAQAccord from '../components/faq_accordian_2026'
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
import canvasLogo from '../static/assets/2026-confx-spons/canvas_2026.png'
import intactLogo from '../static/assets/2026-confx-spons/intact_2026.png'
import RBCLogo from '../static/assets/2026-confx-spons/RBC.png'
import rectangleImage from '../static/assets/rectangle_get_your_ticket.png'
import '../static/styles/conferenceX.css'
import { useEffect, useState } from 'react'
import { scheduleDay1 } from '../data/scheduleDay1'
import { scheduleDay2 } from '../data/scheduleDay2'
import { useBreakpointValue } from '@chakra-ui/react'
import { FiUsers, FiGlobe } from 'react-icons/fi'
import { MdLightbulbOutline } from 'react-icons/md'
import { LuTrophy, LuRocket, LuBrain } from 'react-icons/lu'
import { ChevronDownIcon } from '@chakra-ui/icons'

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

    const isMobile = useBreakpointValue({
        base: true,
        md: false,
    })
    const [mobileTabIndex, setMobileTabIndex] = useState(0)
    const [showAllSpeakers, setShowAllSpeakers] = useState(false)
    const day1Speakers = [
        {
            name: 'Stephen Wolfram',
            role: 'CEO & Founder',
            company: 'Wolfram Institute',
            img: stephen,
        },
        {
            name: 'Janice Stein',
            role: 'Founding Director',
            company: 'Munk School of Global Affairs & Public Policy',
            img: janice,
        },
        {
            name: 'David Fleet',
            role: 'CIFAR AI Chair; Lead',
            company: 'Google DeepMind Toronto',
            img: david,
        },
        {
            name: 'Joshua Gans',
            role: 'Professor; Chief Economist',
            company: 'University of Toronto; Creative Destruction Lab',
            img: joshua,
        },
        {
            name: 'Daniel Wigdor',
            role: 'Professor of Computer Science; Founder',
            company: 'University of Toronto; AXL',
            img: daniel,
        },
        {
            name: 'Yvan Gauthier',
            role: 'Principal Advisor, AI Safety',
            company: 'National Research Council of Canada',
            img: yvan,
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

        // // ----------------------------
        // // DAY 2 SPEAKERS
        // // ----------------------------
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
            name: 'Andre Albuquerque',
            role: 'Senior Manager, Cloud & AI',
            company: 'BMO',
            img: andre,
        },
    ]

    // First 6 speakers per Natalie (Stephen Wolfram, Janice Stein, David Fleet, Joshua Gans, Yvan Gauthier, Daniel Wigdor), then the rest
    const FEATURED_FIRST_SIX = [
        'Stephen Wolfram',
        'Janice Stein',
        'David Fleet',
        'Joshua Gans',
        'Yvan Gauthier',
        'Daniel Wigdor',
    ]
    const featuredSix = FEATURED_FIRST_SIX.map((name) =>
        day1Speakers.find((s) => s.name === name),
    ).filter(Boolean) as typeof day1Speakers
    const restSpeakers = day1Speakers.filter(
        (s) => !FEATURED_FIRST_SIX.includes(s.name),
    )
    const orderedSpeakers = [...featuredSix, ...restSpeakers]

    // Helper function for category tag colors
    const getCategoryTagStyles = (category: string) => {
        const categories: Record<
            string,
            { bg: string; border: string; text: string }
        > = {
            General: {
                bg: '#6A728233',
                border: '#6A72824D',
                text: '#D1D5DC',
            },
            Speaker: {
                bg: '#AD46FF4D',
                border: '#AD46FF4D',
                text: '#DAB2FF',
            },
            Talk: {
                bg: '#2B7FFF4D',
                border: '#2B7FFF4D',
                text: '#8EC5FF',
            },
            Workshop: {
                bg: '#00CED14D',
                border: '#00CED14D',
                text: '#7FFFD4',
            },
            'VC Track': {
                bg: '#00C9504D',
                border: '#00C9504D',
                text: '#7BF1A8',
            },
            VC: {
                bg: '#00C9504D',
                border: '#00C9504D',
                text: '#7BF1A8',
            },
            'Startup Pitches': {
                bg: '#00C9504D',
                border: '#00C9504D',
                text: '#7BF1A8',
            },
            Panel: {
                bg: '#FFB8004D',
                border: '#FFB8004D',
                text: '#FFE066',
            },
            Research: {
                bg: '#FF690033',
                border: '#FF690033',
                text: '#FFB86A',
            },
            Networking: {
                bg: '#F6339A4D',
                border: '#F6339A4D',
                text: '#FDA5D5',
            },
        }

        return (
            categories[category] || {
                bg: '#6A728233',
                border: '#6A72824D',
                text: '#D1D5DC',
            }
        )
    }

    // Category Tag Component
    const CategoryTag = ({ category }: { category: string }) => {
        const styles = getCategoryTagStyles(category)
        return (
            <Box
                bg={styles.bg}
                border={`1px solid ${styles.border}`}
                borderRadius="full"
                pt="6px"
                pr="12px"
                pb="6px"
                pl="12px"
            >
                <Text
                    color={styles.text}
                    fontFamily="'Inter', sans-serif"
                    fontWeight={600}
                    fontSize={'12px'}
                >
                    {category}
                </Text>
            </Box>
        )
    }

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

            <Box
                bg="linear-gradient(135deg, #120822 0%, #1f1244 50%, #2c1d5e 100%)"
                py={[10, 20]}
                px={[6, 20]}
                fontFamily="Tabular, sans-serif"
            >
                <Flex
                    direction={['column', 'column', 'row']}
                    align="center"
                    justify="space-between"
                    gap={[8, 12]}
                    maxW="1200px"
                    mx="auto"
                >
                    {/* Left Image */}
                    <Box flex="1">
                        <Image
                            src={speaker_pic}
                            borderRadius="2xl"
                            objectFit="cover"
                            w="100%"
                            maxH="420px"
                        />
                    </Box>

                    {/* Right Content */}
                    <VStack
                        flex="1"
                        align="flex-start"
                        spacing={5}
                        color="light"
                    >
                        <Text
                            as="h2"
                            fontFamily="Tabular, sans-serif"
                            fontSize={['26px', '34px', '40px']}
                            fontWeight={600}
                            letterSpacing="-0.02em"
                            lineHeight="1.15"
                            whiteSpace={['normal', 'normal', 'nowrap']}
                        >
                            What is ConferenceX 2026?
                        </Text>

                        <Text fontSize={['14px', '16px', '18px']} opacity={0.9}>
                            ConferenceX is an annual conference hosted by the
                            University of Toronto AI Group, aimed at fostering
                            an inclusive, ethical, and innovative future for
                            Artificial Intelligence.
                        </Text>

                        <Text fontSize={['14px', '16px', '18px']} opacity={0.9}>
                            This year’s event features keynote talks from
                            industry leaders, an exciting startup showcase
                            highlighting emerging AI companies, and a
                            comprehensive research fair showcasing cutting-edge
                            academic work.
                        </Text>

                        <Text fontSize={['14px', '16px', '18px']} opacity={0.9}>
                            Our mission is to inspire collaboration across
                            academia, industry, and aspiring professionals while
                            creating meaningful connections that drive the
                            future of AI forward.
                        </Text>

                        {/* Circular / Pill Button */}
                        <HashLink
                            smooth
                            to="/conferencex-2025#conference2024higlights"
                        >
                            <Button
                                variant="outline"
                                borderRadius="full"
                                px={8}
                                py={6}
                                color="white"
                                borderColor="white"
                                _hover={{ bg: 'rgba(255,255,255,0.10)' }}
                                fontFamily="Tabular, sans-serif"
                            >
                                Check out last year's conference
                            </Button>
                        </HashLink>
                    </VStack>
                </Flex>
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

                <Text
                    fontSize={['25px', '48px']}
                    color={'light'}
                    mt={'128px'}
                    mb={'48px'}
                >
                    Why Attend ConferenceX?
                </Text>

                <SimpleGrid
                    columns={[1, 2, 3]}
                    rowGap={'32px'}
                    columnGap={'32px'}
                    maxW={'1216px'}
                    mr={'auto'}
                    ml={'auto'}
                >
                    <Box
                        bg="#2A1A3A"
                        borderRadius="14px"
                        border="1px solid #FFFFFF1A"
                        p={6}
                        maxW="384px"
                    >
                        <Box
                            bg="rgba(138, 97, 200, 0.3)"
                            borderRadius="full"
                            w="56px"
                            h="56px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb="24px"
                        >
                            <Icon
                                as={FiUsers as React.ElementType}
                                boxSize={6}
                                color="#CF87FF"
                            />
                        </Box>
                        <Text
                            color="light"
                            fontSize={['16px', '20px']}
                            fontWeight="normal"
                            lineHeight="28px"
                            mb="12px"
                        >
                            World-Class Speakers
                        </Text>
                        <Text
                            color="#FFFFFFB2"
                            fontSize={['14px', '16px']}
                            fontWeight="normal"
                            lineHeight="26px"
                            letterSpacing="-0.31px"
                            opacity={0.9}
                            maxW="281px"
                            mb="16px"
                        >
                            Learn from leading AI researchers, executives, and
                            innovators shaping the future of artificial
                            intelligence.
                        </Text>
                    </Box>

                    <Box
                        bg="#2A1A3A"
                        borderRadius="14px"
                        border="1px solid #FFFFFF1A"
                        p={6}
                        maxW="384px"
                    >
                        <Box
                            bg="rgba(138, 97, 200, 0.3)"
                            borderRadius="full"
                            w="56px"
                            h="56px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb="24px"
                        >
                            <Icon
                                as={MdLightbulbOutline as React.ElementType}
                                boxSize="28px"
                                color="#CF87FF"
                            />
                        </Box>
                        <Text
                            color="light"
                            fontSize={['16px', '20px']}
                            fontWeight="normal"
                            lineHeight="28px"
                            mb="12px"
                        >
                            Cutting-Edge Research
                        </Text>
                        <Text
                            color="#FFFFFFB2"
                            fontSize={['14px', '16px']}
                            lineHeight="26px"
                            letterSpacing="-0.31px"
                            opacity={0.9}
                            maxW="281px"
                            mb="16px"
                        >
                            Explore the latest breakthroughs in machine
                            learning, neural networks, and AI safety from top
                            institutions.
                        </Text>
                    </Box>

                    <Box
                        bg="#2A1A3A"
                        borderRadius="14px"
                        border="1px solid #FFFFFF1A"
                        p={6}
                        maxW="384px"
                    >
                        <Box
                            bg="rgba(138, 97, 200, 0.3)"
                            borderRadius="full"
                            w="56px"
                            h="56px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb="24px"
                        >
                            <Icon
                                as={LuTrophy as React.ElementType}
                                boxSize={6}
                                color="#CF87FF"
                            />
                        </Box>
                        <Text
                            color="light"
                            fontSize={['16px', '20px']}
                            fontWeight="normal"
                            lineHeight="28px"
                            mb="12px"
                        >
                            Startup Showcase
                        </Text>
                        <Text
                            color="#FFFFFFB2"
                            fontSize={['14px', '16px']}
                            lineHeight="26px"
                            letterSpacing="-0.31px"
                            opacity={0.9}
                            maxW="281px"
                            mb="16px"
                        >
                            Discover innovative AI startups and pitch your own
                            ideas to investors and industry experts.
                        </Text>
                    </Box>

                    <Box
                        bg="#2A1A3A"
                        borderRadius="14px"
                        border="1px solid #FFFFFF1A"
                        p={6}
                        maxW="384px"
                    >
                        <Box
                            bg="rgba(138, 97, 200, 0.3)"
                            borderRadius="full"
                            w="56px"
                            h="56px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb="24px"
                        >
                            <Icon
                                as={LuRocket as React.ElementType}
                                boxSize="28px"
                                color="#CF87FF"
                            />
                        </Box>
                        <Text
                            color="light"
                            fontSize={['16px', '20px']}
                            fontWeight="normal"
                            lineHeight="28px"
                            mb="12px"
                        >
                            Career Opportunities
                        </Text>
                        <Text
                            color="#FFFFFFB2"
                            fontSize={['14px', '16px']}
                            lineHeight="26px"
                            letterSpacing="-0.31px"
                            opacity={0.9}
                            maxW="281px"
                            mb="16px"
                        >
                            Connect with recruiters from top tech companies
                            actively seeking AI talent.
                        </Text>
                    </Box>

                    <Box
                        bg="#2A1A3A"
                        borderRadius="14px"
                        border="1px solid #FFFFFF1A"
                        p={6}
                        maxW="384px"
                    >
                        <Box
                            bg="rgba(138, 97, 200, 0.3)"
                            borderRadius="full"
                            w="56px"
                            h="56px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb="24px"
                        >
                            <Icon
                                as={FiGlobe as React.ElementType}
                                boxSize="28px"
                                color="#CF87FF"
                            />
                        </Box>
                        <Text
                            color="light"
                            fontSize={['16px', '20px']}
                            fontWeight="normal"
                            lineHeight="28px"
                            mb="12px"
                        >
                            Global Community
                        </Text>
                        <Text
                            color="#FFFFFFB2"
                            fontSize={['14px', '16px']}
                            lineHeight="26px"
                            letterSpacing="-0.31px"
                            opacity={0.9}
                            maxW="281px"
                            mb="16px"
                        >
                            Network with 1,500+ attendees from 40+ countries,
                            all passionate about AI innovation.
                        </Text>
                    </Box>

                    <Box
                        bg="#2A1A3A"
                        borderRadius="14px"
                        border="1px solid #FFFFFF1A"
                        p={6}
                        maxW="384px"
                    >
                        <Box
                            bg="rgba(138, 97, 200, 0.3)"
                            borderRadius="full"
                            w="56px"
                            h="56px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb="24px"
                        >
                            <Icon
                                as={LuBrain as React.ElementType}
                                boxSize="28px"
                                color="#CF87FF"
                            />
                        </Box>
                        <Text
                            color="light"
                            fontSize={['16px', '20px']}
                            fontWeight="normal"
                            lineHeight="28px"
                            mb="12px"
                        >
                            Hands-On Workshops
                        </Text>
                        <Text
                            color="#FFFFFFB2"
                            fontSize={['14px', '16px']}
                            lineHeight="26px"
                            letterSpacing="-0.31px"
                            opacity={0.9}
                            maxW="281px"
                            mb="16px"
                        >
                            Participate in interactive sessions on LLMs,
                            computer vision, and responsible AI development.
                        </Text>
                    </Box>
                </SimpleGrid>

                <Text
                    fontSize={['18px', '24px']}
                    color={'light'}
                    mt={'70px'}
                    mb={'20px'}
                >
                    Featured Speakers
                </Text>

                <SimpleGrid
                    columns={[1, 1, 2, 3]}
                    spacing={'24px'}
                    maxW={'1200px'}
                    mx={'auto'}
                >
                    {(showAllSpeakers
                        ? orderedSpeakers
                        : orderedSpeakers.slice(0, 6)
                    ).map((speaker) => (
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

                {orderedSpeakers.length > 6 && (
                    <Flex
                        justify="center"
                        w="100%"
                        mt={8}
                        cursor="pointer"
                        onClick={() => setShowAllSpeakers((s) => !s)}
                        align="center"
                        gap={2}
                        color="light"
                        fontFamily="Tabular, sans-serif"
                        fontSize={['16px', '18px']}
                        fontWeight={500}
                        _hover={{ opacity: 0.85 }}
                    >
                        <Text>
                            {showAllSpeakers ? 'See less' : 'See more speakers'}
                        </Text>
                        <Icon
                            as={ChevronDownIcon}
                            boxSize={6}
                            transition="transform 0.2s"
                            transform={
                                showAllSpeakers ? 'rotate(180deg)' : undefined
                            }
                        />
                    </Flex>
                )}

                <Text
                    fontSize={['22px', '28px', '32px']}
                    color="light"
                    mt="70px"
                    mb="40px"
                    textAlign="center"
                    fontWeight={500}
                    fontFamily="Tabular, sans-serif"
                >
                    Frequently Asked Questions
                </Text>

                <FAQAccord />
                <Box
                    bg="#0F0618"
                    mt={'70px'}
                    mb={'40px'}
                    px={[6, 12, 100]}
                    py={[5, 8]}
                    w="100vw"
                    ml="calc(-50vw + 50%)"
                    position="relative"
                >
                    <Text
                        fontSize={['32px', '48px']}
                        color={'light'}
                        mb={'40px'}
                        fontFamily="'Tenor Sans', sans-serif"
                    >
                        Schedule
                    </Text>

                    {/* ScheduleCard Component */}
                    {(() => {
                        const ScheduleCard = ({
                            start,
                            end,
                            title,
                            description,
                            tag,
                        }: {
                            start: string
                            end: string
                            title: string
                            description: string
                            tag: string
                        }) => (
                            <Box
                                bg="#2A1A3A"
                                borderTop="1px solid #FFFFFF1A"
                                borderRight="1px solid #FFFFFF1A"
                                borderBottom="1px solid #FFFFFF1A"
                                borderLeft="4px solid #FFFFFF1A"
                                borderRadius="14px"
                                p="18px"
                                position="relative"
                                minH="170px"
                                display="flex"
                                flexDirection="column"
                            >
                                <Flex
                                    justify="space-between"
                                    align="flex-start"
                                    mb="6px"
                                    gap={4}
                                >
                                    <Text
                                        color="#CF87FF"
                                        fontFamily="'Inter', sans-serif"
                                        fontWeight={600}
                                        fontSize={'14px'}
                                    >
                                        {start} - {end}
                                    </Text>
                                    <Box
                                        position="absolute"
                                        top="18px"
                                        right="18px"
                                    >
                                        <CategoryTag category={tag} />
                                    </Box>
                                </Flex>
                                <Text
                                    color="#FFFFFF"
                                    fontFamily="'Tenor Sans', sans-serif"
                                    fontWeight={400}
                                    fontSize={'18px'}
                                    mb="8px"
                                    lineHeight="1.25"
                                    pr="90px"
                                    noOfLines={2}
                                    wordBreak="break-word"
                                >
                                    {title}
                                </Text>
                                {description && (
                                    <Text
                                        color="rgba(255,255,255,0.7)"
                                        fontFamily="'Inter', sans-serif"
                                        fontWeight={400}
                                        fontSize={'14px'}
                                        lineHeight="1.4"
                                        mt="auto"
                                    >
                                        {description}
                                    </Text>
                                )}
                            </Box>
                        )

                        // DayColumn Component
                        const DayColumn = ({
                            date,
                            dayName,
                            title,
                            subtitle,
                            events,
                        }: {
                            date: string
                            dayName: string
                            title: string
                            subtitle: string
                            events: Array<{
                                start: string
                                end: string
                                title: string
                                description: string
                                tag: string
                            }>
                        }) => (
                            <VStack
                                spacing={0}
                                align="stretch"
                                flex={1}
                                w="100%"
                            >
                                <Box>
                                    <Flex gap={2} align="baseline" mb={1}>
                                        <Text
                                            fontFamily="'Tenor Sans', sans-serif"
                                            fontWeight={400}
                                            fontSize={'30px'}
                                            color="#FFFFFF"
                                        >
                                            {date}
                                        </Text>
                                        <Text
                                            fontFamily="'Inter', sans-serif"
                                            fontWeight={400}
                                            fontSize={'16px'}
                                            color="rgba(255,255,255,0.6)"
                                        >
                                            {dayName}
                                        </Text>
                                    </Flex>
                                    <Text
                                        fontFamily="'Tenor Sans', sans-serif"
                                        fontWeight={400}
                                        fontSize={'30px'}
                                        color="#FFFFFF"
                                        mb={2}
                                    >
                                        {title}
                                    </Text>
                                    <Text
                                        fontFamily="'Inter', sans-serif"
                                        fontWeight={400}
                                        fontSize={'16px'}
                                        fontStyle="italic"
                                        color={'light'}
                                        opacity={0.8}
                                        minH="72px"
                                        lineHeight="1.5"
                                    >
                                        {subtitle}
                                    </Text>
                                </Box>

                                <VStack
                                    spacing={isMobile ? 3.5 : 10}
                                    align="stretch"
                                    w="100%"
                                    mt={6}
                                >
                                    {events.map((event, index) => (
                                        <ScheduleCard
                                            key={index}
                                            start={event.start}
                                            end={event.end}
                                            title={event.title}
                                            description={event.description}
                                            tag={event.tag}
                                        />
                                    ))}
                                </VStack>
                            </VStack>
                        )

                        // Desktop: Two-column layout
                        if (!isMobile) {
                            return (
                                <Flex gap={16} align="flex-start">
                                    <DayColumn
                                        date="Jan 24"
                                        dayName="Saturday"
                                        title="How the human tests the machine"
                                        subtitle="Explore how far we can push the boundaries of AI, and where we must draw boundaries."
                                        events={scheduleDay1}
                                    />
                                    <DayColumn
                                        date="Jan 25"
                                        dayName="Sunday"
                                        title="How the machine tests the human"
                                        subtitle="Explore whether AI challenges the way we live, learn, think, create and work."
                                        events={scheduleDay2}
                                    />
                                </Flex>
                            )
                        }

                        // Mobile: Tab switcher
                        return (
                            <Tabs
                                colorScheme="purple"
                                index={mobileTabIndex}
                                onChange={setMobileTabIndex}
                            >
                                <TabList
                                    borderBottom="none"
                                    mb={8}
                                    bg="rgba(255,255,255,0.1)"
                                    borderRadius="full"
                                    p={1}
                                    display="flex"
                                    gap={0}
                                >
                                    <Tab
                                        fontFamily="'Inter', sans-serif"
                                        fontWeight={400}
                                        fontSize={'14px'}
                                        color={'light'}
                                        borderRadius="full"
                                        flex={1}
                                        py={2}
                                        px={4}
                                        _selected={{
                                            bg: '#FFFFFF',
                                            color: '#000000',
                                            boxShadow:
                                                '0 2px 4px rgba(0,0,0,0.1)',
                                        }}
                                        _focus={{ boxShadow: 'none' }}
                                        _hover={{
                                            bg:
                                                mobileTabIndex === 0
                                                    ? '#FFFFFF'
                                                    : 'transparent',
                                        }}
                                        transition="all 0.2s"
                                    >
                                        Day 1 – Friday, Jan 24
                                    </Tab>
                                    <Tab
                                        fontFamily="'Inter', sans-serif"
                                        fontWeight={400}
                                        fontSize={'14px'}
                                        color={'light'}
                                        borderRadius="full"
                                        flex={1}
                                        py={2}
                                        px={4}
                                        _selected={{
                                            bg: '#FFFFFF',
                                            color: '#000000',
                                            boxShadow:
                                                '0 2px 4px rgba(0,0,0,0.1)',
                                        }}
                                        _focus={{ boxShadow: 'none' }}
                                        _hover={{
                                            bg:
                                                mobileTabIndex === 1
                                                    ? '#FFFFFF'
                                                    : 'transparent',
                                        }}
                                        transition="all 0.2s"
                                    >
                                        Day 2 – Saturday, Jan 25
                                    </Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel p={0}>
                                        <DayColumn
                                            date="Jan 24"
                                            dayName="Saturday"
                                            title="How the human tests the machine"
                                            subtitle="Explore how far we can push the boundaries of AI, and where we must draw boundaries."
                                            events={scheduleDay1}
                                        />
                                    </TabPanel>
                                    <TabPanel p={0}>
                                        <DayColumn
                                            date="Jan 25"
                                            dayName="Sunday"
                                            title="How the machine tests the human"
                                            subtitle="Explore whether AI challenges the way we live, learn, think, create and work."
                                            events={scheduleDay2}
                                        />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        )
                    })()}
                </Box>
                <Box>
                    <Text
                        fontSize={['22px', '28px', '32px']}
                        color="light"
                        mb="32px"
                        maxW="1216px"
                        mx="auto"
                        px={[6, 0]}
                        fontFamily="Tabular, sans-serif"
                    >
                        Sponsors
                    </Text>

                    <Box maxW="1216px" mx="auto" px={[4, 6]}>
                        <Flex
                            justify="center"
                            align="center"
                            gap={['20px', '32px', '40px']}
                            flexWrap="wrap"
                        >
                            {/* Canvas */}
                            <Box
                                bg="rgba(255,255,255,0.08)"
                                borderRadius="16px"
                                border="1px solid rgba(255,255,255,0.12)"
                                w={['140px', '180px', '220px']}
                                h={['90px', '110px', '130px']}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Image
                                    src={canvasLogo}
                                    maxH="40%"
                                    objectFit="contain"
                                />
                            </Box>

                            {/* EY */}
                            <Box
                                bg="rgba(255,255,255,0.08)"
                                borderRadius="16px"
                                border="1px solid rgba(255,255,255,0.12)"
                                w={['140px', '180px', '220px']}
                                h={['90px', '110px', '130px']}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Image
                                    src={eyLogo}
                                    maxH="70%"
                                    objectFit="contain"
                                />
                            </Box>

                            {/* Intact */}
                            <Box
                                bg="rgba(255,255,255,0.08)"
                                borderRadius="16px"
                                border="1px solid rgba(255,255,255,0.12)"
                                w={['140px', '180px', '220px']}
                                h={['90px', '110px', '130px']}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Image
                                    src={intactLogo}
                                    maxH="60%"
                                    objectFit="contain"
                                />
                            </Box>

                            {/* RBC */}
                            <Box
                                bg="rgba(255,255,255,0.08)"
                                borderRadius="16px"
                                border="1px solid rgba(255,255,255,0.12)"
                                w={['140px', '180px', '220px']}
                                h={['90px', '110px', '130px']}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Image
                                    src={RBCLogo}
                                    maxH="75%"
                                    objectFit="contain"
                                />
                            </Box>
                        </Flex>
                    </Box>
                </Box>

                <Box
                    w="100vw"
                    py={[16, 20, 24]}
                    px={0}
                    mt={['70px', '100px']}
                    position="relative"
                    overflow="hidden"
                    h="522px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    ml="calc(-50vw + 50%)"
                >
                    <Box
                        position="absolute"
                        width="100%"
                        height="522px"
                        left={0}
                        top="calc(50% - 522px/2)"
                        borderRadius="0px"
                        zIndex={0}
                        style={{
                            background:
                                'linear-gradient(302.57deg, #5F3B64 13.32%, #361E3A 54.89%, #1D1427 90.51%)',
                        }}
                    />
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%) rotate(67deg)"
                        w="90%"
                        h="170%"
                        bg="rgba(255, 255, 255, 0.15)"
                        opacity={1}
                        zIndex={2}
                        style={{
                            backdropFilter: 'blur(1px)',
                        }}
                    />

                    {/* Text and Button - Centered, above Rectangle B */}
                    <VStack
                        spacing={6}
                        align="center"
                        textAlign="center"
                        position="relative"
                        zIndex={3}
                        maxW="1200px"
                        mx="auto"
                        px={[6, 12, 20]}
                    >
                        <VStack spacing={0} align="center">
                            <Text
                                fontFamily="'Tenor Sans', sans-serif"
                                fontSize={['36px', '48px', '60px']}
                                fontWeight={400}
                                color="#FFFFFF"
                                lineHeight={['45px', '60px', '75px']}
                                letterSpacing="0px"
                            >
                                Get your tickets for
                            </Text>
                            <Text
                                fontFamily="'Tenor Sans', sans-serif"
                                fontSize={['36px', '48px', '60px']}
                                fontWeight={400}
                                color="#FFFFFF"
                                lineHeight={['45px', '60px', '75px']}
                                letterSpacing="0px"
                            >
                                ConferenceX 2026
                            </Text>
                        </VStack>
                        <HashLink
                            smooth
                            to={
                                'https://www.eventbrite.ca/e/uoft-ai-conferencex-2026-the-intelligence-test-tickets-1979117760498?aff=oddtdtcreator'
                            }
                        >
                            <Button
                                bg="#FFFFFF"
                                color="#000000"
                                fontFamily="'JetBrains Mono', monospace"
                                fontWeight={500}
                                fontSize="18px"
                                lineHeight="28px"
                                px={[12, 16, 20]}
                                py={[6, 8, 10]}
                                borderRadius="full"
                                _hover={{
                                    bg: 'rgba(255, 255, 255, 0.9)',
                                }}
                            >
                                Secure Your Ticket
                            </Button>
                        </HashLink>
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}

export default ConferenceX
