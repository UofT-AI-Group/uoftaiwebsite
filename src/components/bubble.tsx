import React from 'react'
import type * as CSS from 'csstype'
import '../static/styles/bubble.css'

const Bubble = function Bubble({
    speed,
    size,
    top,
    left,
}: {
    speed: string
    size: string
    top: string
    left: string
}) {
    const bubbleStyles: CSS.Properties = {
        position: 'absolute',
        top: top,
        left: left,
        background: 'radial-gradient(purple, white 50%)',
        height: size,
        width: size,
        animationDuration: `${speed}s`,
        WebkitAnimationDuration: `${speed}s`,
        MozAnimationDuration: `${speed}s`,
    }

    return <div className="bubble" style={bubbleStyles}></div>
}

export default Bubble
