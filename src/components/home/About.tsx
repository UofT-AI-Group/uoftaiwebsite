import { FactRow } from '@/components/kit/FactRow'
import { Section, SectionHeading } from '@/components/kit/Section'
import { ABOUT, STATS } from '@/data/home'
import { cn } from '@/lib/utils'

const About = () => (
    <Section
        id="about"
        heading={
            <SectionHeading kicker="About">
                For undergraduates who want to build with AI
            </SectionHeading>
        }
    >
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[7fr_5fr]">
            {ABOUT.map(({ title, photo, photoAlt, text }, i) => (
                <figure
                    key={title}
                    className={cn('group', i === 1 && 'lg:mt-30')}
                >
                    <div className="overflow-hidden rounded-sm">
                        <img
                            src={photo}
                            alt={photoAlt}
                            loading="lazy"
                            className="aspect-[3/2] w-full object-cover transition-transform duration-800 ease-out-soft group-hover:scale-[1.03] motion-reduce:transition-none"
                        />
                    </div>
                    <figcaption className="mt-4.5 max-w-115">
                        <h3 className="text-xs tracking-[0.16em] text-brand uppercase">
                            {title}
                        </h3>
                        <p className="mt-2.5 font-sans text-base/[1.6] text-prose">
                            {text}
                        </p>
                    </figcaption>
                </figure>
            ))}
        </div>
        <FactRow facts={STATS} countUp className="mt-16" />
    </Section>
)

export default About
