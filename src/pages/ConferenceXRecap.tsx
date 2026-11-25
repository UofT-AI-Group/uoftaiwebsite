import { useParams } from 'react-router'
import { ArchiveBanner } from '@/components/kit/ArchiveBanner'
import { ArchiveList } from '@/components/kit/ArchiveList'
import {
    Card,
    CardFooter,
    CardIcon,
    CardText,
    CardTitle,
} from '@/components/kit/Card'
import { Faq } from '@/components/kit/Faq'
import { LogoWall } from '@/components/kit/LogoWall'
import { PageHero } from '@/components/kit/PageHero'
import { PageMeta } from '@/components/kit/PageMeta'
import { PersonGrid } from '@/components/kit/Person'
import { Section, SectionHeading } from '@/components/kit/Section'
import { SmartLink } from '@/components/kit/SmartLink'
import { Schedule } from '@/components/conferencex/Schedule'
import { Button } from '@/components/ui/button'
import { ALL_EDITIONS, RECAPS, UPCOMING } from '@/data/conferencex'
import type { Recap } from '@/data/conferencex/types'
import { cn } from '@/lib/utils'
import PageNotFound from './PageNotFound'

const cardGrid = 'mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2'

/**
 * Highlight photos are shown near their native size because several of the
 * originals are only about 190px square and blur when stretched.
 */
const HIGHLIGHT_PHOTO_SIZE = 180

