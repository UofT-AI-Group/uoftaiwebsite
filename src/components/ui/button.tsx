import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex shrink-0 items-center justify-center gap-2.5 border font-mono whitespace-nowrap transition-colors duration-250 outline-hidden select-none focus-visible:outline-1 focus-visible:outline-solid focus-visible:outline-offset-4 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default:
                    'border-white bg-white text-ink hover:border-[#ebdcf6] hover:bg-[#ebdcf6]',
                outline:
                    'border-[#3a3a40] bg-ink/50 text-fg hover:border-brand',
                ghost: 'border-transparent text-fg hover:text-brand',
                dark: 'border-ink bg-ink text-fg hover:border-[#2a2a30] hover:bg-[#2a2a30] focus-visible:outline-ink',
            },
            size: {
                default: 'h-[50px] px-[22px] text-sm [&_svg]:size-4',
                sm: 'h-10 px-4 text-[13px] [&_svg]:size-3.5',
                icon: 'size-11 [&_svg]:size-5',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot.Root : 'button'

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
