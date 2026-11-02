import {
    Box,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import projectx from '../../static/assets/projectx.webp'
import conferencex from '../../static/assets/conferencex.webp'
import learnai from '../../static/assets/learnai.webp'
import { SectionContainer, SectionTitle } from './shared'
import { BODY_FONT, HEADING_FONT, HOME_COLORS } from './tokens'

const PROGRAMS = [
    {
        title: 'ProjectX',
        description:
            'The largest undergraduate ML competition in North America. 200+ participants, $40k in prize money, 40+ participating universities all across the world.',
        image: projectx,
        alt: 'A speaker presenting on stage at ProjectX',
        to: '/projectx',
    },
    {
        title: 'The UofT AI Conference',
        description:
            'A space where humanity meets technology through discussions, collective learning and relationship-building. 500+ attendees, 8 startup showcases and key sponsors including BMO, KPMG, Vector Institute and Ripple Ventures.',
        image: conferencex,
        alt: 'Three panelists in conversation on stage at the UofT AI Conference',
        to: '/conferencex',
    },
    {
        title: 'Learn AI',
        description:
            'A 4-month course that bridges the gap between theoretical knowledge and practical application in AI technologies.',
        image: learnai,
        alt: 'A speaker at a podium during a Learn AI session',
        to: '/learnai',
    },
]

const ProgramsSection = () => (
    <Box
        as={'section'}
        id={'programs'}
        bg={HOME_COLORS.ink}
        color={'white'}
        py={{ base: 16, md: 20 }}
    >
        <SectionContainer>
            <Stack spacing={8}>
                <SectionTitle>Our programs</SectionTitle>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                    {PROGRAMS.map((program) => (
                        <Stack
                            key={program.title}
                            as={'article'}
                            spacing={0}
                            bg={HOME_COLORS.darkCard}
                            border={`1px solid ${HOME_COLORS.darkBorder}`}
                            borderRadius={'14px'}
                            overflow={'hidden'}
                        >
                            <Image
                                src={program.image}
                                alt={program.alt}
                                w={'100%'}
                                aspectRatio={16 / 9}
                                objectFit={'cover'}
                                objectPosition={'center 30%'}
                            />
                            <Stack spacing={3} p={6} flex={1}>
                                <Heading
                                    as={'h3'}
                                    fontFamily={HEADING_FONT}
                                    fontWeight={700}
                                    fontSize={'26px'}
                                    lineHeight={1.2}
                                    letterSpacing={'-0.02em'}
                                >
                                    {program.title}
                                </Heading>
                                <Text
                                    fontFamily={BODY_FONT}
                                    fontSize={'17px'}
                                    color={HOME_COLORS.textOnDark}
                                >
                                    {program.description}
                                </Text>
                                <Link
                                    as={RouterLink}
                                    to={program.to}
                                    mt={'auto'}
                                    pt={2}
                                    fontFamily={BODY_FONT}
                                    fontWeight={600}
                                    color={HOME_COLORS.accentOnDark}
                                    _hover={{ color: 'white' }}
                                >
                                    Learn more →
                                </Link>
                            </Stack>
                        </Stack>
                    ))}
                </SimpleGrid>
            </Stack>
        </SectionContainer>
    </Box>
)

export default ProgramsSection
