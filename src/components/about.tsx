import whoWeAre from '../static/assets/who-we-are.webp'
import ourMission from '../static/assets/our-mission.webp'
import '../static/styles/about.css'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import SlideInOnScroll from './slideinonscroll'

const About = () => {
    return (
        <Flex
            flexDirection={'row'}
            justifyContent={'center'}
            flexWrap={'wrap'}
            align={'flex-start'}
            m={10}
        >
            <SlideInOnScroll>
                <Box
                    minW={300}
                    maxW="46vw"
                    padding="2vw"
                    flexShrink={2}
                    className="slide-in-right"
                >
                    <Text fontSize={24} fontWeight="bold" paddingBottom={10}>
                        <span className="underline">W</span>ho we are
                    </Text>

                    <Image
                        maxHeight={'300px'}
                        src={whoWeAre}
                        alt="UofT AI Logo"
                        border={'3px solid #000'}
                        boxShadow={'10px 10px black'}
                        mr={'auto'}
                        ml={'auto'}
                    />
                    <Text paddingTop={10} paddingBottom={10}>
                        The University of Toronto Artificial Intelligence Club
                        (UofT AI Club) is an incubator of talent at the
                        University of Toronto, dedicated to fostering the next
                        generation of AI enthusiasts. Beyond hosting conferences
                        and hackathons, we provide a collaborative environment
                        where students can learn, network, and work on AI
                        projects with industry professionals.
                    </Text>
                </Box>
            </SlideInOnScroll>
            <div className="divider"></div>
            <SlideInOnScroll>
                <Box
                    minW={300}
                    maxW="46vw"
                    padding="2vw"
                    flexShrink={2}
                    className="slide-in-left"
                >
                    <Box>
                        <Text
                            fontSize={24}
                            fontWeight="bold"
                            paddingBottom={10}
                        >
                            <span className="underline">O</span>ur Mission
                        </Text>
                    </Box>
                    <Box>
                        <Image
                            maxHeight={'300px'}
                            src={ourMission}
                            alt="UofT AI Logo"
                            border={'3px solid #000'}
                            boxShadow={'10px 10px black'}
                            mr={'auto'}
                            ml={'auto'}
                        />
                        <Text paddingTop={10} paddingBottom={10}>
                            Our mission is to empower passionate undergraduates
                            by offering resources, opportunities, and a
                            community where they can explore specific AI
                            interests, collaborate with like-minded peers, and
                            potentially discover co-founders for future
                            ventures.
                        </Text>
                    </Box>
                </Box>
            </SlideInOnScroll>
        </Flex>
    )
}

export default About
