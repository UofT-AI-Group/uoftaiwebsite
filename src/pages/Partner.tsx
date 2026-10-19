import { Box, Container, VStack, Text, Flex } from '@chakra-ui/react'
import Bubble from '../components/bubble'
import { PartnerTitle } from '../components/Typography'
import { ButtonOutline } from '../components/Button'
import TextCard from '../components/textcard'
import Faq from '../components/Faq/Faq'
import ConferenceXBenefits from '../components/outreach/ConferenceXBenefits'

const Partner = () => {
    return (
        <Box fontFamily={'Tabular, sans-serif'} minH={'200vh'}>
            <Bubble speed="7" size="27vw" top="-15vw" left="-17vw" />
            <Bubble speed="12" size="25vw" top="600px" left="calc(94vw)" />

            <Bubble speed="15" size="18vw" top="calc(120vh)" left="-18vw" />

            <Container
                className={'title slide-and-zoom'}
                minH={'calc(100vh - 250px)'}
                maxW={'1200px'}
                pt={[40, 64]}
                pr={'20px'}
                pl={'20px'}
                textAlign={'center'}
            >
                <VStack alignItems={'center'} spacing={5} textAlign={'center'}>
                    <PartnerTitle />
                    <Text
                        fontWeight={['regular', 'semibold']}
                        fontSize={[14, 18]}
                    >
                        Shaping the future of artificial intelligence through a
                        variety of initiatives, including educational programs,
                        competitions, guest lectures, and conferences.
                    </Text>
                    <Box>
                        <ButtonOutline>Get Involved</ButtonOutline>
                    </Box>
                </VStack>
            </Container>

            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                minH={'100vh'}
                flexWrap={'wrap'}
                flexShrink={0}
                mb={'40px'}
            >
                <TextCard
                    title="Mentorship"
                    body="1 on 1 and group programs between industry professionals and 600+ brilliant minds. Work closely with promising undergraduates in Al research."
                />
                <TextCard
                    title="Community Involvement & Recruitment"
                    body="Direct access to resumes and cover letters from top students in various fields like computer science, cognitive science, and finance."
                />
                <TextCard
                    title="Contribute to AI Innovation"
                    body="Encourage innovative thinking and groundbreaking research in Al by providing a platform for leading undergraduates to showcase their work."
                />
            </Flex>

            <ConferenceXBenefits />
            <Faq />
        </Box>
    )
}

export default Partner
