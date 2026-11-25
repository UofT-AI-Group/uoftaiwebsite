import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tag } from '@/components/ui/tag'
import type { ScheduleDay } from '@/data/conferencex/types'

const LOGISTICS = new Set(['General', 'Networking'])

/** One tab per day, each listing its sessions in order. */
export const Schedule = ({
    days,
    className,
}: {
    days: ScheduleDay[]
    className?: string
}) => (
    <Tabs defaultValue={days[0].id} className={className}>
        <TabsList aria-label="Schedule day">
            {days.map(({ id, label }) => (
                <TabsTrigger key={id} value={id}>
                    {label}
                </TabsTrigger>
            ))}
        </TabsList>
        {days.map(({ id, title, summary, items }) => (
            <TabsContent key={id} value={id}>
                <h3 className="text-[clamp(22px,2.4vw,30px)]/[1.15] tracking-[-0.02em]">
                    {title}
                </h3>
                <p className="copy mt-3 max-w-[60ch] text-[15px]/[1.6]">
                    {summary}
                </p>
                <ol className="mt-8 border-b border-hair">
                    {items.map(
                        ({
                            start,
                            end,
                            title,
                            tag,
                            location,
                            detail,
                            moderator,
                        }) => (
                            <li
                                key={`${start}-${title}`}
                                className="grid gap-2 border-t border-hair py-5 sm:grid-cols-[160px_1fr_auto] sm:gap-8"
                            >
                                <div className="text-[13px] text-dim">
                                    <span className="tabular-nums">
                                        {start} to {end}
                                    </span>
                                    <span className="mt-0.5 block">
                                        {location}
                                    </span>
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-base/[1.35] text-balance">
                                        {title}
                                    </h4>
                                    {detail && (
                                        <p className="mt-1.5 font-sans text-sm text-dim">
                                            {detail}
                                        </p>
                                    )}
                                    {moderator && (
                                        <p className="mt-0.5 font-sans text-sm text-dim">
                                            Moderator: {moderator}
                                        </p>
                                    )}
                                </div>
                                <Tag
                                    variant={
                                        LOGISTICS.has(tag) ? 'outline' : 'brand'
                                    }
                                    className="self-start justify-self-start"
                                >
                                    {tag}
                                </Tag>
                            </li>
                        ),
                    )}
                </ol>
            </TabsContent>
        ))}
    </Tabs>
)
