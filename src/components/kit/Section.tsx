import { useId } from 'react'
import type { ComponentProps, ReactNode } from 'react'
import { cva } from 'class-variance-authority'
import { wrap } from '@/lib/layout'
import { cn } from '@/lib/utils'
import { SectionContext, useSection } from './sectionContext'
import type { SectionLayout, SectionTone } from './sectionContext'

const sectionVariants = cva('', {
    variants: {
        tone: {
            ink: '',
            raised: 'bg-raised',
            white: 'bg-white text-ink',
        },
        spacing: {
            default: 'py-20 lg:py-30',
            none: '',
        },
    },
})

type SectionProps = Omit<ComponentProps<'section'>, 'title'> & {
    tone?: SectionTone
    /** `split` pins the heading on the left while the content scrolls past it. */
    layout?: SectionLayout
    /** Usually a `SectionHeading`. The section is labelled by it. */
    heading?: ReactNode
    /**
     * `none` drops the default padding so `className` can set its own.
     * Overriding a single side isn't enough, because the default's large
     * breakpoint padding would still apply on wide screens.
     */
    spacing?: 'default' | 'none'
}

/**
 * A full-width band of the page with the site's content width inside it.
 * Spacing defaults to the homepage rhythm and can be overridden with
 * `className`.
 */
export const Section = ({
    id,
    tone = 'ink',
    layout = 'stack',
    heading,
    spacing = 'default',
    className,
    children,
    ...props
}: SectionProps) => {
    const autoId = useId()
    const titleId = heading ? `${id ?? autoId}-title` : undefined
    const split = layout === 'split' && heading

    return (
        <SectionContext value={{ titleId, tone, layout }}>
            <section
                id={id}
                aria-labelledby={titleId}
                className={cn(sectionVariants({ tone, spacing }), className)}
                {...props}
            >
                {split ? (
                    <div
                        className={cn(
                            wrap,
                            'grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16',
                        )}
                    >
                        <div className="lg:sticky lg:top-[calc(var(--site-header-height)+32px)] lg:self-start">
                            {heading}
                        </div>
                        <div className="min-w-0 *:first:mt-0">{children}</div>
                    </div>
                ) : (
                    <div className={wrap}>
                        {heading}
                        {children}
                    </div>
                )}
            </section>
        </SectionContext>
    )
}

const headingVariants = cva('font-normal tracking-[-0.03em] text-balance', {
    variants: {
        size: {
            sm: 'max-w-205 text-[clamp(26px,2.6vw,38px)]/[1.1]',
            md: 'max-w-205 text-[clamp(30px,4vw,56px)]/[1.05]',
            lg: 'text-[clamp(36px,6vw,88px)]/[1]',
        },
    },
})

type SectionHeadingProps = {
    children: ReactNode
    /** Short context line drawn with the brand rule. Leave it out when the title says enough. */
    kicker?: string
    lede?: ReactNode
    /** A link or button that sits at the end of the heading row on wide screens. */
    action?: ReactNode
    size?: 'sm' | 'md' | 'lg'
    as?: 'h1' | 'h2'
    className?: string
    titleClassName?: string
}

export const SectionHeading = ({
    children,
    kicker,
    lede,
    action,
    size,
    as: Title = 'h2',
    className,
    titleClassName,
}: SectionHeadingProps) => {
    const { titleId, tone, layout } = useSection()
    const fallbackId = useId()
    const onWhite = tone === 'white'

    return (
        <div
            className={cn(
                action && 'flex flex-wrap items-end justify-between gap-6',
                className,
            )}
        >
            <div>
                {kicker && (
                    <p className={cn('kicker mb-7', onWhite && 'text-ink/60')}>
                        {kicker}
                    </p>
                )}
                <Title
                    id={titleId ?? fallbackId}
                    className={cn(
                        headingVariants({
                            size: size ?? (layout === 'split' ? 'sm' : 'md'),
                        }),
                        titleClassName,
                    )}
                >
                    {children}
                </Title>
                {lede && (
                    <div
                        className={cn(
                            'copy mt-5 max-w-[60ch] text-[17px]/[1.6]',
                            onWhite && 'text-ink/70',
                        )}
                    >
                        {lede}
                    </div>
                )}
            </div>
            {action}
        </div>
    )
}
