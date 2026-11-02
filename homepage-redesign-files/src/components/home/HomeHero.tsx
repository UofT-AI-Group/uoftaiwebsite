import {
    Box,
    Heading,
    HStack,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import { ButtonDark, ButtonOutline } from '../Button'
import conferenceCrowd from '../../static/assets/conf-2026-assets/showcase.webp'
import { SectionContainer, SocialIcons } from './shared'
import { BODY_FONT, HEADING_FONT, HOME_COLORS, offsetFrame } from './tokens'

const HomeHero = () => (
    <Box
        as={'section'}
        bg={'linear-gradient(180deg, #FFFFFF 0%, #F6F0FC 100%)'}
        borderBottom={'1px solid #E6E3EC'}
        pt={{ base: '152px', md: '176px' }}
        pb={{ base: 14, md: 20 }}
    >
        <SectionContainer>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 12, lg: 16 }}
                alignItems={'center'}
            >
                <Stack spacing={6}>
                    <Heading
                        as={'h1'}
                        fontFamily={HEADING_FONT}
                        fontWeight={700}
                        fontSize={{ base: '34px', md: '46px', xl: '54px' }}
                        lineHeight={1.1}
                        letterSpacing={'-0.03em'}
                        color={HOME_COLORS.ink}
                    >
                        <Text as={'span'} color={HOME_COLORS.accent}>
                            UofT AI:
                        </Text>{' '}
                        Advancing AI at the University of Toronto.
                    </Heading>
                    <Text
                        fontFamily={BODY_FONT}
                        fontSize={{ base: '17px', md: '19px' }}
                        color={HOME_COLORS.body}
                        maxW={'540px'}
                    >
                        Shaping the future of artificial intelligence through
                        educational programs, competitions, guest lectures, and
                        conferences.
                    </Text>
                    <HStack spacing={3} wrap={'wrap'}>
                        <ButtonDark as={RouterLink} to="/newsletter">
                            Read our Newsletter
                        </ButtonDark>
                        <ButtonOutline as={'a'} href="#programs">
                            See our programs
                        </ButtonOutline>
                    </HStack>
                    <HStack spacing={3} wrap={'wrap'}>
                        <Text
                            fontFamily={BODY_FONT}
                            fontSize={'14px'}
                            color={HOME_COLORS.muted}
                        >
                            Follow us
                        </Text>
                        <SocialIcons />
                    </HStack>
                </Stack>
                <Image
                    src={conferenceCrowd}
                    alt="A full lecture hall during a panel at the UofT AI Conference"
                    w={'100%'}
                    aspectRatio={4 / 3}
                    objectFit={'cover'}
                    borderRadius={'4px'}
                    {...offsetFrame(HOME_COLORS.ink)}
                />
            </SimpleGrid>
        </SectionContainer>
    </Box>
)

export default HomeHero
