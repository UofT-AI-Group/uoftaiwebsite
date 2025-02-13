import {
    Box,
    VStack,
    Text,
    Flex,
    SimpleGrid,
    Image,
    Button,
    Heading,
    Stack,
    Wrap,
} from '@chakra-ui/react'
import gradient from '../static/assets/2020gradient.png'
import { ButtonOutline } from './Button'
import berkeley from '../static/assets/berkeley.png'
import caltech from '../static/assets/caltech.png'
import carnegie from '../static/assets/carnegie.png'
import cornell from '../static/assets/cornell.png'
import darmstadt from '../static/assets/darmstadt.png'
import duquesne from '../static/assets/duquesne.png'
import jhu from '../static/assets/Johns-Hopkins-University-Logo.png'
import mcgill from '../static/assets/mcgill.jpeg'
import michigan from '../static/assets/michigan.png'
import mit from '../static/assets/mit.png'
import montreal from '../static/assets/montreal.png'
import queens from '../static/assets/queens.png'
import stanford from '../static/assets/stanford.png'
import ubc from '../static/assets/UBC.png'
import uchile from '../static/assets/uchile.png'
import umass from '../static/assets/umass.png'
import uofa from '../static/assets/uofa.png'
import uoft from '../static/assets/uoft.png'
import uoi from '../static/assets/uoi.png'
import usc from '../static/assets/usc.png'
import usp from '../static/assets/usp.png'
import wisconsin from '../static/assets/wisonconsin.png'

import accuweather from '../static/assets/accuweather.png'
import altaML from '../static/assets/altaml.png'
import amii from '../static/assets/amii.png'
import citadel from '../static/assets/citadel.png'
import climsystems from '../static/assets/climsystems.png'
import deepmind from '../static/assets/deepmind.png'
import descartesLabs from '../static/assets/descarteslabs.png'
import googleAI from '../static/assets/googleAI.png'
import ibm from '../static/assets/ibm.png'
import internationalTaxSolutions from '../static/assets/ITS.png'
import konrad from '../static/assets/konrad.png'
import loblaw from '../static/assets/loblaw.png'
import mattermore from '../static/assets/mattermore.png'
import mcKinsey from '../static/assets/mckinsey.png'
import mila from '../static/assets/mila.png'
import rogers from '../static/assets/rogers.png'
import schwartzReisman from '../static/assets/schwartzReisman.png'
import vector from '../static/assets/vector.png'

import accenture from '../static/assets/accenture.png'
import altaml from '../static/assets/altaml.png'
import google from '../static/assets/google.png'
import moderna from '../static/assets/moderna.png'
import nvidia from '../static/assets/nvidia.png'
import twentythreeandme from '../static/assets/23andme.png'

import team2021part1 from '../static/assets/team2021part1.png'
import team2021part3 from '../static/assets/team2021part3.png'

import bluegray from '../static/assets/gray_blue_bg.jpg'
import codeOfConduct from '../static/assets/codeofconduct.pdf'
import guidelines from '../static/assets/Submission Guidelines 2023 (1).pdf'
import problem from '../static/assets/Problem_Statement_ProjectX_1.pdf'
import human from '../static/assets/human.jpg'

