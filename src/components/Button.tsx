import React, { ReactNode } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

export const ButtonDark = ({ children }: { children: ReactNode }) => {
    return (
        <ChakraButton
            py={4}
            px={8}
            bg={'dark'}
            color={'light'}
            borderRadius={0}
            fontFamily={'Tabular, sans-serif'}
            fontWeight={'medium'}
            border={'2px'}
            _hover={{
                bg: 'white',
                color: 'dark',
            }}
        >
            {children}
        </ChakraButton>
    )
}

export const ButtonOutline = ({
    children,
    variant = 'dark',
}: {
    variant?: string
    children: ReactNode
}) => {
    const color = variant === 'dark' ? 'dark' : 'light'
    const hoverColor = variant === 'dark' ? 'light' : 'dark'
    const borderColor = variant === 'dark' ? 'dark' : 'light'
    const bgHoverColor = variant === 'dark' ? 'dark' : 'light'
    return (
        <ChakraButton
            py={4}
            px={8}
            bg={'rgba(0, 0, 0, 0)'}
            color={color}
            borderRadius={0}
            border={'2px'}
            borderColor={borderColor}
            fontFamily={'Tabular, sans-serif'}
            fontWeight={'medium'}
            _hover={{
                color: hoverColor,
                bg: bgHoverColor,
            }}
        >
            {children}
        </ChakraButton>
    )
}
