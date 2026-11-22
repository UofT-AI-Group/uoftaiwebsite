import type { IconType } from 'react-icons'
import {
    FaDiscord,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from 'react-icons/fa6'

export const DISCORD_URL = 'https://discord.gg/FU8QvACr7X'
export const INSTAGRAM_URL = 'https://instagram.com/uoftaigroup'
export const GENERAL_EMAIL = 'uoftaigroup@gmail.com'
export const PARTNERSHIPS_EMAIL = 'uoftaigrouppartnerships@gmail.com'
export const AI_REVIEW_URL = 'https://torontoaireview.framer.website/'

export type SiteLink = { label: string; to: string; description?: string }

export const NAV_GROUPS: { label: string; links: SiteLink[] }[] = [
    {
        label: 'About',
        links: [
            {
                label: 'What we run',
                to: '/#programs',
                description: 'ProjectX and ConferenceX',
            },
            {
                label: 'Our team',
                to: '/#team',
                description: 'The 2026–27 executive team',
            },
            {
                label: 'Partner with us',
                to: '/partner-with-us',
                description: 'Sponsor an event or the club',
            },
        ],
    },
    {
        label: 'Programs',
        links: [
            {
                label: 'ProjectX',
                to: '/projectx',
                description: 'Undergraduate ML research competition',
            },
            {
                label: 'ConferenceX',
                to: '/conferencex',
                description: 'Our yearly conference on AI',
            },
        ],
    },
    {
        label: 'News',
        links: [
            {
                label: 'Newsletter',
                to: '/newsletter',
                description: 'Updates from the club',
            },
            {
                label: 'AI Review',
                to: AI_REVIEW_URL,
                description: 'The Toronto AI Review',
            },
        ],
    },
]

export const SOCIAL_LINKS: { label: string; href: string; icon: IconType }[] = [
    { label: 'Discord', href: DISCORD_URL, icon: FaDiscord },
    { label: 'Instagram', href: INSTAGRAM_URL, icon: FaInstagram },
    { label: 'X', href: 'https://x.com/uoftai', icon: FaXTwitter },
    {
        label: 'LinkedIn',
        href: 'https://ca.linkedin.com/company/uaig-uoft',
        icon: FaLinkedinIn,
    },
]

export const isExternal = (to: string) => /^(https?:|mailto:)/.test(to)
