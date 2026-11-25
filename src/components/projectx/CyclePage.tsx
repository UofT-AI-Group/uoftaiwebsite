import type { ReactNode } from 'react'
import { ArrowDownToLine } from 'lucide-react'
import { ArchiveList } from '@/components/kit/ArchiveList'
import type { Edition } from '@/components/kit/ArchiveList'
import {
    Card,
    CardFooter,
    CardMeta,
    CardText,
    CardTitle,
} from '@/components/kit/Card'
import { Faq } from '@/components/kit/Faq'
import { LogoWall } from '@/components/kit/LogoWall'
import { PageHero } from '@/components/kit/PageHero'
import { PageMeta } from '@/components/kit/PageMeta'
import { PersonCard, PersonGrid } from '@/components/kit/Person'
import { Section, SectionHeading } from '@/components/kit/Section'
import { Timeline } from '@/components/kit/Timeline'
import { Button } from '@/components/ui/button'
import { Tag } from '@/components/ui/tag'
import type { ProjectXCycle } from '@/data/projectx/types'
import { withStates } from './milestones'
import { RichText } from './RichText'

const cardGrid = 'mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'

/**
 * One ProjectX cycle from its data file. Sections appear in a fixed order and
 * only when the cycle has content for them; the archive always closes the page.
 */
