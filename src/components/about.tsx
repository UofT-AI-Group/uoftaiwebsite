import logo from '../static/assets/UofTAI_Logo.png'
import { ButtonDark, ButtonOutline } from './Button'
import '../static/styles/about.css'
import { Box, Flex, Text, Image } from '@chakra-ui/react'

const About = () => {
    return (
        <Flex
            className="about"
            flexDirection={'row'}
            justifyContent={'center'}
            flexWrap={'wrap'}
            align={'center'}
            m={10}
        >
            <Box minW={300} maxW="46vw" padding="2vw" flexShrink={2}>
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
                    The University of Toronto Artificial Intelligence Club (UofT
                    AI Club) is a student-run organization that aims to foster a
                    community of students passionate about artificial
                    intelligence. We are committed to providing students with
                    the resources and opportunities to learn about AI,
                    collaborate on projects, and network with industry
                    professionals.
                </Text>
                <ButtonOutline>Learn More</ButtonOutline>
            </Box>
            <div className="divider"></div>
            <Box minW={300} maxW="46vw" padding="2vw" flexShrink={2}>
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
                        The University of Toronto Artificial Intelligence Club
                        (UofT AI Club) is a student-run organization that aims
                        to foster a community of students passionate about
                        artificial intelligence. We are committed to providing
                        students with the resources and opportunities to learn
                        about AI, collaborate on projects, and network with
                        industry professionals.
                    </Text>
                    <ButtonOutline>Learn More</ButtonOutline>
                </Box>
            </Box>
        </Flex>
    )
}

export default About
