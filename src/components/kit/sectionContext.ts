import { createContext, useContext } from 'react'

export type SectionTone = 'ink' | 'raised' | 'white'
export type SectionLayout = 'stack' | 'split'

type SectionContextValue = {
    titleId?: string
    tone: SectionTone
    layout: SectionLayout
}

export const SectionContext = createContext<SectionContextValue>({
    tone: 'ink',
    layout: 'stack',
})

export const useSection = () => useContext(SectionContext)
