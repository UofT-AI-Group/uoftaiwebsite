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
} from '@chakra-ui/react'
import { ReactNode, useEffect, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import HeaderLogo from '../static/assets/header_logo.png'
import { ButtonDark, ButtonOutline } from './Button'
import { HamburgerIcon } from '@chakra-ui/icons'

const Links = ['ConferenceX', 'ProjectX', 'LearnAI', 'Newsletter']

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
        <Link as={RouterLink} to={to} onClick={onClose} fontWeight={'semibold'}>
            {children}
        </Link>
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
                width={'100vw'}
                h={28}
                overflow={'hidden'}
                shadow={'md'}
            >
                <Box
                    bg={'rgba(236, 236, 236, 0.1)'}
                    backdropFilter={'blur(200px)'}
                    width={'100vw'}
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
                        >
                            {Links.map((link) => (
                                <NavLink
                                    key={link}
                                    to={`${link.toLowerCase().replace(/\s/g, '')}`}
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
                                    <Link
                                        as={RouterLink}
                                        to={link
                                            .toLowerCase()
                                            .replace(/\s/g, '')}
                                        onClick={onClose}
                                        fontWeight={'semibold'}
                                        fontSize={24}
                                        textAlign={'right'}
                                    >
                                        {link}
                                    </Link>
                                ))}
                                <Flex justifyContent={'right'}>
                                    <ButtonOutline variant="light">
                                        Partner With Us
                                    </ButtonOutline>
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
