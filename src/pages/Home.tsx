import { Box } from '@chakra-ui/react'
import React from 'react'
import CSS from 'csstype'
import InfiniteLooper from '../components/banner'
import Bubble from '../components/bubble'
import logo from '../static/assets/UofTAI_Logo.png'
import Footer from '../components/Footer/Footer'

const Home = function Home() {
    const titleStyles: CSS.Properties = {
        height: 'calc(100vh - 100px)',
    }

    return (
        <Box>
            <Bubble speed="20" size="400px" top="-400px" left="-150px" />
            <Bubble
                speed="20"
                size="300px"
                top="150px"
                left="calc(100vw + 0px)"
            />

            <div className="title" style={titleStyles}></div>
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
            </div>
        </Box>
    )
}

export default Home
