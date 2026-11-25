import { Link } from 'react-router'
import { ArrowDownToLine, GraduationCap, Mic, Users } from 'lucide-react'
import { ArchiveList } from '@/components/kit/ArchiveList'
import {
    Card,
    CardFooter,
    CardIcon,
    CardMedia,
    CardMeta,
    CardText,
    CardTitle,
} from '@/components/kit/Card'
import { CtaBand } from '@/components/kit/CtaBand'
import { DiscordButton } from '@/components/kit/DiscordButton'
import { FactRow } from '@/components/kit/FactRow'
import { Faq } from '@/components/kit/Faq'
import { LogoWall } from '@/components/kit/LogoWall'
import { MediaRow } from '@/components/kit/MediaRow'
import { PageHero } from '@/components/kit/PageHero'
import { PageMeta } from '@/components/kit/PageMeta'
import { PersonCard, PersonGrid } from '@/components/kit/Person'
import { Section, SectionHeading } from '@/components/kit/Section'
import { Timeline } from '@/components/kit/Timeline'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tag } from '@/components/ui/tag'
import {
    ABOUT,
    FEATURED_SPEAKER,
    PAST_PARTNERS,
    PROGRAMS,
    SPEAKERS_2026,
    SPONSORS_2026,
    STATS,
} from '@/data/home'
import { ALL_EDITIONS } from '@/data/conferencex'
import { recap2026 } from '@/data/conferencex/2026'
import codeOfConduct from '../static/assets/codeofconduct.pdf'
import problemStatement from '../static/assets/Problem_Statement_ProjectX_1.pdf'

const conferencePhoto = PROGRAMS[1].photo

const FAQ = [
    {
        question: 'How much AI knowledge do I need to attend?',
        answer: (
            <p>
                None. ConferenceX is open to anyone interested in AI, whether
                you're a student, a founder or working in industry.
            </p>
        ),
    },
    {
        question: 'Will food be provided?',
        answer: (
            <>
                <p>Yes. Attendees get:</p>
                <ul>
                    <li>coffee and a light breakfast</li>
                    <li>lunch and drinks</li>
                </ul>
            </>
        ),
    },
    {
        question: 'Is there a limit on attendees?',
        answer: (
            <p>
                Yes. Seating is first come, first served. Join the{' '}
                <a href="https://discord.gg/FU8QvACr7X">Discord</a> to hear when
                tickets open.
            </p>
        ),
    },
]

const DAYS = (recap2026.schedule?.days ?? []).map(({ id, items }, i) => ({
    value: id,
    label: `Day ${i + 1}`,
    events: items.slice(0, 4),
}))

