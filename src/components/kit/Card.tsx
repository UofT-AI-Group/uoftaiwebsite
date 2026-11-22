import type { ComponentProps, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Photo } from './MediaRow'
import { SmartLink } from './SmartLink'

/**
 * A ruled block of content, not a boxed panel: a hairline on top and open
 * space below, like the rest of the site. Compose it from the parts below.
 * When `CardTitle` has an `href`, the whole card becomes clickable.
 *
 *   feature   CardIcon + CardTitle + CardText
 *   resource  CardTitle href download + CardText + CardFooter
 *   link      CardMedia + CardMeta + CardTitle href
 */
export const Card = ({
    rule = true,
    className,
    ...props
}: ComponentProps<'article'> & {
    /** Turn off when the card opens with a photo. */
    rule?: boolean
}) => (
    <article
        className={cn(
            'group relative flex flex-col',
            rule &&
                'border-t border-hair pt-6 transition-colors duration-250 has-[[data-card-link]:hover]:border-brand motion-reduce:transition-none',
            className,
        )}
        {...props}
    />
)

export const CardMedia = ({
    photo,
    className,
}: {
    photo: Photo
    className?: string
}) => (
    <div className={cn('mb-5 overflow-hidden rounded-sm', className)}>
        <img
            src={photo.src}
            srcSet={photo.srcSet}
            alt={photo.alt}
            loading="lazy"
            className="aspect-[3/2] w-full bg-raised object-cover transition-transform duration-800 ease-out-soft group-has-[[data-card-link]:hover]:scale-[1.03] motion-reduce:transition-none"
            style={{ objectPosition: photo.position }}
        />
    </div>
)

export const CardIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <Icon
        aria-hidden="true"
        strokeWidth={1.5}
        className="mb-5 size-6 text-brand"
    />
)

/** A short line above the title, such as a date or "PDF". */
export const CardMeta = ({ children }: { children: ReactNode }) => (
    <p className="mb-2 text-[13px] text-dim">{children}</p>
)

export const CardTitle = ({
    children,
    href,
    download,
    as: Heading = 'h3',
}: {
    children: ReactNode
    href?: string
    /** Set for files so the browser downloads instead of navigating. */
    download?: boolean | string
    as?: 'h2' | 'h3' | 'h4'
}) => (
    <Heading className="text-lg/[1.3] tracking-[-0.01em] text-balance">
        {href ? (
            <SmartLink
                to={href}
                download={download === true ? '' : download || undefined}
                data-card-link=""
                className="link-grow focus-ring after:absolute after:inset-0"
            >
                {children}
            </SmartLink>
        ) : (
            children
        )}
    </Heading>
)

export const CardText = ({ children }: { children: ReactNode }) => (
    <div className="copy mt-2.5 text-[15px]/[1.6]">{children}</div>
)

/** Pinned to the bottom so footers line up across a row of cards. */
export const CardFooter = ({ children }: { children: ReactNode }) => (
    <div className="mt-auto flex items-center gap-2 pt-5 text-[13px] text-dim [&_svg]:size-4">
        {children}
    </div>
)
