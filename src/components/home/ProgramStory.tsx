import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { FactRow } from '@/components/kit/FactRow'
import { Section, SectionHeading } from '@/components/kit/Section'
import { PROGRAMS } from '@/data/home'
import type { Program } from '@/data/home'
import { cn } from '@/lib/utils'

const FRAME_SIZES = '(min-width: 1024px) 568px, 100vw'

const Chapter = ({
    program,
    active,
    chapterRef,
}: {
    program: Program
    active: boolean
    chapterRef: (el: HTMLElement | null) => void
}) => (
    <article
        ref={chapterRef}
        id={program.id}
        aria-labelledby={`${program.id}-title`}
        className="scroll-mt-6 pb-14 lg:flex lg:min-h-[78vh] lg:flex-col lg:justify-center lg:py-10"
    >
        <img
            src={program.photo.src}
            srcSet={program.photo.srcSet}
            sizes={FRAME_SIZES}
            alt={program.photo.alt}
            loading="lazy"
            className="mb-5.5 aspect-[4/3] w-full rounded-sm object-cover lg:hidden"
            style={{ objectPosition: program.photo.position }}
        />
        <p className="text-xs tracking-[0.16em] text-brand uppercase">
            {program.kicker}
        </p>
        <h3
            id={`${program.id}-title`}
            className={cn(
                'mt-3 text-[clamp(36px,4vw,60px)] font-normal tracking-[-0.03em] transition-colors duration-400 motion-reduce:transition-none',
                active ? 'text-white' : 'text-white lg:text-[#5b5b62]',
            )}
        >
            {program.name}
        </h3>
        <p className="mt-4 max-w-110 font-sans text-[17px]/[1.6] text-prose">
            {program.description}
        </p>
        <FactRow facts={program.facts} size="sm" className="mt-5.5 mb-6.5" />
        <Link
            to={program.to}
            className="link-line focus-ring self-start text-sm max-lg:inline-block"
        >
            Explore {program.name} →
        </Link>
    </article>
)

/**
 * Programs told as a scroll story: the photo stays pinned on the left and
 * wipes to the next program as each chapter reaches the middle of the screen.
 * Below the large breakpoint each chapter shows its own photo instead.
 */
const ProgramStory = () => {
    const [active, setActive] = useState(0)
    const chapters = useRef<(HTMLElement | null)[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue
                    const index = chapters.current.indexOf(
                        entry.target as HTMLElement,
                    )
                    if (index >= 0) setActive(index)
                }
            },
            { rootMargin: '-50% 0px -50% 0px' },
        )
        for (const el of chapters.current) if (el) observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <Section
            id="programs"
            spacing="none"
            className="pt-20 pb-10 lg:pt-30"
            heading={
                <SectionHeading kicker="Programs">
                    A research competition and a conference
                </SectionHeading>
            }
        >
            <div className="mt-16 grid gap-16 lg:grid-cols-2">
                <div
                    aria-hidden="true"
                    className="sticky top-[calc(var(--site-header-height)+24px)] hidden aspect-[4/5] max-h-[calc(100vh-144px)] w-full self-start overflow-hidden rounded-sm bg-raised lg:block"
                >
                    {PROGRAMS.map((program, i) => (
                        <img
                            key={program.id}
                            src={program.photo.src}
                            srcSet={program.photo.srcSet}
                            sizes={FRAME_SIZES}
                            alt=""
                            loading="lazy"
                            className={cn(
                                'absolute inset-0 size-full object-cover transition-[clip-path,scale] duration-[800ms,1200ms] ease-[var(--ease-wipe),ease] motion-reduce:transition-none',
                                i <= active
                                    ? 'scale-100 [clip-path:inset(0_0_0_0)]'
                                    : 'scale-106 [clip-path:inset(100%_0_0_0)]',
                            )}
                            style={{
                                objectPosition: program.photo.position,
                            }}
                        />
                    ))}
                    <span className="absolute bottom-3.5 left-4 z-2 text-xs tracking-widest text-white [text-shadow:0_1px_8px_rgb(0_0_0/0.6)]">
                        0{active + 1} / 0{PROGRAMS.length}
                    </span>
                    <span className="absolute inset-x-0 bottom-0 z-2 h-0.5 bg-white/15">
                        <i
                            className="block h-full bg-white transition-transform duration-600 ease-out-soft motion-reduce:transition-none"
                            style={{
                                width: `${100 / PROGRAMS.length}%`,
                                transform: `translateX(${active * 100}%)`,
                            }}
                        />
                    </span>
                </div>

                <div>
                    {PROGRAMS.map((program, i) => (
                        <Chapter
                            key={program.id}
                            program={program}
                            active={i === active}
                            chapterRef={(el) => {
                                chapters.current[i] = el
                            }}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default ProgramStory
