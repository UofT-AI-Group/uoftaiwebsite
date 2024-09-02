import { Box, Container, VStack, Text, Flex } from '@chakra-ui/react'
import gradient from '../static/assets/outreach-gradient.jpeg'
import { ButtonOutline } from '../components/Button'
import Issue from '../components/issue'
import issue1 from '../static/assets/newletters/issue1.jpg'
import newletterBg from '../static/assets/newletter-bg.jpg'

const Newsletter = () => {
    return (
        <Box fontFamily={'Tabular, sans-serif'} minH={'150'}>
            <Box
                bgImage={newletterBg}
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
                        <a href="http://eepurl.com/iYa6Xw" target="_blank">
                            <ButtonOutline variant="light">
                                Subscribe
                            </ButtonOutline>
                        </a>
                    </Box>
                </VStack>
            </Box>
            <Box bgColor={'#272727'} p={[1, '70px']} minH={'100vh'}>
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
                        issueLink={
                            'https://mailchi.mp/24a2b06173ba/welcome-to-uoft-ais-2024-2025-neural-notes'
                        }
                        img={issue1}
                        title={'Welcome to UofT AI 2024-2025'}
                        desc={
                            'The UofT AI Neural Notes newsletter provides quick updates on AI news, events, and student highlights. Stay connected with the latest in AI research and opportunities at UofT. Ideal for anyone interested in AI.'
                        }
                        date={'September 2 2024'}
                    />
                </Flex>
            </Box>
        </Box>
    )
}

export default Newsletter
