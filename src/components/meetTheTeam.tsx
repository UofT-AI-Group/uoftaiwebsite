import { Box, SimpleGrid } from '@chakra-ui/react'
import TeamCard from './teamcard'
import '../static/styles/teamcard.css'
import { TEAM_MEMBERS } from '../data/team'

const MeetTheTeam = () => {
    return (
        <Box className="meet-the-team-container">
            <Box className="container-items">
                <h2 className="meet-the-team-h2">
                    <span className="underline">M</span>eet The Team
                </h2>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacingX={6}
                    spacingY={5}
                    justifyItems="center"
                    maxW="1200px"
                    mx="auto"
                >
                    {TEAM_MEMBERS.map((member) => (
                        <Box key={member.name} width="100%" maxW="500px">
                            <TeamCard {...member} />
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default MeetTheTeam
