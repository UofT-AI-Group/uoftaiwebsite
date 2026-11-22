import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const SectionHeading = ({
    id,
    kicker,
    children,
    className,
}: {
    id: string
    kicker: string
    children: ReactNode
    className?: string
}) => (
    <>
        <p className="kicker mb-7">{kicker}</p>
        <h2
            id={id}
            className={cn(
                'max-w-205 text-[clamp(30px,4vw,56px)]/[1.05] font-normal tracking-[-0.03em] text-balance',
                className,
            )}
        >
            {children}
        </h2>
    </>
)

export default SectionHeading
