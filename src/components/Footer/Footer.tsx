import React from 'react'
import logo from '../../static/assets/UofTAI_Logo.png'
import './style.css'
import { Link as RouterLink } from 'react-router'

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo-and-links">
                    <div className="footer-links">
                        <img className="footer-img" src={logo} alt="AI Logo" />

                        <div className="footer-link">
                            <RouterLink to={'/'}>Home</RouterLink>
                        </div>

                        <div className="footer-link">
                            <RouterLink to={'/#about'}>About Us</RouterLink>
                        </div>

                        <div className="footer-link">
                            <RouterLink to={'/#meet-the-team'}>
                                Our Team
                            </RouterLink>
                        </div>

                        <div className="footer-link">
                            <RouterLink to={'/conferencex'}>
                                ConferenceX
                            </RouterLink>
                        </div>

                        <div className="footer-link">
                            <RouterLink to={'/projectx'}>ProjectX</RouterLink>
                        </div>

                        <div className="footer-link">
                            <RouterLink to={'/newsletter'}>
                                Newsletter
                            </RouterLink>
                        </div>
                    </div>

                    <div className="footer-link">
                        <RouterLink to={'/partner-with-us'}>
                            <button className="partner-button">
                                Partner With Us
                            </button>
                        </RouterLink>
                    </div>
                </div>
                <div className="main-contacts">
                    <div className="footer-contacts">
                        <h1>Contacts</h1>
                        <div className="footer-link">
                            <a href="mailto:uoftaigroup@gmail.com">
                                uoftaigroup@gmail.com
                            </a>
                        </div>

                        <div className="footer-link">
                            <a href="mailto:uoftaigrouppartnerships@gmail.com">
                                uoftaigrouppartnerships@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="footer-presidents">
                        <h1>Presidents</h1>
                        <div className="footer-link">
                            <a href="mailto:c.hundey@mail.utoronto.ca">
                                c.hundey@mail.utoronto.ca
                            </a>
                        </div>

                        <div className="footer-link">
                            <a href="mailto:hana.greenberg@mail.utoronto.ca">
                                hana.greenberg@mail.utoronto.ca
                            </a>
                        </div>
                    </div>
                    <div className="footer-affiliated">
                        <h1>Affiliated Sites</h1>
                        <a href="https://web.cs.toronto.edu">
                            web.cs.toronto.edu
                        </a>
                    </div>
                    <div className="footer-bottom">
                        <p>
                            &copy; University of Toronto Artificial Intelligence
                            Group 2026
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
