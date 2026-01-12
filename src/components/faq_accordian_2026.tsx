import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
} from '@chakra-ui/react'

type FAQItem = {
    q: string
    a: string
}

type AccordProps = {
    items?: FAQItem[]
}

const LOREM =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const DEFAULT_FAQS: FAQItem[] = [
    { q: 'Who can attend ConferenceX 2026?', a: LOREM },
    { q: "What's included with my ticket?", a: LOREM },
    { q: 'Will sessions be recorded?', a: LOREM },
    { q: 'What is the refund policy?', a: LOREM },
    { q: 'Is there a student discount?', a: LOREM },
    { q: 'Where is the venue located?', a: LOREM },
]

const Accord = ({ items }: AccordProps) => {
    const faqs = items?.length ? items : DEFAULT_FAQS

    return (
        <Box
            fontFamily="Tabular, sans-serif"
            maxW="820px"
            mx="auto"
            px={[4, 0]}
        >
            <Accordion allowMultiple>
                {faqs.map((item) => (
                    <AccordionItem
                        key={item.q}
                        border="none"
                        mb={3}
                        borderRadius="lg"
                        overflow="hidden"
                        bg="rgba(255,255,255,0.08)"
                        boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                    >
                        <h2>
                            <AccordionButton
                                py={3}
                                px={4}
                                _hover={{ bg: 'rgba(255,255,255,0.10)' }}
                                _expanded={{ bg: 'rgba(255,255,255,0.10)' }}
                            >
                                <Text
                                    flex="1"
                                    textAlign="left"
                                    color="white"
                                    fontSize={['13px', '14px']}
                                    fontWeight={500}
                                    opacity={0.95}
                                >
                                    {item.q}
                                </Text>
                                <AccordionIcon color="white" opacity={0.85} />
                            </AccordionButton>
                        </h2>

                        <AccordionPanel
                            px={4}
                            pb={4}
                            pt={0}
                            color="white"
                            opacity={0.85}
                            fontSize={['13px', '14px']}
                            lineHeight="1.7"
                        >
                            {item.a}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    )
}

export default Accord
