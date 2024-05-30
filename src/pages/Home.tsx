import { Box } from '@chakra-ui/react'
import React from 'react'
import InfiniteLooper from '../components/banner'
import logo from '../static/assets/UofTAI_Logo.png'
import TeamSection from '../components/team-component/TeamSection'

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
        <div className="team-component">
            <TeamSection />
        </div>
    </Box>
)

export default Home
