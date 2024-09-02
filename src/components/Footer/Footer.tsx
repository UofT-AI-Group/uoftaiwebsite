import React from 'react'
import logo from '../../static/assets/UofTAI_Logo.png'
import './style.css'
import { Box } from '@chakra-ui/react'

const Footer: React.FC = () => {
    return (
        <Box fontFamily={'Tabular, sans-serif'}>
            <footer className="footer">
                <div className="footer-container">
                    <div className="logo-and-links">
                        <div className="footer-links">
                            <img
                                className="footer-img"
                                src={logo}
                                alt="AI Logo"
                            />
                            <a href="#">About Us</a>
                            <a href="#">Projects</a>
                            <a href="#">Our Team</a>
                            <a href="#">Newsletter</a>
                            <a href="#">Get Involved</a>
                        </div>
                        <button className="partner-button">
                            Partner With Us
                        </button>
                    </div>
                    <div className="main-contacts">
                        <div className="footer-contacts">
                            <h1>Contacts</h1>
                            <a href="mailto:general@uoft.ai">general@uoft.ai</a>
                            <a href="mailto:partnerships@uoft.ai">
                                partnerships@uoft.ai
                            </a>
                        </div>
                        <div className="footer-presidents">
                            <h1>Presidents</h1>
                            <a href="mailto:alexis.tassone@mail.utoronto.ca">
                                alexis.tassone@mail.utoronto.ca
                            </a>
                            <a href="mailto:jai.mansukhani@mail.utoronto.ca">
                                jai.mansukhani@mail.utoronto.ca
                            </a>
                        </div>
                        <div className="footer-affiliated">
                            <h1>Affiliated Sites</h1>
                            <a href="https://web.cs.toronto.edu">
                                web.cs.toronto.edu
                            </a>
                        </div>
                        <div className="footer-bottom">
                            <p>
                                &copy; University of Toronto Artificial
                                Intelligence Group 2024
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </Box>
    )
}

export default Footer
