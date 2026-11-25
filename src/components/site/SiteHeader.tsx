import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { ChevronDown, Menu, X } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa6'
import { NavigationMenu as Nav } from 'radix-ui'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { DISCORD_URL, NAV_GROUPS, isExternal } from '@/data/site'
import type { SiteLink } from '@/data/site'
import { wrap } from '@/lib/layout'
import { cn } from '@/lib/utils'
import Wordmark from './Wordmark'

/** Year pages like `/conferencex/2026` count as part of `/conferencex`. */
function isCurrentLink(to: string, pathname: string, hash: string) {
    if (to.includes('#')) return `${pathname}${hash}` === to
    if (to === '/') return pathname === '/' && !hash
    return pathname === to || pathname.startsWith(`${to}/`)
}

const LinkTarget = ({
    link,
    current,
    className,
    onNavigate,
    children,
}: {
    link: SiteLink
    current: boolean
    className?: string
    onNavigate?: () => void
    children: ReactNode
}) =>
    isExternal(link.to) ? (
        <a href={link.to} className={className} onClick={onNavigate}>
            {children}
        </a>
    ) : (
        <Link
            to={link.to}
            className={className}
            aria-current={current ? 'page' : undefined}
            onClick={onNavigate}
        >
            {children}
        </Link>
    )

const ExternalMark = ({ to }: { to: string }) =>
    isExternal(to) ? (
        <span aria-hidden="true" className="text-[0.9em] text-dim">
            ↗
        </span>
    ) : null

const itemClass =
    'group/item relative z-1 inline-flex h-11 items-center gap-1.5 px-3 text-sm whitespace-nowrap text-dim transition-colors duration-200 outline-hidden hover:text-fg focus-visible:text-fg focus-visible:outline-1 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-brand data-[state=open]:text-fg data-current:text-fg motion-reduce:transition-none'

const CurrentLine = () => (
    <span
        aria-hidden="true"
        className="absolute inset-x-3 bottom-2 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out-soft group-data-current/item:scale-x-100 motion-reduce:transition-none"
    />
)

type Glide = { left: number; width: number; shown: boolean; snap: boolean }

/**
 * Desktop navigation. A soft box glides to whichever item is hovered or
 * focused, and the dropdowns share one panel that resizes and slides between
 * menus instead of closing and reopening.
 */
