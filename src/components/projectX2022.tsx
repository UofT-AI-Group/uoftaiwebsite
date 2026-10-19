import { Box, VStack, Text, Flex, SimpleGrid, Image } from '@chakra-ui/react'
import gradient from '../static/assets/2022gradient.webp'
import { ButtonOutline } from './Button'

import cornell from '../static/assets/cornell.png'
import mcgill from '../static/assets/mcgill.jpeg'
import montreal from '../static/assets/montreal.png'
import ubc from '../static/assets/UBC.png'
import usc from '../static/assets/usc.png'
import uoft from '../static/assets/uoft.png'
import york from '../static/assets/york.png'
import sfu from '../static/assets/sfu.png'
import icl from '../static/assets/icl.png'
import princeton from '../static/assets/princeton.png'
import umass from '../static/assets/umass.png'
import uoi from '../static/assets/uoi.png'
import warwick from '../static/assets/warwick.jpg'
import waterloo from '../static/assets/waterloo.png'
import wisonconsin from '../static/assets/wisonconsin.png'

import deepmind from '../static/assets/deepmind.png'
import google from '../static/assets/google.png'
import intel from '../static/assets/intel.png'
import nvidia from '../static/assets/nvidia.png'
import vector from '../static/assets/vector.png'

import team2022 from '../static/assets/team2022.png'

import codeOfConduct from '../static/assets/codeofconduct.pdf'
import guidelines from '../static/assets/Submission Guidelines 2023 (1).pdf'
import problem from '../static/assets/Problem_Statement_ProjectX_1.pdf'
import brain from '../static/assets/brain.webp'

export default function ProjectX2022() {
    return (
        <Box fontFamily={'Tabular, sans-serif'}>
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
                        2022 ML RESEARCH FOCUS
                    </Text>
                    <Text
                        fontWeight="medium"
                        fontSize={[30, 60]}
                        color="dark"
                        m="20px 0px"
                    >
                        Human-Computer Interaction
                    </Text>

                    <Flex flexWrap="wrap" mt="30px">
                        <Box
                            backgroundColor="rgba(80,80,80,.5)"
                            color="dark"
                            p="8px"
                            borderRadius="6px"
                            m="4px"
                        >
                            Human-Computer Interaction
                        </Box>
                        <Box
                            backgroundColor="rgba(80,80,80,.5)"
                            color="dark"
                            p="8px"
                            borderRadius="6px"
                            m="4px"
                        >
                            Human-Human Interaction
                        </Box>
                    </Flex>

                    <Text fontSize={['16px', '22px']} color="dark" mt="10px">
                        Prize Pool
                    </Text>

                    <Text fontWeight="medium" fontSize={[30, 60]} color="dark">
                        $40,000+
                    </Text>
                </VStack>
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
                        <ButtonOutline
                            as="a"
                            href={codeOfConduct}
                            target="_blank"
                            rel="noreferrer"
                            variant="light"
                        >
                            View Code of Conduct
                        </ButtonOutline>
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
                        <ButtonOutline
                            as="a"
                            href={guidelines}
                            target="_blank"
                            rel="noreferrer"
                            variant="light"
                        >
                            View Guidelines
                        </ButtonOutline>
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
                        <ButtonOutline
                            as="a"
                            href={problem}
                            target="_blank"
                            rel="noreferrer"
                            variant="light"
                        >
                            View Problem Definition
                        </ButtonOutline>
                    </Box>
                </VStack>
            </SimpleGrid>

            {/* -- Participating Teams -- */}
            <Box p="20px">
                <Text fontSize="40px">Participating Teams</Text>
                <Flex flexWrap="wrap" justifyContent="center" gap="40px">
                    <Image src={uoft} maxH="120px" />
                    <Image src={usc} maxH="120px" />
                    <Image src={uoi} maxH="70px" />
                    <Image src={york} maxH="90px" />
                    <Image src={wisonconsin} maxH="110px" />
                    <Image src={ubc} maxH="80px" />
                    <Image src={mcgill} maxH="100px" />
                    <Image src={waterloo} maxH="100px" />
                    <Image src={sfu} maxH="80px" />
                    <Image src={icl} maxH="80px" />
                    <Image src={cornell} maxH="100px" />
                    <Image src={warwick} maxH="100px" />
                    <Image src={montreal} maxH="100px" />
                    <Image src={princeton} maxH="110px" />
                    <Image src={umass} maxH="110px" />
                </Flex>
            </Box>

            {/* -- Our Partners -- */}
            <Box p="20px">
                <Text fontSize="40px">Our Partners</Text>
                <Flex flexWrap="wrap" justifyContent="center" gap="40px">
                    <Image src={vector} maxH="200px" />
                    <Image src={nvidia} maxH="200px" />
                    <Image src={intel} maxH="200px" />
                    <Image src={deepmind} maxH="130px" />
                    <Image src={google} maxH="200px" />
                </Flex>
            </Box>

            {/* -- NEW TIMELINE BLOCK (Using Grid so Image never exceeds Text) -- */}
            <Box position="relative" bgColor="dark" p={0} m={0}>
                {/* Text Content – adds right padding on large screens so text does not go under the image */}
                <Box
                    p={['20px', '20px', '40px']}
                    color="white"
                    pr={['20px', '20px', '40%']} // 40% right padding on larger screens only
                >
                    <Text fontSize={['24px', '36px']} mb={8}>
                        PROJECT X 2023 TIMELINE
                    </Text>
                    {/* SEPTEMBER 01 */}
                    <Box mb={8}>
                        <Text
                            fontWeight="bold"
                            fontSize={['18px', '22px']}
                            color="#EE3B8E"
                        >
                            SEPTEMBER 01 – CONFIRM UNIVERSITY PARTICIPATION
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
                            color="#EE3B8E"
                        >
                            SEPTEMBER 14 – TEAM REGISTRATION DEADLINE
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
                            color="#EE3B8E"
                        >
                            OCTOBER 01 – COMPETITION STARTS
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
                            color="#EE3B8E"
                        >
                            DECEMBER 14 – FINAL DELIVERABLE DUE
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
                            color="#EE3B8E"
                        >
                            JANUARY 21 – WINNERS ANNOUNCED
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
                    position={['static', 'static', 'absolute']} // static on small screens; absolute on larger screens
                    top="0"
                    right="0"
                    width="40%"
                    height="100%"
                    overflow="hidden"
                >
                    <Image
                        src={brain}
                        alt="Brain"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        display="block"
                    />
                </Box>
            </Box>

            {/* -- Our Team-- */}
            <Box p="20px">
                <Text fontSize="40px">Our Team</Text>
                <Flex flexWrap="wrap" justifyContent="center" gap="40px">
                    <Image src={team2022} maxH="1000px" />
                </Flex>
            </Box>
        </Box>
    )
}
