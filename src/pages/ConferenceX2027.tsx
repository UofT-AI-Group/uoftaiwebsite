import ConferenceYearTabs from '../components/ConferenceYearTabs'
import React from 'react'
import { Box, VStack, Text } from '@chakra-ui/react'
import { ConferenceXTitle } from '../components/Typography'
import '../static/styles/conferenceX.css'

const ConferenceX = () => {
    const gradient2027 =
        'linear-gradient(135deg, #2f0f36 0%, #34194e 40%, #3b72a3 100%)'

    return (
        <Box fontFamily={'Tabular, sans-serif'} pt={28}>
            <Box
                bg="white"
                py={2}
                position="relative"
                zIndex={500}
                style={{ pointerEvents: 'auto' }}
            >
                <ConferenceYearTabs />
            </Box>

            <Box
                bgImage={gradient2027}
                bgPosition={'50%'}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                height={'90vh'}
                width={'100%'}
                pt={[40, 64]}
                px={[5, 0]}
            >
                <VStack alignItems={'center'} spacing={5} textAlign="center">
                    <ConferenceXTitle />
                    <Text fontSize={[14, 18]} color={'light'}>
                        Proposed theme: The Past and Future of AI
                    </Text>
                    <Text fontSize={[14, 18]} color={'light'} opacity={0.8}>
                        Program and event details will be announced soon.
                    </Text>
                </VStack>
            </Box>
        </Box>
    )
}

export default ConferenceX
