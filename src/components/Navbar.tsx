import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerOverlay,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import logo from '../static/assets/header_logo.png'
import './Navbar.css'

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

const isExternal = (to: string) => to.startsWith('http')

function isCurrentLink(to: string, pathname: string, hash: string) {
    return `${pathname}${hash}` === to || pathname.startsWith(`${to}/`)
}

const ExternalMark = ({ to }: { to: string }) =>
    isExternal(to) ? (
        <span className="site-external" aria-hidden="true">
            ↗
        </span>
    ) : null

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
        <Link
            to={to}
            onClick={onClose}
            className="site-nav-link"
            aria-current={
                isCurrentLink(to, pathname, hash) ? 'page' : undefined
            }
        >
            {children}
            <ExternalMark to={to} />
        </Link>
    )
}

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const menuButtonRef = useRef<HTMLButtonElement>(null)
    const { pathname, hash } = useLocation()

    return (
        <header className="site-header">
            <div className="site-header__inner">
                <Link to="/" className="site-brand" aria-label="UofT AI home">
                    <img src={logo} alt="" width="32" height="32" />
                    <span aria-hidden="true">UofT AI</span>
                </Link>
                <nav className="site-nav" aria-label="Main navigation">
                    <NavLink to="/" onClose={onClose}>
                        Home
                    </NavLink>
                    {navigationGroups.map((group) => (
                        <Menu key={group.label} gutter={14}>
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
                                className="site-menu"
                                bg="#0b0b0d"
                                color="#ededed"
                                border="1px solid #2c2c32"
                                borderRadius={0}
                                boxShadow="0 18px 40px rgba(0, 0, 0, 0.5)"
                                minW="220px"
                                py={2}
                                px={0}
                            >
                                {group.links.map(({ label, to }) => (
                                    <MenuItem
                                        key={to}
                                        as={Link}
                                        to={to}
                                        onClick={onClose}
                                        aria-current={
                                            isCurrentLink(to, pathname, hash)
                                                ? 'page'
                                                : undefined
                                        }
                                        bg="transparent"
                                        color="#9a9aa1"
                                        minH="44px"
                                        px={5}
                                        fontSize="14px"
                                        justifyContent="space-between"
                                        _focus={{
                                            bg: '#151518',
                                            color: '#ededed',
                                        }}
                                        _activeLink={{
                                            color: '#ededed',
                                            boxShadow: 'inset 2px 0 0 #ba76e1',
                                        }}
                                    >
                                        {label}
                                        <ExternalMark to={to} />
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    ))}
                    <Link
                        to="/partner-with-us"
                        className="site-cta"
                        aria-current={
                            pathname === '/partner-with-us' ? 'page' : undefined
                        }
                    >
                        Partner with us
                    </Link>
                </nav>
                <IconButton
                    ref={menuButtonRef}
                    className="site-menu-button"
                    icon={<HamburgerIcon boxSize={5} />}
                    aria-label="Open menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    onClick={onOpen}
                    variant="unstyled"
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
                <DrawerContent className="site-drawer">
                    <div className="site-drawer__bar">
                        <p className="site-brand">
                            <img src={logo} alt="" width="32" height="32" />
                            UofT AI
                        </p>
                    </div>
                    <DrawerCloseButton
                        aria-label="Close menu"
                        className="site-drawer__close"
                    />
                    <DrawerBody px={0} py={0}>
                        <nav
                            id="mobile-navigation"
                            className="site-mobile-nav"
                            aria-label="Mobile navigation"
                        >
                            <NavLink to="/" onClose={onClose}>
                                Home
                            </NavLink>
                            {navigationGroups.map((group) => (
                                <section
                                    key={group.label}
                                    className="site-mobile-group"
                                    aria-label={group.label}
                                >
                                    <h2>{group.label}</h2>
                                    {group.links.map(({ label, to }) => (
                                        <NavLink
                                            key={to}
                                            to={to}
                                            onClose={onClose}
                                        >
                                            {label}
                                        </NavLink>
                                    ))}
                                </section>
                            ))}
                        </nav>
                    </DrawerBody>
                    <DrawerFooter className="site-drawer__footer">
                        <Link
                            to="/partner-with-us"
                            onClick={onClose}
                            className="site-cta site-cta--solid"
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
