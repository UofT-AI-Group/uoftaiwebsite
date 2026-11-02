import type { IconType } from 'react-icons'
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'

export interface SocialLink {
    label: string
    href: string
    icon: IconType
}

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/uoftaigroup/',
        icon: FaInstagram,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/uaig-uoft/',
        icon: FaLinkedin,
    },
    {
        label: 'X',
        href: 'https://x.com/uoft_ai',
        icon: FaXTwitter,
    },
    {
        label: 'Email',
        href: 'mailto:uoftaigroup@gmail.com',
        icon: FiMail,
    },
]

export const INSTAGRAM_URL = SOCIAL_LINKS[0].href
export const NEWSLETTER_URL = 'https://substack.com/@uoftaigroup'
export const PARTNERSHIPS_EMAIL = 'uoftaigrouppartnerships@gmail.com'
