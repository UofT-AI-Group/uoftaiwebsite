import type { LucideIcon } from 'lucide-react'
import type { Fact } from '@/components/kit/FactRow'
import type { Question } from '@/components/kit/Faq'
import type { LogoGroup } from '@/components/kit/LogoWall'
import type { Photo } from '@/components/kit/MediaRow'
import type { Person } from '@/components/kit/Person'

export type RecapLink = { label: string; href: string }

export type ScheduleItem = {
    start: string
    end: string
    title: string
    tag: string
    location: string
    /** Who is speaking or leading the session. */
    detail?: string
    moderator?: string
}

export type ScheduleDay = {
    id: string
    /** Short tab label, e.g. "Day 1 · Sat, Jan 24". */
    label: string
    title: string
    summary: string
    items: ScheduleItem[]
}

export type Testimonial = { quote: string; name: string; role: string }

/**
 * Everything a past ConferenceX page shows. The copy is kept as originally
 * published; `archive` is the only text written after the event.
 * Optional blocks are left out for editions that didn't have them, and the
 * page renders blocks in this order.
 */
export type Recap = {
    year: number
    path: string
    /** One line for the archive list. */
    summary: string
    description: string
    archive: {
        /** What happened and when, as one sentence. */
        title: string
        /** Anything known to have changed from the published program. */
        note?: string
    }
    hero: {
        subtitle: string
        /** The date line as originally published. */
        status?: string
        lede?: string
        facts?: Fact[]
        action?: RecapLink
    }
    intro: {
        title: string
        paragraphs: string[]
        photo?: Photo
        link?: RecapLink
    }
    theme?: {
        title: string
        paragraphs: string[]
        statement: { title: string; text: string }
        days: { title: string; text: string }[]
    }
    highlights: {
        title: string
        items: { title: string; text: string; photo: Photo }[]
    }
    offerings?: {
        title: string
        items: { title: string; text: string; icon: LucideIcon }[]
    }
    speakers: {
        title: string
        lede?: string
        people: Person[]
        initialCount?: number
        noun?: string
    }
    testimonials?: { title: string; lede?: string; items: Testimonial[] }
    faq?: { title: string; items: Question[] }
    schedule?: { title: string; lede?: string; days: ScheduleDay[] }
    sponsors: { title: string; groups: LogoGroup[] }
}

/** The edition that hasn't happened yet. */
export type UpcomingEdition = {
    year: number
    path: string
    description: string
    /** Labelled as proposed until the program is confirmed. */
    theme: string
    status: string
    lede: string
}
