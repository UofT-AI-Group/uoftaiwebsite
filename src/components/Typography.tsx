import { Heading, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import Typewriter from 'typewriter-effect'
import '../static/styles/conferenceX.css'

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
