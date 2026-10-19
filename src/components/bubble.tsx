import type { CSSProperties } from 'react'
import '../static/styles/bubble.css'

const Bubble = ({
    speed,
    size,
    top,
    left,
}: {
    speed: string
    size: string
    top: string
    left: string
}) => {
    const bubbleStyles: CSSProperties = {
        position: 'absolute',
        top: top,
        left: left,
        background: 'radial-gradient(purple, white 50%)',
        height: size,
        width: size,
        animationDuration: `${speed}s`,
    }

    return <div className="bubble" style={bubbleStyles}></div>
}

export default Bubble
