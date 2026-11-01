import { Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import Typewriter from 'typewriter-effect'
import '../static/styles/conferenceX.css'

const LANDING_TITLE_WORDS = ['ProjectX', 'ConferenceX', 'LearnAI']

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
                <Typewriter
                    options={{ delay: 100, deleteSpeed: 100, loop: true }}
                    onInit={(typewriter) => {
                        for (const word of LANDING_TITLE_WORDS) {
                            typewriter
                                .pauseFor(1250)
                                .typeString(word)
                                .pauseFor(3500)
                                .deleteAll()
                        }
                        typewriter.start()
                    }}
                />
            </Text>
        </Heading>
    )
}

export const SectionHeading = ({ children }: { children: ReactNode }) => {
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

export const ProjectXResearchThemeTitle = () => {
    return (
        <Heading
            fontFamily={'Tabular, sans-serif'}
            fontWeight={'medium'}
            fontSize={[30, 60]}
            color={'light'}
            m={'20px 0px'}
        >
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('What is Progress?').start()
                }}
            />
        </Heading>
    )
}
