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
    Link,
} from '@chakra-ui/react'
import {
    LuTrophy,
    LuAtom,
    LuUserCheck,
    LuHandshake,
    LuMicVocal,
    LuUsersRound,
} from 'react-icons/lu'
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

const faqButtonProps = {
    _hover: { bg: 'rgba(255,255,255,0.10)' },
    _expanded: { bg: 'rgba(255,255,255,0.10)' },
}

const PAGE_GRADIENT = [
    'radial-gradient(ellipse 65% 30% at 85% 6%, rgba(52, 108, 198, 0.38), transparent 68%)',
    'radial-gradient(ellipse 55% 26% at 12% 24%, rgba(28, 96, 156, 0.32), transparent 65%)',
    'radial-gradient(ellipse 60% 28% at 88% 48%, rgba(40, 86, 168, 0.34), transparent 68%)',
    'radial-gradient(ellipse 58% 26% at 14% 74%, rgba(26, 84, 148, 0.32), transparent 66%)',
    'radial-gradient(ellipse 65% 25% at 82% 94%, rgba(44, 92, 174, 0.30), transparent 70%)',
    'linear-gradient(180deg, #0b1933 0%, #11264c 22%, #0d1f40 48%, #142c57 74%, #09152b 100%)',
].join(', ')

const GRAIN_TEXTURE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

