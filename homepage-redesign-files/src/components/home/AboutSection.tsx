import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import whoWeAre from '../../static/assets/who-we-are.webp'
import ourMission from '../../static/assets/our-mission.webp'
import { SectionContainer, SectionTitle } from './shared'
import { BODY_FONT, HOME_COLORS, offsetFrame } from './tokens'

const UnderlinedTitle = ({ children }: { children: ReactNode }) => (
    <SectionTitle>
        <Text
            as={'span'}
            textDecoration={'underline'}
            textDecorationColor={HOME_COLORS.accent}
            textDecorationThickness={'6px'}
            textUnderlineOffset={'10px'}
        >
            {children}
        </Text>
    </SectionTitle>
)

const Paragraph = ({ children }: { children: ReactNode }) => (
    <Text
        fontFamily={BODY_FONT}
        fontSize={{ base: '17px', md: '18px' }}
        lineHeight={1.65}
        color={HOME_COLORS.inkSoft}
    >
        {children}
    </Text>
)

const Row = ({
    image,
    reverse,
    children,
}: {
    image: ReactNode
    reverse?: boolean
    children: ReactNode
}) => (
    <Flex
        direction={{ base: 'column', lg: reverse ? 'row-reverse' : 'row' }}
        align={'center'}
        gap={{ base: 10, lg: 16 }}
    >
        <Box flex={'1 1 0'} w={'100%'} minW={0}>
            {image}
        </Box>
        <Stack flex={'1 1 0'} spacing={5}>
            {children}
        </Stack>
    </Flex>
)

const AboutSection = () => (
    <Box
        as={'section'}
        id={'about'}
        overflow={'hidden'}
        bgColor={HOME_COLORS.lavender}
        bgImage={`linear-gradient(${HOME_COLORS.lavenderLine} 1px, transparent 1px), linear-gradient(90deg, ${HOME_COLORS.lavenderLine} 1px, transparent 1px)`}
        bgSize={'36px 36px'}
        borderTop={`2px solid ${HOME_COLORS.ink}`}
        borderBottom={`2px solid ${HOME_COLORS.ink}`}
        py={{ base: 16, md: 20 }}
    >
        <SectionContainer>
            <Stack spacing={{ base: 16, md: 24 }}>
                <Row
                    image={
                        <Image
                            src={whoWeAre}
                            alt="UofT AI members posing together as a group at a club event"
                            w={'100%'}
                            aspectRatio={3 / 2}
                            objectFit={'cover'}
                            borderRadius={'4px'}
                            {...offsetFrame(HOME_COLORS.accent)}
                        />
                    }
                >
                    <UnderlinedTitle>Who we are</UnderlinedTitle>
                    <Paragraph>
                        The University of Toronto Artificial Intelligence Club
                        (UofT AI Club) is an incubator of talent at the
                        University of Toronto, dedicated to fostering the next
                        generation of AI enthusiasts.
                    </Paragraph>
                    <Paragraph>
                        Beyond hosting conferences and hackathons, we provide a
                        collaborative environment where students can learn,
                        network, and work on AI projects with industry
                        professionals.
                    </Paragraph>
                </Row>
                <Row
                    reverse
                    image={
                        <Image
                            src={ourMission}
                            alt="Students talking with a guest at a UofT AI event"
                            w={'100%'}
                            aspectRatio={3 / 2}
                            objectFit={'cover'}
                            borderRadius={'4px'}
                            {...offsetFrame(HOME_COLORS.ink, -12, 12)}
                        />
                    }
                >
                    <UnderlinedTitle>Our mission</UnderlinedTitle>
                    <Paragraph>
                        Our mission is to empower passionate undergraduates by
                        offering resources, opportunities, and a community where
                        they can explore specific AI interests, collaborate with
                        like-minded peers, and potentially discover co-founders
                        for future ventures.
                    </Paragraph>
                </Row>
            </Stack>
        </SectionContainer>
    </Box>
)

export default AboutSection
