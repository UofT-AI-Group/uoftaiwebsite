import { Icon } from '@chakra-ui/react'
import {
    FaDiscord,
    FaEnvelope,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from 'react-icons/fa6'
import { Link } from 'react-router'
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

const copyrightYear = new Date().getFullYear()

const Footer = () => (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-head">
                <div className="footer-brandline">
                    <Link
                        to="/"
                        className="footer-logo"
                        aria-label="UofT AI home"
                    >
                        <img src={logo} alt="" width="44" height="44" />
                    </Link>
                    <div>
                        <h2>UofT AI</h2>
                        <p>
                            University of Toronto Artificial Intelligence Group
                        </p>
                    </div>
                </div>
                <nav
                    className="footer-socials"
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

            <div className="footer-grid">
                <div className="footer-message">
                    <h3>Stay connected</h3>
                    <p>
                        Bringing students together through AI research,
                        competitions, and events at the University of Toronto.
                    </p>
                </div>
                <nav className="footer-column" aria-label="Footer navigation">
                    <h3>Quick links</h3>
                    <div className="footer-links">
                        <Link to="/conferencex">ConferenceX</Link>
                        <Link to="/projectx">ProjectX</Link>
                        <Link to="/newsletter">Newsletter</Link>
                    </div>
                </nav>
                <div className="footer-column footer-contacts">
                    <h3>Contact</h3>
                    <a href="mailto:uoftaigroup@gmail.com">
                        uoftaigroup@gmail.com
                    </a>
                    <a href="mailto:uoftaigrouppartnerships@gmail.com">
                        uoftaigrouppartnerships@gmail.com
                    </a>
                    <details className="footer-presidents">
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

            <div className="footer-bottom">
                <p>&copy; {copyrightYear} UofT AI. All rights reserved.</p>
                <a href="https://web.cs.toronto.edu">
                    UofT Computer Science <span aria-hidden="true">↗</span>
                </a>
            </div>
        </div>
    </footer>
)

export default Footer
