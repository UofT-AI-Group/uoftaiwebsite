import { Section, SectionHeading } from '@/components/kit/Section'
import { Timeline } from '@/components/kit/Timeline'
import { EVENTS } from '@/data/home'

/** Every event since 2020 as one cell of the same shape, oldest first. */
const History = () => (
    <Section
        heading={
            <SectionHeading kicker="Since 2020">
                ProjectX and ConferenceX, year by year
            </SectionHeading>
        }
    >
        <Timeline
            className="mt-16"
            items={EVENTS.map(({ year, name, to, detail, upcoming }) => ({
                date: year,
                title: name,
                href: to,
                detail,
                state: upcoming ? 'next' : 'past',
            }))}
        />
    </Section>
)

export default History
