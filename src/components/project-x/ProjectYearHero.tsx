import React, { useState } from 'react'
import {
    Box,
    Text,
    VStack,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    useBreakpointValue,
} from '@chakra-ui/react'

const ProjectYearHero: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('Human-Computer Interaction')
    const fontSize = useBreakpointValue({ base: '3xl', md: '5xl' })

    const handleTabChange = (index: number) => {
        const tabNames = [
            'Human-Computer Interaction',
            'Human-Human Interaction',
        ]
        setSelectedTab(tabNames[index])
    }

    return (
        <Box
            background={'../../static/assets/project-x-gradient.jpeg'}
            marginTop={'100px'}
            bgGradient="linear(to-r, blue.800, purple.900)"
            padding="50px"
            fontFamily={'Tabular, sans-serif'}
        >
            <VStack alignItems="flex-start" spacing={4}>
                <Text fontSize="lg" color="gray.300">
                    2020 ML RESEARCH FOCUS
                </Text>
                <Text
                    fontSize={fontSize}
                    bgGradient="linear(to-r, purple.100, purple.500)"
                    bgClip="text"
                >
                    {selectedTab}
                </Text>
                <Tabs variant="enclosed" onChange={handleTabChange}>
                    <TabList>
                        <Tab>Human-Computer Interaction</Tab>
                        <Tab>Human-Human Interaction</Tab>
                    </TabList>
                </Tabs>

                <Text marginTop={'300px'} fontSize="2xl" color="white">
                    Prize Pool
                </Text>
                <Text fontSize="5xl" color="white">
                    $65,000
                </Text>
            </VStack>
        </Box>
    )
}

export default ProjectYearHero
