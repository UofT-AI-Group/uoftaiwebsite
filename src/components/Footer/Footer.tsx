import React from 'react'
import logo from '../../static/assets/UofTAI_Logo.png'
import './style.css'
import { HashLink } from 'react-router-hash-link'

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo-and-links">
                    <div className="footer-links">
                        <img className="footer-img" src={logo} alt="AI Logo" />

                        <div className="footer-link">
                            <a href="/">Home</a>
                        </div>

                        <div className="footer-link">
                            <HashLink smooth to={'/#about'}>
                                About Us
                            </HashLink>
                        </div>

                        <div className="footer-link">
                            <HashLink smooth to={'/#meet-the-team'}>
                                Our Team
                            </HashLink>
                        </div>

                        <div className="footer-link">
                            <a href="/conferencex">ConferenceX</a>
                        </div>

                        <div className="footer-link">
                            <a href="/projectx">ProjectX</a>
                        </div>

                        {/* <div className="footer-link">
                            <a href="/learnai">Learn AI</a>
                        </div> */}

                        <div className="footer-link">
                            <a href="/newsletter">Newsletter</a>
                        </div>
                    </div>

                    <div className="footer-link">
                        <a href="/partner-with-us">
                            <button className="partner-button">
                                Partner With Us
                            </button>
                        </a>
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
                            Group 2024
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
