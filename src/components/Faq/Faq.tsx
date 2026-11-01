import FaqItem from './FaqItem'
import './styles.css'
import { Text, Box } from '@chakra-ui/react'

const Faq = () => {
    return (
        <Box className="faq-container">
            <Box className="container-items">
                <Text className="faq-h2" fontSize={['36px', '50px']}>
                    FAQ
                </Text>
                <Box>
                    <FaqItem
                        question="How can I get involved as a partner?"
                        answer={
                            <ul className="faq-ul">
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
                            <ul className="faq-ul">
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
                </Box>
            </Box>
        </Box>
    )
}

export default Faq
