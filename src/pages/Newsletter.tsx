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
import Issue from '../components/issue'

const Newsletter = () => {
    return (
        <Box fontFamily={'Tabular, sans-serif'} minH={'150'}>
            <Box
                bgImage={gradient}
                bgPosition={'50%'}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                height={'80vh'}
                width={'100%'}
                mt={28}
                pt={[40, 64]}
            >
                <VStack alignItems={'center'} spacing={1}>
                    <span>
                        <Text
                            as={'span'}
                            fontWeight={'medium'}
                            fontSize={[30, 60]}
                            fontFamily={'Tabular, sans-serif'}
                            color={'brand'}
                        >
                            UofT AI{' '}
                        </Text>
                        <Text
                            as={'span'}
                            fontWeight={'medium'}
                            fontSize={[30, 60]}
                            fontFamily={'Tabular, sans-serif'}
                            color={'light'}
                        >
                            Newsletter
                        </Text>
                    </span>

                    <Text
                        fontWeight={'regular'}
                        fontSize={[14, 18]}
                        color={'light'}
                    >
                        Explore AI with us.
                    </Text>

                    <Box mt={'40px'}>
                        <ButtonOutline variant="light">Sign Up</ButtonOutline>
                    </Box>
                </VStack>
            </Box>
            <Box bgColor={'#051A42'} p={[1, '70px']} minH={'100vh'}>
                <Text fontSize={'24px'} color={'light'} mt={'40px'} pl={'10px'}>
                    Previous Issues:
                </Text>

                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                    mt={'20px'}
                    flexShrink={1}
                >
                    <Issue
                        issueLink={'http://domain.com'}
                        img={logo}
                        title={'How AI is changing the world'}
                        desc={
                            'New technologies are changing the world, and AI is leading the way. Learn more about the latest advancements in AI and how they are impacting our lives.'
                        }
                        date={'September 21 2024'}
                    />
                    <Issue
                        issueLink={'http://domain.com'}
                        img={logo}
                        title={'How AI is changing the world'}
                        desc={
                            'New technologies are changing the world, and AI is leading the way. Learn more about the latest advancements in AI and how they are impacting our lives.'
                        }
                        date={'September 21 2024'}
                    />
                    <Issue
                        issueLink={'http://domain.com'}
                        img={logo}
                        title={'How AI is changing the world'}
                        desc={
                            'New technologies are changing the world, and AI is leading the way. Learn more about the latest advancements in AI and how they are impacting our lives.'
                        }
                        date={'September 21 2024'}
                    />
                </Flex>
            </Box>
        </Box>
    )
}

export default Newsletter
