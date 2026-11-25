import { useId, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export type Person = {
    name: string
    role: string
    photo: string
    /** Set on its own line under the role, for people listed with an employer. */
    org?: string
}

const photoClass =
    'aspect-[4/5] w-full bg-raised object-cover transition-transform duration-600 ease-out-soft group-hover:scale-105 motion-reduce:transition-none'

/** A 4:5 portrait with name and role. `lg` is for a single featured person. */
export const PersonCard = ({
    person: { name, role, photo, org },
    size = 'md',
    className,
}: {
    person: Person
    size?: 'md' | 'lg'
    className?: string
}) => (
    <figure className={cn('group', className)}>
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
        {size === 'lg' ? (
            <figcaption className="mt-4">
                <b className="block text-2xl font-normal tracking-[-0.02em]">
                    {name}
                </b>
                <span className="mt-1.5 block font-sans text-[15px] text-dim">
                    {role}
                </span>
                {org && (
                    <span className="mt-0.5 block font-sans text-[15px] text-dim">
                        {org}
                    </span>
                )}
            </figcaption>
        ) : (
            <figcaption>
                <b className="mt-3 block text-sm font-normal">{name}</b>
                <span className="mt-1 block font-sans text-xs/[1.4] text-dim">
                    {role}
                </span>
                {org && (
                    <span className="mt-0.5 block font-sans text-xs/[1.4] text-dim">
                        {org}
                    </span>
                )}
            </figcaption>
        )}
    </figure>
)

/**
 * A grid of people in the given order. With `initialCount`, the rest stay in
 * the page but hidden until "Show all" is pressed, so the order you list them
 * in decides who is featured.
 */
export const PersonGrid = ({
    people,
    initialCount,
    noun = 'people',
    className,
}: {
    people: Person[]
    initialCount?: number
    /** Plural used in the button, e.g. "speakers". */
    noun?: string
    className?: string
}) => {
    const [expanded, setExpanded] = useState(false)
    const listId = useId()
    const collapsible =
        initialCount !== undefined && people.length > initialCount

    return (
        <>
            <ul
                id={listId}
                className={cn(
                    'grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3',
                    className,
                )}
            >
                {people.map((person, i) => (
                    <li
                        key={person.name}
                        hidden={collapsible && !expanded && i >= initialCount}
                    >
                        <PersonCard person={person} />
                    </li>
                ))}
            </ul>
            {collapsible && (
                <Button
                    variant="outline"
                    size="sm"
                    aria-expanded={expanded}
                    aria-controls={listId}
                    onClick={() => setExpanded(!expanded)}
                    className="mt-10"
                >
                    {expanded
                        ? `Show fewer ${noun}`
                        : `Show all ${people.length} ${noun}`}
                </Button>
            )}
        </>
    )
}
