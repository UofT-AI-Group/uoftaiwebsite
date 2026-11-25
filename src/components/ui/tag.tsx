import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const tagVariants = cva(
    'inline-flex items-center gap-1.5 border px-2.5 py-1.25 text-xs/none whitespace-nowrap [&_svg]:size-3 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                outline: 'border-line text-[#d6d6db]',
                brand: 'border-brand/40 bg-brand/12 text-brand-soft',
            },
        },
        defaultVariants: { variant: 'outline' },
    },
)

function Tag({
    className,
    variant,
    ...props
}: React.ComponentProps<'span'> & VariantProps<typeof tagVariants>) {
    return (
        <span
            data-slot="tag"
            className={cn(tagVariants({ variant, className }))}
            {...props}
        />
    )
}

export { Tag }
