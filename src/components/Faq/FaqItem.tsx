import React, { useState } from 'react'
import chevron from '../../static/assets/chevron-down.svg'

interface FAQItemProps {
    question: string
    answer: React.ReactNode
}

const FaqItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggleOpen}>
                {question}
                <img
                    src={chevron}
                    className={`arrow ${isOpen ? 'open' : ''}`}
                ></img>
            </div>
            <div className={`faq-answer ${isOpen ? 'show' : ''}`}>{answer}</div>
            <hr className={`underline ${isOpen ? 'toggleOn' : ''}`} />
        </div>
    )
}

export default FaqItem
