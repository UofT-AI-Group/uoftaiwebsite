import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import DotField from '@/components/site/DotField'
import { DiscordButton } from '@/components/kit/DiscordButton'
import { wrap } from '@/lib/layout'
import { cn } from '@/lib/utils'

const Hero = () => (
    <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden border-b border-hair pt-(--site-header-height)"
    >
        <DotField className="absolute inset-0 size-full" />
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_25%_58%,rgb(11_11_13/0.85),rgb(11_11_13/0.3)_60%,transparent_85%)]"
        />
        <div
            className={cn(
                wrap,
                'pointer-events-none relative z-1 flex min-h-[calc(100svh-var(--site-header-height))] flex-col justify-center pt-18 pb-24',
            )}
        >
            <Link
                to="/conferencex"
                className="focus-ring pointer-events-auto mb-10 inline-flex items-center gap-2.5 self-start rounded-full border border-[#2c2c32] bg-ink/60 py-2 pr-3.5 pl-2.5 text-[12.5px] text-[#d2d2d7] transition-colors duration-250 hover:border-brand motion-reduce:transition-none"
            >
                <span className="shrink-0 rounded-full bg-brand/16 px-2 py-0.75 text-[11px] tracking-widest whitespace-nowrap text-[#e2c6f5] uppercase">
                    Up next
                </span>
                ConferenceX 2027: The Past and Future of AI →
            </Link>
            <h1
                id="hero-title"
                className="max-w-275 text-[clamp(34px,5.3vw,76px)]/[1.04] font-normal tracking-[-0.035em] text-balance"
            >
                <span className="font-medium">UofT AI</span> is the University
                of Toronto's student AI community
            </h1>
            <div className="mt-11 flex flex-wrap items-end justify-between gap-8">
                <p className="max-w-115 font-sans text-lg/[1.55] text-[#b3b3b9]">
                    We run ProjectX, an ML research competition, and
                    ConferenceX, a yearly conference on AI.
                </p>
                <div className="pointer-events-auto flex flex-wrap gap-3">
                    <DiscordButton />
                    <Button asChild variant="outline">
                        <a href="#programs">What we run ↓</a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
)

export default Hero
