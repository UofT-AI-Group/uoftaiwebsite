import type { ComponentProps } from 'react'
import { FaDiscord } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { DISCORD_URL } from '@/data/site'

/** Discord is the club's main call to action, so it gets one canonical button. */
export const DiscordButton = ({
    children = 'Join the Discord',
    ...props
}: Omit<ComponentProps<typeof Button>, 'asChild'>) => (
    <Button asChild {...props}>
        <a href={DISCORD_URL}>
            <FaDiscord aria-hidden="true" />
            {children}
        </a>
    </Button>
)
