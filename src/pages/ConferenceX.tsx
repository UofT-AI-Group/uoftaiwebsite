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
import gradient from '../static/assets/outreach-gradient.jpeg'
import { ConferenceXTitle } from '../components/Typography'
import { ButtonOutline } from '../components/Button'
import logo from '../static/assets/UofTAI_Logo_bw.png'
import bmoLogo from '../static/assets/bmo-logo.png'
import bellLogo from '../static/assets/bell-logo.png'
import cifarLogo from '../static/assets/cifar-logo.png'
import kpmgLogo from '../static/assets/kpmg-logo.png'
import marsLogo from '../static/assets/mars-logo.png'
import rippleLogo from '../static/assets/ripple-logo.svg'
import uoftLogo from '../static/assets/uoft-logo.png'
import vectorLogo from '../static/assets/vector-institute-logo.png'
import womboLogo from '../static/assets/wombo-logo.svg'
import angela from '../static/assets/Angela-Sim.jpg'
import armando from '../static/assets/Armando-Benitez.jpg'
import ben from '../static/assets/Ben-Zion.jpg'
import chitra from '../static/assets/Chitra-Sridhar.jpg'
import colin from '../static/assets/Colin-Toal.jpg'
import geoffrey from '../static/assets/Geoffrey-Hinton.jpg'
import lisa from '../static/assets/Lisa-Mah.jpg'
import mike from '../static/assets/Mike-Schaekermann.jpg'
import ruslan from '../static/assets/Ruslan-Salakhutdinov.jpg'
import santoshi from '../static/assets/Santoshi-Tadanki.jpg'
import sunil from '../static/assets/Sunil-Sharma.jpg'
import tomi from '../static/assets/Tomi-Poutanen.jpg'
import geoffreySpeaking from '../static/assets/Geoffrey-Hinton-Speaking.jpg'
import gallery from '../static/assets/gallery.jpg'
import showcase from '../static/assets/Showcase.jpg'
import { HashLink } from 'react-router-hash-link'
import '../static/styles/conferenceX.css'

const ConferenceX = () => {
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
                bgImage={gradient}
                bgPosition={'50%'}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                height={'80vh'}
                width={'100%'}
                mt={0}
                pt={[40, 64]}
                pointerEvents="none"
            >
                <VStack alignItems={'center'} spacing={5} pointerEvents="auto">
                    <ConferenceXTitle />
                    <Text
                        fontWeight={'regular'}
                        fontSize={[14, 18]}
                        color={'light'}
                    >
                        Where technology meets humanity
                    </Text>
                    <Box>
                        <HashLink
                            smooth
                            to={'/conferencex#conference2024higlights'}
                        >
                            <ButtonOutline variant="light">
                                ConferenceX 2024 Highlights
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
                    Conference Mission
                </Text>
                <Text
                    color={'light'}
                    fontSize={['14px', '24px']}
                    maxW={'600px'}
                    w={'100%'}
                    pt={8}
                    zIndex={100}
                    position={'relative'}
                >
                    We're breaking down barriers to ensure every idea has the
                    chance to spark the next AI breakthrough. Our goal is simple
                    yet ambitious: to forge a future with AI that's as
                    inclusive, ethical, and forward-thinking as the community
                    shaping it.
                </Text>
            </Box>
            <Box
                bgColor={'#051A42'}
                p={[5, 20]}
                position={'relative'}
                zIndex={10}
            >
                <div id="conference2024higlights"></div>
                <Text fontSize={['18px', '24px']} color={'light'}>
                    ConferenceX 2024 Highlights
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
                                Panel Discussion with Geoffrey Hinton
                            </Text>
                            <Text color={'light'} fontSize={['14px', '18px']}>
                                Geoffrey Hinton, the “Godfather of AI” and
                                co-founder of the Vector Institute has
                                profoundly shaped the field of deep learning
                                through his groundbreaking neural network
                                research at the University of Toronto. As a
                                panelist at the UofT AI Conference X 2024,
                                Hinton discussed the future of AI, ethical
                                considerations, and societal impacts, drawing on
                                his decades of expertise and the transformative
                                potential of advanced AI technologies. His
                                contributions, recognized with the Turing Award
                                in 2018, continue to influence the development
                                and application of AI worldwide.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        justifyContent={'center'}
                        alignItems={'top'}
                        flexWrap={'wrap'}
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
                    <Flex
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
                    </Flex>
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
                    maxW={'1000px'}
                    mr={'auto'}
                    ml={'auto'}
                >
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image
                            src={geoffrey}
                            h={'200px'}
                            borderRadius={'50%'}
                        />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Geoffrey Hinton
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Co-founder @The Vector Institute
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={tomi} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Tomi Poutanen
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Co-founder @The Vector Institute
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            CEO of Signal 1
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={colin} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Colin Toal
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Principal BD AI/ML @ AWS
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={sunil} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Sunil Sharma
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Managing Director @Techstars
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={armando} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Dr. Armando Benitez
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Managing Director,
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Quantitative Analytics,
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Capital Markets @BMO
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={ruslan} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Ruslan Salakhutdinov
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Ex-Director of Research @Apple
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={angela} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Angela Sim
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Chief Technology Resiliency @BMO
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={chitra} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Chitra Sridhar
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Head of Services: Lighthouse @KPMG
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={lisa} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Lisa Mah
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Director of Ventures
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            @The Creative Destruction Lab
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image src={ben} h={'200px'} borderRadius={'50%'} />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Ben-Zion
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Co-founder & CEO @Wombo.ai
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
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Research Scientist @ Google
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        w={'340px'}
                    >
                        <Image
                            src={santoshi}
                            h={'200px'}
                            borderRadius={'50%'}
                        />
                        <Text fontSize={['16px', '22px']} color={'light'}>
                            Santoshi Tadanki
                        </Text>
                        <Text fontSize={['14px', '16px']} color={'light'}>
                            Data Analytics and AI Strategy @RBC
                        </Text>
                    </Flex>
                </SimpleGrid>

                <Text fontSize={'24px'} color={'light'} mt={'70px'}>
                    Confirmed Sponsors
                </Text>

                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                    mt={'40px'}
                    flexShrink={1}
                >
                    <Image
                        src={bellLogo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                    <Image
                        src={bmoLogo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                    <Image
                        src={cifarLogo}
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
                        src={marsLogo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                    <Image
                        src={uoftLogo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                    <Image
                        src={vectorLogo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                    <Image
                        src={womboLogo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                    <Image
                        src={rippleLogo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                </Flex>
            </Box>
        </Box>
    )
}

export default ConferenceX
