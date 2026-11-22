import { Link } from 'react-router'
import { PAST_PARTNERS, SPONSORS_2026 } from '@/data/home'
import type { Logo } from '@/data/home'
import { buttonVariants } from '@/components/ui/button'
import { wrap } from '@/lib/layout'
import { cn } from '@/lib/utils'

const LogoRow = ({
    title,
    logos,
    height,
}: {
    title: string
    logos: Logo[]
    height: number
}) => (
    <div className="grid gap-5 border-t border-ink/12 py-8 md:grid-cols-12 md:gap-8">
        <h3 className="text-[13px] text-ink/60 md:col-span-3 md:pt-2">
            {title}
        </h3>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-7 md:col-span-9 md:gap-x-14">
            {logos.map(({ name, src, width }) => (
                <li key={name}>
                    <img
                        src={src}
                        alt={name}
                        width={Math.round((width * height) / 120)}
                        height={height}
                        loading="lazy"
                        className="w-auto"
                        style={{ height }}
                    />
                </li>
            ))}
        </ul>
    </div>
)

/** Sponsors require their logos on white in original colours. */
const Sponsors = () => (
    <section
        aria-labelledby="sponsors-title"
        className="bg-white py-20 text-ink lg:py-24"
    >
        <div className={wrap}>
            <div className="flex flex-wrap items-end justify-between gap-6 pb-12">
                <div>
                    <p className="kicker mb-7 text-ink/60">Partners</p>
                    <h2
                        id="sponsors-title"
                        className="text-[clamp(30px,4vw,56px)]/[1.05] font-normal tracking-[-0.03em]"
                    >
                        Sponsors and partners
                    </h2>
                </div>
                <Link
                    to="/partner-with-us"
                    className={cn(buttonVariants({ variant: 'dark' }))}
                >
                    Partner with us
                </Link>
            </div>
            <LogoRow
                title="ConferenceX 2026 sponsors"
                logos={SPONSORS_2026}
                height={44}
            />
            <LogoRow title="Past partners" logos={PAST_PARTNERS} height={34} />
        </div>
    </section>
)

export default Sponsors
