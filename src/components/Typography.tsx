import { Heading } from '@chakra-ui/react'
import React from 'react'

export const LandingTitle = () => {
    return (
        <Heading fontWeight={'semibold'} size={'3xl'}>
            UofT AI: Advancing AI through
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
