import React from 'react'
import { Box, Text, VStack, Button, HStack } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'

const ProjectXComponent: React.FC = () => {
    const { year } = useParams<{ year: string }>()
    const navigate = useNavigate()

    const handleButtonClick = (year: string) => {
        navigate(`/projectx/${year}`)
    }

    return (
        <Box
            minHeight="100vh"
            bgGradient="linear(to-r, pink.500, blue.900)"
            padding="50px"
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            fontFamily={'Tabular, sans-serif'}
        >
            <VStack alignItems="center" spacing={6}>
                <Box textAlign="center" mb={6}>
                    <Text
                        fontSize="6xl"
                        bgGradient="linear(to-r, purple.400, purple.800)"
                        bgClip="text"
                        color={'white'}
                        mb={6}
                    >
                        Project
                        <Text color={'#BA76E1'} display={'inline'}>
                            X
                        </Text>{' '}
                        {year}
                    </Text>
                    <Text
                        fontSize="xl"
                        color="white"
                        display={'block'}
                        paddingX={{ base: '0px', md: '100px' }} // Responsive padding
                        margin={{ base: '0px', md: 'initial' }} // Remove margin for smaller screens
                    >
                        Designed and run by UofT AI, ProjectX is a five-month
                        long machine learning research competition. Final papers
                        will be judged by a panel of academics and industry
                        experts.
                    </Text>
                </Box>
                <Box textAlign="center" mb={6}>
                    <Text fontSize="xl" color="white" mb={6}>
                        PAST EVENTS
                    </Text>
                    <HStack spacing={4} justifyContent="center">
                        {['2020', '2021', '2022', '2023'].map((year) => (
                            <Button
                                key={year}
                                variant="outline"
                                color={'white'}
                                borderRadius={'0px'}
                                onClick={() => handleButtonClick(year)}
                            >
                                {year}
                            </Button>
                        ))}
                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default ProjectXComponent
