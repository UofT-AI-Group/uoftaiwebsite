import { ArchiveList } from '@/components/kit/ArchiveList'
import { DiscordButton } from '@/components/kit/DiscordButton'
import { PageHero } from '@/components/kit/PageHero'
import { PageMeta } from '@/components/kit/PageMeta'
import { Section, SectionHeading } from '@/components/kit/Section'
import { Button } from '@/components/ui/button'
import { PAST_EDITIONS, UPCOMING } from '@/data/conferencex'

/** The next ConferenceX, with every past edition linked below it. */
const ConferenceX = () => (
    <main className="bg-ink font-mono text-fg antialiased">
        <PageMeta
            title={`ConferenceX ${UPCOMING.year}`}
            description={UPCOMING.description}
        />
        <PageHero
            variant="upcoming"
            title="ConferenceX"
            edition={UPCOMING.year}
            subtitle={UPCOMING.theme}
            status={UPCOMING.status}
            lede={UPCOMING.lede}
            actions={
                <>
                    <DiscordButton />
                    <Button asChild variant="outline">
                        <a href="#past-editions">Past editions</a>
                    </Button>
                </>
            }
        />
        <Section
            id="past-editions"
            heading={<SectionHeading>Past editions</SectionHeading>}
        >
            <ArchiveList className="mt-12" editions={PAST_EDITIONS} />
        </Section>
    </main>
)

export default ConferenceX
