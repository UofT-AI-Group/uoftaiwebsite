import { type ReactNode, useState, useRef, useEffect } from 'react'
import chevron from '../../static/assets/chevron-down.svg'
import { Box } from '@chakra-ui/react'

interface FAQItemProps {
    question: string
    answer: ReactNode
}

const FaqItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [height, setHeight] = useState('0px')
    const contentRef = useRef<HTMLDivElement>(null)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
        }
    }, [isOpen])

    return (
        <Box className="faq-item" fontSize={['24px', '40px']}>
            <button
                type="button"
                className="faq-question"
                onClick={toggleOpen}
                aria-expanded={isOpen}
            >
                {question}
                <img
                    src={chevron}
                    className={`arrow ${isOpen ? 'open' : ''}`}
                    alt=""
                    aria-hidden="true"
                />
            </button>
            <div
                ref={contentRef}
                className={`faq-answer ${isOpen ? 'show' : ''}`}
                style={{ maxHeight: `${height}` }}
            >
                <Box fontSize={['16px', '24px']}>{answer}</Box>
            </div>
            <hr />
        </Box>
    )
}

export default FaqItem
