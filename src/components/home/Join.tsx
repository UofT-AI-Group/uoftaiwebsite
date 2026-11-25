import { Link } from 'react-router'
import { CtaBand } from '@/components/kit/CtaBand'
import { DiscordButton } from '@/components/kit/DiscordButton'
import { Button } from '@/components/ui/button'
import { GENERAL_EMAIL } from '@/data/site'

const Join = () => (
    <CtaBand id="join" kicker="Get involved" title="Join UofT AI">
        <DiscordButton />
        <Button asChild variant="outline">
            <Link to="/newsletter">Read the newsletter</Link>
        </Button>
        <Button asChild variant="outline">
            <a href={`mailto:${GENERAL_EMAIL}`}>Get in touch</a>
        </Button>
        <Button asChild variant="outline">
            <Link to="/partner-with-us">Partner with us</Link>
        </Button>
    </CtaBand>
)

export default Join
