import type { ElementType, ReactNode } from 'react'
import { Button as ChakraButton, type ButtonProps } from '@chakra-ui/react'

export const ButtonDark = ({
    children,
    onClick,
}: {
    children: ReactNode
    onClick?: () => void
}) => {
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
            onClick={onClick}
        >
            {children}
        </ChakraButton>
    )
}

type ButtonOutlineProps = Omit<ButtonProps, 'variant' | 'as'> & {
    children: ReactNode
    variant?: 'dark' | 'light'
    /** Render the button as another element/component, e.g. `as={RouterLink}` or `as="a"` */
    as?: ElementType
    /** Route path, used when `as={RouterLink}` */
    to?: string
    /** URL, used when `as="a"` */
    href?: string
    target?: string
    rel?: string
}

export const ButtonOutline = ({
    children,
    onClick,
    variant = 'dark',
    as,
    ...rest
}: ButtonOutlineProps) => {
    const color = variant === 'dark' ? 'dark' : 'light'
    const hoverColor = variant === 'dark' ? 'light' : 'dark'
    const borderColor = variant === 'dark' ? 'dark' : 'light'
    const bgHoverColor = variant === 'dark' ? 'dark' : 'light'
    return (
        <ChakraButton
            as={as}
            {...rest}
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
            onClick={onClick}
        >
            {children}
        </ChakraButton>
    )
}
