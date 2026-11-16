import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { ReactNode, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../static/assets/header_logo.png'
import './Navbar.css'

const home = { label: 'Home', to: '/' }
const navigationGroups = [
    {
        label: 'About Us',
        links: [
            { label: 'About Us', to: '/#about' },
            { label: 'Our Team', to: '/#meet-the-team' },
        ],
    },
    {
        label: 'Programs',
        links: [
            { label: 'ConferenceX', to: '/conferencex' },
            { label: 'ProjectX', to: '/projectx' },
        ],
    },
    {
        label: 'News',
        links: [
            { label: 'Newsletter', to: '/newsletter' },
            {
                label: 'AI Review',
                to: 'https://torontoaireview.framer.website/',
            },
        ],
    },
]
const links = [home, ...navigationGroups.flatMap((group) => group.links)]

function isCurrentLink(to: string, pathname: string, hash: string) {
    return `${pathname}${hash}` === to || pathname.startsWith(`${to}/`)
}

export const NavLink = ({
    children,
    to,
    onClose,
}: {
    children: ReactNode
    to: string
    onClose: () => void
}) => {
    const { pathname, hash } = useLocation()

    return (
        <HashLink
            smooth
            to={to}
            elementId={to === '/' ? 'top' : undefined}
            onClick={onClose}
            className="site-nav-link"
            aria-current={
                isCurrentLink(to, pathname, hash) ? 'page' : undefined
            }
        >
            {children}
        </HashLink>
    )
}

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const menuButtonRef = useRef<HTMLButtonElement>(null)
    const { pathname, hash } = useLocation()

    return (
        <header className="site-header">
            <div className="site-header__inner">
                <HashLink
                    smooth
                    to="/"
                    elementId="top"
                    className="site-brand"
                    aria-label="UofT AI home"
                >
                    <img src={logo} alt="" width="48" height="48" />
                </HashLink>
                <nav className="site-nav" aria-label="Main navigation">
                    <NavLink to="/" onClose={onClose}>
                        Home
                    </NavLink>
                    {navigationGroups.map((group) => (
                        <Menu key={group.label}>
                            <MenuButton
                                type="button"
                                className="site-nav-trigger"
                                data-current={group.links.some(({ to }) =>
                                    isCurrentLink(to, pathname, hash),
                                )}
                            >
                                {group.label}
                                <ChevronDownIcon aria-hidden="true" />
                            </MenuButton>
                            <MenuList
                                bg="dark"
                                color="light"
                                borderColor="whiteAlpha.300"
                                fontFamily="Montserrat, sans-serif"
                                borderRadius="6px"
                                p={2}
                            >
                                {group.links.map(({ label, to }) => (
                                    <MenuItem
                                        key={to}
                                        as={HashLink}
                                        smooth
                                        to={to}
                                        onClick={onClose}
                                        aria-current={
                                            isCurrentLink(to, pathname, hash)
                                                ? 'page'
                                                : undefined
                                        }
                                        bg="dark"
                                        minH="44px"
                                        fontSize="15px"
                                        borderRadius="3px"
                                        _focus={{ bg: 'whiteAlpha.200' }}
                                        _hover={{ bg: 'whiteAlpha.200' }}
                                    >
                                        {label}
                                        {label === 'AI Review' && (
                                            <span aria-hidden="true"> ↗</span>
                                        )}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    ))}
                    <Link to="/partner-with-us" className="site-nav-link">
                        Partner with us
                    </Link>
                </nav>
                <IconButton
                    ref={menuButtonRef}
                    className="site-menu-button"
                    icon={<HamburgerIcon boxSize={6} />}
                    aria-label="Open menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    onClick={onOpen}
                    variant="ghost"
                    color="light"
                    borderRadius={0}
                    size="lg"
                    _hover={{ bg: 'whiteAlpha.100' }}
                />
            </div>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={menuButtonRef}
                placement="right"
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent
                    bg="dark"
                    color="light"
                    fontFamily="Montserrat, sans-serif"
                >
                    <DrawerCloseButton
                        aria-label="Close menu"
                        top={6}
                        right={6}
                        size="lg"
                    />
                    <DrawerHeader px={8} pt={8} pb={6}>
                        <p className="site-mobile-title">UofT AI</p>
                    </DrawerHeader>
                    <DrawerBody px={8}>
                        <nav
                            id="mobile-navigation"
                            className="site-mobile-nav"
                            aria-label="Mobile navigation"
                        >
                            {links.map(({ label, to }) => (
                                <NavLink key={to} to={to} onClose={onClose}>
                                    {label}
                                    {label === 'AI Review' && (
                                        <span aria-hidden="true">↗</span>
                                    )}
                                </NavLink>
                            ))}
                        </nav>
                    </DrawerBody>
                    <DrawerFooter p={8}>
                        <Link
                            to="/partner-with-us"
                            onClick={onClose}
                            className="site-nav-link"
                        >
                            Partner with us
                        </Link>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </header>
    )
}

export default Navbar
