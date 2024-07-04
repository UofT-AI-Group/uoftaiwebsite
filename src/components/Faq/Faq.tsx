import React from 'react'
import FaqItem from './FaqItem'
import './styles.css'

const Faq: React.FC = () => {
    return (
        <div className="faq-container">
            <div className="container-items">
                <h2>FAQ</h2>
                <div className="dropdowns">
                    <FaqItem
                        question="How can I get involved as a partner?"
                        answer={
                            <ul>
                                <li>
                                    <strong>Sponsors:</strong> 3 types (refer to
                                    sponsorship package)
                                </li>
                                <li>
                                    <strong>Community partner:</strong> need
                                    students to work for them pro bono, speaker
                                    engagement
                                </li>
                                <li>
                                    <strong>Club partner:</strong> joint events
                                </li>
                            </ul>
                        }
                    />
                    <FaqItem
                        question="What are the contribution amounts of sponsors?"
                        answer={
                            <ul>
                                <li>
                                    <strong>Lunar: </strong>$5,000
                                </li>
                                <li>
                                    <strong>Planetary: </strong>$10,000
                                </li>
                                <li>
                                    <strong>Solar: </strong>$15,000
                                </li>
                            </ul>
                        }
                    />
                    <FaqItem
                        question="Do UofT AI partnerships renew on an annual basis?"
                        answer={
                            <p>
                                No, sponsorships are not automatically renewed.
                                The partnership will be reviewed at the end of
                                the year for an evaluation.
                            </p>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Faq
