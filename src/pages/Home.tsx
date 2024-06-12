import { Box, Container, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import InfiniteLooper from '../components/banner'
import Bubble from '../components/bubble'
import logo from '../static/assets/UofTAI_Logo.png'
import { LandingTitle } from '../components/Typography'
import { ButtonOutline } from '../components/Button'
import About from '../components/about'

const Home = () => {
    return (
        <Box fontFamily={'Tabular, sans-serif'}>
            <Bubble speed="20" size="400px" top="-400px" left="-150px" />
            <Bubble
                speed="20"
                size="300px"
                top="150px"
                left="calc(100vw + 0px)"
            />

            <Container
                className={'title'}
                h={'calc(100vh - 100px)'}
                maxW={'4xl'}
                pt={64}
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
                        <ButtonOutline>Read our Newsletter</ButtonOutline>
                    </Box>
                </VStack>
            </Container>

            <div className="banner">
                <div className="bannerlabel">
                    <p className="bannerdesc">Our</p>
                    <p className="bannerdesc">Partners</p>
                </div>

                <InfiniteLooper direction="right" speed="3">
                    <img
                        className="bannerlogo"
                        src={logo}
                        alt="UofT AI Club Logo"
                    />
                </InfiniteLooper>
                <About />
            </div>
        </Box>
    )
}

export default Home
