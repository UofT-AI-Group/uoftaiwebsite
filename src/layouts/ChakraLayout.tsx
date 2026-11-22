import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Outlet } from 'react-router'
import theme from '../theme'

/**
 * Wraps every route except the home page. Loaded lazily so Chakra and Emotion
 * stay out of the home page bundle while the inner pages still depend on them.
 */
const ChakraLayout = () => (
    <ChakraProvider theme={theme}>
        <ColorModeScript />
        <Outlet />
    </ChakraProvider>
)

export default ChakraLayout