export default function ProjectX2026() {
    return (
        <Box fontFamily={'Tabular, sans-serif'}>
            <Box
                position={'relative'}
                isolation={'isolate'}
                bgColor={'#11264c'}
                bgImage={PAGE_GRADIENT}
                minHeight={'80vh'}
                width={'100%'}
                mt={28}
                pt={[10, 58]}
                pl={[4, 16]}
                pr={[4, 16]}
                _before={{
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    bgImage: GRAIN_TEXTURE,
                    bgRepeat: 'repeat',
                    bgSize: '200px 200px',
                    opacity: 1,
                    mixBlendMode: 'overlay',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            >
                <VStack
                    position={'relative'}
                    zIndex={1}
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
                            Project X is UofT AI’s undergraduate AI research
                            competition. Over four months, teams research and
                            present original work on AI innovation, regulation,
                            and the speed of progress. It’s open to anyone at or
                            below the undergraduate level, and every team needs
                            a faculty advisor from an accredited institution by{' '}
                            <Text as="span" fontWeight={'bold'}>
                                January 15
                            </Text>
                            .
                        </Text>
                        <Text mt={4}>Teams compete in one of two streams:</Text>
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
                                    an original AI research paper (4-10 pages).
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text>
                                    <Text as="span" fontWeight={'bold'}>
                                        Proposal + Pitch Stream:
                                    </Text>{' '}
                                    a written proposal (3-5 pages) and a live
                                    pitch for an AI product, startup, or policy
                                    idea.
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
                                        In person
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Location:
                                        </Text>{' '}
                                        OISE 2214, University of Toronto
                                    </Text>
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}
                                    mt="12px"
                                    mb="16px"
                                >
                                    The welcome event for accepted teams. Teams
                                    presented their projects and met mentors and
                                    faculty advisors.
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
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}
                                    mt="12px"
                                    mb="16px"
                                >
                                    Another chance for every team to meet
                                    mentors and advisors, this time online.
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
                                        December 2026 (date TBA)
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Format:
                                        </Text>{' '}
                                        Virtual (Zoom)
                                    </Text>
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}
                                    mt="12px"
                                    mb="16px"
                                >
                                    How to conduct and write AI research,
                                    covering literature reviews, methodology,
                                    citations, and paper structure. Built for
                                    the Research Stream but open to every team,
                                    and recorded for anyone who can’t attend.
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
                                        December 2026 (date TBA)
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Format:
                                        </Text>{' '}
                                        TBA
                                    </Text>
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}
                                    mt="12px"
                                    mb="16px"
                                >
                                    A talk on entrepreneurship in tech and on
                                    building a strong pitch and written
                                    proposal, followed by a Q&A on proposal
                                    structure and what judges look for. Aimed at
                                    the Proposal + Pitch Stream, and Research
                                    Stream teams are welcome.
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
                                        January 2027 (date TBA)
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Format:
                                        </Text>{' '}
                                        Virtual (Zoom)
                                    </Text>
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}
                                    mt="12px"
                                    mb="16px"
                                >
                                    A drop-in session where teams from both
                                    streams can ask questions about their
                                    submissions before the January 15 deadline.
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
                                        February 2027 (date TBA)
                                    </Text>
                                    <Text>
                                        <Text as="span" fontWeight="bold">
                                            Format:
                                        </Text>{' '}
                                        Live presentations and awards ceremony
                                    </Text>
                                </Box>
                                <Text
                                    color="#FFFFFFB2"
                                    fontSize={['14px', '16px']}
                                    lineHeight="26px"
                                    letterSpacing="-0.31px"
                                    opacity={0.9}
                                    mt="12px"
                                    mb="16px"
                                >
                                    Finalists present their work live to the
                                    judges, and the winning team from each
                                    stream gives a 10-minute slide presentation.
                                    Every team can attend virtually.
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
                            Each stream will have three to five judges, all
                            professors or AI experts. They score every
                            submission against that stream’s rubric and attend
                            ConferenceX.
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
                                        <Text
                                            mt={3}
                                            fontSize={{
                                                base: '12px',
                                                md: '15px',
                                            }}
                                        >
                                            Paolo Granata is a faculty member of
                                            Book and Media Studies at St.
                                            Michael’s College, University of
                                            Toronto, where he also holds
                                            affiliations with the Schwartz
                                            Reisman Institute for Technology and
                                            Society and the School of Cities. An
                                            award-winning educator and
                                            cross-disciplinary media scholar,
                                            his research spans media ethics,
                                            philosophy of technology, semiotics,
                                            and digital equity. In 2019 he
                                            founded the Media Ethics Lab at
                                            UofT, a research hub dedicated to
                                            examining the ethical, political,
                                            and societal dimensions of digital
                                            media and emerging technologies. He
                                            is a Marshall McLuhan Centenary
                                            Fellow, a Senior Fellow at Massey
                                            College, and has held visiting
                                            professorships at institutions
                                            across Italy, Brazil, and China. His
                                            work as a cultural strategist
                                            contributed to Toronto’s designation
                                            as a UNESCO Creative City in 2017.
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
                            Mentors
                        </Text>
                        <Text color={'light'} mt={5} width={'75%'}>
                            These mentors attended the{' '}
                            <Text as="span" fontWeight={'bold'}>
                                November 7
                            </Text>{' '}
                            kickoff or have offered to support Project X teams.
                            Teams can contact them for guidance at any point in
                            the sprint.
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
                                            <Text as="span" fontWeight={'bold'}>
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
                                            <Text as="span" fontWeight={'bold'}>
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
                                            <Text as="span" fontWeight={'bold'}>
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
                                            <Text as="span" fontWeight={'bold'}>
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
                                            alt="Konrad Samsel"
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
                                            <Text as="span" fontWeight={'bold'}>
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
                            Every team needs a faculty advisor by{' '}
                            <Text as="span" fontWeight={'bold'}>
                                January 15
                            </Text>{' '}
                            to vouch for its submission in a short signed note.
                            Advisors met teams at the{' '}
                            <Text as="span" fontWeight={'bold'}>
                                November 7
                            </Text>{' '}
                            kickoff, and the faculty members below have offered
                            to advise Project X teams.
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
                                        {...faqButtonProps}
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
                                        {...faqButtonProps}
                                    >
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
                                        {...faqButtonProps}
                                    >
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
                                    <AccordionButton
                                        py={3}
                                        px={4}
                                        {...faqButtonProps}
                                    >
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
                                    <AccordionButton
                                        py={3}
                                        px={4}
                                        {...faqButtonProps}
                                    >
                                        <Text
                                            flex="1"
                                            textAlign="left"
                                            color="white"
                                            fontSize="14px"
                                            fontWeight={500}
                                        >
                                            What recognition do teams receive?
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
                                    <UnorderedList spacing={1}>
                                        <ListItem>
                                            <Text as="span" fontWeight="bold">
                                                Winners
                                            </Text>{' '}
                                            (one team per stream) present at
                                            ConferenceX and receive a
                                            certificate signed by the judges and
                                            UofT AI executives.
                                        </ListItem>
                                        <ListItem>
                                            <Text as="span" fontWeight="bold">
                                                Honourable mentions
                                            </Text>{' '}
                                            (four per stream) receive a
                                            certificate signed by the judges and
                                            UofT AI executives.
                                        </ListItem>
                                        <ListItem>
                                            <Text as="span" fontWeight="bold">
                                                Every participant
                                            </Text>{' '}
                                            receives a “Project X Finalist
                                            Competitor” certificate signed by
                                            UofT AI executives.
                                        </ListItem>
                                    </UnorderedList>
                                    <Text mt={2}>
                                        Teams that can’t attend ConferenceX in
                                        person because of distance or cost can
                                        join virtually.
                                    </Text>
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
                                    <AccordionButton
                                        py={3}
                                        px={4}
                                        {...faqButtonProps}
                                    >
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
                                    It’s UofT AI’s showcase at the end of the
                                    sprint, where finalists from each stream
                                    present their work live. It takes place in
                                    February 2027, with the exact date and
                                    location TBA.
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
                                    <AccordionButton
                                        py={3}
                                        px={4}
                                        {...faqButtonProps}
                                    >
                                        <Text
                                            flex="1"
                                            textAlign="left"
                                            color="white"
                                            fontSize="14px"
                                            fontWeight={500}
                                        >
                                            Where can I find the competition
                                            guidelines?
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
                                    The{' '}
                                    <Link
                                        href="https://docs.google.com/document/d/1xiWhXU9ofkp9TH71-RpKnl-ZcfvX4405wvNZdgxzFpw/edit?tab=t.0"
                                        isExternal
                                        textDecoration="underline"
                                        color="#a2d2ff"
                                    >
                                        participant guidelines
                                    </Link>{' '}
                                    cover both streams.
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
                                    <AccordionButton
                                        py={3}
                                        px={4}
                                        {...faqButtonProps}
                                    >
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
                                    Submit through the{' '}
                                    <Link
                                        href="https://forms.gle/J99tMADBSikDDf9E6"
                                        isExternal
                                        textDecoration="underline"
                                        color="#a2d2ff"
                                    >
                                        application form
                                    </Link>{' '}
                                    by January 15, 2027. Every team uploads two
                                    PDFs: the faculty advisor’s note, plus the
                                    research paper (Research Stream) or written
                                    proposal (Proposal + Pitch Stream).
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
                            Email us at{' '}
                            <Text as="span" color={'#a2d2ff'}>
                                <a href="mailto:projectxuoft@gmail.com">
                                    projectxuoft@gmail.com
                                </a>
                            </Text>
                            .
                        </Text>
                    </Box>
                    <Box></Box>
                </VStack>
            </Box>
        </Box>
    )
}
