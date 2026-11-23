import {
    Box,
    VStack,
    Text,
    Icon,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Grid,
    GridItem,
    Image,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react'
import {
    LuTrophy,
    LuAtom,
    LuUserCheck,
    LuHandshake,
    LuMicVocal,
    LuUsersRound,
} from 'react-icons/lu'
import gradient from '../static/assets/2026gradient.webp'
import evanLight from '../static/assets/projectx2026_mentors/evan_light.jpg'
import veraKhovanskaya from '../static/assets/projectx2026_mentors/vera_khovanskaya.jpg'
import sebastianJaimungal from '../static/assets/projectx2026_mentors/sebastian_jaimungal.jpg'
import fernandoYanez from '../static/assets/projectx2026_mentors/fernando_yanez.jpg'
import helenaWright from '../static/assets/projectx2026_mentors/helena_wright.jpg'
import konradSamsel from '../static/assets/projectx2026_mentors/konrad_samsel.jpeg'
import nickJia from '../static/assets/projectx2026_mentors/nick_jia.jpg'
import paoloGranata from '../static/assets/projectx2026_mentors/paolo_granata.jpg'
import saiTedla from '../static/assets/projectx2026_mentors/sai_tedla.jpg'
import benjaminSanchezLengeling from '../static/assets/projectx2026_mentors/benjamin_sanchez-lengeling.jpg'
import { ProjectXResearchThemeTitle } from './Typography'
import ProjectXTimeline from './ProjectXTimeline'

const cardHoverProps = {
    transition: 'transform 0.2s ease, border-color 0.2s ease',
    _hover: {
        borderColor: '#87a7ff',
        transform: 'translateY(-2px)',
    },
}

export default function ProjectX2026() {
    return (
        <Box fontFamily={'Tabular, sans-serif'}>
            <Box
                bgImage={gradient}
                bgPosition={'50%'}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                minHeight={'80vh'}
                width={'100%'}
                mt={28}
                pt={[10, 58]}
                pl={[4, 16]}
                pr={[4, 16]}
            >
                <VStack
                    alignItems={'left'}
                    spacing={100}
                    pb={'20px'}
                    width={{ base: '90%', xl: '70%' }}
                    margin={'auto'}
                >
                    <Box width={'100%'} color={'light'}>
                        <Text fontSize={['16px', '22px']}>
                            2026 RESEARCH THEME
                        </Text>
                        <ProjectXResearchThemeTitle />
                        <Text width={'75%'}>
                            Projects may explore how AI can address a specific
                            problem or how regulation should guide the pace of
                            AI development. The competition is open to anyone at
                            or below the undergraduate level. Teams must have a
                            faculty advisor from an accredited institution
                            confirmed by{' '}
                            <Text as="span" fontWeight={'bold'}>
                                January 15
                            </Text>
                            .
                        </Text>
                        <Text>Two streams:</Text>
                        <UnorderedList
                            listStyleType={'circle'}
                            spacing={1}
                            mt={3}
                        >
                            <ListItem>
                                <Text>
                                    <Text as="span" fontWeight={'bold'}>
                                        Research Stream:
                                    </Text>{' '}
                                    Teams produce an original AI research paper
                                    (4-10 pages).
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text>
                                    <Text as="span" fontWeight={'bold'}>
                                        Proposal + Pitch Stream:
                                    </Text>{' '}
                                    Teams develop and pitch an AI product,
                                    startup, or policy idea. The deliverable is
                                    a written proposal (3-5 pages) plus a live
                                    pitch.
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>

                    <Box width={'100%'}>
                        <Text
                            w="fit-content"
                            fontWeight={'medium'}
                            fontSize={[30, 40]}
                            color={'light'}
                        >
                            Timeline
                        </Text>
                        <ProjectXTimeline />
                    </Box>

                    <Box width={'100%'}>
                        <Text
                            w="fit-content"
                            fontWeight={'medium'}
                            fontSize={[30, 40]}
                            color={'light'}
                        >
                            Events and Workshops
                        </Text>
                        <Grid
                            templateColumns={{
                                base: 'repeat(1, 1fr)',
                                lg: 'repeat(2, 1fr)',
                            }}
                            autoRows={'1fr'}
                            gap={6}
                            marginTop={9}
                        >
                            <GridItem
                                colSpan={1}
                                bg="#1a223a"
                                borderRadius="14px"
                                border="1px solid #FFFFFF1A"
                                p={6}
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box
                                    bg="rgba(97, 116, 200, 0.3)"
                                    borderRadius="full"
                                    w="56px"
                                    h="56px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mb="24px"
                                >
                                    <Icon
                                        as={LuUserCheck as React.ElementType}
                                        boxSize="28px"
                                        color="#87a7ff"
                                    />
                                </Box>
                                <Text
                                    color="#87a7ff"
                                    fontSize={['16px', '20px']}
                                    fontWeight="normal"
                                    lineHeight="28px"
                                    mb="12px"
                                >
                                    Kickoff and Networking Mixer
                                </Text>
                                <Box>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Date:
                                        </Text>{' '}
                                        November 7, 2026
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Format:
                                        </Text>{' '}
                                        In-Person
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Location:
                                        </Text>{' '}
                                        OISE 2214, University of Toronto
                                    </Text>
                                    <Text fontWeight="bold">Description:</Text>
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}
                                    mb="16px"
                                >
                                    Welcome event for all accepted teams.
                                    Mentors and faculty advisors attended, teams
                                    presented their projects, and teams
                                    connected with potential mentors and
                                    advisors through networking.
                                </Text>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                bg="#1a223a"
                                borderRadius="14px"
                                border="1px solid #FFFFFF1A"
                                p={6}
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box
                                    bg="rgba(97, 116, 200, 0.3)"
                                    borderRadius="full"
                                    w="56px"
                                    h="56px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mb="24px"
                                >
                                    <Icon
                                        as={LuHandshake as React.ElementType}
                                        boxSize="28px"
                                        color="#87a7ff"
                                    />
                                </Box>
                                <Text
                                    color="#87a7ff"
                                    fontSize={['16px', '20px']}
                                    fontWeight="normal"
                                    lineHeight="28px"
                                    mb="12px"
                                >
                                    Virtual Mentorship and Networking Event
                                </Text>
                                <Box>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Date:
                                        </Text>{' '}
                                        November 27, 2026
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Format:
                                        </Text>{' '}
                                        Virtual (Zoom)
                                    </Text>
                                    <Text fontWeight="bold">Description:</Text>
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}

                                    mb="16px"
                                >
                                    Virtual networking event for all teams to
                                    connect with mentors and advisors.
                                </Text>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                bg="#1a223a"
                                borderRadius="14px"
                                border="1px solid #FFFFFF1A"
                                p={6}
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box
                                    bg="rgba(97, 116, 200, 0.3)"
                                    borderRadius="full"
                                    w="56px"
                                    h="56px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mb="24px"
                                >
                                    <Icon
                                        as={LuAtom as React.ElementType}
                                        boxSize="28px"
                                        color="#87a7ff"
                                    />
                                </Box>
                                <Text
                                    color="#87a7ff"
                                    fontSize={['16px', '20px']}
                                    fontWeight="normal"
                                    lineHeight="28px"
                                    mb="12px"
                                >
                                    Research Methods Workshop
                                </Text>
                                <Box>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Date:
                                        </Text>{' '}
                                        December 2026
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Format:
                                        </Text>{' '}
                                        Virtual (Zoom)
                                    </Text>
                                    <Text fontWeight="bold">Description:</Text>
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}

                                    mb="16px"
                                >
                                    Research stream event. A session on how to
                                    conduct and write AI research: literature
                                    reviews, methodology, citations, and
                                    structuring a paper. Recorded and shared
                                    after.
                                </Text>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                bg="#1a223a"
                                borderRadius="14px"
                                border="1px solid #FFFFFF1A"
                                p={6}
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box
                                    bg="rgba(97, 116, 200, 0.3)"
                                    borderRadius="full"
                                    w="56px"
                                    h="56px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mb="24px"
                                >
                                    <Icon
                                        as={LuMicVocal as React.ElementType}
                                        boxSize="28px"
                                        color="#87a7ff"
                                    />
                                </Box>
                                <Text
                                    color="#87a7ff"
                                    fontSize={['16px', '20px']}
                                    fontWeight="normal"
                                    lineHeight="28px"
                                    mb="12px"
                                >
                                    Pitch and Proposal Talk and Q&A
                                </Text>
                                <Box>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Date:
                                        </Text>{' '}
                                        December 2026
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Format:
                                        </Text>{' '}
                                        TBA
                                    </Text>
                                    <Text fontWeight="bold">Description:</Text>
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}

                                    mb="16px"
                                >
                                    Event for Proposal + Pitch Stream primarily.
                                    A session on entrepreneurship in tech and
                                    how to build and deliver a compelling pitch
                                    and written proposal, followed by a Q&A on
                                    proposal structure and what judges look for.
                                </Text>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                bg="#1a223a"
                                borderRadius="14px"
                                border="1px solid #FFFFFF1A"
                                p={6}
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box
                                    bg="rgba(97, 116, 200, 0.3)"
                                    borderRadius="full"
                                    w="56px"
                                    h="56px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mb="24px"
                                >
                                    <Icon
                                        as={LuUsersRound as React.ElementType}
                                        boxSize="28px"
                                        color="#87a7ff"
                                    />
                                </Box>
                                <Text
                                    color="#87a7ff"
                                    fontSize={['16px', '20px']}
                                    fontWeight="normal"
                                    lineHeight="28px"
                                    mb="12px"
                                >
                                    Virtual Office Hours
                                </Text>
                                <Box>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Date:
                                        </Text>{' '}
                                        January 2027
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Format:
                                        </Text>{' '}
                                        Virtual (Zoom)
                                    </Text>
                                    <Text fontWeight="bold">Description:</Text>
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}

                                    mb="16px"
                                >
                                    Open drop-in Zoom session. Teams can ask
                                    questions about their submissions before the
                                    January 15 deadline.
                                </Text>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                bg="#1a223a"
                                borderRadius="14px"
                                border="1px solid #FFFFFF1A"
                                p={6}
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box
                                    bg="rgba(97, 116, 200, 0.3)"
                                    borderRadius="full"
                                    w="56px"
                                    h="56px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mb="24px"
                                >
                                    <Icon
                                        as={LuTrophy as React.ElementType}
                                        boxSize="28px"
                                        color="#87a7ff"
                                    />
                                </Box>
                                <Text
                                    color="#87a7ff"
                                    fontSize={['16px', '20px']}
                                    fontWeight="normal"
                                    lineHeight="28px"
                                    mb="12px"
                                >
                                    ConferenceX
                                </Text>
                                <Box>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Date:
                                        </Text>{' '}
                                        February 2027
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Format:
                                        </Text>{' '}
                                        Live presentations and awards ceremony
                                    </Text>
                                    <Text fontWeight="bold">Description:</Text>
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}

                                    mb="16px"
                                >
                                    Top finalists present their work live before
                                    a panel of judges. All teams may attend
                                    virtually. The winning team from each stream
                                    presents as a 10-minute slide deck.
                                </Text>
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box width={'100%'}>
                        <Text
                            w="fit-content"
                            fontWeight={'medium'}
                            fontSize={[30, 40]}
                            color={'light'}
                        >
                            Judges
                        </Text>
                        <Text color={'light'} mt={5} width={'75%'}>
                            Judges are professors and experts in the field of
                            AI. They review and score all submissions according
                            to the rubric for each stream and attend
                            ConferenceX. 3-5 judges per stream.
                        </Text>
                        <Grid
                            templateColumns={'repeat(1, 1fr)'}
                            autoRows={'1fr'}
                            gap={6}
                            marginTop={6}
                        >
                            <GridItem
                                colSpan={1}
                                border="1px solid transparent"
                                padding={5}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box
                                    display={'flex'}
                                    flexDirection={{
                                        base: 'column',
                                        md: 'row',
                                    }}
                                    gap={5}
                                >
                                    <Box
                                        boxSize={'150px'}
                                        borderRadius={'full'}
                                        overflow={'hidden'}
                                        alignSelf={{
                                            base: 'center',
                                            md: 'flex-start',
                                        }}
                                        border={'3px solid white'}
                                        flexShrink={0}
                                    >
                                        <Image
                                            src={paoloGranata}
                                            boxSize={'100%'}
                                            fit={'cover'}
                                            align={'top'}
                                            transform={'scale(1)'}
                                            alt="Paolo Granata"
                                        />
                                    </Box>
                                    <Box
                                        width={'90%'}
                                        alignSelf={{
                                            base: 'center',
                                            md: 'flex-start',
                                        }}
                                    >
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={{
                                                base: '20px',
                                                md: '20px',
                                            }}
                                            textAlign={{
                                                base: 'center',
                                                md: 'left',
                                            }}
                                        >
                                            Paolo Granata
                                        </Text>
                                        <UnorderedList
                                            listStyleType={'circle'}
                                            spacing={1}
                                            mt={3}
                                            fontSize={{
                                                base: '12px',
                                                md: '15px',
                                            }}
                                        >
                                            <ListItem>
                                                <Text>
                                                    Faculty member in Book and
                                                    Media Studies at St.
                                                    Michael's College,
                                                    University of Toronto
                                                </Text>
                                            </ListItem>
                                            <ListItem>
                                                <Text>
                                                    Affiliated with UofT's
                                                    Schwartz Reisman Institute
                                                    for Technology and Society
                                                    and the School of Cities
                                                </Text>
                                            </ListItem>
                                            <ListItem>
                                                <Text>
                                                    Researches media ethics,
                                                    philosophy of technology,
                                                    semiotics, and digital
                                                    equity
                                                </Text>
                                            </ListItem>
                                            <ListItem>
                                                <Text>
                                                    Founder of UofT's Media
                                                    Ethics Lab, where the
                                                    ethical, political, and
                                                    social sides of digital
                                                    media and new technologies
                                                    are studied
                                                </Text>
                                            </ListItem>
                                        </UnorderedList>
                                    </Box>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box width={'100%'}>
                        <Text
                            w="fit-content"
                            fontWeight={'medium'}
                            fontSize={[30, 40]}
                            color={'light'}
                        >
                            Mentors
                        </Text>
                        <Text color={'light'} mt={5} width={'75%'}>
                            The following mentors attended the{' '}
                            <Text fontWeight={'bold'} display={'inline-block'}>
                                November 7
                            </Text>{' '}
                            kickoff or have confirmed interest in supporting
                            Project X teams. Teams may reach out to mentors for
                            guidance throughout the sprint.
                        </Text>
                        <Grid
                            templateColumns={{
                                base: 'repeat(1, 1fr)',
                                lg: 'repeat(2, 1fr)',
                            }}
                            autoRows={'1fr'}
                            gap={6}
                            marginTop={6}
                        >
                            <GridItem
                                colSpan={1}
                                border="1px solid transparent"
                                padding={5}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box display={'flex'} gap={5}>
                                    <Box
                                        boxSize={'100px'}
                                        borderRadius={'full'}
                                        overflow={'hidden'}
                                        border={'3px solid white'}
                                        flexShrink={0}
                                    >
                                        <Image
                                            src={saiTedla}
                                            boxSize={'100%'}
                                            fit={'cover'}
                                            align={'top'}
                                            transform={'scale(1)'}
                                            alt="Sai Tedla"
                                        />
                                    </Box>
                                    <Box width={'75%'}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={{
                                                base: '15px',
                                                md: '20px',
                                            }}
                                        >
                                            Sai Tedla
                                        </Text>
                                        <Text
                                            mt={2}
                                            fontSize={{
                                                base: '12px',
                                                md: '15px',
                                            }}
                                        >
                                            <Text
                                                fontWeight={'bold'}
                                                display={'inline-block'}
                                            >
                                                Topics:
                                            </Text>{' '}
                                            Computational photography,
                                            generative models, multimodal AI
                                        </Text>
                                    </Box>
                                </Box>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                border="1px solid transparent"
                                padding={5}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box display={'flex'} gap={5}>
                                    <Box
                                        boxSize={'100px'}
                                        borderRadius={'full'}
                                        overflow={'hidden'}
                                        border={'3px solid white'}
                                        flexShrink={0}
                                    >
                                        <Image
                                            src={nickJia}
                                            boxSize={'100%'}
                                            fit={'cover'}
                                            align={'top'}
                                            transform={'scale(1.6)'}
                                            transformOrigin={'52% 35%'}
                                            alt="Nick Jia"
                                        />
                                    </Box>
                                    <Box width={'75%'}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={{
                                                base: '15px',
                                                md: '20px',
                                            }}
                                        >
                                            Nick Jia
                                        </Text>
                                        <Text
                                            mt={2}
                                            fontSize={{
                                                base: '12px',
                                                md: '15px',
                                            }}
                                        >
                                            <Text
                                                fontWeight={'bold'}
                                                display={'inline-block'}
                                            >
                                                Topics:
                                            </Text>{' '}
                                            AI security, governance, agentic
                                            systems
                                        </Text>
                                    </Box>
                                </Box>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                border="1px solid transparent"
                                padding={5}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box display={'flex'} gap={5}>
                                    <Box
                                        boxSize={'100px'}
                                        borderRadius={'full'}
                                        overflow={'hidden'}
                                        border={'3px solid white'}
                                        flexShrink={0}
                                    >
                                        <Image
                                            src={fernandoYanez}
                                            boxSize={'100%'}
                                            fit={'cover'}
                                            align={'top'}
                                            transform={'scale(1.3)'}
                                            transformOrigin={'60% 25%'}
                                            alt="Fernando Yanez"
                                        />
                                    </Box>
                                    <Box width={'75%'}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={{
                                                base: '15px',
                                                md: '20px',
                                            }}
                                        >
                                            Fernando Yanez
                                        </Text>
                                        <Text
                                            mt={2}
                                            fontSize={{
                                                base: '12px',
                                                md: '15px',
                                            }}
                                        >
                                            <Text
                                                fontWeight={'bold'}
                                                display={'inline-block'}
                                            >
                                                Topics:
                                            </Text>{' '}
                                            Intelligent adaptive teaching
                                        </Text>
                                    </Box>
                                </Box>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                border="1px solid transparent"
                                padding={5}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box display={'flex'} gap={5}>
                                    <Box
                                        boxSize={'100px'}
                                        borderRadius={'full'}
                                        overflow={'hidden'}
                                        border={'3px solid white'}
                                        flexShrink={0}
                                    >
                                        <Image
                                            src={helenaWright}
                                            boxSize={'100%'}
                                            fit={'cover'}
                                            align={'top'}
                                            transform={'scale(1.8)'}
                                            transformOrigin={'50% 14%'}
                                            alt="Helena Wright"
                                        />
                                    </Box>
                                    <Box width={'75%'}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={{
                                                base: '15px',
                                                md: '20px',
                                            }}
                                        >
                                            Helena Wright
                                        </Text>
                                        <Text
                                            mt={2}
                                            fontSize={{
                                                base: '12px',
                                                md: '15px',
                                            }}
                                        >
                                            <Text
                                                fontWeight={'bold'}
                                                display={'inline-block'}
                                            >
                                                Topics:
                                            </Text>{' '}
                                            AI and work, digital labour
                                        </Text>
                                    </Box>
                                </Box>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                border="1px solid transparent"
                                padding={5}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box display={'flex'} gap={5}>
                                    <Box
                                        boxSize={'100px'}
                                        borderRadius={'full'}
                                        overflow={'hidden'}
                                        border={'3px solid white'}
                                        flexShrink={0}
                                    >
                                        <Image
                                            src={konradSamsel}
                                            boxSize={'100%'}
                                            fit={'cover'}
                                            align={'top'}
                                            transform={'scale(1.7)'}
                                            transformOrigin={'48% 40%'}
                                            alt="Conrad Samsel"
                                        />
                                    </Box>
                                    <Box width={'75%'}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={{
                                                base: '15px',
                                                md: '20px',
                                            }}
                                        >
                                            Konrad Samsel
                                        </Text>

                                        <Text
                                            mt={2}
                                            fontSize={{
                                                base: '12px',
                                                md: '15px',
                                            }}
                                        >
                                            <Text
                                                fontWeight={'bold'}
                                                display={'inline-block'}
                                            >
                                                Topics:
                                            </Text>{' '}
                                            Clinical AI, health policy
                                        </Text>
                                    </Box>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box width={'100%'}>
                        <Text
                            w="fit-content"
                            fontWeight={'medium'}
                            fontSize={[30, 40]}
                            color={'light'}
                        >
                            Faculty Advisors
                        </Text>
                        <Text color={'light'} mt={5} width={'75%'}>
                            All teams must have a faculty advisor by{' '}
                            <Text as="span" fontWeight={'bold'}>
                                January 15
                            </Text>{' '}
                            who can attest to the credibility of their
                            submission in a short signed note. Faculty advisors
                            connected with teams at the{' '}
                            <Text as="span" fontWeight={'bold'}>
                                November 7
                            </Text>{' '}
                            kickoff.
                        </Text>
                        <Grid
                            templateColumns={{
                                base: 'repeat(1, 1fr)',
                                lg: 'repeat(2, 1fr)',
                            }}
                            autoRows={'1fr'}
                            gap={6}
                            marginTop={6}
                        >
                            <GridItem
                                colSpan={1}
                                border="1px solid transparent"
                                padding={5}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box display={'flex'} gap={5}>
                                    <Box
                                        boxSize={'100px'}
                                        borderRadius={'full'}
                                        overflow={'hidden'}
                                        border={'3px solid white'}
                                        flexShrink={0}
                                    >
                                        <Image
                                            src={evanLight}
                                            boxSize={'100%'}
                                            fit={'cover'}
                                            align={'top'}
                                            transform={'scale(1.9)'}
                                            transformOrigin={'60% 10%'}
                                            alt="Evan Light"
                                        />
                                    </Box>
                                    <Box width={'75%'}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={{
                                                base: '15px',
                                                md: '20px',
                                            }}
                                        >
                                            Evan Light
                                        </Text>
                                        <Text
                                            mt={2}
                                            fontSize={{
                                                base: '12px',
                                                md: '15px',
                                            }}
                                        >
                                            iSchool (Faculty of Information)
                                        </Text>
                                    </Box>
                                </Box>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                border="1px solid transparent"
                                padding={5}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box display={'flex'} gap={5}>
                                    <Box
                                        boxSize={'100px'}
                                        borderRadius={'full'}
                                        overflow={'hidden'}
                                        border={'3px solid white'}
                                        flexShrink={0}
                                    >
                                        <Image
                                            src={veraKhovanskaya}
                                            boxSize={'100%'}
                                            fit={'cover'}
                                            align={'top'}
                                            transform={'scale(1.5)'}
                                            transformOrigin={'60% 25%'}
                                            alt="Vera Khovanskaya"
                                        />
                                    </Box>
                                    <Box width={'75%'}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={{
                                                base: '15px',
                                                md: '20px',
                                            }}
                                        >
                                            Vera Khovanskaya
                                        </Text>
                                        <Text
                                            mt={2}
                                            fontSize={{
                                                base: '12px',
                                                md: '15px',
                                            }}
                                        >
                                            Faculty of Information; Computer
                                            Science; Schwartz Reisman
                                            Institute{' '}
                                        </Text>
                                    </Box>
                                </Box>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                border="1px solid transparent"
                                padding={5}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box display={'flex'} gap={5}>
                                    <Box
                                        boxSize={'100px'}
                                        borderRadius={'full'}
                                        overflow={'hidden'}
                                        border={'3px solid white'}
                                        flexShrink={0}
                                    >
                                        <Image
                                            src={benjaminSanchezLengeling}
                                            boxSize={'100%'}
                                            fit={'cover'}
                                            align={'top'}
                                            transform={'scale(2)'}
                                            transformOrigin={'50% 55%'}
                                            alt="Benjamin Sanchez-Lengeling"
                                        />
                                    </Box>
                                    <Box width={'75%'}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={{
                                                base: '15px',
                                                md: '20px',
                                            }}
                                        >
                                            Benjamin Sanchez-Lengeling
                                        </Text>
                                        <Text
                                            mt={2}
                                            fontSize={{
                                                base: '12px',
                                                md: '15px',
                                            }}
                                        >
                                            Chemical Engineering; Vector
                                            Institute; Acceleration Consortium
                                        </Text>
                                    </Box>
                                </Box>
                            </GridItem>

                            <GridItem
                                colSpan={1}
                                border="1px solid transparent"
                                padding={5}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                color={'light'}
                                {...cardHoverProps}
                            >
                                <Box display={'flex'} gap={5}>
                                    <Box
                                        boxSize={'100px'}
                                        borderRadius={'full'}
                                        overflow={'hidden'}
                                        border={'3px solid white'}
                                        flexShrink={0}
                                    >
                                        <Image
                                            src={sebastianJaimungal}
                                            boxSize={'100%'}
                                            fit={'cover'}
                                            align={'top'}
                                            transform={'scale(1.9)'}
                                            transformOrigin={'50% 14%'}
                                            alt="Sebastian Jaimungal"
                                        />
                                    </Box>
                                    <Box width={'75%'}>
                                        <Text
                                            fontWeight={'medium'}
                                            fontSize={{
                                                base: '15px',
                                                md: '20px',
                                            }}
                                        >
                                            Sebastian Jaimungal
                                        </Text>
                                        <Text
                                            mt={2}
                                            fontSize={{
                                                base: '12px',
                                                md: '15px',
                                            }}
                                        >
                                            Department of Statistical Sciences
                                        </Text>
                                    </Box>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box width={'100%'}>
                        <Text
                            w="fit-content"
                            fontWeight={'medium'}
                            fontSize={[30, 40]}
                            color={'light'}
                        >
                            FAQ
                        </Text>
                        <Accordion allowMultiple marginTop={'6'}>
                            {/* Q1 */}
                            <AccordionItem
                                border="1px solid transparent"
                                mb={3}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                {...cardHoverProps}
                            >
                                <h2>
                                    <AccordionButton
                                        py={3}
                                        px={4}
                                        _hover={{
                                            bg: 'rgba(255,255,255,0.10)',
                                        }}
                                        _expanded={{
                                            bg: 'rgba(255,255,255,0.10)',
                                        }}
                                    >
                                        <Text
                                            flex="1"
                                            textAlign="left"
                                            color="white"
                                            fontSize="14px"
                                            fontWeight={500}
                                        >
                                            What is the theme?
                                        </Text>
                                        <AccordionIcon color="white" />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel
                                    px={4}
                                    pb={4}
                                    pt={2}
                                    color="white"
                                    opacity={0.85}
                                    fontSize="14px"
                                >
                                    “What is Progress?” Teams explore questions
                                    about AI innovation, regulation, and the
                                    speed of progress in society.
                                </AccordionPanel>
                            </AccordionItem>

                            {/* Q2 */}
                            <AccordionItem
                                border="1px solid transparent"
                                mb={3}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                {...cardHoverProps}
                            >
                                <h2>
                                    <AccordionButton py={3} px={4}>
                                        <Text
                                            flex="1"
                                            textAlign="left"
                                            color="white"
                                            fontSize="14px"
                                            fontWeight={500}
                                        >
                                            What are the two streams?
                                        </Text>
                                        <AccordionIcon color="white" />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel
                                    px={4}
                                    pb={4}
                                    pt={2}
                                    color="white"
                                    opacity={0.85}
                                    fontSize="14px"
                                >
                                    The Research Stream produces an original AI
                                    research paper (4-10 pages). The Proposal +
                                    Pitch Stream produces a written proposal
                                    (3-5 pages) and live pitch for an AI
                                    product, startup, or policy idea.
                                </AccordionPanel>
                            </AccordionItem>

                            {/* Q3 */}
                            <AccordionItem
                                border="1px solid transparent"
                                mb={3}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                {...cardHoverProps}
                            >
                                <h2>
                                    <AccordionButton py={3} px={4}>
                                        <Text
                                            flex="1"
                                            textAlign="left"
                                            color="white"
                                            fontSize="14px"
                                            fontWeight={500}
                                        >
                                            Who can participate?
                                        </Text>
                                        <AccordionIcon color="white" />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel
                                    px={4}
                                    pb={4}
                                    pt={2}
                                    color="white"
                                    opacity={0.85}
                                    fontSize="14px"
                                >
                                    Project X is open to anyone at or below the
                                    undergraduate level. International teams are
                                    welcome.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem
                                border="1px solid transparent"
                                mb={3}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                {...cardHoverProps}
                            >
                                <h2>
                                    <AccordionButton py={3} px={4}>
                                        <Text
                                            flex="1"
                                            textAlign="left"
                                            color="white"
                                            fontSize="14px"
                                            fontWeight={500}
                                        >
                                            Do I need a faculty advisor?
                                        </Text>
                                        <AccordionIcon color="white" />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel
                                    px={4}
                                    pb={4}
                                    pt={2}
                                    color="white"
                                    opacity={0.85}
                                    fontSize="14px"
                                >
                                    Yes. All teams must have a faculty advisor
                                    from an accredited institution confirmed by
                                    January 15, 2027.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem
                                border="1px solid transparent"
                                mb={3}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                {...cardHoverProps}
                            >
                                <h2>
                                    <AccordionButton py={3} px={4}>
                                        <Text
                                            flex="1"
                                            textAlign="left"
                                            color="white"
                                            fontSize="14px"
                                            fontWeight={500}
                                        >
                                            What do winners receive?
                                        </Text>
                                        <AccordionIcon color="white" />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel
                                    px={4}
                                    pb={4}
                                    pt={2}
                                    color="white"
                                    opacity={0.85}
                                    fontSize="14px"
                                >
                                    The winning team from each stream presents
                                    at ConferenceX and receives a UofT AI
                                    certificate signed by the judges and UofT AI
                                    executives. All participants receive a UofT
                                    AI certificate signed by UofT AI executives
                                    as a “Project X Finalist Competitor.” Four
                                    honorable mentions per stream receive a UofT
                                    AI certificate signed by the judges and UofT
                                    AI executives. Teams unable to attend
                                    ConferenceX in person due to distance or
                                    financial constraints will be facilitated
                                    with virtual attendance.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem
                                border="1px solid transparent"
                                mb={3}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                {...cardHoverProps}
                            >
                                <h2>
                                    <AccordionButton py={3} px={4}>
                                        <Text
                                            flex="1"
                                            textAlign="left"
                                            color="white"
                                            fontSize="14px"
                                            fontWeight={500}
                                        >
                                            What is ConferenceX?
                                        </Text>
                                        <AccordionIcon color="white" />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel
                                    px={4}
                                    pb={4}
                                    pt={2}
                                    color="white"
                                    opacity={0.85}
                                    fontSize="14px"
                                >
                                    ConferenceX is UofT AI’s end-of-sprint
                                    showcase event where top finalists from each
                                    stream present their work live. Date and
                                    location to be confirmed.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem
                                border="1px solid transparent"
                                mb={3}
                                borderRadius="lg"
                                overflow="hidden"
                                bg="rgba(255,255,255,0.08)"
                                boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                                {...cardHoverProps}
                            >
                                <h2>
                                    <AccordionButton py={3} px={4}>
                                        <Text
                                            flex="1"
                                            textAlign="left"
                                            color="white"
                                            fontSize="14px"
                                            fontWeight={500}
                                        >
                                            I already applied. Where do I submit
                                            my work?
                                        </Text>
                                        <AccordionIcon color="white" />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel
                                    px={4}
                                    pb={4}
                                    pt={2}
                                    color="white"
                                    opacity={0.85}
                                    fontSize="14px"
                                >
                                    Submissions are due January 15, 2027 through
                                    the application form. Research Stream teams
                                    submit one PDF of their paper and one PDF of
                                    the faculty advisor note. Proposal + Pitch
                                    Stream teams submit one PDF of their written
                                    proposal and one PDF of the faculty advisor
                                    note.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>

                    <Box width={'100%'}>
                        <Text
                            fontWeight={'medium'}
                            fontSize={[30, 40]}
                            color={'light'}
                            m={'20px 0px'}
                        >
                            Have Questions?
                        </Text>
                        <Text color={'light'}>
                            Contact{' '}
                            <Text as="span" color={'#a2d2ff'}>
                                <a href="mailto:uoftaigroup@gmail.com">
                                    projectxuoft@gmail.com
                                </a>
                            </Text>
                            . We will make our best to accommodate!
                        </Text>
                    </Box>
                    <Box></Box>
                </VStack>
            </Box>
        </Box>
    )
}
