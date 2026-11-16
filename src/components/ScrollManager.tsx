import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

const findHashTarget = (hash: string) => {
    const id = hash.slice(1)
    if (!id) return null
    try {
        return document.getElementById(decodeURIComponent(id))
    } catch {
        return document.getElementById(id)
    }
}

/**
 * Scrolls to the element matching the URL hash on every navigation, starting
 * from the top when the pathname changes. Scrolls to the top instead when the
 * hash is empty or matches no element. Lazy routes mount after this effect
 * runs, so a missing hash target is watched for until it appears or the
 * location changes again.
 */
const ScrollManager = () => {
    const { pathname, hash, key } = useLocation()
    const previousPathname = useRef(pathname)

    useEffect(() => {
        const pathnameChanged = previousPathname.current !== pathname
        previousPathname.current = pathname

        const target = findHashTarget(hash)
        if (!target || pathnameChanged) window.scrollTo(0, 0)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
            return
        }
        if (!hash) return

        const observer = new MutationObserver(() => {
            const mounted = findHashTarget(hash)
            if (!mounted) return
            observer.disconnect()
            mounted.scrollIntoView({ behavior: 'smooth' })
        })
        observer.observe(document.body, { childList: true, subtree: true })
        return () => observer.disconnect()
    }, [pathname, hash, key])

    return null
}

export default ScrollManager
