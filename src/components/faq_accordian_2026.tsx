import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
} from '@chakra-ui/react'

const Accord = () => {
    return (
        <Box
            fontFamily="Tabular, sans-serif"
            maxW="820px"
            mx="auto"
            px={[4, 0]}
        >
            <Accordion allowMultiple>
                {/* Q1 */}
                <AccordionItem
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
                                fontSize="14px"
                                fontWeight={500}
                            >
                                When and where is the conference being held?
                            </Text>
                            <AccordionIcon color="white" />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel
                        px={4}
                        pb={4}
                        pt={0}
                        color="white"
                        opacity={0.85}
                        fontSize="14px"
                    >
                        The event runs 8:30AM to 5:00PM EST on January 24th and
                        25th, 2026 at the Schwartz Reisman Institute for
                        Technology and Society.
                    </AccordionPanel>
                </AccordionItem>

                {/* Q2 */}
                <AccordionItem
                    border="none"
                    mb={3}
                    borderRadius="lg"
                    overflow="hidden"
                    bg="rgba(255,255,255,0.08)"
                    boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                >
                    <h2>
                        <AccordionButton py={3} px={4}>
                            <Text
                                flex="1"
                                textAlign="left"
                                color="white"
                                fontSize="14px"
                                fontWeight={500}
                            >
                                Will food and refreshments be provided?
                            </Text>
                            <AccordionIcon color="white" />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel
                        px={4}
                        pb={4}
                        pt={0}
                        color="white"
                        opacity={0.85}
                        fontSize="14px"
                    >
                        Start the day with some hot coffee and light breakfast
                        snacks! Lunch and drinks will be provided to attendees,
                        with easy access to a water fountain throughout the day.
                    </AccordionPanel>
                </AccordionItem>

                {/* Q3 */}
                <AccordionItem
                    border="none"
                    mb={3}
                    borderRadius="lg"
                    overflow="hidden"
                    bg="rgba(255,255,255,0.08)"
                    boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                >
                    <h2>
                        <AccordionButton py={3} px={4}>
                            <Text
                                flex="1"
                                textAlign="left"
                                color="white"
                                fontSize="14px"
                                fontWeight={500}
                            >
                                How much AI knowledge is required to attend
                                ConferenceX?
                            </Text>
                            <AccordionIcon color="white" />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel
                        px={4}
                        pb={4}
                        pt={0}
                        color="white"
                        opacity={0.85}
                        fontSize="14px"
                    >
                        ConferenceX 2026 is open to anyone who&apos;s interested
                        in the AI community! We welcome attendees with all
                        experience levels, whether they&apos;re students,
                        founders, or industry professionals.
                    </AccordionPanel>
                </AccordionItem>

                {/* Q4 */}
                <AccordionItem
                    border="none"
                    mb={3}
                    borderRadius="lg"
                    overflow="hidden"
                    bg="rgba(255,255,255,0.08)"
                    boxShadow="0 6px 18px rgba(0,0,0,0.25)"
                >
                    <h2>
                        <AccordionButton py={3} px={4}>
                            <Text
                                flex="1"
                                textAlign="left"
                                color="white"
                                fontSize="14px"
                                fontWeight={500}
                            >
                                Is there a limit to the number of attendees?
                            </Text>
                            <AccordionIcon color="white" />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel
                        px={4}
                        pb={4}
                        pt={0}
                        color="white"
                        opacity={0.85}
                        fontSize="14px"
                    >
                        Yes, ticket sales are limited. Seating is based on a
                        first-come, first-served basis. Buy your ticket early to
                        secure your spot.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}

export default Accord
