import type { ReactNode } from 'react'
import { wrap } from '@/lib/layout'
import { cn } from '@/lib/utils'
import { FactRow } from './FactRow'
import type { Fact } from './FactRow'
import type { Photo } from './MediaRow'
import { RailDot } from './RailDot'

type PageHeroProps = {
    /**
     * `upcoming` pulses the status dot and tints the edition numeral with the
     * brand colour. `recap` is for an edition that has happened.
     */
    variant: 'upcoming' | 'recap'
    /** The page or program name, e.g. "ConferenceX". */
    title: string
    /** Set very large behind the content and read as part of the title. */
    edition?: string | number
    /** The edition's theme or a one-line summary. */
    subtitle?: ReactNode
    /** One line of state, e.g. "Applications open until October 20". */
    status?: ReactNode
    lede?: ReactNode
    /** Dates, venue and similar details. */
    facts?: Fact[]
    actions?: ReactNode
    photo?: Photo
}

/**
 * The opening of an inner page. The edition numeral is the one loud element:
 * it sits outlined behind the content and runs off the bottom edge, on the
 * side opposite the text. With a photo it moves under the text column and
 * shrinks to fit there, since the photo already balances the layout.
 */
export const PageHero = ({
    variant,
    title,
    edition,
    subtitle,
    status,
    lede,
    facts,
    actions,
    photo,
}: PageHeroProps) => (
    <header className="relative isolate overflow-hidden border-b border-hair pt-(--site-header-height)">
        <div
            className={cn(
                wrap,
                'grid gap-12 pt-16 pb-[clamp(140px,17vw,260px)] sm:pt-20',
                photo &&
                    'lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:pb-16',
            )}
        >
            <div className="flex min-w-0 flex-col">
                {status && (
                    <p className="mb-9 inline-flex items-center gap-3 text-[13px] text-[#d2d2d7]">
                        <RailDot
                            state={variant === 'upcoming' ? 'next' : 'past'}
                        />
                        {status}
                    </p>
                )}
                <h1 className="text-[clamp(44px,7vw,104px)]/[0.95] font-normal tracking-[-0.045em]">
                    {title}
                    {edition !== undefined && (
                        <>
                            <span className="sr-only"> </span>
                            <span
                                className={cn(
                                    'pointer-events-none absolute bottom-0 -z-1 translate-y-[24%] font-light tracking-[-0.06em] whitespace-nowrap text-transparent tabular-nums select-none',
                                    photo
                                        ? 'left-[max(16px,calc((100%-1200px)/2))] text-[clamp(120px,18vw,260px)]/[0.8]'
                                        : 'right-[max(16px,calc((100%-1200px)/2))] text-[clamp(150px,29vw,440px)]/[0.8]',
                                    variant === 'upcoming'
                                        ? '[-webkit-text-stroke:1px_rgb(186_118_225/0.6)]'
                                        : '[-webkit-text-stroke:1px_var(--edge)]',
                                )}
                            >
                                {edition}
                            </span>
                        </>
                    )}
                </h1>
                {subtitle && (
                    <p className="mt-6 max-w-[26ch] text-[clamp(22px,2.6vw,36px)]/[1.15] tracking-[-0.02em] text-balance">
                        {subtitle}
                    </p>
                )}
                {lede && (
                    <div className="copy mt-6 max-w-115 text-lg/[1.55]">
                        {lede}
                    </div>
                )}
                {facts && <FactRow facts={facts} size="sm" className="mt-9" />}
                {actions && (
                    <div className="mt-10 flex flex-wrap gap-3">{actions}</div>
                )}
            </div>
            {photo && (
                <img
                    src={photo.src}
                    srcSet={photo.srcSet}
                    sizes="(min-width: 1024px) 480px, 100vw"
                    alt={photo.alt}
                    className="aspect-[4/3] w-full self-end rounded-sm bg-raised object-cover lg:aspect-[4/5]"
                    style={{ objectPosition: photo.position }}
                />
            )}
        </div>
    </header>
)
