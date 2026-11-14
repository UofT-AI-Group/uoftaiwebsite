import {
    Box,
    Flex,
    useDisclosure,
    HStack,
    Stack,
    Img,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    Text,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { Link as RouterLink, useLocation } from 'react-router'
import HeaderLogo from '../static/assets/header_logo.png'
import { ButtonDark, ButtonOutline } from './Button'
import { HamburgerIcon } from '@chakra-ui/icons'

const LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/#about' },
    { label: 'Our Team', to: '/#meet-the-team' },
    { label: 'ConferenceX', to: '/conferencex' },
    { label: 'ProjectX', to: '/projectx' },
    { label: 'Newsletter', to: '/newsletter' },
    { label: 'AI Review', to: 'https://torontoaireview.framer.website/' },
]

export const NavLink = ({
    children,
    to,
    onClose,
}: {
    children: ReactNode
    to: string
    onClose: () => void
}) => (
    <Box
        px={2}
        py={1}
        rounded={'md'}
        fontFamily={'Tabular, sans-serif'}
        fontWeight={'semibold'}
        fontSize={'15px'}
        _hover={{
            textDecoration: 'none',
            cursor: 'pointer',
        }}
    >
        <RouterLink to={to} onClick={onClose}>
            {children}
        </RouterLink>
    </Box>
)

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // The homepage is dark, so the bar switches to a dark variant there.
    const isHome = useLocation().pathname === '/'

    return (
        <>
            <Box
                position={'fixed'}
                zIndex={1000}
                top={0}
                left={0}
                width={'110%'}
                h={'88px'}
                overflow={'hidden'}
                bg={isHome ? '#0B0B0D' : 'white'}
                borderBottom={isHome ? '1px solid #222226' : '2px solid black'}
            >
                <Box
                    bg={'rgba(236, 236, 236, 0.1)'}
                    backdropFilter={'blur(200px)'}
                    width={'100%'}
                    h={'88px'}
                    margin={'-5px -10px -10px -5px'}
                />
            </Box>
            <Box
                px={4}
                top={0}
                width={'100vw'}
                zIndex={1000}
                position={'fixed'}
                color={isHome ? '#EDEDED' : undefined}
            >
                <Flex
                    h={'88px'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Flex alignItems={'center'} pl={0}>
                        <NavLink to={'/'} onClose={onClose}>
                            <Img
                                src={HeaderLogo}
                                alt="Logo"
                                h={14}
                                w={14}
                                filter={isHome ? 'invert(1)' : undefined}
                            />
                        </NavLink>
                    </Flex>

                    <HStack
                        spacing={8}
                        alignItems={'center'}
                        px={8}
                        display={{ md: 'block' }}
                    >
                        <HStack
                            as={'nav'}
                            spacing={6}
                            // Full links need ~1200px; narrower windows use the menu.
                            display={{ base: 'none', xl: 'flex' }}
                            fontWeight={'semibold'}
                        >
                            {LINKS.map(({ label, to }) => (
                                <NavLink key={label} to={to} onClose={onClose}>
                                    {label}
                                </NavLink>
                            ))}
                            <Box px={2} py={1}>
                                {isHome ? (
                                    <ButtonOutline
                                        as={RouterLink}
                                        to="/partner-with-us"
                                        onClick={onClose}
                                        variant="light"
                                    >
                                        Partner With Us
                                    </ButtonOutline>
                                ) : (
                                    <ButtonDark
                                        as={RouterLink}
                                        to="/partner-with-us"
                                        onClick={onClose}
                                    >
                                        Partner With Us
                                    </ButtonDark>
                                )}
                            </Box>
                        </HStack>
                    </HStack>
                    <IconButton
                        fontSize={'2rem'}
                        icon={<HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={!isOpen ? { xl: 'none' } : { base: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        bg={'none'}
                        color={isHome ? '#EDEDED' : undefined}
                        _hover={isHome ? { bg: 'whiteAlpha.200' } : undefined}
                    />
                </Flex>

                <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
                    <DrawerOverlay />
                    <DrawerContent
                        zIndex={1000000000}
                        pt={16}
                        bg={'dark'}
                        color={'light'}
                    >
                        <DrawerCloseButton size={'lg'} mt={3} />
                        <DrawerBody>
                            <Stack as={'nav'} spacing={4}>
                                {LINKS.map(({ label, to }) => (
                                    <NavLink
                                        key={label}
                                        to={to}
                                        onClose={onClose}
                                    >
                                        <Text
                                            fontWeight={'semibold'}
                                            fontSize={24}
                                            textAlign={'right'}
                                        >
                                            {label}
                                        </Text>
                                    </NavLink>
                                ))}
                                <Flex justifyContent={'right'}>
                                    <Box px={2} py={1}>
                                        <ButtonOutline
                                            as={RouterLink}
                                            to="/partner-with-us"
                                            onClick={onClose}
                                            variant="light"
                                        >
                                            Partner With Us
                                        </ButtonOutline>
                                    </Box>
                                </Flex>
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </>
    )
}

export default Navbar
