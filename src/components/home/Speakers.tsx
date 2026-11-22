import { PersonCard, PersonGrid } from '@/components/kit/Person'
import { Section, SectionHeading } from '@/components/kit/Section'
import { FEATURED_SPEAKER, SPEAKERS_2026 } from '@/data/home'

const eventLabel = 'mb-4 text-xs tracking-[0.12em] text-dim uppercase'

const Speakers = () => (
    <Section
        id="speakers"
        heading={
            <SectionHeading kicker="Past speakers">
                Researchers, founders and policymakers who have spoken at
                ConferenceX
            </SectionHeading>
        }
    >
        <div className="mt-14 grid gap-x-10 gap-y-14 lg:grid-cols-5">
            <section aria-labelledby="speakers-2024" className="lg:col-span-2">
                <h3 id="speakers-2024" className={eventLabel}>
                    ConferenceX 2024
                </h3>
                <PersonCard
                    person={FEATURED_SPEAKER}
                    size="lg"
                    className="max-w-md lg:max-w-none"
                />
            </section>

            <section aria-labelledby="speakers-2026" className="lg:col-span-3">
                <h3 id="speakers-2026" className={eventLabel}>
                    ConferenceX 2026: The Intelligence Test
                </h3>
                <PersonGrid people={SPEAKERS_2026} />
            </section>
        </div>
    </Section>
)

export default Speakers
