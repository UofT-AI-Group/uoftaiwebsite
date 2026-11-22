import { Link } from 'react-router'
import logoMark from '@/static/assets/logo-mark.webp'
import { cn } from '@/lib/utils'

const Wordmark = ({ className }: { className?: string }) => (
    <Link
        to="/"
        aria-label="UofT AI home"
        className={cn(
            'focus-ring inline-flex min-h-11 shrink-0 items-center gap-3 font-mono text-[17px] font-medium tracking-[-0.01em] text-fg',
            className,
        )}
    >
        <img
            src={logoMark}
            alt=""
            width="30"
            height="30"
            className="size-7.5 brightness-0 invert"
        />
        <span aria-hidden="true">UofT AI</span>
    </Link>
)

export default Wordmark
