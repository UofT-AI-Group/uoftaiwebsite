import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Tag } from '@/components/ui/tag'
import { wrap } from '@/lib/layout'
import { cn } from '@/lib/utils'
import { SmartLink } from './SmartLink'

/**
 * Marks a page about an event that has already happened. The page below keeps
 * its original wording, so this is the one place that says the details are
 * historical, and it points to the current edition.
 */
export const ArchiveBanner = ({
    title,
    children,
    link,
}: {
    /** What happened and when, e.g. "ConferenceX 2025 took place on January 25, 2025." */
    title: ReactNode
    children?: ReactNode
    link?: { label: string; href: string }
}) => (
    <aside
        aria-label="Archived page"
        className="border-b border-hair bg-raised"
    >
        <div
            className={cn(
                wrap,
                'flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-10',
            )}
        >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-4">
                <Tag className="self-start sm:self-auto">Archived</Tag>
                <p className="max-w-[80ch] font-sans text-sm/[1.55] text-prose">
                    <span className="text-fg">{title}</span> {children}
                </p>
            </div>
            {link && (
                <SmartLink
                    to={link.href}
                    className="group focus-ring inline-flex shrink-0 items-center gap-2 self-start text-sm text-fg sm:self-auto"
                >
                    {link.label}
                    <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-250 ease-out-soft group-hover:translate-x-1 motion-reduce:transition-none"
                    />
                </SmartLink>
            )}
        </div>
    </aside>
)
