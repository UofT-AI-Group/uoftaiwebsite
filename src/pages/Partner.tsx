import { Box, Container, VStack, Text } from '@chakra-ui/react'
import Bubble from '../components/bubble'
import { PartnerTitle } from '../components/Typography'
import { ButtonOutline } from '../components/Button'

const Partner = () => {
    return (
        <Box fontFamily={'Tabular, sans-serif'} height={'200vh'}>
            <Bubble speed="7" size="300px" top="100px" left="-150px" />
            <Bubble
                speed="12"
                size="300px"
                top="600px"
                left="calc(100vw - 50px)"
            />

            <Container
                className={'title slide-and-zoom'}
                h={'100vh'}
                maxW={'1200px'}
                pt={'35vh'}
                pr={'20px'}
                pl={'20px'}
                textAlign={'center'}
            >
                <VStack alignItems={'center'} spacing={5} textAlign={'center'}>
                    <PartnerTitle />
                    <Text
                        fontWeight={['regular', 'semibold']}
                        fontSize={[14, 18]}
                    >
                        Shaping the future of artificial intelligence through a
                        variety of initiatives, including educational programs,
                        competitions, guest lectures, and conferences.
                    </Text>
                    <Box>
                        <ButtonOutline>Get Involved</ButtonOutline>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}

export default Partner
