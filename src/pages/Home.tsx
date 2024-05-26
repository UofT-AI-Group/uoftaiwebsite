import { Box } from '@chakra-ui/react'
import React from 'react'
import InfiniteLooper from '../components/banner'
import logo from '../static/assets/UofTAI_Logo.png'

const Home = () => (
    <Box>
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

export default Home
