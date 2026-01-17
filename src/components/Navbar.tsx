import {
    Box,
    Flex,
    useDisclosure,
    Link,
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
import { ReactNode, useEffect, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import HeaderLogo from '../static/assets/header_logo.png'
import { ButtonDark, ButtonOutline } from './Button'
import { HashLink } from 'react-router-hash-link'
import { HamburgerIcon } from '@chakra-ui/icons'

const Links = [
    'Home',
    'About Us',
    'Our Team',
    'ConferenceX',
    'ProjectX',
    // 'LearnAI',
    'Newsletter',
    'AI Review',
]

function get_link(link: string) {
    if (link == 'Home') {
        return '/'
    }

    if (link == 'About Us') {
        return '/#about'
    }

    if (link == 'Our Team') {
        return '/#meet-the-team'
    }

    if (link == 'AI Review') {
        return 'https://torontoaireview.framer.website/'
    }
    return link.toLowerCase().replace(/\s/g, '')
}

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
        _hover={{
            textDecoration: 'none',
            cursor: 'pointer',
        }}
    >
        <HashLink smooth to={to} onClick={onClose}>
            {children}
        </HashLink>
    </Box>
)

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const ref = useRef<any>(null)

    // lifecycle hook to close mobile navbar when there is a mousedown event
    // outside of the navbar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target)) onClose()
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [onClose, ref])

    return (
        <>
            <Box
                position={'fixed'}
                zIndex={1000}
                top={0}
                left={0}
                width={'110%'}
                h={28}
                overflow={'hidden'}
                bg={'white'}
                borderBottom={'2px solid black'}
            >
                <Box
                    bg={'rgba(236, 236, 236, 0.1)'}
                    backdropFilter={'blur(200px)'}
                    width={'100%'}
                    h={28}
                    margin={'-5px -10px -10px -5px'}
                />
            </Box>
            <Box
                px={4}
                top={0}
                width={'100vw'}
                ref={ref}
                zIndex={1000}
                position={'fixed'}
            >
                <Flex
                    h={28}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Flex alignItems={'center'} pl={0}>
                        <NavLink to={'/'} onClose={onClose}>
                            <Img src={HeaderLogo} alt="Logo" h={20} w={20} />
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
                            display={{ base: 'none', md: 'flex' }}
                            fontWeight={'semibold'}
                        >
                            {Links.map((link) => (
                                <NavLink
                                    key={link}
                                    to={`${get_link(link)}`}
                                    onClose={onClose}
                                >
                                    {link}
                                </NavLink>
                            ))}
                            <NavLink to={'partner-with-us'} onClose={onClose}>
                                <ButtonDark>Partner With Us</ButtonDark>
                            </NavLink>
                        </HStack>
                    </HStack>
                    <IconButton
                        fontSize={'2rem'}
                        icon={<HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={!isOpen ? { md: 'none' } : { base: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        bg={'none'}
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
                                {Links.map((link) => (
                                    <NavLink
                                        key={link}
                                        to={`${get_link(link)}`}
                                        onClose={onClose}
                                    >
                                        <Text
                                            fontWeight={'semibold'}
                                            fontSize={24}
                                            textAlign={'right'}
                                        >
                                            {link}
                                        </Text>
                                    </NavLink>
                                ))}
                                <Flex justifyContent={'right'}>
                                    <NavLink
                                        to={'partner-with-us'}
                                        onClose={onClose}
                                    >
                                        <ButtonOutline variant="light">
                                            Partner With Us
                                        </ButtonOutline>
                                    </NavLink>
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
