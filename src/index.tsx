import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { App } from './App'
import theme from './theme'
import Fonts from './fonts'
import './index.css'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')

createRoot(container).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <Fonts />
            <ColorModeScript />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>,
)
