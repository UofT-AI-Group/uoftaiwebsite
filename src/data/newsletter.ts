import type { Photo } from '@/components/kit/MediaRow'
import welcome2024 from '../static/assets/newletters/issue1.webp'

export const SUBSTACK_URL = 'https://substack.com/@uoftaigroup'

export type NewsletterIssue = {
    title: string
    /** As it should read on the page, e.g. "September 2, 2024". */
    date: string
    description: string
    href: string
    photo?: Photo
}

/** Newest first. Add new issues to the top. */
export const ISSUES: NewsletterIssue[] = [
    {
        title: 'Welcome to UofT AI 2024–2025',
        date: 'September 2, 2024',
        description:
            'Quick updates on AI news, events and student highlights, plus research and opportunities at UofT.',
        href: 'https://mailchi.mp/24a2b06173ba/welcome-to-uoft-ais-2024-2025-neural-notes',
        photo: { src: welcome2024, alt: '' },
    },
]
