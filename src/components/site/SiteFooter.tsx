import { Link } from 'react-router'
import { FaEnvelope } from 'react-icons/fa6'
import {
    AI_REVIEW_URL,
    GENERAL_EMAIL,
    PARTNERSHIPS_EMAIL,
    SOCIAL_LINKS,
    isExternal,
} from '@/data/site'
import { wrap } from '@/lib/layout'
import { cn } from '@/lib/utils'
import DotField from './DotField'
import Wordmark from './Wordmark'

const COLUMNS = [
    {
        label: 'Programs',
        links: [
            { label: 'ConferenceX', to: '/conferencex' },
            { label: 'ProjectX', to: '/projectx' },
            { label: 'Partner with us', to: '/partner-with-us' },
        ],
    },
    {
        label: 'News',
        links: [
            { label: 'Newsletter', to: '/newsletter' },
            { label: 'AI Review', to: AI_REVIEW_URL },
        ],
    },
]

const SOCIALS = [
    ...SOCIAL_LINKS,
    {
        label: 'Email UofT AI',
        href: `mailto:${GENERAL_EMAIL}`,
        icon: FaEnvelope,
    },
]

const PRESIDENT_EMAILS = [
    'c.hundey@mail.utoronto.ca',
    'hana.greenberg@mail.utoronto.ca',
]

const COPYRIGHT_YEAR = new Date().getFullYear()

const columnLink =
    'link-grow focus-ring inline-block max-w-full py-1.5 text-[15px]/[1.5] max-sm:py-2.5'
const emailLink =
    'link-grow focus-ring inline-block max-w-full py-1.5 text-sm/[1.5] [overflow-wrap:anywhere]'

const SiteFooter = () => (
    <footer className="relative border-t border-hair bg-ink font-mono text-fg antialiased">
        <div
            className={cn(
                wrap,
                'grid grid-cols-2 gap-x-8 gap-y-12 pt-16 pb-12 sm:grid-cols-3 sm:pt-22 sm:pb-16 lg:grid-cols-[5fr_2fr_2fr_4fr] lg:gap-12',
            )}
        >
            <div className="col-span-full lg:col-span-1">
                <Wordmark className="text-[22px] tracking-[-0.02em]" />
                <p className="mt-4 max-w-[36ch] font-sans text-[15px]/[1.6] text-[#b3b3b9]">
                    The University of Toronto Artificial Intelligence Group. We
                    bring students together for AI research, competitions and
                    events.
                </p>
                <ul
                    aria-label="UofT AI social links"
                    className="mt-7 flex gap-2"
                >
                    {SOCIALS.map(({ label, href, icon: Icon }) => (
                        <li key={label}>
                            <a
                                href={href}
                                aria-label={label}
                                title={label}
                                className="focus-ring inline-flex size-11 items-center justify-center border border-edge text-[17px] text-[#d6d6db] transition-colors duration-250 hover:border-brand hover:text-white motion-reduce:transition-none"
                            >
                                <Icon aria-hidden="true" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {COLUMNS.map((column) => (
                <nav
                    key={column.label}
                    aria-label={`Footer ${column.label.toLowerCase()}`}
                    className="flex min-w-0 flex-col items-start"
                >
                    <h2 className="mb-3.5 text-[13px] text-dim">
                        {column.label}
                    </h2>
                    {column.links.map(({ label, to }) =>
                        isExternal(to) ? (
                            <a key={to} href={to} className={columnLink}>
                                {label} <span aria-hidden="true">↗</span>
                            </a>
                        ) : (
                            <Link key={to} to={to} className={columnLink}>
                                {label}
                            </Link>
                        ),
                    )}
                </nav>
            ))}

            <div className="col-span-full flex min-w-0 flex-col items-start sm:col-span-1">
                <h2 className="mb-3.5 text-[13px] text-dim">Contact</h2>
                <dl className="flex flex-col gap-3.5">
                    {[
                        ['General', GENERAL_EMAIL],
                        ['Partnerships', PARTNERSHIPS_EMAIL],
                    ].map(([label, email]) => (
                        <div key={label}>
                            <dt className="font-sans text-[13px] text-[#6f6f76]">
                                {label}
                            </dt>
                            <dd>
                                <a
                                    href={`mailto:${email}`}
                                    className={emailLink}
                                >
                                    {email}
                                </a>
                            </dd>
                        </div>
                    ))}
                </dl>
                <details className="group mt-3.5">
                    <summary className="focus-ring inline-flex min-h-11 cursor-pointer list-none items-center gap-2 font-sans text-[13px] text-dim hover:text-fg [&::-webkit-details-marker]:hidden">
                        Presidents
                        <span
                            aria-hidden="true"
                            className="font-mono text-[15px] transition-transform duration-250 group-open:rotate-45 motion-reduce:transition-none"
                        >
                            +
                        </span>
                    </summary>
                    {PRESIDENT_EMAILS.map((email) => (
                        <a
                            key={email}
                            href={`mailto:${email}`}
                            className={cn(emailLink, 'block w-fit')}
                        >
                            {email}
                        </a>
                    ))}
                </details>
            </div>
        </div>

        <div
            className={cn(
                wrap,
                'flex flex-wrap items-center justify-between gap-x-6 border-t border-hair py-3 text-[13px] text-dim max-sm:flex-col max-sm:items-start',
            )}
        >
            <p>&copy; {COPYRIGHT_YEAR} UofT AI</p>
            <a
                href="https://web.cs.toronto.edu"
                className="focus-ring inline-block py-3 transition-colors duration-200 hover:text-fg"
            >
                UofT Computer Science <span aria-hidden="true">↗</span>
            </a>
        </div>

        <div className="relative h-35 overflow-hidden sm:h-50">
            <DotField className="absolute inset-0 size-full [mask-image:linear-gradient(to_bottom,transparent,#000_80%)]" />
        </div>
    </footer>
)

export default SiteFooter
