import { Heading, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'

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
