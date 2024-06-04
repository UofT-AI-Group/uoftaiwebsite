import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

export const LandingTitle = () => {
    return (
        <Heading
            fontWeight={'medium'}
            fontSize={[30, 48]}
            display={'inline'}
            fontFamily={'Tabular, sans-serif'}
        >
            <Text as={'span'} color={'brand'}>
                UofT AI
            </Text>
            <Text as={'span'}>: Advancing AI through </Text>
            <Text as={'span'} color={'brand'}>
                <ReactTypingEffect
                    text={['ProjectX', 'ConferenceX', 'LearnAI']}
                    speed={100}
                    eraseSpeed={100}
                    typingDelay={1250}
                    eraseDelay={3500}
                />
            </Text>
        </Heading>
    )
}

export const SectionHeading = ({ children }: { children: React.ReactNode }) => {
    return (
        <Heading as="h2" size="2xl">
            {children}
        </Heading>
    )
}
