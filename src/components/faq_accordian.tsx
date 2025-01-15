import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

const Accord = () => {
    return (
        <Box
            color={'white'} // White text
            p={5} // Padding around the accordion
            borderRadius={'md'} // Rounded corners
            //maxW={'1200px'}  // Limit the width of the accordion
            mx={'auto'} // Center it horizontally
        >
            <Accordion>
                <AccordionItem>
                    <h2>
                        <AccordionButton fontSize={'lg'}>
                            <Box as="span" flex="1" textAlign="left">
                                When and where is the conference being held?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel fontSize={'md'} pb={4}>
                        The event takes place on Saturday, January 25th from
                        9:00AM to 5:00PM EST at the Schwartz Reisman Institute
                        for Technology and Society. Registration is from 9:00AM
                        to 10:00AM, with opening remarks starting at 10:00AM
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton fontSize={'lg'}>
                            <Box as="span" flex="1" textAlign="left">
                                Will food and refreshments be provided?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel fontSize={'md'} pb={4}>
                        Start the day with some hot coffee and light breakfast
                        snacks! Lunch and drinks will be provided to attendees,
                        also with easy access to a water fountain throughout the
                        day!
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton fontSize={'lg'}>
                            <Box as="span" flex="1" textAlign="left">
                                How much AI knowledge is required to attend
                                ConferenceX?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel fontSize={'md'} pb={4}>
                        ConferenceX 2025 is open to anyone who's interested in
                        the AI community! We welcome attendees with all
                        experience levels, whether they're students, founders,
                        industry professionals or more!
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton fontSize={'lg'}>
                            <Box as="span" flex="1" textAlign="left">
                                Is there a limit to the number of attendees?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel fontSize={'md'} pb={4}>
                        Yes, ticket sales are limited. Seating is based on first
                        come, first serve basis. Buy your ticket now to secure
                        your spot!
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}

export default Accord
