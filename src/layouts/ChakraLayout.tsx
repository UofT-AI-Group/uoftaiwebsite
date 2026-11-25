import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Outlet } from 'react-router'
import { PageMeta } from '@/components/kit/PageMeta'
import { SITE_DESCRIPTION } from '@/data/site'
import theme from '../theme'

/**
 * Wraps every route except the home page. Loaded lazily so Chakra and Emotion
 * stay out of the home page bundle while the inner pages still depend on them.
 * Pages here share the site description until they get their own PageMeta.
 */
const ChakraLayout = () => (
    <ChakraProvider theme={theme}>
        <ColorModeScript />
        <PageMeta description={SITE_DESCRIPTION} />
        <Outlet />
    </ChakraProvider>
)

export default ChakraLayout
