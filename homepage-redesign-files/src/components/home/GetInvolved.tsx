import {
    Box,
    Heading,
    HStack,
    ListItem,
    SimpleGrid,
    Stack,
    Text,
    UnorderedList,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { Link as RouterLink } from 'react-router'
import { ButtonDark, ButtonOutline } from '../Button'
import { INSTAGRAM_URL, PARTNERSHIPS_EMAIL } from '../../data/socials'
import { SectionContainer, SectionTitle } from './shared'
import { BODY_FONT, HEADING_FONT, HOME_COLORS, offsetFrame } from './tokens'

const Panel = ({
    title,
    intro,
    items,
    actions,
    dark,
}: {
    title: string
    intro: string
    items: ReactNode[]
    actions: ReactNode
    dark?: boolean
}) => (
    <Stack
        spacing={5}
        bg={dark ? HOME_COLORS.ink : 'white'}
        color={dark ? 'white' : HOME_COLORS.ink}
        borderRadius={'6px'}
        p={{ base: 7, md: 9 }}
        {...offsetFrame(dark ? HOME_COLORS.accentOnDark : HOME_COLORS.accent)}
    >
        <Heading
            as={'h3'}
            fontFamily={HEADING_FONT}
            fontWeight={700}
            fontSize={'26px'}
            lineHeight={1.2}
            letterSpacing={'-0.02em'}
        >
            {title}
        </Heading>
        <Text
            fontFamily={BODY_FONT}
            fontSize={'17px'}
            color={dark ? HOME_COLORS.textOnDark : HOME_COLORS.body}
        >
            {intro}
        </Text>
        <UnorderedList
            spacing={2.5}
            pl={1}
            fontFamily={BODY_FONT}
            fontSize={'17px'}
            lineHeight={1.5}
            color={dark ? '#EDEAF2' : HOME_COLORS.inkSoft}
        >
            {items.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
            ))}
        </UnorderedList>
        <HStack spacing={3} wrap={'wrap'} mt={'auto'} pt={2}>
            {actions}
        </HStack>
    </Stack>
)

const GetInvolved = () => (
    <Box as={'section'} id={'get-involved'} py={{ base: 16, md: 24 }}>
        <SectionContainer>
            <Stack spacing={10}>
                <SectionTitle>Why get involved?</SectionTitle>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacingX={10}
                    spacingY={12}
                    pr={3}
                >
                    <Panel
                        title={'For students'}
                        intro={
                            "There's more than one way to be part of UofT AI. You can:"
                        }
                        items={[
                            <>
                                Take <strong>Learn AI</strong>, our 4-month
                                course on putting AI into practice
                            </>,
                            <>
                                Compete in <strong>ProjectX</strong>, with $40k
                                in prizes
                            </>,
                            <>
                                Come to the <strong>UofT AI Conference</strong>{' '}
                                and meet people working in AI
                            </>,
                            'Find other students to build projects with',
                        ]}
                        actions={
                            <>
                                <ButtonDark as={RouterLink} to="/newsletter">
                                    Sign up for the newsletter
                                </ButtonDark>
                                <ButtonOutline
                                    as={'a'}
                                    href={INSTAGRAM_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Follow us on Instagram
                                </ButtonOutline>
                            </>
                        }
                    />
                    <Panel
                        dark
                        title={'For sponsors'}
                        intro={
                            'Sponsor our events and meet students who are serious about AI.'
                        }
                        items={[
                            '500+ attendees at the UofT AI Conference',
                            '200+ ProjectX competitors from 40+ universities',
                            'Past sponsors include BMO, KPMG, Vector Institute and Ripple Ventures',
                        ]}
                        actions={
                            <>
                                <ButtonOutline
                                    as={RouterLink}
                                    to="/partner-with-us"
                                    variant="light"
                                >
                                    Partner with us
                                </ButtonOutline>
                                <ButtonOutline
                                    as={'a'}
                                    href={`mailto:${PARTNERSHIPS_EMAIL}`}
                                    variant="light"
                                >
                                    Email us
                                </ButtonOutline>
                            </>
                        }
                    />
                </SimpleGrid>
            </Stack>
        </SectionContainer>
    </Box>
)

export default GetInvolved
