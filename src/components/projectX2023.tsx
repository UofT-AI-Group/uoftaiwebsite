import { Box, VStack, Text, Flex, SimpleGrid, Image } from '@chakra-ui/react'
import gradient from '../static/assets/dark-gradient.webp'
import { ButtonOutline } from './Button'
import carnegie from '../static/assets/carnegie.webp'
import cornell from '../static/assets/cornell.png'
import duke from '../static/assets/duke.png'
import harvard from '../static/assets/Harvard-Logo.png'
import irvine from '../static/assets/irvine.png'
import jhu from '../static/assets/Johns-Hopkins-University-Logo.png'
import laurier from '../static/assets/laurier.png'
import mcgill from '../static/assets/mcgill.jpeg'
import montreal from '../static/assets/montreal.png'
import northwestern from '../static/assets/northwestern.png'
import queens from '../static/assets/queens.png'
import singapore from '../static/assets/singapore.png'
import texas from '../static/assets/texas.svg'
import ubc from '../static/assets/UBC.png'
import uofa from '../static/assets/uofa.png'
import uoft from '../static/assets/uoft.png'
import upenn from '../static/assets/UPenn-Logo.png'
import uwash from '../static/assets/uwash.png'
import warwick from '../static/assets/warwick.jpg'
import waterloo from '../static/assets/waterloo.png'
import wisonconsin from '../static/assets/wisonconsin.png'
import timeline from '../static/assets/2023timeline.png'
import codeOfConduct from '../static/assets/codeofconduct.pdf'
import guidelines from '../static/assets/Submission Guidelines 2023 (1).pdf'
import problem from '../static/assets/Problem_Statement_ProjectX_1.pdf'

export default function ProjectX2023() {
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
                    <Text fontSize={['16px', '22px']} color={'light'}>
                        2023 ML RESEARCH FOCUS
                    </Text>
                    <Text
                        fontWeight={'medium'}
                        fontSize={[30, 60]}
                        color={'light'}
                        m={'20px 0px'}
                    >
                        Computational Efficiency
                    </Text>

                    <Flex flexWrap={'wrap'} mt={'30px'}>
                        <Box
                            backgroundColor={'rgba(80,80,80,.5)'}
                            color={'light'}
                            p={'8px'}
                            borderRadius={'6px'}
                            m={'4px'}
                        >
                            Human-Computer Interaction
                        </Box>
                        <Box
                            backgroundColor={'rgba(80,80,80,.5)'}
                            color={'light'}
                            p={'8px'}
                            borderRadius={'6px'}
                            m={'4px'}
                        >
                            Human-Human Interaction
                        </Box>
                    </Flex>

                    <Text
                        fontSize={['16px', '22px']}
                        color={'light'}
                        mt={'10px'}
                    >
                        Prize Pool
                    </Text>

                    <Text
                        fontWeight={'medium'}
                        fontSize={[30, 60]}
                        color={'light'}
                    >
                        $10,000+
                    </Text>

                    <Text
                        fontWeight={'regular'}
                        fontSize={[16, 20]}
                        color={'light'}
                        mt={['40px', '90px']}
                        mb={'10px'}
                    >
                        OTHER DETAILS
                    </Text>
                </VStack>
            </Box>

            <SimpleGrid
                columns={[1, 1, 1, 3]}
                justifyItems={'center'}
                bgColor={'dark'}
                color={'light'}
            >
                <VStack
                    alignItems={'left'}
                    p={'20px'}
                    justify={'space-between'}
                    height={'400px'}
                >
                    <Text fontSize={['28px', '36px']} fontWeight={'medium'}>
                        Code of Conduct
                    </Text>
                    <Text fontSize={['20px', '24px']}>
                        Read about our code of conduct throughout the ProjectX
                        2023 participation.
                    </Text>
                    <Box>
                        <a href={codeOfConduct} target="_blank">
                            <ButtonOutline variant="light">
                                View Code of Conduct
                            </ButtonOutline>
                        </a>
                    </Box>
                </VStack>

                <VStack
                    alignItems={'left'}
                    p={'20px'}
                    justify={'space-between'}
                    borderLeft={['', '', '', '2px solid white']}
                    borderRight={['', '', '', '2px solid white']}
                    borderTop={[
                        '2px solid white',
                        '2px solid white',
                        '2px solid white',
                        '0px',
                    ]}
                    borderBottom={[
                        '2px solid white',
                        '2px solid white',
                        '2px solid white',
                        '0px',
                    ]}
                    height={'400px'}
                >
                    <Text fontSize={['28px', '36px']} fontWeight={'medium'}>
                        Submission Guidelines
                    </Text>
                    <Text fontSize={['20px', '24px']}>
                        Read our submission-related criteria and research
                        expectations.
                    </Text>
                    <Box>
                        <a href={guidelines} target="_blank">
                            <ButtonOutline variant="light">
                                View Guidelines
                            </ButtonOutline>
                        </a>
                    </Box>
                </VStack>

                <VStack
                    alignItems={'left'}
                    p={'20px'}
                    justify={'space-between'}
                    height={'400px'}
                >
                    <Text fontSize={['28px', '36px']} fontWeight={'medium'}>
                        Problem Definition & Scope
                    </Text>
                    <Text fontSize={['20px', '24px']}>
                        Read about the ProjectX 2023 themes and background
                        information.
                    </Text>
                    <Box>
                        <a href={problem} target="_blank">
                            <ButtonOutline variant="light">
                                View Problem Definition
                            </ButtonOutline>
                        </a>
                    </Box>
                </VStack>
            </SimpleGrid>
            <Box p={'20px'}>
                <Text fontSize={'40px'}>Participating Teams</Text>
                <Flex flexWrap={'wrap'} justifyContent={'center'} gap={'40px'}>
                    <Image src={uoft} maxH={'150px'} />
                    <Image src={waterloo} maxH={'150px'} />
                    <Image src={laurier} maxH={'150px'} />
                    <Image src={queens} maxH={'150px'} />
                    <Image src={ubc} maxH={'150px'} />
                    <Image src={uofa} maxH={'150px'} />
                    <Image src={mcgill} maxH={'150px'} />
                    <Image src={montreal} maxH={'150px'} />
                    <Image src={harvard} maxH={'150px'} />
                    <Image src={cornell} maxH={'150px'} />
                    <Image src={duke} maxH={'150px'} />
                    <Image src={upenn} maxH={'150px'} />
                    <Image src={carnegie} maxH={'150px'} />
                    <Image src={jhu} maxH={'150px'} />
                    <Image src={irvine} maxH={'150px'} />
                    <Image src={uwash} maxH={'150px'} />
                    <Image src={northwestern} maxH={'150px'} />
                    <Image src={texas} maxH={'150px'} />
                    <Image src={warwick} maxH={'150px'} />
                    <Image src={wisonconsin} maxH={'150px'} />
                    <Image src={singapore} maxH={'150px'} />
                </Flex>
            </Box>

            <Box bgColor={'dark'} p={'20px'} pt={['40px', '60px']}>
                <Text as={'span'} color={'white'} fontSize={['24px', '36px']}>
                    PROJECT
                    <Text as={'span'} color={'brand'}>
                        X
                    </Text>{' '}
                    2023 TIMELINE
                </Text>
                <Image src={timeline} w={'100%'} maxW={'1200px'} m={'0 auto'} />
            </Box>
        </Box>
    )
}
