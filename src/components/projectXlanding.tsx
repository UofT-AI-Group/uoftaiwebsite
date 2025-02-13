import { Box, VStack, Text, Stack } from '@chakra-ui/react'
import gradient from '../static/assets/dark gradient.png'
import { ButtonOutline } from '../components/Button'

const ProjectXLanding = ({
    onClick2023,
    onClick2022,
    onClick2021,
    onClick2020,
    onClickCurrent,
}: {
    onClick2023: () => void
    onClick2022: () => void
    onClick2021: () => void
    onClick2020: () => void
    onClickCurrent: () => void
}) => {
    return (
        <Box
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
                        fontFamily={'Tabular, sans-serif'}
                        color={'light'}
                    >
                        Project
                    </Text>
                    <Text
                        as={'span'}
                        fontWeight={'medium'}
                        fontSize={[30, 60]}
                        fontFamily={'Tabular, sans-serif'}
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
                    Designed and run by UofT AI, ProjectX is a five-month long
                    machine learning research competition.
                    <br />
                    Final papers will be judged by a panel of academics and
                    industry experts.
                </Text>

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

                <Stack
                    direction={['column', 'row']}
                    spacing={{ base: 2, md: 4 }}
                    justify="left"
                    align="center"
                    flexWrap="wrap"
                >
                    <ButtonOutline variant="light" onClick={onClickCurrent}>
                        2024
                    </ButtonOutline>
                    <Box as="span" p={'5px'}></Box>
                    <ButtonOutline variant="light" onClick={onClick2023}>
                        2023
                    </ButtonOutline>
                    <Box as="span" p={'5px'}></Box>
                    <ButtonOutline variant="light" onClick={onClick2022}>
                        2022
                    </ButtonOutline>
                    <Box as="span" p={'5px'}></Box>
                    <ButtonOutline variant="light" onClick={onClick2021}>
                        2021
                    </ButtonOutline>
                    <Box as="span" p={'5px'}></Box>
                    <ButtonOutline variant="light" onClick={onClick2020}>
                        2020
                    </ButtonOutline>
                </Stack>
            </VStack>
        </Box>
    )
}

export default ProjectXLanding
