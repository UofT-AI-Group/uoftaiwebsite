import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { DiscordButton } from './DiscordButton'
import { Section, SectionHeading } from './Section'
import type { SectionTone } from './sectionContext'

/**
 * A closing call to action: one large heading and a row of buttons. With no
 * buttons given it offers the Discord, the club's primary call to action.
 */
export const CtaBand = ({
    id,
    kicker,
    title,
    lede,
    tone,
    children = <DiscordButton />,
    className,
}: {
    id?: string
    kicker?: string
    title: ReactNode
    lede?: ReactNode
    tone?: SectionTone
    children?: ReactNode
    className?: string
}) => (
    <Section
        id={id}
        tone={tone}
        spacing="none"
        className={cn('pt-20 pb-35 lg:pt-30', className)}
        heading={
            <SectionHeading kicker={kicker} lede={lede} size="lg">
                {title}
            </SectionHeading>
        }
    >
        <div className="mt-12 flex flex-wrap gap-3">{children}</div>
    </Section>
)
