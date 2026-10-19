import { Box, Container, VStack, Text, Image } from '@chakra-ui/react'
import InfiniteLooper from '../components/banner'
import Bubble from '../components/bubble'
import { Projects } from '../components/projects/Projects'
import { LandingTitle } from '../components/Typography'
import { ButtonOutline } from '../components/Button'
import About from '../components/about'
import { Link as RouterLink } from 'react-router'
import MeetTheTeam from '../components/meetTheTeam'
import bmoLogo from '../static/assets/bmo-logo.png'
import bellLogo from '../static/assets/bell-logo.png'
import cifarLogo from '../static/assets/cifar-logo.png'
import kpmgLogo from '../static/assets/kpmg-logo.png'
import marsLogo from '../static/assets/mars-logo.png'
import rippleLogo from '../static/assets/ripple-logo.svg'
import uoftLogo from '../static/assets/uoft-logo.png'
import vectorLogo from '../static/assets/vector-institute-logo.png'
import womboLogo from '../static/assets/wombo-logo.svg'
import '../static/styles/home.css'

const PARTNERS = [
    { name: 'BMO', logo: bmoLogo },
    { name: 'Bell', logo: bellLogo },
    { name: 'CIFAR', logo: cifarLogo },
    { name: 'KPMG', logo: kpmgLogo },
    { name: 'MaRS', logo: marsLogo },
    { name: 'Ripple Ventures', logo: rippleLogo },
    { name: 'University of Toronto', logo: uoftLogo },
    { name: 'Vector Institute', logo: vectorLogo },
    { name: 'WOMBO', logo: womboLogo },
]

const Home = () => {
    return (
        <Box fontFamily={'Tabular, sans-serif'}>
            <Bubble speed="10" size="35vw" top="-18vw" left="-17vw" />
            <Bubble speed="15" size="18vw" top="150px" left="calc(94vw)" />
            <Container
                minH={'calc(100vh - 100px)'}
                maxW={'4xl'}
                pt={[40, 64]}
                pb={[10, 16]}
            >
                <VStack
                    alignItems={'left'}
                    spacing={5}
                    pr={[4, 48]}
                    pl={[4, 0]}
                >
                    <LandingTitle />
                    <Text
                        fontWeight={['regular', 'semibold']}
                        fontSize={[14, 18]}
                    >
                        Shaping the future of artificial intelligence through a
                        variety of initiatives, including educational programs,
                        competitions, guest lectures, and conferences.
                    </Text>
                    <Box>
                        <ButtonOutline as={RouterLink} to="/newsletter">
                            Read our Newsletter
                        </ButtonOutline>
                    </Box>
                </VStack>
            </Container>
            <div className="banner">
                <Box
                    className="bannerlabel"
                    position={'absolute'}
                    h={['130px', '180px']}
                    w={['150px', '250px']}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'left'}
                    flexDirection={'column'}
                    zIndex={100}
                >
                    <Text
                        className="bannerdesc"
                        fontFamily={'Tabular, sans-serif'}
                        fontWeight={'medium'}
                        fontSize={['18px', '28px']}
                    >
                        Our
                    </Text>
                    <Text
                        className="bannerdesc"
                        fontFamily={'Tabular, sans-serif'}
                        fontWeight={'medium'}
                        fontSize={['18px', '28px']}
                    >
                        Partners
                    </Text>
                </Box>

                <InfiniteLooper direction="right" speed="16">
                    {PARTNERS.map(({ name, logo }) => (
                        <Image
                            key={name}
                            h={['100px', '150px']}
                            m={'20px 30px'}
                            mb={'10px'}
                            src={logo}
                            alt={`${name} logo`}
                        />
                    ))}
                </InfiniteLooper>
            </div>
            <div id="about-container">
                <div id="about"></div>
                <About />
            </div>
            <Projects />
            <div id="meet-the-team-container">
                <div id="meet-the-team"></div>
                <MeetTheTeam />
            </div>
        </Box>
    )
}

export default Home
