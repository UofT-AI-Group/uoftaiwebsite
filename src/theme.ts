import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
            },
        },
    },
    semanticTokens: {
        colors: {
            light: {
                default: '#ECECEC',
            },
            dark: {
                default: '#1C1C1C',
            },
            brand: {
                default: '#BA76E1',
            },
            pink: {
                light: '#F498C3',
                dark: '#EE3B8E',
            },
            blue: {
                dark: '#051A42',
            },
        },
    },
})

export default theme
