import type { Fact } from '@/components/kit/FactRow'
import type { LogoGroup } from '@/components/kit/LogoWall'
import type { Person } from '@/components/kit/Person'

/** A run of text, a link, or a phrase set in bold. */
export type Inline =
    string | { text: string; href: string } | { strong: string }

/** A single run, or several runs read as one sentence. */
export type Rich = Inline | Inline[]

/** A paragraph, or a bulleted list of runs. */
export type Block = Rich | { list: Rich[] }

export type Milestone = {
    /** Set large, e.g. "Oct 20" or "September 01". */
    date: string
    title: string
    detail?: string
    /**
     * The last day the milestone applies, as YYYY-MM-DD in Toronto time. Once
     * it passes the milestone shows as done; the first one still to come is
     * highlighted. Leave out on past cycles so every milestone reads as done.
     */
    until?: string
}

export type CycleEvent = {
    title: string
    date: string
    format: string
    location?: string
    description: string
}

export type Resource = {
    title: string
    description: string
    href: string
    /** Saved file name. Leave out for links that open a page instead. */
    download?: string
}

export type PeopleGroup = {
    /** Anchor id, also used to label the section. */
    id: string
    title: string
    lede?: Block[]
    /** Shown first with their full bio. */
    featured?: (Person & { bio: string })[]
    people?: Person[]
}

/**
 * One year of ProjectX. Sections render in a fixed order when present. Past
 * cycles keep the wording they were published with; `archived` is the only
 * text written after the event.
 */
export type ProjectXCycle = {
    year: number
    href: string
    /** The page description for search results and link previews. */
    description: string
    /** One line for the archive list. */
    summary: string
    /** Marks a past cycle with a banner linking to the current one. */
    archived?: {
        /** e.g. "ProjectX 2021 has ended." */
        title: string
        /** One sentence on anything known to have changed since. */
        note?: string
    }
    /** Shown above the theme, e.g. "2020 ML research focus". */
    themeLabel: string
    theme: string
    topics?: string[]
    status?: string
    intro?: Block[]
    facts?: Fact[]
    actions?: { label: string; href: string }[]
    streams?: {
        lede: string
        items: { title: string; description: string }[]
    }
    timeline?: { title: string; lede?: string; items: Milestone[] }
    events?: CycleEvent[]
    documents?: { title?: string; items: Resource[] }
    support?: {
        title: string
        items: { title: string; paragraphs: string[] }[]
    }
    people?: PeopleGroup[]
    /** The first group usually has no title of its own, so the heading names it. */
    logos?: { title: string; groups: LogoGroup[] }
    faq?: { question: string; answer: Block[] }[]
    contactEmail?: string
}
