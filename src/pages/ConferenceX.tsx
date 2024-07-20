import {
    Box,
    Container,
    VStack,
    Text,
    Flex,
    Card,
    Image,
    SimpleGrid,
} from '@chakra-ui/react'
import gradient from '../static/assets/outreach-gradient.jpeg'
import { ConferenceXTitle } from '../components/Typography'
import { ButtonOutline } from '../components/Button'
import logo from '../static/assets/UofTAI_Logo_bw.png'

const ConferenceX = () => {
    return (
        <Box fontFamily={'Tabular, sans-serif'} minH={'200vh'}>
            <Box
                bgImage={gradient}
                bgPosition={'50%'}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                height={'80vh'}
                width={'100%'}
                mt={28}
                pt={64}
            >
                <VStack alignItems={'center'} spacing={5}>
                    <ConferenceXTitle />
                    <Text
                        fontWeight={'regular'}
                        fontSize={[14, 18]}
                        color={'light'}
                    >
                        Where technology meets humanity
                    </Text>
                    <Box>
                        <ButtonOutline variant="light">
                            View the Agenda
                        </ButtonOutline>
                    </Box>
                </VStack>
            </Box>
            <Box
                backgroundColor={'dark'}
                pt={20}
                pb={20}
                pl={20}
                pr={20}
                position={'relative'}
            >
                <Image
                    src={logo}
                    position={'absolute'}
                    h={'310px'}
                    top={'55%'}
                    left={'80%'}
                    zIndex={0}
                />
                <Text
                    color={'light'}
                    fontSize={'40px'}
                    zIndex={100}
                    position={'relative'}
                >
                    Conference Mission
                </Text>
                <Text
                    color={'light'}
                    fontSize={'24px'}
                    maxW={'600px'}
                    w={'100%'}
                    pt={8}
                    zIndex={100}
                    position={'relative'}
                >
                    We're breaking down barriers to ensure every idea has the
                    chance to spark the next AI breakthrough. Our goal is simple
                    yet ambitious: to forge a future with AI that's as
                    inclusive, ethical, and forward-thinking as the community
                    shaping it.
                </Text>
            </Box>
            <Box
                bgColor={'#051A42'}
                p={'70px'}
                position={'relative'}
                zIndex={10}
            >
                <Text fontSize={'24px'} color={'light'}>
                    Upcoming Speakers
                </Text>

                <VStack alignItems={'center'} spacing={12} mt={'60px'}>
                    <Flex
                        justifyContent={'center'}
                        alignItems={'top'}
                        flexWrap={'wrap'}
                    >
                        <Image src={logo} h={'200px'} />
                        <Box
                            maxW={'1000px'}
                            minW={'300px'}
                            ml={'40px'}
                            w={'80%'}
                        >
                            <Text color={'light'} fontSize={'24px'}>
                                Geoffrey Hinton
                            </Text>
                            <Text color={'light'} fontSize={'18px'}>
                                Geoffrey Hinton, the “Godfather of AI” has
                                profoundly shaped the field of deep learning
                                through his groundbreaking neural network
                                research at the University of Toronto. As a
                                panelist at the UofT AI Conference X 2024,
                                Hinton discussed the future of AI, ethical
                                considerations, and societal impacts, drawing on
                                his decades of expertise and the transformative
                                potential of advanced AI technologies. His
                                contributions, recognized with the Turing Award
                                in 2018, continue to influence the development
                                and application of AI worldwide.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        justifyContent={'center'}
                        alignItems={'top'}
                        flexWrap={'wrap'}
                    >
                        <Image src={logo} h={'200px'} />
                        <Box
                            maxW={'1000px'}
                            minW={'300px'}
                            ml={'40px'}
                            w={'80%'}
                        >
                            <Text color={'light'} fontSize={'24px'}>
                                Geoffrey Hinton
                            </Text>
                            <Text color={'light'} fontSize={'18px'}>
                                Geoffrey Hinton, the “Godfather of AI” has
                                profoundly shaped the field of deep learning
                                through his groundbreaking neural network
                                research at the University of Toronto. As a
                                panelist at the UofT AI Conference X 2024,
                                Hinton discussed the future of AI, ethical
                                considerations, and societal impacts, drawing on
                                his decades of expertise and the transformative
                                potential of advanced AI technologies. His
                                contributions, recognized with the Turing Award
                                in 2018, continue to influence the development
                                and application of AI worldwide.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        justifyContent={'center'}
                        alignItems={'top'}
                        flexWrap={'wrap'}
                    >
                        <Image src={logo} h={'200px'} />
                        <Box
                            maxW={'1000px'}
                            minW={'300px'}
                            ml={'40px'}
                            w={'80%'}
                        >
                            <Text color={'light'} fontSize={'24px'}>
                                Geoffrey Hinton
                            </Text>
                            <Text color={'light'} fontSize={'18px'}>
                                Geoffrey Hinton, the “Godfather of AI” has
                                profoundly shaped the field of deep learning
                                through his groundbreaking neural network
                                research at the University of Toronto. As a
                                panelist at the UofT AI Conference X 2024,
                                Hinton discussed the future of AI, ethical
                                considerations, and societal impacts, drawing on
                                his decades of expertise and the transformative
                                potential of advanced AI technologies. His
                                contributions, recognized with the Turing Award
                                in 2018, continue to influence the development
                                and application of AI worldwide.
                            </Text>
                        </Box>
                    </Flex>
                </VStack>

                <Text fontSize={'24px'} color={'light'} mt={'70px'}>
                    Previous Speakers
                </Text>

                <SimpleGrid
                    columns={[1, 2, 3]}
                    spacing={'40px'}
                    maxW={'800px'}
                    mr={'auto'}
                    ml={'auto'}
                >
                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDirection={'column'}
                    >
                        <Image src={logo} h={'200px'} />
                        <Text fontSize={'18px'} color={'light'}>
                            Speaker Name
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDirection={'column'}
                    >
                        <Image src={logo} h={'200px'} />
                        <Text fontSize={'18px'} color={'light'}>
                            Speaker Name
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDirection={'column'}
                    >
                        <Image src={logo} h={'200px'} />
                        <Text fontSize={'18px'} color={'light'}>
                            Speaker Name
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDirection={'column'}
                    >
                        <Image src={logo} h={'200px'} />
                        <Text fontSize={'18px'} color={'light'}>
                            Speaker Name
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDirection={'column'}
                    >
                        <Image src={logo} h={'200px'} />
                        <Text fontSize={'18px'} color={'light'}>
                            Speaker Name
                        </Text>
                    </Flex>

                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDirection={'column'}
                    >
                        <Image src={logo} h={'200px'} />
                        <Text fontSize={'18px'} color={'light'}>
                            Speaker Name
                        </Text>
                    </Flex>
                </SimpleGrid>

                <Text fontSize={'24px'} color={'light'} mt={'70px'}>
                    Confirmed Sponsors
                </Text>

                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                    mt={'40px'}
                    flexShrink={1}
                >
                    <Image
                        src={logo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                    <Image
                        src={logo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                    <Image
                        src={logo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                    <Image
                        src={logo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                    <Image
                        src={logo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                    <Image
                        src={logo}
                        p={'20px'}
                        maxW={'200px'}
                        minW={'100px'}
                    />
                </Flex>
            </Box>
        </Box>
    )
}

export default ConferenceX
