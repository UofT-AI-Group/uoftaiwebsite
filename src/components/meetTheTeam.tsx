import React from 'react'
import TeamCard from './teamcard'
import '../static/styles/teamcard.css'
import caitlyn from '../static/assets/Caitlyn-Hundey1.jpg'
import { Box, SimpleGrid } from '@chakra-ui/react'

const MeetTheTeam: React.FC = () => {
    return (
        <Box className="meet-the-team-container">
            <Box className="container-items">
                <h2 className="meet-the-team-h2">
                    <span className="underline">M</span>eet The Team
                </h2>
                <SimpleGrid
                    columns={1}
                    justifyItems={'center'}
                    maxW={'1200px'}
                    mr={'auto'}
                    ml={'auto'}
                >
                    <Box>
                        <TeamCard
                            role="Co-President"
                            name="Caitlyn Hundey"
                            image={caitlyn}
                            description="Caitlyn Hundey is a fourth-year Bachelor of Information student at the University of Toronto. With experience designing digital products, conducting user research, and building design systems, she brings a people-first perspective to AI and is excited to create practical opportunities for students to learn, collaborate, and think critically about the technology shaping their lives."
                        />
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default MeetTheTeam
