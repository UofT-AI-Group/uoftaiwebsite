import { Box, VStack, Text, Flex, Stack } from '@chakra-ui/react'
import gradient from '../static/assets/2024gradient.jpg'
import { ButtonOutline } from './Button'

const ProjectX2024 = ({
    onClickCurrent,
    onClick2023,
    onClick2022,
    onClick2021,
    onClick2020,
    onClickLanding,
}: {
    onClickCurrent: () => void
    onClick2023: () => void
    onClick2022: () => void
    onClick2021: () => void
    onClick2020: () => void
    onClickLanding: () => void
}) => {
    return (
        <Box>
            <Box
                bgImage={gradient}
                bgPosition="50%"
                bgSize="cover"
                bgRepeat="no-repeat"
                minHeight="80vh"
                width="100%"
                mt={28}
                pt={[10, 58]}
                pl={[4, 16]}
                pr={[4, 16]}
            >
                <VStack alignItems="left" spacing={1} pb="20px">
                    <Text fontSize={['16px', '22px']} color="dark">
                        2024 ML RESEARCH FOCUS
                    </Text>
                    <Text
                        fontWeight="medium"
                        fontSize={[30, 60]}
                        fontFamily="Tabular, sans-serif"
                        color="dark"
                        m="20px 0px"
                    >
                        Multimodal AI
                    </Text>

                    <Flex flexWrap="wrap" mt="30px">
                        {[
                            'Knowledge Transfer',
                            'Cross-Modal Representation Learning',
                            'Handling Misalignment',
                        ].map((item, index) => (
                            <Box
                                key={index}
                                backgroundColor="rgba(80,80,80,.5)"
                                color="light"
                                p="8px"
                                borderRadius="6px"
                                m="4px"
                            >
                                {item}
                            </Box>
                        ))}
                    </Flex>

                    <Text fontSize={['16px', '22px']} color="dark" mt="10px">
                        Prize Pool
                    </Text>
                    <Text
                        fontWeight="medium"
                        fontSize={[30, 60]}
                        fontFamily="Tabular, sans-serif"
                        color="dark"
                    >
                        $10,000+
                    </Text>

                    <Text
                        fontWeight="regular"
                        fontSize={[16, 20]}
                        color="dark"
                        mt={['40px', '90px']}
                        mb="10px"
                    >
                        OTHER DETAILS
                    </Text>

                    {/* Responsive Button Section */}
                    <Stack
                        direction={['column', 'row']}
                        spacing={{ base: 2, md: 4 }}
                        justify="left"
                        align="center"
                        flexWrap="wrap"
                    >
                        <ButtonOutline variant="dark" onClick={onClickCurrent}>
                            2024
                        </ButtonOutline>
                        <ButtonOutline variant="dark" onClick={onClick2023}>
                            2023
                        </ButtonOutline>
                        <ButtonOutline variant="dark" onClick={onClick2022}>
                            2022
                        </ButtonOutline>
                        <ButtonOutline variant="dark" onClick={onClick2021}>
                            2021
                        </ButtonOutline>
                        <ButtonOutline variant="dark" onClick={onClick2020}>
                            2020
                        </ButtonOutline>
                        <ButtonOutline variant="dark" onClick={onClickLanding}>
                            Landing Page
                        </ButtonOutline>
                    </Stack>
                </VStack>
            </Box>
            <Box backgroundColor="light">
                <Text
                    fontSize={['40px', '60px']}
                    textAlign="center"
                    color="dark"
                    p="40px 0"
                >
                    More info coming soon!
                </Text>
            </Box>
        </Box>
    )
}

export default ProjectX2024
