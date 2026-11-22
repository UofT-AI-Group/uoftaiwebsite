import { Fragment, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { TEAM_MEMBERS } from '@/data/team'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { wrap } from '@/lib/layout'
import { cn } from '@/lib/utils'
import SectionHeading from './SectionHeading'

type Member = (typeof TEAM_MEMBERS)[number]

const slug = (name: string) => name.toLowerCase().replace(/\W+/g, '-')

const Bio = ({ member, onClose }: { member: Member; onClose: () => void }) => (
    <div
        id={`bio-${slug(member.name)}`}
        role="region"
        aria-label={`About ${member.name}`}
        className="grid animate-in gap-4 border-y border-hair py-7 duration-300 fade-in-0 slide-in-from-top-2 motion-reduce:animate-none sm:grid-cols-[1fr_auto]"
    >
        <div>
            <p className="text-[11px] tracking-[0.12em] text-brand uppercase">
                {member.role}
            </p>
            <p className="mt-1.5 text-[22px] tracking-[-0.01em]">
                {member.name}
            </p>
            <p className="mt-4 max-w-[68ch] font-sans text-[15px]/[1.65] text-[#c4c4ca] md:text-base/[1.65]">
                {member.description}
            </p>
        </div>
        <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${member.name}'s bio`}
            className="focus-ring row-start-1 inline-flex size-11 items-center justify-center justify-self-end border border-edge transition-colors duration-250 hover:border-brand motion-reduce:transition-none sm:col-start-2"
        >
            <X aria-hidden="true" className="size-4" />
        </button>
    </div>
)

/**
 * The executive team as a grid of portraits. Selecting someone opens their
 * bio as a full-width panel directly under that person's row.
 */
const Team = () => {
    const [selected, setSelected] = useState<string | null>(null)
    const buttons = useRef(new Map<string, HTMLButtonElement>())
    const wide = useMediaQuery('(min-width: 1024px)')
    const medium = useMediaQuery('(min-width: 640px)')
    const columns = wide ? 6 : medium ? 4 : 3

    const selectedIndex = TEAM_MEMBERS.findIndex((m) => m.name === selected)
    const rowEnd =
        selectedIndex < 0
            ? -1
            : Math.min(
                  TEAM_MEMBERS.length - 1,
                  Math.floor(selectedIndex / columns) * columns + columns - 1,
              )

    return (
        <section
            id="team"
            aria-labelledby="team-title"
            className="scroll-mt-(--site-header-height) py-20 lg:py-30"
        >
            <div className={wrap}>
                <SectionHeading id="team-title" kicker="Team">
                    The 2026 executive team
                </SectionHeading>
                <p className="mt-3.5 font-sans text-sm text-dim">
                    Select anyone to read their bio.
                </p>
                <ul className="mt-12 grid grid-cols-3 gap-x-3 gap-y-7 sm:grid-cols-4 sm:gap-x-4 lg:grid-cols-6 lg:gap-x-5 lg:gap-y-9">
                    {TEAM_MEMBERS.map((member, i) => {
                        const open = member.name === selected
                        return (
                            <Fragment key={member.name}>
                                <li>
                                    <button
                                        ref={(el) => {
                                            if (el)
                                                buttons.current.set(
                                                    member.name,
                                                    el,
                                                )
                                        }}
                                        type="button"
                                        aria-expanded={open}
                                        aria-controls={
                                            open
                                                ? `bio-${slug(member.name)}`
                                                : undefined
                                        }
                                        onClick={() =>
                                            setSelected(
                                                open ? null : member.name,
                                            )
                                        }
                                        className="group block w-full text-left outline-hidden"
                                    >
                                        <span className="block overflow-hidden rounded-sm bg-raised group-focus-visible:outline-1 group-focus-visible:outline-offset-4 group-focus-visible:outline-brand group-focus-visible:outline-solid">
                                            <img
                                                src={member.image}
                                                alt=""
                                                width="256"
                                                height="256"
                                                loading="lazy"
                                                className={cn(
                                                    'aspect-square w-full object-cover transition-[filter,opacity] duration-300 motion-reduce:transition-none',
                                                    selected && !open
                                                        ? 'opacity-45 grayscale'
                                                        : 'opacity-100',
                                                )}
                                            />
                                        </span>
                                        <span
                                            className={cn(
                                                'mt-3 block min-h-[3lh] sm:min-h-[2lh] text-[10px]/[1.5] tracking-[0.12em] uppercase transition-colors duration-300 sm:text-[11px]/[1.5]',
                                                open
                                                    ? 'text-brand'
                                                    : 'text-dim',
                                            )}
                                        >
                                            {member.role}
                                        </span>
                                        <span className="mt-1 flex items-start justify-between gap-2 text-sm/[1.3] tracking-[-0.01em] sm:text-base/[1.3]">
                                            {member.name}
                                            <span
                                                aria-hidden="true"
                                                className={cn(
                                                    'relative hidden size-6 shrink-0 rounded-full border sm:block transition-[rotate,border-color] duration-350 ease-out-soft before:absolute before:top-1/2 before:left-1/2 before:h-px before:w-2.5 before:-translate-1/2 before:bg-[#d6d6db] after:absolute after:top-1/2 after:left-1/2 after:h-px after:w-2.5 after:-translate-1/2 after:rotate-90 after:bg-[#d6d6db] group-hover:border-brand motion-reduce:transition-none',
                                                    open
                                                        ? 'rotate-45 border-brand'
                                                        : 'border-edge',
                                                )}
                                            />
                                        </span>
                                    </button>
                                </li>
                                {i === rowEnd && selectedIndex >= 0 && (
                                    <li className="col-span-full">
                                        <Bio
                                            member={TEAM_MEMBERS[selectedIndex]}
                                            onClose={() => {
                                                buttons.current
                                                    .get(
                                                        TEAM_MEMBERS[
                                                            selectedIndex
                                                        ].name,
                                                    )
                                                    ?.focus()
                                                setSelected(null)
                                            }}
                                        />
                                    </li>
                                )}
                            </Fragment>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Team
