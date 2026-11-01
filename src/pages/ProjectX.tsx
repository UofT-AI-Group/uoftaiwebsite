import { Box, VStack, Text } from '@chakra-ui/react'
import gradient from '../static/assets/dark-gradient.webp'
import { ButtonOutline } from '../components/Button'
import { Link as RouterLink } from 'react-router'
import { Fragment } from 'react'

const PAST_YEARS = [2026, 2024, 2023, 2022, 2021, 2020]

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
                    {PAST_YEARS.map((year, i) => (
                        <Fragment key={year}>
                            {i > 0 && <Box as="span" p={'5px'}></Box>}
                            <ButtonOutline
                                as={RouterLink}
                                to={`/projectx/${year}`}
                                variant="light"
                            >
                                {year}
                            </ButtonOutline>
                        </Fragment>
                    ))}
                </Box>
            </VStack>
        </Box>
    )
}