const ProjectX2022 = ({
    onClickCurrent,
    onClick2023,
    onClick2022,
    onClick2021,
    onClick2020,
    onClickLanding,
}: {
    onClickCurrent: () => void
    onClick2023: () => void
    onClick2022: () => void
    onClick2021: () => void
    onClick2020: () => void
    onClickLanding: () => void
}) => {
    return (
        <Box>
            {/* -- Hero / Intro Section -- */}
            <Box
                bgImage={gradient}
                bgPosition="50%"
                bgSize="cover"
                bgRepeat="no-repeat"
                minHeight="80vh"
                width="100%"
                mt={28}
                pt={[10, 58]}
                pl={[4, 16]}
                pr={[4, 16]}
            >
                <VStack alignItems="left" spacing={1} pb="20px">
                    <Text fontSize={['16px', '22px']} color="dark">
                        2020 ML RESEARCH FOCUS
                    </Text>
                    <Text
                        fontWeight="medium"
                        fontSize={[30, 60]}
                        fontFamily="Tabular, sans-serif"
                        color="dark"
                        m="20px 0px"
                    >
                        Climate Change
                    </Text>

                    <Flex flexWrap="wrap" mt="30px">
                        <Box
                            backgroundColor="#cde5f7"
                            color="dark"
                            p="8px"
                            borderRadius="6px"
                            m="4px"
                        >
                            Infectious Disease
                        </Box>
                        <Box
                            backgroundColor="#cde5f7"
                            color="dark"
                            p="8px"
                            borderRadius="6px"
                            m="4px"
                        >
                            Weather and Natural Disaster Prediction
                        </Box>
                        <Box
                            backgroundColor="#cde5f7"
                            color="dark"
                            p="8px"
                            borderRadius="6px"
                            m="4px"
                        >
                            Emissions and Energy Efficiency
                        </Box>
                    </Flex>

                    <Text fontSize={['16px', '22px']} color="dark" mt="10px">
                        Prize Pool
                    </Text>

                    <Text
                        fontWeight="medium"
                        fontSize={[30, 60]}
                        fontFamily="Tabular, sans-serif"
                        color="dark"
                    >
                        $65,000
                    </Text>
                </VStack>

                <Stack
                    direction={['column', 'row']}
                    spacing={{ base: 2, md: 4 }}
                    justify="left"
                    align="center"
                    flexWrap="wrap"
                >
                    <ButtonOutline variant="dark" onClick={onClickCurrent}>
                        2024
                    </ButtonOutline>
                    <ButtonOutline variant="dark" onClick={onClick2023}>
                        2023
                    </ButtonOutline>
                    <ButtonOutline variant="dark" onClick={onClick2022}>
                        2022
                    </ButtonOutline>
                    <ButtonOutline variant="dark" onClick={onClick2021}>
                        2021
                    </ButtonOutline>
                    <ButtonOutline variant="dark" onClick={onClick2020}>
                        2020
                    </ButtonOutline>
                    <Box as="span" p={'5px'}></Box>
                    <ButtonOutline variant="dark" onClick={onClickLanding}>
                        Landing Page
                    </ButtonOutline>
                </Stack>
            </Box>

            {/* -- Info Blocks -- */}
            <SimpleGrid
                columns={[1, 1, 1, 3]}
                justifyItems="center"
                bgColor="dark"
                color="light"
            >
                <VStack
                    alignItems="left"
                    p="20px"
                    justify="space-between"
                    height="400px"
                >
                    <Text fontSize={['28px', '36px']} fontWeight="medium">
                        Code of Conduct
                    </Text>
                    <Text fontSize={['20px', '24px']}>
                        Read about our code of conduct throughout the ProjectX
                        2023 participation.
                    </Text>
                    <Box>
                        <a
                            href={codeOfConduct}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ButtonOutline variant="light">
                                View Code of Conduct
                            </ButtonOutline>
                        </a>
                    </Box>
                </VStack>

                <VStack
                    alignItems="left"
                    p="20px"
                    justify="space-between"
                    borderLeft={['', '', '', '2px solid white']}
                    borderRight={['', '', '', '2px solid white']}
                    borderTop={[
                        '2px solid white',
                        '2px solid white',
                        '2px solid white',
                        '0px',
                    ]}
                    borderBottom={[
                        '2px solid white',
                        '2px solid white',
                        '2px solid white',
                        '0px',
                    ]}
                    height="400px"
                >
                    <Text fontSize={['28px', '36px']} fontWeight="medium">
                        Submission Guidelines
                    </Text>
                    <Text fontSize={['20px', '24px']}>
                        Read our submission-related criteria and research
                        expectations.
                    </Text>
                    <Box>
                        <a href={guidelines} target="_blank" rel="noreferrer">
                            <ButtonOutline variant="light">
                                View Guidelines
                            </ButtonOutline>
                        </a>
                    </Box>
                </VStack>

                <VStack
                    alignItems="left"
                    p="20px"
                    justify="space-between"
                    height="400px"
                >
                    <Text fontSize={['28px', '36px']} fontWeight="medium">
                        Problem Definition & Scope
                    </Text>
                    <Text fontSize={['20px', '24px']}>
                        Read about the ProjectX 2023 themes and background
                        information.
                    </Text>
                    <Box>
                        <a href={problem} target="_blank" rel="noreferrer">
                            <ButtonOutline variant="light">
                                View Problem Definition
                            </ButtonOutline>
                        </a>
                    </Box>
                </VStack>
            </SimpleGrid>

            {/* -- Participating Teams -- */}
            <Box p="20px" boxShadow="md">
                <Text fontSize="40px" mb="20px">
                    Participating Teams
                </Text>
                <Flex flexWrap="wrap" justifyContent="center" gap="40px">
                    <Image src={mit} maxH="80px" />
                    <Image src={uoft} maxH="110px" />
                    <Image src={stanford} maxH="70px" />

                    <Image src={berkeley} maxH="100px" />
                    <Image src={carnegie} maxH="100px" />
                    <Image src={jhu} maxH="100px" />

                    <Image src={uoi} maxH="80px" />
                    <Image src={mcgill} maxH="90px" />
                    <Image src={michigan} maxH="120px" />
                    <Image src={caltech} maxH="100px" />
                    <Image src={montreal} maxH="100px" />

                    <Image src={ubc} maxH="70px" />
                    <Image src={cornell} maxH="100px" />
                    <Image src={wisconsin} maxH="100px" />
                    <Image src={queens} maxH="100px" />
                    <Image src={umass} maxH="100px" />
                    <Image src={usc} maxH="100px" />
                    <Image src={uofa} maxH="100px" />

                    <Image src={uchile} maxH="100px" />
                    <Image src={duquesne} maxH="70px" />
                    <Image src={usp} maxH="100px" />
                    <Image src={darmstadt} maxH="90px" />
                </Flex>
            </Box>

            {/* -- Our Partners -- */}
            <Box p="20px" boxShadow="md">
                <Text fontSize="40px">Our Partners</Text>
                <Flex flexWrap="wrap" justifyContent="center" gap="40px">
                    <Image src={googleAI} maxH="130px" />
                    <Image src={uoft} maxH="130px" />
                    <Image src={ibm} maxH="120px" />
                    <Image src={deepmind} maxH="70px" />
                    <Image src={vector} maxH="120px" />
                    <Image src={accuweather} maxH="30px" />
                    <Image src={schwartzReisman} maxH="100px" />
                    <Image src={citadel} maxH="30px" />
                    <Image src={climsystems} maxH="30px" />
                    <Image src={altaML} maxH="100px" />
                    <Image src={rogers} maxH="100px" />
                    <Image src={konrad} maxH="50px" />
                    <Image src={mattermore} maxH="35px" />
                    <Image src={loblaw} maxH="90px" />
                    <Image src={descartesLabs} maxH="90px" />
                    <Image src={internationalTaxSolutions} maxH="50px" />
                    <Image src={mila} maxH="80px" />
                    <Image src={mcKinsey} maxH="130px" />
                    <Image src={amii} maxH="100px" />
                </Flex>
            </Box>

            <Box
                p={{ base: 4, md: 8 }}
                borderRadius="md"
                maxW="800px"
                mx="auto"
            >
                {/* Solar Sponsors */}
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    textAlign="center"
                    mb={4}
                >
                    Solar Sponsors
                </Text>
                <VStack spacing={6}>
                    <Wrap justify="center" spacing={{ base: 6, md: 20 }}>
                        <Image src={google} maxH="200px" />
                        <Image src={ibm} maxH="150px" />
                    </Wrap>

                    <Wrap justify="center" spacing={{ base: 6, md: 20 }}>
                        <Image src={moderna} maxH="100px" />
                        <Image src={altaml} maxH="150px" />
                    </Wrap>
                </VStack>

                {/* Planetary Sponsors */}
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    textAlign="center"
                    mt={8}
                    mb={10}
                >
                    Planetary Sponsors
                </Text>
                <Wrap justify="center" spacing={{ base: 6, md: 20 }}>
                    <Image src={accenture} maxH="100px" />
                    <Image src={nvidia} maxH="150px" />
                </Wrap>

                {/* Lunar Sponsors */}
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    textAlign="center"
                    mt={8}
                    mb={4}
                >
                    Lunar Sponsors
                </Text>
                <Wrap justify="center" spacing={{ base: 6, md: 20 }}>
                    <Image src={twentythreeandme} maxH="150px" />
                    <Image src={vector} maxH="150px" />
                    <Image src={deepmind} maxH="100px" />
                </Wrap>
            </Box>

            {/* -- Our Team-- */}
            <Box p="20px" boxShadow="md">
                <Text fontSize="40px">Judging Panel</Text>
                <Flex flexWrap="wrap" justifyContent="center" gap="40px">
                    <Image src={team2021part1} maxH="1000px" />
                </Flex>
            </Box>

            <Box position="relative" bgColor="dark" p={0} m={0} boxShadow="md">
                {/* Text Content – adds right padding on large screens so text does not go under the image */}
                <Box
                    p={['20px', '20px', '40px']}
                    color="white"
                    pr={{ base: '20px', md: '40%' }}
                >
                    <Text fontSize={['24px', '36px']} mb={8}>
                        TIMELINE
                    </Text>
                    {/* SEPTEMBER 01 */}
                    <Box mb={8}>
                        <Text
                            fontWeight="bold"
                            fontSize={['18px', '22px']}
                            color="#86BAFF"
                        >
                            May 31 - Confirm University Participation
                        </Text>
                        <Text fontSize={['16px', '18px']}>
                            Participation confirmation deadline for
                            universities.
                        </Text>
                    </Box>
                    {/* SEPTEMBER 14 */}
                    <Box mb={8}>
                        <Text
                            fontWeight="bold"
                            fontSize={['18px', '22px']}
                            color="#86BAFF"
                        >
                            June 14 - Team Registration Deadline
                        </Text>
                        <Text fontSize={['16px', '18px']}>
                            Students will form groups and be onboarded with
                            short presentations from UofT AI, the head judge,
                            and partners.
                        </Text>
                    </Box>
                    {/* OCTOBER 01 */}
                    <Box mb={8}>
                        <Text
                            fontWeight="bold"
                            fontSize={['18px', '22px']}
                            color="#86BAFF"
                        >
                            September 01 - Competition Starts
                        </Text>
                        <Text fontSize={['16px', '18px']}>
                            Teams begin research with focus on one of two
                            themes: human-computer interaction or human-human
                            interaction.
                        </Text>
                    </Box>
                    {/* DECEMBER 14 */}
                    <Box mb={8}>
                        <Text
                            fontWeight="bold"
                            fontSize={['18px', '22px']}
                            color="#86BAFF"
                        >
                            January 31 - Final Deliverables Due
                        </Text>
                        <Text fontSize={['16px', '18px']}>
                            Final draft of research paper is due from all
                            participating teams.
                        </Text>
                    </Box>
                    {/* JANUARY 21 */}
                    <Box mb={0}>
                        <Text
                            fontWeight="bold"
                            fontSize={['18px', '22px']}
                            color="#86BAFF"
                        >
                            February 14 - Winners Announced
                        </Text>
                        <Text fontSize={['16px', '18px']}>
                            Winning teams are announced by our panel of
                            researchers and industry experts! Awards ceremony
                            for winning teams held at the UofT AI conference.
                        </Text>
                    </Box>
                </Box>

                {/* Image – absolutely positioned on large screens */}
                <Box
                    display={{ base: 'none', md: 'block' }} // Hide image on smaller screens
                    position={{ base: 'static', md: 'absolute' }}
                    top="0"
                    right="0"
                    width={{ base: '100%', md: '40%' }}
                    height="100%"
                    overflow="hidden"
                >
                    <Image
                        src={human}
                        alt="Human"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        display="block"
                    />
                </Box>
            </Box>
            {/* -- Our Team-- */}
            <Box p="20px" boxShadow="md">
                <Text fontSize="40px">Our Team</Text>
                <Flex flexWrap="wrap" justifyContent="center" gap="40px">
                    <Image src={team2021part3} maxH="1000px" />
                </Flex>
            </Box>
        </Box>
    )
}

export default ProjectX2022
