import { Link } from 'react-router'
import { LogoWall } from '@/components/kit/LogoWall'
import { Section, SectionHeading } from '@/components/kit/Section'
import { buttonVariants } from '@/components/ui/button'
import { PAST_PARTNERS, SPONSORS_2026 } from '@/data/home'

const Sponsors = () => (
    <Section
        id="sponsors"
        tone="white"
        className="lg:py-24"
        heading={
            <SectionHeading
                kicker="Partners"
                className="pb-12"
                action={
                    <Link
                        to="/partner-with-us"
                        className={buttonVariants({ variant: 'dark' })}
                    >
                        Partner with us
                    </Link>
                }
            >
                Sponsors and partners
            </SectionHeading>
        }
    >
        <LogoWall
            groups={[
                {
                    title: 'ConferenceX 2026 sponsors',
                    logos: SPONSORS_2026,
                    height: 44,
                },
                { title: 'Past partners', logos: PAST_PARTNERS, height: 34 },
            ]}
        />
    </Section>
)

export default Sponsors