const DesktopNav = () => {
    const { pathname, hash } = useLocation()
    const [value, setValue] = useState('')
    const [glide, setGlide] = useState<Glide>({
        left: 0,
        width: 0,
        shown: false,
        snap: true,
    })
    const [panel, setPanel] = useState({ x: 0, snap: true })
    const triggers = useRef(new Map<string, HTMLElement>())
    const pointerInside = useRef(false)

    const glideTo = (el: HTMLElement) =>
        setGlide((prev) => ({
            left: el.offsetLeft,
            width: el.offsetWidth,
            shown: true,
            snap: !prev.shown,
        }))
    const hideGlide = () => setGlide((prev) => ({ ...prev, shown: false }))

    const onValueChange = (next: string) => {
        const el = triggers.current.get(next)
        if (el) setPanel({ x: el.offsetLeft, snap: value === '' })
        if (!next && !pointerInside.current) hideGlide()
        setValue(next)
    }

    const homeCurrent = isCurrentLink('/', pathname, hash)

    return (
        <Nav.Root
            value={value}
            onValueChange={onValueChange}
            aria-label="Main navigation"
            className="relative hidden md:block"
        >
            <Nav.List
                className="relative flex items-center"
                onPointerEnter={() => (pointerInside.current = true)}
                onPointerLeave={() => {
                    pointerInside.current = false
                    const open = triggers.current.get(value)
                    if (open) glideTo(open)
                    else hideGlide()
                }}
                onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node))
                        hideGlide()
                }}
            >
                <li
                    aria-hidden="true"
                    className={cn(
                        'pointer-events-none absolute top-1/2 left-0 h-9 -translate-y-1/2 bg-[#18181c] motion-reduce:transition-none',
                        glide.snap
                            ? 'transition-opacity duration-150'
                            : 'transition-[translate,width,opacity] duration-300 ease-out-soft',
                        glide.shown ? 'opacity-100' : 'opacity-0',
                    )}
                    style={{
                        translate: `${glide.left}px -50%`,
                        width: glide.width,
                    }}
                />
                <Nav.Item>
                    <Nav.Link asChild active={homeCurrent}>
                        <Link
                            to="/"
                            data-current={homeCurrent || undefined}
                            aria-current={homeCurrent ? 'page' : undefined}
                            className={itemClass}
                            onPointerEnter={(e) => glideTo(e.currentTarget)}
                            onFocus={(e) => glideTo(e.currentTarget)}
                        >
                            Home
                            <CurrentLine />
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                {NAV_GROUPS.map((group) => {
                    const groupCurrent = group.links.some((link) =>
                        isCurrentLink(link.to, pathname, hash),
                    )
                    return (
                        <Nav.Item key={group.label} value={group.label}>
                            <Nav.Trigger
                                ref={(el) => {
                                    if (el)
                                        triggers.current.set(group.label, el)
                                }}
                                data-current={groupCurrent || undefined}
                                className={itemClass}
                                onPointerEnter={(e) => glideTo(e.currentTarget)}
                                onFocus={(e) => glideTo(e.currentTarget)}
                            >
                                {group.label}
                                <ChevronDown
                                    aria-hidden="true"
                                    className="size-3.5 transition-transform duration-250 group-data-[state=open]/item:rotate-180 motion-reduce:transition-none"
                                />
                                <CurrentLine />
                            </Nav.Trigger>
                            <Nav.Content className="absolute top-0 left-0 motion-safe:data-[motion=from-end]:animate-[nav-from-end_300ms_var(--ease-out-soft)] motion-safe:data-[motion=from-start]:animate-[nav-from-start_300ms_var(--ease-out-soft)] motion-safe:data-[motion=to-end]:animate-[nav-to-end_300ms_var(--ease-out-soft)] motion-safe:data-[motion=to-start]:animate-[nav-to-start_300ms_var(--ease-out-soft)]">
                                <ul className="w-max min-w-64 py-2">
                                    {group.links.map((link) => {
                                        const current = isCurrentLink(
                                            link.to,
                                            pathname,
                                            hash,
                                        )
                                        return (
                                            <li key={link.to}>
                                                <Nav.Link
                                                    asChild
                                                    active={current}
                                                >
                                                    <LinkTarget
                                                        link={link}
                                                        current={current}
                                                        className="group/link flex flex-col gap-1 px-5 py-3 outline-hidden transition-colors duration-200 hover:bg-raised focus-visible:bg-raised data-active:shadow-[inset_2px_0_0_var(--brand)] motion-reduce:transition-none"
                                                    >
                                                        <span className="flex items-center gap-1.5 text-sm text-fg">
                                                            {link.label}
                                                            <ExternalMark
                                                                to={link.to}
                                                            />
                                                        </span>
                                                        {link.description && (
                                                            <span className="font-sans text-[13px] text-dim">
                                                                {
                                                                    link.description
                                                                }
                                                            </span>
                                                        )}
                                                    </LinkTarget>
                                                </Nav.Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </Nav.Content>
                        </Nav.Item>
                    )
                })}
            </Nav.List>

            <div
                className={cn(
                    'absolute top-full left-0 pt-[18px]',
                    !panel.snap &&
                        'transition-transform duration-300 ease-out-soft motion-reduce:transition-none',
                )}
                style={{ transform: `translateX(${panel.x}px)` }}
            >
                <Nav.Viewport className="relative h-(--radix-navigation-menu-viewport-height) w-(--radix-navigation-menu-viewport-width) origin-top overflow-hidden border border-[#2c2c32] bg-ink shadow-[0_18px_40px_rgb(0_0_0/0.5)] transition-[width,height] duration-300 ease-out-soft data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[0.98] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[0.98] motion-reduce:animate-none motion-reduce:transition-none" />
            </div>
        </Nav.Root>
    )
}

const MobileNav = () => {
    const [open, setOpen] = useState(false)
    const { pathname, hash } = useLocation()
    const close = () => setOpen(false)
    const linkClass = (current: boolean) =>
        cn(
            'focus-ring flex min-h-14 items-center justify-between border-b border-hair text-[22px] tracking-[-0.02em]',
            current ? 'text-brand' : 'text-fg',
        )

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="-mr-2.5 md:hidden"
                    aria-label="Open menu"
                >
                    <Menu aria-hidden="true" />
                </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                showCloseButton={false}
                className="w-full border-0 sm:max-w-none"
            >
                <div className="border-b border-hair">
                    <div
                        className={cn(
                            wrap,
                            'flex h-(--site-header-height) items-center justify-between',
                        )}
                    >
                        <SheetTitle asChild>
                            <p className="flex items-center gap-3 text-[17px] font-medium">
                                UofT AI
                            </p>
                        </SheetTitle>
                        <SheetDescription className="sr-only">
                            Site navigation
                        </SheetDescription>
                        <SheetClose asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="-mr-2.5"
                                aria-label="Close menu"
                            >
                                <X aria-hidden="true" />
                            </Button>
                        </SheetClose>
                    </div>
                </div>
                <nav
                    aria-label="Mobile navigation"
                    className="flex-1 overflow-y-auto"
                >
                    <div className={cn(wrap, 'max-w-160 pt-3 pb-6')}>
                        <Link
                            to="/"
                            onClick={close}
                            aria-current={
                                isCurrentLink('/', pathname, hash)
                                    ? 'page'
                                    : undefined
                            }
                            className={linkClass(
                                isCurrentLink('/', pathname, hash),
                            )}
                        >
                            Home
                        </Link>
                        {NAV_GROUPS.map((group) => (
                            <section key={group.label} aria-label={group.label}>
                                <h2 className="pt-7 pb-1.5 font-sans text-[13px] text-dim">
                                    {group.label}
                                </h2>
                                <ul>
                                    {group.links.map((link) => {
                                        const current = isCurrentLink(
                                            link.to,
                                            pathname,
                                            hash,
                                        )
                                        return (
                                            <li key={link.to}>
                                                <LinkTarget
                                                    link={link}
                                                    current={current}
                                                    onNavigate={close}
                                                    className={linkClass(
                                                        current,
                                                    )}
                                                >
                                                    {link.label}
                                                    <ExternalMark
                                                        to={link.to}
                                                    />
                                                </LinkTarget>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </section>
                        ))}
                    </div>
                </nav>
                <div
                    className={cn(
                        wrap,
                        'max-w-160 pt-4 pb-[max(24px,env(safe-area-inset-bottom))]',
                    )}
                >
                    <Button asChild className="h-13 w-full">
                        <a href={DISCORD_URL} onClick={close}>
                            <FaDiscord aria-hidden="true" />
                            Join the Discord
                        </a>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

const SiteHeader = () => (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-hair bg-ink font-mono text-fg antialiased">
        <div
            className={cn(
                wrap,
                'flex h-(--site-header-height) items-center justify-between gap-8',
            )}
        >
            <Wordmark />
            <div className="flex items-center gap-4">
                <DesktopNav />
                <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="hidden sm:inline-flex"
                >
                    <a href={DISCORD_URL}>
                        <FaDiscord aria-hidden="true" />
                        Join the Discord
                    </a>
                </Button>
                <MobileNav />
            </div>
        </div>
    </header>
)

export default SiteHeader
