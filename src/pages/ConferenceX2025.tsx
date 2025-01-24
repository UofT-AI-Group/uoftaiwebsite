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
import gradient from '../static/assets/2025_grad.png'
import Accord from '../components/faq_accordian'
import { ConferenceXTitle } from '../components/Typography'
import { ButtonOutline } from '../components/Button'
import logo from '../static/assets/UofTAI_Logo_bw.png'
import kpmgLogo from '../static/assets/kpmg-logo.png'
import pant from '../static/assets/2025_speakers/pant.jpg'
import basu from '../static/assets/2025_speakers/basu.jpg'
import kesiraju from '../static/assets/2025_speakers/kesiraju.jpg'
import leung from '../static/assets/2025_speakers/leung.jpg'
import manal from '../static/assets/2025_speakers/manal.jpg'
import mcann from '../static/assets/2025_speakers/mcann.png'
import mike from '../static/assets/2025_speakers/mike.png'
import ming from '../static/assets/2025_speakers/ming.jpg'
import parisa from '../static/assets/2025_speakers/parisa.png'
import platnick from '../static/assets/2025_speakers/platnick.png'
import rahul from '../static/assets/2025_speakers/rahul.png'
import sridhar from '../static/assets/2025_speakers/sridhar.jpg'
import supekar from '../static/assets/2025_speakers/supekar.jpg'
import wang from '../static/assets/2025_speakers/wang.png'
import waslander from '../static/assets/2025_speakers/waslander.png'
import william from '../static/assets/2025_speakers/william.jpeg'

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

import geoffreySpeaking from '../static/assets/Geoffrey-Hinton-Speaking.jpg'
import gallery from '../static/assets/gallery.jpg'
import showcase from '../static/assets/Showcase.jpg'
import { HashLink } from 'react-router-hash-link'
import interact from '../static/assets/2025-confx-spons/Interac-Logo.wine 1.png'
import kpmg from '../static/assets/2025-confx-spons/image 18.png'
import price from '../static/assets/2025-confx-spons/PricewaterhouseCoopers_Logo 1.png'
import flybits from '../static/assets/2025-confx-spons/flybits-logo-RGB 1.png'
import mstar from '../static/assets/2025-confx-spons/morningstar-600px.bb30655 1.png'
import '../static/styles/conferenceX.css'

