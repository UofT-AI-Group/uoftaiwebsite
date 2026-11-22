import { useEffect, useRef } from 'react'

const GAP = 26
const RADIUS = 170

/**
 * A grid of faint points that fills its parent element. A slow wave moves
 * through it, and points near the cursor brighten to the brand purple and lean
 * away from it.
 */
const DotField = ({ className = 'hm-field' }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const host = canvas?.parentElement
        const ctx = canvas?.getContext('2d')
        if (!canvas || !host || !ctx) return

        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches
        let width = 0
        let height = 0
        let points: [number, number][] = []
        let target = { x: -1e4, y: -1e4 }
        const cursor = { x: -1e4, y: -1e4 }
        let visible = true
        let frame = 0

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            width = host.offsetWidth
            height = host.offsetHeight
            canvas.width = width * dpr
            canvas.height = height * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            points = []
            for (let y = GAP / 2; y < height; y += GAP)
                for (let x = GAP / 2; x < width; x += GAP) points.push([x, y])
        }

        const draw = (time: number) => {
            ctx.clearRect(0, 0, width, height)
            cursor.x += (target.x - cursor.x) * 0.12
            cursor.y += (target.y - cursor.y) * 0.12
            for (const [x, y] of points) {
                const wave = reduceMotion
                    ? 0
                    : (Math.sin(x * 0.008 + y * 0.006 - time * 0.0007) + 1) / 2
                const dx = x - cursor.x
                const dy = y - cursor.y
                const dist = Math.hypot(dx, dy)
                const pull = dist < RADIUS ? (1 - dist / RADIUS) ** 2 : 0
                const px = x + (dist ? dx / dist : 0) * pull * 10
                const py = y + (dist ? dy / dist : 0) * pull * 10
                const alpha = Math.min(1, 0.1 + wave * 0.16 + pull * 1.1)
                ctx.fillStyle =
                    pull > 0.02
                        ? `rgba(${Math.round(255 - 69 * pull)},${Math.round(255 - 137 * pull)},${Math.round(255 - 30 * pull)},${alpha})`
                        : `rgba(255,255,255,${alpha})`
                ctx.beginPath()
                ctx.arc(px, py, 1 + pull * 1.8, 0, Math.PI * 2)
                ctx.fill()
            }
            if (visible && !reduceMotion) frame = requestAnimationFrame(draw)
        }

        const onMove = (e: PointerEvent) => {
            const rect = host.getBoundingClientRect()
            target = { x: e.clientX - rect.left, y: e.clientY - rect.top }
            if (cursor.x < -1e3) Object.assign(cursor, target)
        }
        const onLeave = () => {
            target = { x: -1e4, y: -1e4 }
        }
        const onResize = () => {
            resize()
            if (reduceMotion) draw(0)
        }
        const observer = new IntersectionObserver(([entry]) => {
            const wasVisible = visible
            visible = entry.isIntersecting
            if (visible && !wasVisible && !reduceMotion)
                frame = requestAnimationFrame(draw)
        })

        resize()
        frame = requestAnimationFrame(draw)
        host.addEventListener('pointermove', onMove)
        host.addEventListener('pointerleave', onLeave)
        window.addEventListener('resize', onResize)
        observer.observe(host)

        return () => {
            cancelAnimationFrame(frame)
            host.removeEventListener('pointermove', onMove)
            host.removeEventListener('pointerleave', onLeave)
            window.removeEventListener('resize', onResize)
            observer.disconnect()
        }
    }, [])

    return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}

export default DotField
