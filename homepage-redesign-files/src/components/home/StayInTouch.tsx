import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import { ButtonDark } from '../Button'
import { NEWSLETTER_URL } from '../../data/socials'
import { SectionContainer, SectionTitle } from './shared'
import { BODY_FONT, HOME_COLORS, offsetFrame } from './tokens'

const StayInTouch = () => (
    <Box
        as={'section'}
        aria-label={'Stay in touch'}
        bg={'white'}
        borderTop={`2px solid ${HOME_COLORS.ink}`}
        py={{ base: 16, md: 24 }}
        fontFamily={BODY_FONT}
    >
        <SectionContainer>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'flex-start', md: 'center' }}
                justify={'space-between'}
                gap={{ base: 8, md: 12 }}
                bg={HOME_COLORS.lavenderPanel}
                borderRadius={'6px'}
                px={{ base: 7, md: 10 }}
                py={{ base: 9, md: 12 }}
                mr={3}
                {...offsetFrame(HOME_COLORS.ink)}
            >
                <Stack spacing={3.5} maxW={'560px'}>
                    <SectionTitle color={HOME_COLORS.ink}>
                        See you at the next event.
                    </SectionTitle>
                    <Text
                        fontSize={{ base: '17px', md: '18px' }}
                        color={HOME_COLORS.body}
                    >
                        Get the newsletter to hear about upcoming events,
                        ProjectX and the UofT AI Conference.
                    </Text>
                </Stack>
                <Stack spacing={3} flexShrink={0}>
                    <Box>
                        <ButtonDark
                            as={'a'}
                            href={NEWSLETTER_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Subscribe on Substack
                        </ButtonDark>
                    </Box>
                    <Text fontSize={'15px'} color={HOME_COLORS.body}>
                        Representing a company?{' '}
                        <Link
                            as={RouterLink}
                            to="/partner-with-us"
                            fontWeight={600}
                            color={HOME_COLORS.ink}
                            textDecoration={'underline'}
                        >
                            Partner with us
                        </Link>
                    </Text>
                </Stack>
            </Flex>
        </SectionContainer>
    </Box>
)

export default StayInTouch
