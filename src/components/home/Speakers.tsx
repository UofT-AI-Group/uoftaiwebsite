import { FEATURED_SPEAKER, SPEAKERS_2026 } from '@/data/home'
import { wrap } from '@/lib/layout'
import SectionHeading from './SectionHeading'

const photoClass =
    'aspect-[4/5] w-full bg-raised object-cover transition-transform duration-600 ease-out-soft group-hover:scale-105 motion-reduce:transition-none'

const eventLabel = 'mb-4 text-xs tracking-[0.12em] text-dim uppercase'

const Speakers = () => (
    <section
        id="speakers"
        aria-labelledby="speakers-title"
        className="py-20 lg:py-30"
    >
        <div className={wrap}>
            <SectionHeading id="speakers-title" kicker="Past speakers">
                Researchers, founders and policymakers who have spoken at
                ConferenceX
            </SectionHeading>

            <div className="mt-14 grid gap-x-10 gap-y-14 lg:grid-cols-5">
                <section
                    aria-labelledby="speakers-2024"
                    className="lg:col-span-2"
                >
                    <h3 id="speakers-2024" className={eventLabel}>
                        ConferenceX 2024
                    </h3>
                    <figure className="group max-w-md lg:max-w-none">
                        <div className="overflow-hidden rounded-sm">
                            <img
                                src={FEATURED_SPEAKER.photo}
                                alt={FEATURED_SPEAKER.name}
                                width="400"
                                height="500"
                                loading="lazy"
                                className={photoClass}
                            />
                        </div>
                        <figcaption className="mt-4">
                            <b className="block text-2xl font-normal tracking-[-0.02em]">
                                {FEATURED_SPEAKER.name}
                            </b>
                            <span className="mt-1.5 block font-sans text-[15px] text-dim">
                                {FEATURED_SPEAKER.role}
                            </span>
                        </figcaption>
                    </figure>
                </section>

                <section
                    aria-labelledby="speakers-2026"
                    className="lg:col-span-3"
                >
                    <h3 id="speakers-2026" className={eventLabel}>
                        ConferenceX 2026: The Intelligence Test
                    </h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
                        {SPEAKERS_2026.map(({ name, role, photo }) => (
                            <li key={name}>
                                <figure className="group">
                                    <div className="overflow-hidden rounded-sm">
                                        <img
                                            src={photo}
                                            alt={name}
                                            width="400"
                                            height="500"
                                            loading="lazy"
                                            className={photoClass}
                                        />
                                    </div>
                                    <figcaption>
                                        <b className="mt-3 block text-sm font-normal">
                                            {name}
                                        </b>
                                        <span className="mt-1 block font-sans text-xs/[1.4] text-dim">
                                            {role}
                                        </span>
                                    </figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    </section>
)

export default Speakers
