import type { ReactNode } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export type Question = { question: string; answer: ReactNode }

/** Questions that open independently, so readers can compare answers. */
export const Faq = ({
    items,
    className,
}: {
    items: Question[]
    className?: string
}) => (
    <Accordion type="multiple" className={className}>
        {items.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
)
