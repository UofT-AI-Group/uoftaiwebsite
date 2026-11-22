import { Link } from 'react-router'
import { EVENTS } from '@/data/home'
import { wrap } from '@/lib/layout'
import { cn } from '@/lib/utils'
import SectionHeading from './SectionHeading'

/**
 * Every event since 2020 as one cell of the same shape, oldest first. Each
 * row's top border doubles as a timeline rail, with a dot per event.
 */
const History = () => (
    <section aria-labelledby="history-title" className="py-20 lg:py-30">
        <div className={wrap}>
            <SectionHeading id="history-title" kicker="Since 2020">
                ProjectX and ConferenceX, year by year
            </SectionHeading>
            <ol className="mt-16 grid grid-cols-2 gap-x-6 lg:grid-cols-5 lg:gap-x-0">
                {EVENTS.map(({ year, name, to, detail, upcoming }) => (
                    <li
                        key={to}
                        className="relative border-t border-[#2e2e34] pt-6.5 pr-4.5 pb-12"
                    >
                        <span
                            aria-hidden="true"
                            className={cn(
                                'absolute -top-1 left-0 size-[7px] rounded-full',
                                upcoming
                                    ? 'animate-[ping-ring_2.2s_ease-out_infinite] bg-brand motion-reduce:animate-none'
                                    : 'bg-[#5a5a61]',
                            )}
                        />
                        <b
                            className={cn(
                                'block text-3xl font-light tracking-[-0.03em]',
                                upcoming && 'text-brand',
                            )}
                        >
                            {year}
                        </b>
                        <h3 className="mt-2.5 text-sm">
                            <Link to={to} className="link-grow focus-ring">
                                {name}
                                <span className="sr-only"> {year}</span>
                            </Link>
                        </h3>
                        <p className="mt-1.5 font-sans text-[13px]/[1.45] text-dim">
                            {detail}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    </section>
)

export default History
