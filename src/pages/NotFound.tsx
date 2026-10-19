import { Box, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import { ButtonOutline } from '../components/Button'

const NotFound = () => {
    return (
        <Box
            fontFamily={'Tabular, sans-serif'}
            h={'100vh'}
            textAlign={'center'}
        >
            <VStack mt={'30vh'} spacing={6}>
                <Text
                    fontWeight={['regular', 'semibold']}
                    fontSize={[30, 48]}
                    color={'dark'}
                >
                    Page not found
                </Text>
                <ButtonOutline as={RouterLink} to="/">
                    Back to Home
                </ButtonOutline>
            </VStack>
        </Box>
    )
}

export default NotFound
