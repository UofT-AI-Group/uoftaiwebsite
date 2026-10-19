import { Box, VStack, Text } from '@chakra-ui/react'
import gradient from '../static/assets/dark-gradient.webp'
import { ButtonOutline } from '../components/Button'
import { Link as RouterLink } from 'react-router'
import { Link } from '@chakra-ui/react'

export default function ProjectX() {
    return (
        <Box
            fontFamily={'Tabular, sans-serif'}
            bgImage={gradient}
            bgPosition={'50%'}
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
            height={'90vh'}
            width={'100%'}
            mt={28}
            pt={[40, 64]}
        >
            <VStack alignItems={'center'} spacing={1}>
                <span>
                    <Text
                        as={'span'}
                        fontWeight={'medium'}
                        fontSize={[30, 60]}
                        color={'light'}
                    >
                        Project
                    </Text>
                    <Text
                        as={'span'}
                        fontWeight={'medium'}
                        fontSize={[30, 60]}
                        color={'brand'}
                    >
                        X
                    </Text>
                </span>
                <Text
                    fontWeight={'regular'}
                    fontSize={[14, 18]}
                    color={'light'}
                    textAlign={'center'}
                >
                    Designed and run by UofT AI, ProjectX is a four-month long
                    machine learning research competition.
                    <br />
                    Final papers will be judged by a panel of academics and
                    industry experts.
                </Text>
                <Box marginTop={'20px'}>
                    <ButtonOutline
                        as="a"
                        href="https://forms.gle/J99tMADBSikDDf9E6"
                        variant="light"
                    >
                        Apply Now
                    </ButtonOutline>
                </Box>
                <Text
                    fontWeight={'regular'}
                    fontSize={[16, 20]}
                    color={'light'}
                    textAlign={'center'}
                    mt={'40px'}
                    mb={'10px'}
                >
                    EVENT DETAILS
                </Text>

                <Box>
                    <Link as={RouterLink} to="2026">
                        <ButtonOutline variant="light">2026</ButtonOutline>
                    </Link>
                    <Box as="span" p={'5px'}></Box>
                    <Link as={RouterLink} to="2024">
                        <ButtonOutline variant="light">2024</ButtonOutline>
                    </Link>
                    <Box as="span" p={'5px'}></Box>
                    <Link as={RouterLink} to="2023">
                        <ButtonOutline variant="light">2023</ButtonOutline>
                    </Link>
                    <Box as="span" p={'5px'}></Box>
                    <Link as={RouterLink} to="2022">
                        <ButtonOutline variant="light">2022</ButtonOutline>
                    </Link>
                    <Box as="span" p={'5px'}></Box>
                    <Link as={RouterLink} to="2021">
                        <ButtonOutline variant="light">2021</ButtonOutline>
                    </Link>
                    <Box as="span" p={'5px'}></Box>
                    <Link as={RouterLink} to="2020">
                        <ButtonOutline variant="light">2020</ButtonOutline>
                    </Link>
                </Box>
            </VStack>
        </Box>
    )
}
