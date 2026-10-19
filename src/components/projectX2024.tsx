import { Box, VStack, Text, Flex } from '@chakra-ui/react'
import gradient from '../static/assets/2024gradient.webp'
import { ButtonOutline } from './Button'

export default function ProjectX2024() {
    return (
        <Box fontFamily={'Tabular, sans-serif'}>
            <Box
                bgImage={gradient}
                bgPosition={'50%'}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                minHeight={'80vh'}
                width={'100%'}
                mt={28}
                pt={[10, 58]}
                pl={[4, 16]}
                pr={[4, 16]}
            >
                <VStack alignItems={'left'} spacing={1} pb={'20px'}>
                    <Text fontSize={['16px', '22px']} color={'dark'}>
                        2024 ML RESEARCH FOCUS
                    </Text>
                    <Text
                        fontWeight={'medium'}
                        fontSize={[30, 60]}
                        color={'dark'}
                        m={'20px 0px'}
                    >
                        Multimodal AI
                    </Text>

                    <Flex flexWrap={'wrap'} mt={'30px'}>
                        <Box
                            backgroundColor={'rgba(80,80,80,.5)'}
                            color={'light'}
                            p={'8px'}
                            borderRadius={'6px'}
                            m={'4px'}
                        >
                            Knowledge Transfer
                        </Box>
                        <Box
                            backgroundColor={'rgba(80,80,80,.5)'}
                            color={'light'}
                            p={'8px'}
                            borderRadius={'6px'}
                            m={'4px'}
                        >
                            Cross-Modal Representation Learning
                        </Box>
                        <Box
                            backgroundColor={'rgba(80,80,80,.5)'}
                            color={'light'}
                            p={'8px'}
                            borderRadius={'6px'}
                            m={'4px'}
                        >
                            Handling Misalignment
                        </Box>
                    </Flex>

                    <Text
                        fontSize={['16px', '22px']}
                        color={'dark'}
                        mt={'10px'}
                    >
                        Prize Pool
                    </Text>

                    <Text
                        fontWeight={'medium'}
                        fontSize={[30, 60]}
                        color={'dark'}
                    >
                        $10,000+
                    </Text>

                    <Text
                        fontWeight={'regular'}
                        fontSize={[16, 20]}
                        color={'dark'}
                        mt={['40px', '90px']}
                        mb={'10px'}
                    >
                        OTHER DETAILS
                    </Text>

                    {/* <Box>
                        <ButtonOutline variant="dark" onClick={onClick2023}>
                            2023
                        </ButtonOutline>
                        <Box as="span" p={'5px'}></Box>
                        <ButtonOutline variant="dark" onClick={onClickLanding}>
                            Landing Page
                        </ButtonOutline>
                    </Box> */}
                </VStack>
            </Box>
            <Box backgroundColor={'light'}>
                <Text
                    fontSize={['40px', '60px']}
                    textAlign={'center'}
                    color={'dark'}
                    p={'40px 0'}
                >
                    More info coming soon!
                </Text>
            </Box>
        </Box>
    )
}
