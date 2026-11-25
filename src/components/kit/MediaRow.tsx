import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type Photo = {
    src: string
    srcSet?: string
    alt: string
    /** Keeps the subject in view when the photo is cropped. */
    position?: string
}

/**
 * A photo beside a short block of text. Pass `flip` on every other row to
 * alternate sides on wide screens.
 */
export const MediaRow = ({
    photo,
    title,
    children,
    flip = false,
    className,
}: {
    photo: Photo
    title: ReactNode
    children: ReactNode
    flip?: boolean
    className?: string
}) => (
    <article
        className={cn(
            'grid items-center gap-7 md:grid-cols-2 md:gap-12 lg:gap-20',
            className,
        )}
    >
        <img
            src={photo.src}
            srcSet={photo.srcSet}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt={photo.alt}
            loading="lazy"
            className={cn(
                'aspect-[3/2] w-full rounded-sm bg-raised object-cover',
                flip && 'md:order-2',
            )}
            style={{ objectPosition: photo.position }}
        />
        <div>
            <h3 className="max-w-[22ch] text-[clamp(24px,2.4vw,34px)]/[1.15] tracking-[-0.02em] text-balance">
                {title}
            </h3>
            <div className="copy mt-4 max-w-[52ch] text-base/[1.65] md:text-[17px]/[1.65]">
                {children}
            </div>
        </div>
    </article>
)
