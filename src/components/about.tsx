import logo from '../static/assets/UofTAI_Logo.png'
import '../static/styles/about.css'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import SlideInOnScroll from './slideinonscroll'

const About = () => {
    return (
        <Flex
            className="about"
            flexDirection={'row'}
            justifyContent={'space-evenly'}
            flexWrap={'wrap'}
            align={'center'}
            m={10}
        >
            <SlideInOnScroll>
                <Box
                    minW={300}
                    maxW="40vw"
                    padding="2vw"
                    flexShrink={2}
                    className="slide-in-right"
                >
                    <Text
                        fontSize={24}
                        fontWeight="bold"
                        paddingBottom={10}
                        className="aboutdesc"
                    >
                        <span className="underline">W</span>ho we are
                    </Text>

                    <Image
                        boxSize={250}
                        className="aboutpic"
                        src={logo}
                        alt="UofT AI Logo"
                    />
                    <Text paddingTop={10} paddingBottom={10}>
                        The University of Toronto Artificial Intelligence Club
                        (UofT AI Club) is a student-run organization that aims
                        to foster a community of students passionate about
                        artificial intelligence. We are committed to providing
                        students with the resources and opportunities to learn
                        about AI, collaborate on projects, and network with
                        industry professionals.
                    </Text>
                </Box>
            </SlideInOnScroll>
            <div className="divider"></div>
            <SlideInOnScroll>
                <Box
                    minW={300}
                    maxW="40vw"
                    padding="2vw"
                    flexShrink={2}
                    className="slide-in-left"
                >
                    <Box className="aboutlabel">
                        <Text
                            fontSize={24}
                            fontWeight="bold"
                            paddingBottom={10}
                            className="aboutdesc"
                        >
                            <span className="underline">O</span>ur Mission
                        </Text>
                    </Box>
                    <Box className="aboutbody">
                        <Image
                            boxSize={250}
                            className="aboutpic"
                            src={logo}
                            alt="UofT AI Logo"
                        />
                        <Text paddingTop={10} paddingBottom={10}>
                            The University of Toronto Artificial Intelligence
                            Club (UofT AI Club) is a student-run organization
                            that aims to foster a community of students
                            passionate about artificial intelligence. We are
                            committed to providing students with the resources
                            and opportunities to learn about AI, collaborate on
                            projects, and network with industry professionals.
                        </Text>
                    </Box>
                </Box>
            </SlideInOnScroll>
        </Flex>
    )
}

export default About
