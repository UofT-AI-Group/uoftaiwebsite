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
 * hash is empty or matches no element. Routes render synchronously, so the
 * target is already in the DOM when the effect runs.
 */
const ScrollManager = () => {
    const { pathname, hash, key } = useLocation()
    const previousPathname = useRef(pathname)

    useEffect(() => {
        const pathnameChanged = previousPathname.current !== pathname
        previousPathname.current = pathname

        const target = findHashTarget(hash)
        if (!target || pathnameChanged) window.scrollTo(0, 0)
        target?.scrollIntoView({ behavior: 'smooth' })
    }, [pathname, hash, key])

    return null
}

export default ScrollManager
