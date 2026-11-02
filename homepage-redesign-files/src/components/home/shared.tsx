import { Box, Heading, HStack, Link, type BoxProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { SOCIAL_LINKS } from '../../data/socials'
import { HEADING_FONT, HOME_COLORS } from './tokens'

export const SectionContainer = ({ children, ...rest }: BoxProps) => (
    <Box maxW={'1200px'} mx={'auto'} px={{ base: 5, md: 6 }} {...rest}>
        {children}
    </Box>
)

export const SectionTitle = ({
    children,
    color,
}: {
    children: ReactNode
    color?: string
}) => (
    <Heading
        as={'h2'}
        fontFamily={HEADING_FONT}
        fontWeight={700}
        fontSize={{ base: '30px', md: '40px' }}
        lineHeight={1.15}
        letterSpacing={'-0.02em'}
        color={color}
    >
        {children}
    </Heading>
)

export const SocialIcons = ({
    variant = 'light',
}: {
    variant?: 'light' | 'dark'
}) => {
    const onDark = variant === 'dark'
    return (
        <HStack spacing={2.5} wrap={'wrap'}>
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <Link
                    key={label}
                    href={href}
                    isExternal={!href.startsWith('mailto:')}
                    aria-label={`UofT AI on ${label}`}
                    w={'44px'}
                    h={'44px'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'full'}
                    border={'1px solid'}
                    borderColor={onDark ? '#4A4552' : '#D6D1DE'}
                    bg={onDark ? 'transparent' : 'white'}
                    color={onDark ? 'white' : HOME_COLORS.ink}
                    transition={'background 0.2s, color 0.2s'}
                    _hover={{
                        bg: onDark ? 'white' : HOME_COLORS.ink,
                        color: onDark ? HOME_COLORS.ink : 'white',
                    }}
                >
                    <Icon size={19} aria-hidden={true} />
                </Link>
            ))}
        </HStack>
    )
}