const RecapPage = ({
    recap: {
        year,
        path,
        description,
        archive,
        hero,
        intro,
        theme,
        highlights,
        offerings,
        speakers,
        testimonials,
        faq,
        schedule,
        sponsors,
    },
}: {
    recap: Recap
}) => (
    <main className="bg-ink font-mono text-fg antialiased">
        <PageMeta title={`ConferenceX ${year}`} description={description} />
        <PageHero
            banner={
                <ArchiveBanner
                    title={archive.title}
                    link={{
                        label: `ConferenceX ${UPCOMING.year}`,
                        href: UPCOMING.path,
                    }}
                >
                    This page is kept as it was originally published, so some
                    details may be out of date.
                    {archive.note && ` ${archive.note}`}
                </ArchiveBanner>
            }
            variant="recap"
            title="ConferenceX"
            edition={year}
            subtitle={hero.subtitle}
            status={hero.status}
            lede={hero.lede}
            facts={hero.facts}
            actions={
                hero.action && (
                    <Button asChild variant="outline">
                        <SmartLink to={hero.action.href}>
                            {hero.action.label}
                        </SmartLink>
                    </Button>
                )
            }
        />

        <Section
            layout="split"
            heading={<SectionHeading>{intro.title}</SectionHeading>}
        >
            {intro.photo && (
                <img
                    src={intro.photo.src}
                    alt={intro.photo.alt}
                    sizes="(min-width: 1024px) 700px, 100vw"
                    loading="lazy"
                    className="mb-10 aspect-[3/2] w-full rounded-sm bg-raised object-cover"
                />
            )}
            <div className="copy max-w-[60ch] text-base/[1.65] md:text-[17px]/[1.65]">
                {intro.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                ))}
            </div>
            {intro.link && (
                <Button asChild variant="outline" className="mt-10">
                    <SmartLink to={intro.link.href}>
                        {intro.link.label}
                    </SmartLink>
                </Button>
            )}
        </Section>

        {theme && (
            <Section
                tone="raised"
                layout="split"
                heading={
                    <SectionHeading kicker="Theme">
                        {theme.title}
                    </SectionHeading>
                }
            >
                <div className="copy max-w-[60ch] text-base/[1.65] md:text-[17px]/[1.65]">
                    {theme.paragraphs.map((text) => (
                        <p key={text}>{text}</p>
                    ))}
                </div>
                <div className="mt-10 max-w-[60ch] border-l border-brand pl-6">
                    <p className="text-xl/[1.35] tracking-[-0.01em] text-balance">
                        {theme.statement.title}
                    </p>
                    <p className="copy mt-3 text-base/[1.65]">
                        {theme.statement.text}
                    </p>
                </div>
                <dl className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                    {theme.days.map(({ title, text }) => (
                        <div key={title} className="border-t border-hair pt-5">
                            <dt className="text-base/[1.35]">{title}</dt>
                            <dd className="copy mt-2 text-[15px]/[1.6]">
                                {text}
                            </dd>
                        </div>
                    ))}
                </dl>
            </Section>
        )}

        <Section
            id="highlights"
            heading={<SectionHeading>{highlights.title}</SectionHeading>}
        >
            <div className="mt-14 border-b border-hair">
                {highlights.items.map(({ title, text, photo }) => (
                    <article
                        key={title}
                        className="grid gap-6 border-t border-hair py-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10"
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            width={HIGHLIGHT_PHOTO_SIZE}
                            height={HIGHLIGHT_PHOTO_SIZE}
                            loading="lazy"
                            className="aspect-square rounded-sm bg-raised object-cover"
                            style={{ objectPosition: photo.position }}
                        />
                        <div>
                            <h3 className="text-lg/[1.3] tracking-[-0.01em] text-balance">
                                {title}
                            </h3>
                            <p className="copy mt-2.5 max-w-[65ch] text-[15px]/[1.6]">
                                {text}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </Section>

        {offerings && (
            <Section
                heading={<SectionHeading>{offerings.title}</SectionHeading>}
            >
                <div className={cn(cardGrid, 'lg:grid-cols-3')}>
                    {offerings.items.map(({ title, text, icon }) => (
                        <Card key={title}>
                            <CardIcon icon={icon} />
                            <CardTitle>{title}</CardTitle>
                            <CardText>
                                <p>{text}</p>
                            </CardText>
                        </Card>
                    ))}
                </div>
            </Section>
        )}

        <Section
            heading={
                <SectionHeading lede={speakers.lede}>
                    {speakers.title}
                </SectionHeading>
            }
        >
            <PersonGrid
                people={speakers.people}
                initialCount={speakers.initialCount}
                noun={speakers.noun ?? 'speakers'}
                className="mt-14 lg:grid-cols-6"
            />
        </Section>

        {testimonials && (
            <Section
                tone="raised"
                heading={
                    <SectionHeading lede={testimonials.lede}>
                        {testimonials.title}
                    </SectionHeading>
                }
            >
                <div className={cn(cardGrid, 'lg:grid-cols-3')}>
                    {testimonials.items.map(({ quote, name, role }) => (
                        <Card key={name}>
                            <blockquote className="text-lg/[1.45] tracking-[-0.01em] text-pretty">
                                <p>“{quote}”</p>
                            </blockquote>
                            <CardFooter>
                                <span>
                                    <span className="text-fg">{name}</span>,{' '}
                                    {role}
                                </span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Section>
        )}

        {faq && (
            <Section
                layout="split"
                heading={<SectionHeading>{faq.title}</SectionHeading>}
            >
                <Faq items={faq.items} />
            </Section>
        )}

        {schedule && (
            <Section
                heading={
                    <SectionHeading lede={schedule.lede}>
                        {schedule.title}
                    </SectionHeading>
                }
            >
                <Schedule days={schedule.days} className="mt-12" />
            </Section>
        )}

        <Section
            tone="white"
            className="lg:py-24"
            heading={
                <SectionHeading className="pb-12">
                    {sponsors.title}
                </SectionHeading>
            }
        >
            <LogoWall groups={sponsors.groups} />
        </Section>

        <Section heading={<SectionHeading>Every ConferenceX</SectionHeading>}>
            <ArchiveList
                className="mt-12"
                editions={ALL_EDITIONS}
                current={path}
            />
        </Section>
    </main>
)

/**
 * One template for every past edition, filled from its module in
 * `src/data/conferencex`. Years without a recap fall through to the 404 page.
 */
const ConferenceXRecap = () => {
    const { year } = useParams()
    const recap = RECAPS.find((r) => String(r.year) === year)
    return recap ? (
        <RecapPage key={recap.year} recap={recap} />
    ) : (
        <PageNotFound />
    )
}

export default ConferenceXRecap
