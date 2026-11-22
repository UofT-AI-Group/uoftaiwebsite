import { Icon } from '@chakra-ui/react'
import {
    FaDiscord,
    FaEnvelope,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from 'react-icons/fa6'
import { Link } from 'react-router'
import DotField from '../DotField'
import logo from '../../static/assets/header_logo.png'
import './style.css'

const socialLinks = [
    {
        label: 'Instagram',
        href: 'https://instagram.com/uoftaigroup',
        icon: FaInstagram,
    },
    {
        label: 'Discord',
        href: 'https://discord.gg/FU8QvACr7X',
        icon: FaDiscord,
    },
    { label: 'X', href: 'https://x.com/uoftai', icon: FaXTwitter },
    {
        label: 'LinkedIn',
        href: 'https://ca.linkedin.com/company/uaig-uoft',
        icon: FaLinkedinIn,
    },
    {
        label: 'Email UofT AI',
        href: 'mailto:uoftaigroup@gmail.com',
        icon: FaEnvelope,
    },
]

const linkColumns = [
    {
        label: 'Programs',
        links: [
            { label: 'ConferenceX', to: '/conferencex' },
            { label: 'ProjectX', to: '/projectx' },
            { label: 'Partner with us', to: '/partner-with-us' },
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

const copyrightYear = new Date().getFullYear()

const Footer = () => (
    <footer className="site-footer">
        <div className="site-footer__inner">
            <div className="site-footer__brand">
                <Link to="/" className="site-footer__mark">
                    <img src={logo} alt="" width="30" height="30" />
                    UofT AI
                </Link>
                <p>
                    The University of Toronto Artificial Intelligence Group.
                    Bringing students together through AI research, competitions
                    and events.
                </p>
                <nav
                    className="site-footer__socials"
                    aria-label="UofT AI social links"
                >
                    {socialLinks.map(({ label, href, icon }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            title={label}
                        >
                            <Icon as={icon} aria-hidden="true" />
                        </a>
                    ))}
                </nav>
            </div>

            {linkColumns.map((column) => (
                <nav
                    key={column.label}
                    className="site-footer__column"
                    aria-label={`Footer ${column.label.toLowerCase()}`}
                >
                    <h2>{column.label}</h2>
                    {column.links.map(({ label, to }) =>
                        to.startsWith('http') ? (
                            <a key={to} href={to}>
                                {label} <span aria-hidden="true">↗</span>
                            </a>
                        ) : (
                            <Link key={to} to={to}>
                                {label}
                            </Link>
                        ),
                    )}
                </nav>
            ))}

            <div className="site-footer__column site-footer__contact">
                <h2>Contact</h2>
                <dl>
                    <div>
                        <dt>General</dt>
                        <dd>
                            <a href="mailto:uoftaigroup@gmail.com">
                                uoftaigroup@gmail.com
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt>Partnerships</dt>
                        <dd>
                            <a href="mailto:uoftaigrouppartnerships@gmail.com">
                                uoftaigrouppartnerships@gmail.com
                            </a>
                        </dd>
                    </div>
                </dl>
                <details className="site-footer__presidents">
                    <summary>Presidents</summary>
                    <a href="mailto:c.hundey@mail.utoronto.ca">
                        c.hundey@mail.utoronto.ca
                    </a>
                    <a href="mailto:hana.greenberg@mail.utoronto.ca">
                        hana.greenberg@mail.utoronto.ca
                    </a>
                </details>
            </div>
        </div>

        <div className="site-footer__base">
            <p>&copy; {copyrightYear} UofT AI</p>
            <a href="https://web.cs.toronto.edu">
                UofT Computer Science <span aria-hidden="true">↗</span>
            </a>
        </div>

        <div className="site-footer__field">
            <DotField className="site-footer__canvas" />
        </div>
    </footer>
)

export default Footer
