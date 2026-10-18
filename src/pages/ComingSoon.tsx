import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ComingSoon = () => {
    return (
        <Box
            fontFamily={'Tabular, sans-serif'}
            h={'100vh'}
            textAlign={'center'}
        >
            <Text
                mt={'30vh'}
                fontWeight={['regular', 'semibold']}
                fontSize={[30, 48]}
                color={'dark'}
            >
                Stay Tuned, More info coming soon!
            </Text>
        </Box>
    )
}

export default ComingSoon
