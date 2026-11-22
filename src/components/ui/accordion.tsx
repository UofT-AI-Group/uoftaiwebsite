import * as React from 'react'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

function Accordion(
    props: React.ComponentProps<typeof AccordionPrimitive.Root>,
) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn('border-b border-hair first:border-t', className)}
            {...props}
        />
    )
}

/** The plus mark matches the team bio toggle and turns into a cross when open. */
function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    'group focus-ring flex flex-1 items-start justify-between gap-6 py-6 text-left text-[17px]/[1.4] tracking-[-0.01em] transition-colors duration-250 hover:text-white motion-reduce:transition-none md:text-lg/[1.4]',
                    className,
                )}
                {...props}
            >
                {children}
                <span
                    aria-hidden="true"
                    className="relative mt-px size-6 shrink-0 rounded-full border border-edge transition-[rotate,border-color] duration-350 ease-out-soft group-hover:border-brand group-data-[state=open]:rotate-45 group-data-[state=open]:border-brand before:absolute before:top-1/2 before:left-1/2 before:h-px before:w-2.5 before:-translate-1/2 before:bg-[#d6d6db] after:absolute after:top-1/2 after:left-1/2 after:h-px after:w-2.5 after:-translate-1/2 after:rotate-90 after:bg-[#d6d6db] motion-reduce:transition-none"
                />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none"
            {...props}
        >
            <div
                className={cn(
                    'copy max-w-[68ch] pr-12 pb-7 text-[15px]/[1.65] md:text-base/[1.65]',
                    className,
                )}
            >
                {children}
            </div>
        </AccordionPrimitive.Content>
    )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
