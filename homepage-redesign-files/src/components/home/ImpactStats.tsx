import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { SectionContainer, SectionTitle } from './shared'
import { BODY_FONT, HEADING_FONT, HOME_COLORS } from './tokens'

const STATS = [
    { value: '500+', label: 'attendees at the UofT AI Conference' },
    { value: '$40k', label: 'in ProjectX prize money' },
    { value: '40+', label: 'universities competing in ProjectX' },
    { value: '200+', label: 'ProjectX participants' },
    { value: '8', label: 'startup showcases at the conference' },
]

const ImpactStats = () => (
    <Box
        as={'section'}
        aria-label={'Our numbers'}
        bg={HOME_COLORS.ink}
        color={'white'}
        py={{ base: 14, md: 16 }}
    >
        <SectionContainer>
            <Stack spacing={8}>
                <SectionTitle>Our numbers</SectionTitle>
                <SimpleGrid minChildWidth={'180px'} spacing={4}>
                    {STATS.map(({ value, label }) => (
                        <Stack
                            key={label}
                            spacing={1.5}
                            bg={HOME_COLORS.darkCard}
                            border={`1px solid ${HOME_COLORS.darkBorder}`}
                            borderRadius={'14px'}
                            p={6}
                        >
                            <Text
                                fontFamily={HEADING_FONT}
                                fontWeight={700}
                                fontSize={{ base: '40px', md: '48px' }}
                                lineHeight={1}
                                color={HOME_COLORS.accentOnDark}
                            >
                                {value}
                            </Text>
                            <Text
                                fontFamily={BODY_FONT}
                                fontSize={'15px'}
                                color={HOME_COLORS.textOnDark}
                            >
                                {label}
                            </Text>
                        </Stack>
                    ))}
                </SimpleGrid>
            </Stack>
        </SectionContainer>
    </Box>
)

export default ImpactStats
