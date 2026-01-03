import { Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Typewriter from 'typewriter-effect'
import CSS from 'csstype'
import '../static/styles/conferenceX.css'

export const LandingTitle = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })

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
            {isMobile && <br />}
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
        <Heading
            fontSize={[24, 32]}
            fontWeight={'medium'}
            fontFamily={'Tabular, sans-serif'}
            _firstLetter={{
                textDecoration: 'underline',
            }}
        >
            {children}
        </Heading>
    )
}

export const PartnerTitle = () => {
    return (
        <Heading
            fontWeight={'medium'}
            fontSize={[50, 70]}
            fontFamily={'Tabular, sans-serif'}
            width={'100%'}
        >
            <Text as={'span'}>Become a </Text>
            <Text as={'span'} color={'brand'}>
                UofT AI
            </Text>
            <Text as={'span'}> Partner </Text>
        </Heading>
    )
}

export const ConferenceXTitle = () => {
    const displayStyle: CSS.Properties = {
        display: 'inline',
    }
    return (
        <Heading
            fontWeight={'medium'}
            fontSize={[30, 48]}
            fontFamily={'Tabular, sans-serif'}
            display={'inline'}
            textAlign={'center'}
        >
            <Text as={'span'} color={'light'}>
                Welcome To:
            </Text>
            <Text as={'span'} color={'brand'}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('ConferenceX').start()
                    }}
                />
            </Text>
        </Heading>
    )
}

export const LaunchStudioTitle = () => {
    return (
        <Heading
            fontWeight={'medium'}
            fontSize={[30, 48]}
            fontFamily={'Tabular, sans-serif'}
            display={'inline'}
            textAlign={'center'}
        >
            <Text as={'span'} color={'light'}>
                Welcome To:
            </Text>
            <Text as={'span'} color={'brand'}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Launch Studio').start()
                    }}
                />
            </Text>
        </Heading>
    )
}
