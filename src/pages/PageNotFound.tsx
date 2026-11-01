import { Box, Text } from '@chakra-ui/react'
import gradient from '../static/assets/page404gradient.webp'
import { useEffect, useMemo, useState } from 'react'

const LAYERS = [1, 4, 6, 4, 1]
const DEAD_LAYER = 3
const DEAD_NEURON = 1

const WIDTH = 800
const HEIGHT = 420
const PADDING_X = 60
const PADDING_Y = 40
const RADIUS = 16

const START_DELAY_MS = 300
const EDGE_MS = 280
const NEURON_MS = 60

const GREEN = '#22c55e'
const RED = '#ef4444'
const WHITE = '#ffffff'

const LAST_PHASE = 2 * (LAYERS.length - 1) + 1

type Neuron = {
    id: string
    x: number
    y: number
    phase: number
    color: string
    isDead: boolean
}

type Edge = {
    id: string
    x1: number
    y1: number
    x2: number
    y2: number
    length: number
    phase: number
    color: string
}

const shift = (layer: number) => (layer > DEAD_LAYER ? 1 : 0)

function buildNetwork(): { neurons: Neuron[]; edges: Edge[] } {
    const maxCount = Math.max(...LAYERS)
    const gapX = (WIDTH - 2 * PADDING_X) / (LAYERS.length - 1)
    const gapY = (HEIGHT - 2 * PADDING_Y) / (maxCount - 1)

    const positions = LAYERS.map((count, layer) =>
        Array.from({ length: count }, (_, i) => ({
            x: PADDING_X + layer * gapX,
            y: HEIGHT / 2 + (i - (count - 1) / 2) * gapY,
        })),
    )

    const neurons: Neuron[] = positions.flatMap((layerPositions, layer) =>
        layerPositions.map((p, i) => {
            const isDead = layer === DEAD_LAYER && i === DEAD_NEURON
            const restOfDeadLayer = layer === DEAD_LAYER && !isDead ? 1 : 0
            return {
                id: `n-${layer}-${i}`,
                x: p.x,
                y: p.y,
                phase: 2 * layer + shift(layer) + restOfDeadLayer,
                color: layer < DEAD_LAYER ? GREEN : RED,
                isDead,
            }
        }),
    )

    const edges: Edge[] = []
    for (let layer = 1; layer < positions.length; layer++) {
        positions[layer - 1].forEach((a, i) => {
            positions[layer].forEach((b, j) => {
                const dx = b.x - a.x
                const dy = b.y - a.y
                const len = Math.hypot(dx, dy)
                const ux = dx / len
                const uy = dy / len
                edges.push({
                    id: `e-${layer}-${i}-${j}`,
                    x1: a.x + ux * RADIUS,
                    y1: a.y + uy * RADIUS,
                    x2: b.x - ux * RADIUS,
                    y2: b.y - uy * RADIUS,
                    length: len - 2 * RADIUS,
                    phase: 2 * layer - 1 + shift(layer),
                    color: layer <= DEAD_LAYER ? GREEN : RED,
                })
            })
        })
    }

    return { neurons, edges }
}

export default function PageNotFound() {
    const { neurons, edges } = useMemo(() => buildNetwork(), [])
    const [phase, setPhase] = useState(-1)
    const [textAppear, setTextAppear] = useState(false)
    const [animationStart, setAnimationStart] = useState(false)

    useEffect(() => {
        const edgePhases = new Set(edges.map((e) => e.phase))
        const timers: ReturnType<typeof setTimeout>[] = []
        let t = START_DELAY_MS
        timers.push(setTimeout(() => setTextAppear(true), t))
        t += 300
        timers.push(setTimeout(() => setAnimationStart(true), t))
        t += 300
        for (let p = 0; p <= LAST_PHASE; p++) {
            timers.push(setTimeout(() => setPhase(p), t))
            t += edgePhases.has(p) ? EDGE_MS : NEURON_MS
        }
        return () => timers.forEach(clearTimeout)
    }, [edges])

    return (
        <Box
            bgImage={gradient}
            bgPosition={'50%'}
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
            minHeight={'80vh'}
            width={'100%'}
            mt={28}
            pt={[10, 58]}
            pl={[4, 16]}
            pr={[4, 16]}
            pb={10}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Text
                color={'white'}
                fontSize={['xl', '3xl', '5xl']}
                fontFamily={'Tabular, sans-serif'}
                fontWeight={'medium'}
                textAlign={'center'}
                opacity={textAppear ? 1 : 0}
                zIndex={999}
                transition={'opacity 1s ease'}
            >
                Page Not Found
            </Text>
            <Box
                width={'100%'}
                maxW={'800px'}
                opacity={animationStart ? 1 : 0}
                transition={'opacity 1s ease'}
            >
                <svg
                    viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                    width={'100%'}
                    role={'img'}
                    aria-label={
                        'Neural network whose signal dies before reaching the output'
                    }
                >
                    {edges.map((e) => {
                        const active = phase >= e.phase
                        return (
                            <g key={e.id}>
                                {/* Base white edge */}
                                <line
                                    x1={e.x1}
                                    y1={e.y1}
                                    x2={e.x2}
                                    y2={e.y2}
                                    stroke={WHITE}
                                    strokeOpacity={0.6}
                                    strokeWidth={1.5}
                                />
                                {/* Colored signal that travels along the edge */}
                                <line
                                    x1={e.x1}
                                    y1={e.y1}
                                    x2={e.x2}
                                    y2={e.y2}
                                    stroke={e.color}
                                    strokeWidth={2}
                                    strokeLinecap={'round'}
                                    strokeDasharray={e.length}
                                    strokeDashoffset={active ? 0 : e.length}
                                    style={{
                                        transition: `stroke-dashoffset ${EDGE_MS}ms linear`,
                                    }}
                                />
                            </g>
                        )
                    })}

                    {neurons.map((n) => {
                        const active = phase >= n.phase
                        return (
                            <circle
                                key={n.id}
                                className={
                                    active && n.isDead
                                        ? 'dead-neuron'
                                        : undefined
                                }
                                cx={n.x}
                                cy={n.y}
                                r={RADIUS}
                                fill={active ? n.color : 'transparent'}
                                fillOpacity={0.2}
                                stroke={active ? n.color : WHITE}
                                strokeWidth={2.5}
                                style={{
                                    transition:
                                        'stroke 150ms ease, fill 150ms ease, filter 150ms ease',
                                    filter: active
                                        ? `drop-shadow(0 0 6px ${n.color})`
                                        : 'none',
                                }}
                            />
                        )
                    })}
                </svg>
            </Box>
        </Box>
    )
}
