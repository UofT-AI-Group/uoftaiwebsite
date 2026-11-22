import * as React from 'react'
import { Tabs as TabsPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Switches between views inside a page, such as the days of a schedule.
 * Editions of an event are separate pages and use `ArchiveList` instead.
 */
function Tabs(props: React.ComponentProps<typeof TabsPrimitive.Root>) {
    return <TabsPrimitive.Root data-slot="tabs" {...props} />
}

function TabsList({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
    return (
        <TabsPrimitive.List
            data-slot="tabs-list"
            className={cn(
                'inline-flex max-w-full gap-1 overflow-x-auto border border-line p-1',
                className,
            )}
            {...props}
        />
    )
}

function TabsTrigger({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
    return (
        <TabsPrimitive.Trigger
            data-slot="tabs-trigger"
            className={cn(
                'inline-flex h-10 shrink-0 items-center gap-2 px-4 text-[13px] whitespace-nowrap text-dim outline-hidden transition-colors duration-250 select-none hover:text-fg focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brand focus-visible:outline-solid disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-fg data-[state=active]:text-ink motion-reduce:transition-none',
                className,
            )}
            {...props}
        />
    )
}

function TabsContent({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
    return (
        <TabsPrimitive.Content
            data-slot="tabs-content"
            className={cn('focus-ring mt-8', className)}
            {...props}
        />
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
