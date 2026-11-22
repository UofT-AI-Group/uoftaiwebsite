import { Link } from 'react-router'
import { FaDiscord } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { DISCORD_URL, GENERAL_EMAIL } from '@/data/site'
import { wrap } from '@/lib/layout'
import SectionHeading from './SectionHeading'

const Join = () => (
    <section
        id="join"
        aria-labelledby="join-title"
        className="pt-20 pb-35 lg:pt-30"
    >
        <div className={wrap}>
            <SectionHeading
                id="join-title"
                kicker="Get involved"
                className="max-w-none text-[clamp(36px,6vw,88px)]"
            >
                Join UofT AI
            </SectionHeading>
            <div className="mt-12 flex flex-wrap gap-3">
                <Button asChild>
                    <a href={DISCORD_URL}>
                        <FaDiscord aria-hidden="true" />
                        Join the Discord
                    </a>
                </Button>
                <Button asChild variant="outline">
                    <Link to="/newsletter">Read the newsletter</Link>
                </Button>
                <Button asChild variant="outline">
                    <a href={`mailto:${GENERAL_EMAIL}`}>Get in touch</a>
                </Button>
                <Button asChild variant="outline">
                    <Link to="/partner-with-us">Partner with us</Link>
                </Button>
            </div>
        </div>
    </section>
)

export default Join
