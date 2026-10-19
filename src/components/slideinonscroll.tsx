import { type ReactNode, useEffect, useRef } from 'react'
import '../static/styles/slideinonscroll.css'

const SlideInOnScroll = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 350 && ref.current) {
                const slideIns = ref.current.querySelectorAll(
                    '.slide-in-right, .slide-in-left',
                )
                slideIns.forEach((slideIn) => {
                    const slideInTop = slideIn.getBoundingClientRect().top
                    const slideInPosition = window.innerHeight - slideInTop
                    if (slideInPosition >= 0) {
                        slideIn.classList.add('active')
                    } else {
                        slideIn.classList.remove('active')
                    }
                })
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return <div ref={ref}>{children}</div>
}

export default SlideInOnScroll