export const CyclePage = ({
    cycle,
    title,
    archive,
    heroActions,
}: {
    cycle: ProjectXCycle
    /** Page title for the browser tab. */
    title: string
    archive: { title: string; editions: Edition[]; current?: string }
    /** Shown after the cycle's own actions. */
    heroActions?: ReactNode
}) => {
    const milestones = cycle.timeline && withStates(cycle.timeline.items)
    const live = milestones?.some(({ state }) => state !== 'past') ?? false

    return (
        <main className="bg-ink font-mono text-fg antialiased">
            <PageMeta title={title} description={cycle.description} />
            <PageHero
                variant={live ? 'upcoming' : 'recap'}
                title="ProjectX"
                edition={cycle.year}
                subtitle={
                    <>
                        <span className="sr-only">{cycle.themeLabel}: </span>
                        {cycle.theme}
                    </>
                }
                status={cycle.status}
                lede={
                    (cycle.intro || cycle.topics) && (
                        <>
                            {cycle.intro && <RichText blocks={cycle.intro} />}
                            {cycle.topics && (
                                <div>
                                    <p className="text-[13px] text-dim">
                                        Research areas
                                    </p>
                                    <ul className="mt-3 flex list-none! flex-wrap gap-2 pl-0! [&>li+li]:mt-0!">
                                        {cycle.topics.map((topic) => (
                                            <li key={topic}>
                                                <Tag>{topic}</Tag>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
                    )
                }
                facts={cycle.facts}
                actions={
                    (cycle.actions || heroActions) && (
                        <>
                            {cycle.actions?.map(({ label, href }, i) => (
                                <Button
                                    key={href}
                                    asChild
                                    variant={i === 0 ? 'default' : 'outline'}
                                >
                                    <a href={href}>{label}</a>
                                </Button>
                            ))}
                            {heroActions}
                        </>
                    )
                }
            />

            {cycle.streams && (
                <Section
                    id="streams"
                    heading={
                        <SectionHeading lede={cycle.streams.lede}>
                            Streams
                        </SectionHeading>
                    }
                >
                    <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
                        {cycle.streams.items.map(({ title, description }) => (
                            <Card key={title}>
                                <CardTitle>{title}</CardTitle>
                                <CardText>
                                    <p>{description}</p>
                                </CardText>
                            </Card>
                        ))}
                    </div>
                </Section>
            )}

            {cycle.timeline && milestones && (
                <Section
                    id="timeline"
                    heading={
                        <SectionHeading lede={cycle.timeline.lede}>
                            {cycle.timeline.title}
                        </SectionHeading>
                    }
                >
                    <Timeline items={milestones} className="mt-16" />
                </Section>
            )}

            {cycle.events && (
                <Section
                    id="events"
                    heading={
                        <SectionHeading>Events and Workshops</SectionHeading>
                    }
                >
                    <div className={cardGrid}>
                        {cycle.events.map(
                            ({
                                title,
                                date,
                                format,
                                location,
                                description,
                            }) => (
                                <Card key={title}>
                                    <CardMeta>{date}</CardMeta>
                                    <CardTitle>{title}</CardTitle>
                                    <CardText>
                                        <p>{description}</p>
                                    </CardText>
                                    <CardFooter>
                                        {[format, location]
                                            .filter(Boolean)
                                            .join(' · ')}
                                    </CardFooter>
                                </Card>
                            ),
                        )}
                    </div>
                </Section>
            )}

            {cycle.resources && (
                <Section
                    id="documents"
                    heading={<SectionHeading>Documents</SectionHeading>}
                >
                    <div className={cardGrid}>
                        {cycle.resources.map(
                            ({ title, description, href, download }) => (
                                <Card key={title}>
                                    <CardTitle href={href} download={download}>
                                        {title}
                                    </CardTitle>
                                    <CardText>
                                        <p>{description}</p>
                                    </CardText>
                                    {download && (
                                        <CardFooter>
                                            <ArrowDownToLine aria-hidden="true" />
                                            PDF
                                        </CardFooter>
                                    )}
                                </Card>
                            ),
                        )}
                    </div>
                </Section>
            )}

            {cycle.support && (
                <Section
                    id="financial-aid"
                    heading={
                        <SectionHeading>{cycle.support.title}</SectionHeading>
                    }
                >
                    <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
                        {cycle.support.items.map(({ title, text }) => (
                            <Card key={title}>
                                <CardTitle>{title}</CardTitle>
                                <CardText>
                                    <p>{text}</p>
                                </CardText>
                            </Card>
                        ))}
                    </div>
                </Section>
            )}

            {cycle.people?.map(({ id, title, lede, featured, people }) => (
                <Section
                    key={id}
                    id={id}
                    layout="split"
                    heading={
                        <SectionHeading
                            lede={lede && <RichText blocks={lede} />}
                        >
                            {title}
                        </SectionHeading>
                    }
                >
                    {featured?.map(({ bio, ...person }) => (
                        <div
                            key={person.name}
                            className="grid gap-8 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
                        >
                            <PersonCard
                                person={person}
                                size="lg"
                                className="max-w-xs"
                            />
                            <div className="copy text-[15px]/[1.7]">
                                <p>{bio}</p>
                            </div>
                        </div>
                    ))}
                    {people && <PersonGrid people={people} />}
                </Section>
            ))}

            {cycle.logos && (
                <Section
                    id="participants"
                    tone="white"
                    heading={
                        <SectionHeading>{cycle.logos.title}</SectionHeading>
                    }
                >
                    <LogoWall
                        className="mt-12"
                        groups={cycle.logos.groups.map((group) => ({
                            height: 48,
                            ...group,
                            balance: true,
                        }))}
                    />
                </Section>
            )}

            {cycle.faq && (
                <Section
                    id="faq"
                    tone="raised"
                    layout="split"
                    heading={
                        <SectionHeading
                            lede={
                                cycle.contactEmail && (
                                    <p>
                                        Have questions? Email us at{' '}
                                        <a
                                            href={`mailto:${cycle.contactEmail}`}
                                        >
                                            {cycle.contactEmail}
                                        </a>
                                        .
                                    </p>
                                )
                            }
                        >
                            FAQ
                        </SectionHeading>
                    }
                >
                    <Faq
                        items={cycle.faq.map(({ question, answer }) => ({
                            question,
                            answer: <RichText blocks={answer} />,
                        }))}
                    />
                </Section>
            )}

            <Section
                id="archive"
                heading={<SectionHeading>{archive.title}</SectionHeading>}
            >
                <ArchiveList
                    className="mt-12"
                    editions={archive.editions}
                    current={archive.current}
                />
            </Section>
        </main>
    )
}