/** Every kit piece and state on one page. Only routed in development. */
const Kit = () => (
    <main className="bg-ink font-mono text-fg antialiased">
        <PageMeta
            title="Page kit"
            description="Every shared page component and state."
            noindex
        />

        <PageHero
            variant="upcoming"
            title="ConferenceX"
            edition={2027}
            subtitle="The Past and Future of AI"
            status="Program and dates to be announced"
            lede="Proposed theme. Join the Discord to hear first when speakers and tickets are announced."
            actions={
                <>
                    <DiscordButton />
                    <Button asChild variant="outline">
                        <a href="#archive">Past editions</a>
                    </Button>
                </>
            }
        />

        <PageHero
            variant="recap"
            title="ConferenceX"
            edition={2026}
            subtitle="The Intelligence Test"
            status="Held in January 2026"
            facts={[
                {
                    label: 'Venue',
                    value: 'Schwartz Reisman Institute',
                },
                { label: 'Format', value: 'Talks, panels and a showcase' },
            ]}
            photo={conferencePhoto}
        />

        <Section
            heading={
                <SectionHeading
                    kicker="Section, stack layout"
                    lede="Heading, optional lede, and an action at the end of the row."
                    action={
                        <Button variant="outline" size="sm">
                            Action
                        </Button>
                    }
                >
                    Facts and figures from published sources
                </SectionHeading>
            }
        >
            <FactRow facts={STATS} className="mt-14" />
            <FactRow facts={PROGRAMS[0].facts} size="sm" className="mt-12" />
        </Section>

        <Section
            tone="raised"
            layout="split"
            heading={
                <SectionHeading
                    kicker="Section, split layout"
                    lede="The heading stays put while the questions scroll."
                >
                    Questions people ask before ConferenceX
                </SectionHeading>
            }
        >
            <Faq items={FAQ} />
        </Section>

        <Section
            heading={
                <SectionHeading kicker="PersonCard and PersonGrid">
                    Speakers
                </SectionHeading>
            }
        >
            <div className="mt-14 grid gap-x-10 gap-y-14 lg:grid-cols-5">
                <PersonCard
                    person={FEATURED_SPEAKER}
                    size="lg"
                    className="max-w-md lg:col-span-2 lg:max-w-none"
                />
                <div className="lg:col-span-3">
                    <PersonGrid
                        people={[...SPEAKERS_2026, FEATURED_SPEAKER]}
                        initialCount={3}
                        noun="speakers"
                    />
                </div>
            </div>
        </Section>

        <Section
            heading={
                <SectionHeading kicker="LogoWall on a dark section">
                    It becomes an inset white panel
                </SectionHeading>
            }
        >
            <LogoWall
                className="mt-12"
                groups={[
                    { title: 'Sponsors', logos: SPONSORS_2026, height: 44 },
                    { title: 'Partners', logos: PAST_PARTNERS, height: 34 },
                ]}
            />
        </Section>

        <Section
            heading={
                <SectionHeading kicker="MediaRow">
                    Photo and text, alternating
                </SectionHeading>
            }
        >
            <div className="mt-14 grid gap-16 lg:gap-24">
                {ABOUT.map(({ title, photo, photoAlt, text }, i) => (
                    <MediaRow
                        key={title}
                        photo={{ src: photo, alt: photoAlt }}
                        title={title}
                        flip={i % 2 === 1}
                    >
                        <p>{text}</p>
                    </MediaRow>
                ))}
            </div>
        </Section>

        <Section
            heading={
                <SectionHeading kicker="Timeline">
                    ProjectX 2026 milestones
                </SectionHeading>
            }
        >
            <Timeline
                className="mt-16"
                items={[
                    {
                        date: 'Sep 28',
                        title: 'Applications open',
                        state: 'past',
                    },
                    {
                        date: 'Oct 20',
                        title: 'Applications close',
                        state: 'past',
                    },
                    {
                        date: 'Monthly',
                        title: 'Short check-ins',
                        detail: 'Until December',
                        state: 'next',
                    },
                    {
                        date: 'Jan 15',
                        title: 'Final submission',
                        state: 'future',
                    },
                    {
                        date: 'February',
                        title: 'Finalists present',
                        href: '/conferencex',
                        detail: 'At ConferenceX',
                        state: 'future',
                    },
                ]}
            />
        </Section>

        <Section
            heading={
                <SectionHeading kicker="Tabs and Tag">
                    In-page views, such as schedule days
                </SectionHeading>
            }
        >
            <Tabs defaultValue="day-1" className="mt-12">
                <TabsList aria-label="Schedule day">
                    {DAYS.map(({ value, label }) => (
                        <TabsTrigger key={value} value={value}>
                            {label}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {DAYS.map(({ value, events }) => (
                    <TabsContent key={value} value={value}>
                        <ol className="border-b border-hair">
                            {events.map(({ start, end, title, tag }) => (
                                <li
                                    key={title}
                                    className="grid gap-2 border-t border-hair py-5 sm:grid-cols-[180px_1fr_auto] sm:gap-8"
                                >
                                    <span className="text-[13px] text-dim tabular-nums">
                                        {start} to {end}
                                    </span>
                                    <span>{title}</span>
                                    <Tag
                                        variant={
                                            tag === 'General'
                                                ? 'outline'
                                                : 'brand'
                                        }
                                        className="self-start justify-self-start"
                                    >
                                        {tag}
                                    </Tag>
                                </li>
                            ))}
                        </ol>
                    </TabsContent>
                ))}
            </Tabs>
        </Section>

        <Section
            heading={
                <SectionHeading kicker="Card">
                    Feature, resource and link cards
                </SectionHeading>
            }
        >
            <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardIcon icon={Mic} />
                    <CardTitle>Talks and panels</CardTitle>
                    <CardText>
                        Researchers, founders and policymakers on where AI is
                        heading.
                    </CardText>
                </Card>
                <Card>
                    <CardIcon icon={Users} />
                    <CardTitle>Startup showcase</CardTitle>
                    <CardText>Meet Toronto AI startups between talks.</CardText>
                </Card>
                <Card>
                    <CardIcon icon={GraduationCap} />
                    <CardTitle>Open to every discipline</CardTitle>
                    <CardText>
                        From computer science to the humanities.
                    </CardText>
                </Card>
                <Card>
                    <CardTitle href={codeOfConduct} download>
                        Code of conduct
                    </CardTitle>
                    <CardText>
                        What we expect from every ProjectX participant.
                    </CardText>
                    <CardFooter>
                        <ArrowDownToLine aria-hidden="true" />
                        PDF
                    </CardFooter>
                </Card>
                <Card>
                    <CardTitle href={problemStatement} download>
                        Problem statement
                    </CardTitle>
                    <CardText>
                        The research question for this year's teams.
                    </CardText>
                    <CardFooter>
                        <ArrowDownToLine aria-hidden="true" />
                        PDF
                    </CardFooter>
                </Card>
            </div>
            <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                <Card rule={false}>
                    <CardMedia photo={conferencePhoto} />
                    <CardMeta>Sample issue</CardMeta>
                    <CardTitle href="/newsletter">
                        A link card opens the whole card
                    </CardTitle>
                </Card>
                <Card rule={false}>
                    <CardMedia photo={{ src: ABOUT[0].photo, alt: '' }} />
                    <CardMeta>Sample issue</CardMeta>
                    <CardTitle href="/newsletter">
                        Media cards drop the top rule
                    </CardTitle>
                </Card>
            </div>
        </Section>

        <Section
            id="archive"
            heading={
                <SectionHeading kicker="ArchiveList">
                    Every ConferenceX
                </SectionHeading>
            }
        >
            <ArchiveList
                className="mt-12"
                editions={ALL_EDITIONS}
                current="/conferencex/2026"
            />
        </Section>

        <CtaBand
            kicker="CtaBand"
            title="Questions about ProjectX?"
            lede="With no buttons given, it offers the Discord."
        />
        <CtaBand tone="raised" title="Partner with UofT AI">
            <Button asChild>
                <Link to="/partner-with-us">See partnership options</Link>
            </Button>
            <Button asChild variant="outline">
                <a href="mailto:uoftaigrouppartnerships@gmail.com">
                    Email partnerships
                </a>
            </Button>
        </CtaBand>
    </main>
)

export default Kit