const ConferenceX = () => {
    return (
        <Box fontFamily={'Tabular, sans-serif'} minH={'200vh'}>
            <Box
                bgImage={gradient}
                bgPosition={'50%'}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                height={'90vh'}
                width={'100%'}
                mt={28}
                pt={[40, 64]}
            >
                <VStack alignItems={'center'} spacing={5} textAlign="center">
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
                        January 25, 2025
                    </Text>
                    <Box>
                        <HashLink
                            smooth
                            to={
                                'https://www.eventbrite.ca/e/conferencex-2025-tickets-1147692381809?aff=oddtdtcreator'
                            }
                        >
                            <ButtonOutline variant="light">
                                Secure a ticket
                            </ButtonOutline>
                        </HashLink>
                    </Box>
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
                    ConferenceX is an annual conference hosted by the University
                    of Toronto AI Group, aimed at fostering an inclusive,
                    ethical, and innovative future for Artificial Intelligence.
                    This year, ConferenceX 2025 will take place on January 25th
                    in Toronto. By featuring keynote talks, a startup showcase,
                    and an AI research fair, the event aspires to inspire
                    collaboration across academia, industry, and aspiring
                    professionals.
                </Text>
                <Box pt={10}>
                    <HashLink
                        smooth
                        to={'/conferencex-2024#conference2024higlights'}
                    >
                        <ButtonOutline variant="light">
                            <Text fontSize={['12px', '16px']}>
                                Check out last year's conference
                            </Text>
                        </ButtonOutline>
                    </HashLink>
                </Box>
            </Box>
            <Box
                bgImage={gradient}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                p={[5, 20]}
                position={'relative'}
                zIndex={10}
            >
                <div id="conference2024higlights"></div>
                <Text fontSize={['18px', '24px']} color={'light'}>
                    ConferenceX 2025 Sneakpeak
                </Text>

                <VStack
                    alignItems={'center'}
                    spacing={15}
                    mt={['30px', '60px']}
                >
                    <Flex
                        justifyContent={'center'}
                        alignItems={'top'}
                        flexWrap={'wrap'}
                    >
                        <Image
                            src={geoffreySpeaking}
                            h={'200px'}
                            borderRadius={'50%'}
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
                                After welcoming hundreds of attendees and Nobel
                                laureate Geoffrey Hinton in 2024, we've stepped
                                it up for ConferenceX 2025, and confirmed a
                                lineup of over 15 distinguished speakers in the
                                AI landscape across Ontario, California,
                                Massachusetts, and New York! The day will be
                                packed with engaging talks from researchers,
                                brilliant founders, and industry experts from
                                Google Health, Google DeepMind, Citadel,
                                Accenture, World Economic Forum, and more. Check
                                out our complete list of speakers below.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        justifyContent={'center'}
                        alignItems={'top'}
                        flexWrap={'wrap'}
                        mt={'50px'}
                    >
                        <Image
                            src={showcase}
                            h={'200px'}
                            borderRadius={'50%'}
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
                                Some of Toronto's most promising AI startups
                                took center stage in an exclusive startup
                                showcase. Attendees experienced live
                                demonstrations of groundbreaking AI
                                technologies, offering a firsthand look at
                                innovations set to transform industries. Beyond
                                product demos, active recruitment of top student
                                talent took place, providing an exciting
                                opportunity for networking and career
                                exploration within Toronto’s vibrant AI
                                community.
                            </Text>
                        </Box>
                    </Flex>
                    {/* <Flex
                        justifyContent={'center'}
                        alignItems={'top'}
                        flexWrap={'wrap'}
                    >
                        <Image src={gallery} h={'200px'} borderRadius={'50%'} />
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
                                AI-Generated Art Gallery
                            </Text>
                            <Text color={'light'} fontSize={['14px', '18px']}>
                                An AI-generated art gallery presented a striking
                                collection of artwork created entirely by
                                artificial intelligence. The exhibition
                                highlighted how AI is being used in creative
                                processes, offering attendees a unique
                                perspective on the intersection of technology
                                and art. The gallery provided an insightful look
                                into how AI can contribute to the future of
                                artistic expression.
                            </Text>
                        </Box>
                    </Flex> */}
                </VStack>

                <Text
                    fontSize={['18px', '24px']}
                    color={'light'}
                    mt={'70px'}
                    mb={'20px'}
                >
                    Featured Speakers
                </Text>

                <SimpleGrid
                    columns={[1, 1, 2, 2, 3]}
                    spacing={'40px'}
                    maxW={'1100px'}
                    mr={'auto'}
                    ml={'auto'}
                >
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={pant} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Vik Pant
                        </Text>
                        <Text
                            fontSize={['14px', '16px']}
                            color={'light'}
                            textAlign="center"
                        >
                            Partner, Chief Data Scientist and Emerging
                            Technology Leader at PwC Canada
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={william} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            William Cunningham
                        </Text>
                        <Text
                            fontSize={['14px', '16px']}
                            textAlign="center"
                            color={'light'}
                        >
                            Researcher at the Vector Institute for AI
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={manal} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Manal Siddique
                        </Text>
                        <Text
                            fontSize={['14px', '16px']}
                            color={'light'}
                            textAlign="center"
                        >
                            Accenture Canada’s Responsible AI Lead
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={supekar} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Kaustabh Supekar
                        </Text>
                        <Text
                            fontSize={['14px', '16px']}
                            color={'light'}
                            textAlign="center"
                        >
                            Clinical Associate Professor, Psychiatry and
                            Behavioural Sciences at Stanford University
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={ming} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Vivienne Ming
                        </Text>
                        <Text
                            fontSize={['14px', '16px']}
                            color={'light'}
                            textAlign="center"
                        >
                            Founder, Chair, & Chief Scientist at The Human Trust
                            Founder & Chief Scientist at Dionysus Health
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image
                            src={kesiraju}
                            h={'200px'}
                            borderRadius={'50%'}
                        />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Aravind Kesiraju
                        </Text>
                        <Text
                            fontSize={['14px', '16px']}
                            color={'light'}
                            textAlign="center"
                        >
                            Principle Software Engineer, Morningstar
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={sridhar} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Chitra Sridhar
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Partner at KPMG Canada
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={basu} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Sanjana Basu
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Partner at Radical Ventures
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={mike} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Mike Schaekermann
                        </Text>
                        <Text
                            fontSize={['14px', '16px']}
                            color={'light'}
                            textAlign="center"
                        >
                            Senior Research Scientist at Google Health
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={mcann} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Bryan McCann
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Co-Founder and CTO at you.com
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image
                            src={waslander}
                            h={'200px'}
                            borderRadius={'50%'}
                        />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Steven Waslander
                        </Text>
                        <Text
                            fontSize={['14px', '16px']}
                            color={'light'}
                            textAlign="center"
                        >
                            Director, Toronto Robotics and AI Lab Professor at
                            the Institute for Aerospace Studies, University of
                            Toronto
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image
                            src={platnick}
                            h={'200px'}
                            borderRadius={'50%'}
                        />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Daniel Platnick
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Senior AI Scientist, Flybits
                        </Text>
                    </Flex>
                    <Flex></Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={wang} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            William Wang
                        </Text>
                        <Text
                            fontSize={['14px', '16px']}
                            color={'light'}
                            textAlign="center"
                        >
                            Quantitative Developer, CitadelPrev. Senior Machine
                            Learning Engineer, Shopify
                        </Text>
                    </Flex>
                </SimpleGrid>

                <Text fontSize={'24px'} color={'light'} mt={'70px'} mb={'20px'}>
                    FAQ
                </Text>
                <Accord />

                <Text fontSize={'24px'} color={'light'} mt={'70px'} mb={'20px'}>
                    Partners
                </Text>
                <Box
                    bg={'rgba(255, 255, 255, 0.25)'}
                    p={'10px'}
                    borderRadius={'md'}
                    boxShadow={'md'}
                >
                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexWrap={'wrap'}
                        mt={'40px'}
                        flexShrink={1}
                    >
                        <Image
                            src={accenture}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={stan}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={citadel}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={ghealth}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={human}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={dhealth}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={ne}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={perp}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={rad}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={trail}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={uoft}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={uf}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={vector}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={econ}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={you}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                    </Flex>
                </Box>

                <Text fontSize={'24px'} color={'light'} mt={'70px'} mb={'20px'}>
                    Sponsors
                </Text>
                <Box
                    bg={'rgba(255, 255, 255, 0.25)'}
                    p={'10px'}
                    borderRadius={'md'}
                    boxShadow={'md'}
                >
                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexWrap={'wrap'}
                        mt={'40px'}
                        flexShrink={1}
                    >
                        <Image
                            src={mstar}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={flybits}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={kpmgLogo}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={price}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                        <Image
                            src={interact}
                            p={'20px'}
                            maxW={'200px'}
                            minW={'100px'}
                        />
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default ConferenceX
