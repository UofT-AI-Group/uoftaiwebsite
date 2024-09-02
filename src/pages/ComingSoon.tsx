import { Box, Container, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import InfiniteLooper from '../components/banner'
import Bubble from '../components/bubble'
import logo from '../static/assets/UofTAI_Logo.png'
import { Initiative } from '../components/projects/Initiative'
import { Projects } from '../components/projects/Projects'
import { LandingTitle } from '../components/Typography'
import { ButtonOutline } from '../components/Button'
import About from '../components/about'
import { useNavigate } from 'react-router-dom'
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

const ComingSoon = () => {
    let navigate = useNavigate()
    return (
        <Box
            fontFamily={'Tabular, sans-serif'}
            h={'100vh'}
            textAlign={'center'}
        >
            <Text
                mt={'30vh'}
                fontWeight={['regular', 'semibold']}
                fontSize={[30, 48]}
                color={'dark'}
            >
                Stay Tuned, More info coming soon!
            </Text>
        </Box>
    )
}

export default ComingSoon
