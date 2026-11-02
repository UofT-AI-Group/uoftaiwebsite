import { Box, Image, Text } from '@chakra-ui/react'
import InfiniteLooper from '../components/banner'
import HomeHero from '../components/home/HomeHero'
import ImpactStats from '../components/home/ImpactStats'
import AboutSection from '../components/home/AboutSection'
import ProgramsSection from '../components/home/ProgramsSection'
import GetInvolved from '../components/home/GetInvolved'
import TeamSection from '../components/home/TeamSection'
import StayInTouch from '../components/home/StayInTouch'
import { BODY_FONT } from '../components/home/tokens'
import bmoLogo from '../static/assets/bmo-logo.png'
import bellLogo from '../static/assets/bell-logo.png'
import cifarLogo from '../static/assets/cifar-logo.png'
import kpmgLogo from '../static/assets/kpmg-logo.png'
import marsLogo from '../static/assets/mars-logo.png'
import rippleLogo from '../static/assets/ripple-logo.svg'
import uoftLogo from '../static/assets/uoft-logo.png'
import vectorLogo from '../static/assets/vector-institute-logo.png'
import womboLogo from '../static/assets/wombo-logo.svg'

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

const PartnersBanner = () => (
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
)

const Home = () => {
    return (
        <Box fontFamily={BODY_FONT}>
            <HomeHero />
            <PartnersBanner />
            <ImpactStats />
            <AboutSection />
            <ProgramsSection />
            <GetInvolved />
            <TeamSection />
            <StayInTouch />
        </Box>
    )
}

export default Home
