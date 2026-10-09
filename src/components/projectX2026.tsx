import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { ButtonOutline } from './Button'
import { Box, VStack, Text, Button, chakra, useBreakpointValue, SimpleGrid, Icon } from '@chakra-ui/react'
import { LuTrophy, LuRocket, LuCheckCheck, LuAtom, LuUserCheck, LuHandshake } from 'react-icons/lu'
import gradient from '../static/assets/2026gradient.png'

const VB_W = 600
const VB_Y = 70   // top of the cropped viewBox (curve's highest point is ~71)
const VB_H = 60   // 70 → 130 covers the curve's full height (~71 to ~129)
const CURVE = 'M 30 100 C 180 0, 330 200, 570 100'

const TIMELINE = [
    { label: 'Applications Open', date: 'September 28th', labelOnTop: false },
    { label: 'Applications Close', date: 'October 20th', labelOnTop: false },
    { label: 'Short Check-Ins', date: 'Monthly until December', labelOnTop: true },
    { label: 'Final Submission', date: 'January 15th', labelOnTop: false },
    { label: 'ConferenceX', date: 'February', labelOnTop: true },
]

type Point = { x: number; y: number }

export default function ProjectX2026() {
    const pathRef = useRef<SVGPathElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [points, setPoints] = useState<Point[]>([])
    const [containerW, setContainerW] = useState(0)

    // Evenly spaced points along the curve
    useLayoutEffect(() => {
        const path = pathRef.current
        if (!path) return
        const total = path.getTotalLength()
        const n = TIMELINE.length
        setPoints(
            TIMELINE.map((_, i) => {
                const { x, y } = path.getPointAtLength(n === 1 ? 0 : (i / (n - 1)) * total)
                return { x, y }
            })
        )
    }, [])

    // Track the container's rendered width (for px -> viewBox conversion)
    useEffect(() => {
        const el = containerRef.current
        if (!el) return
        const ro = new ResizeObserver(([entry]) => setContainerW(entry.contentRect.width))
        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    // Button size in px, keep in sync with w/h on the Button below
    const btnSize = useBreakpointValue({ base: 24, sm: 32, md: 48 }) ?? 48
    // Hole radius in viewBox units; -1 lets the line tuck under the border
    const holeR = containerW ? (btnSize / 2 - 1) * (VB_W / containerW) : 0

    const onSelect = (index: number) => {
        // TODO: handle click (scroll to section, open modal, etc.)
        console.log('Selected', TIMELINE[index].label)
    }

    return <Box fontFamily={'Tabular, sans-serif'}>
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
            pr={[4, 16]}>
            <VStack alignItems={'left'} spacing={100} pb={'20px'} width={{ base: '90%', xl: '70%' }} margin={'auto'}>
                <Box width={'100%'}>
                    <Text fontSize={['16px', '22px']} color={'light'}>
                        2026 RESEARCH THEME
                    </Text>
                    <Text
                        fontWeight={'medium'}
                        fontSize={[30, 60]}
                        color={'light'}
                        m={'20px 0px'}
                    >
                        What is Progress?
                    </Text>
                    <Text
                        color={'light'}
                        width={'50%'}>
                        Projects may explore how AI can address a specific problem or how regulation should guide the pace of AI development.
                    </Text>
                    <Box marginTop={'20px'}>
                        <HashLink
                            smooth
                            to={
                                'https://forms.gle/J99tMADBSikDDf9E6'
                            }
                        >
                            <ButtonOutline variant="light">
                                Apply Now
                            </ButtonOutline>
                        </HashLink>
                    </Box>
                </Box>

                <Box width={'100%'}>

                    {/* Fixed px padding = room for labels/buttons above & below the line.
        This is what sets the heading-to-line distance, and it doesn't scale. */}
                    <Box pt={['44px', '64px']} pb={['44px', '64px']}>
                        {/* Same aspect ratio as the cropped viewBox so % positions line up */}
                        <Box
                            ref={containerRef}
                            position="relative"
                            w="full"
                            style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
                        >
                            <chakra.svg
                                viewBox={`0 ${VB_Y} ${VB_W} ${VB_H}`}
                                position="absolute"
                                inset={0}
                                w="full"
                                h="full"
                                overflow="visible"
                            >
                                <defs>
                                    <mask
                                        id="timeline-mask"
                                        maskUnits="userSpaceOnUse"
                                        x={-50} y={VB_Y - 50} width={VB_W + 100} height={VB_H + 100}
                                    >
                                        <rect x={-50} y={VB_Y - 50} width={VB_W + 100} height={VB_H + 100} fill="white" />
                                        {points.map((p, i) => (
                                            <circle key={i} cx={p.x} cy={p.y} r={holeR} fill="black" />
                                        ))}
                                    </mask>
                                </defs>

                                <chakra.path
                                    ref={pathRef}
                                    d={CURVE}
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    mask="url(#timeline-mask)"
                                />
                            </chakra.svg>

                            {points.map((p, i) => {
                                const item = TIMELINE[i]
                                const varying = i % 2 === 0

                                const dateText = (
                                    <Text color={'#caf0f8'} fontSize={{ base: '0.5rem', md: '0.7rem', lg: '0.9rem' }} whiteSpace="nowrap">
                                        {item.date}
                                    </Text>
                                )
                                const labelText = (
                                    <Text color={'light'} fontSize={{ base: '0.5rem', md: '0.7rem', lg: '0.9rem' }} fontWeight={'bold'} whiteSpace="nowrap">
                                        {item.label}
                                    </Text>
                                )

                                return (
                                    <VStack
                                        key={item.label}
                                        position="absolute"
                                        left={`${(p.x / VB_W) * 100}%`}
                                        top={`${((p.y - VB_Y) / VB_H) * 100}%`}
                                        transform="translate(-50%, -50%)"
                                        spacing={{ base: 2, lg: 4 }}
                                    >
                                        {item.labelOnTop ? labelText : dateText}

                                        <Button
                                            w={['24px', '32px', '48px']}
                                            h={['24px', '32px', '48px']}
                                            minW={0}
                                            p={0}
                                            borderRadius="full"
                                            bg="transparent"
                                            border="2px solid white"
                                            transition="background 0.2s"
                                            _hover={{ bg: `${varying ? 'white' : '#8ecae6'}`, border: `2px solid ${varying ? 'white' : '#8ecae6'}` }}
                                            _active={{ bg: 'whiteAlpha.300' }}
                                            onClick={() => onSelect(i)}
                                            aria-label={`${item.label}, ${item.date}`}
                                        />

                                        {item.labelOnTop ? dateText : labelText}
                                    </VStack>
                                )
                            })}
                        </Box>
                    </Box>
                </Box>

                <Box width={'100%'}>
                    <Text
                        w="fit-content"
                        fontWeight={'medium'}
                        fontSize={[30, 40]}
                        color={'light'}>
                        FAQ
                    </Text>
                    <SimpleGrid
                        marginTop={'20px'}
                        columns={[1, 2, 3]}
                        rowGap={'32px'}
                        columnGap={'32px'}
                    >
                        <Box
                            bg="#001233"
                            borderRadius="14px"
                            border="1px solid #002855"
                            p={6}
                            maxW="384px"
                        >
                            <Box
                                bg="#001845"
                                borderRadius="full"
                                w="56px"
                                h="56px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                mb="24px"
                            >
                                <Icon
                                    as={LuUserCheck as React.ElementType}
                                    boxSize="28px"
                                    color="#8ecae6"
                                />
                            </Box>
                            <Text
                                color="light"
                                fontSize={['16px', '20px']}
                                fontWeight="normal"
                                lineHeight="28px"
                                mb="12px"
                            >
                                Eligibility
                            </Text>
                            <Text
                                color="#FFFFFFB2"
                                fontSize={['14px', '16px']}
                                fontWeight="normal"
                                lineHeight="26px"
                                letterSpacing="-0.31px"
                                opacity={0.9}
                                maxW="281px"
                                mb="16px"
                            >
                                Students from all academic backgrounds are welcome, including computer science, mathematics,
                                social sciences, and humanities. Projects may propose a new technology, process, or policy,
                                or pursue traditional academic research.
                            </Text>
                        </Box>

                        <Box
                            bg="#001233"
                            borderRadius="14px"
                            border="1px solid #002855"
                            p={6}
                            maxW="384px"
                        >
                            <Box
                                bg="#001845"
                                borderRadius="full"
                                w="56px"
                                h="56px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                mb="24px"
                            >
                                <Icon
                                    as={LuCheckCheck as React.ElementType}
                                    boxSize="28px"
                                    color="#8ecae6"
                                />
                            </Box>
                            <Text
                                color="light"
                                fontSize={['16px', '20px']}
                                fontWeight="normal"
                                lineHeight="28px"
                                mb="12px"
                            >
                                Acceptance
                            </Text>
                            <Text
                                color="#FFFFFFB2"
                                fontSize={['14px', '16px']}
                                lineHeight="26px"
                                letterSpacing="-0.31px"
                                opacity={0.9}
                                maxW="281px"
                                mb="16px"
                            >
                                Applicants are then notified whether they have been accepted.
                                Accepted teams work on their projects with UofT AI mentorship until the January 15
                                final submission deadline.
                            </Text>
                        </Box>

                        <Box
                            bg="#001233"
                            borderRadius="14px"
                            border="1px solid #002855"
                            p={6}
                            maxW="384px"
                        >
                            <Box
                                bg="#001845"
                                borderRadius="full"
                                w="56px"
                                h="56px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                mb="24px"
                            >
                                <Icon
                                    as={LuAtom as React.ElementType}
                                    boxSize="28px"
                                    color="#8ecae6"
                                />
                            </Box>
                            <Text
                                color="light"
                                fontSize={['16px', '20px']}
                                fontWeight="normal"
                                lineHeight="28px"
                                mb="12px"
                            >
                                Research Direction
                            </Text>
                            <Text
                                color="#FFFFFFB2"
                                fontSize={['14px', '16px']}
                                lineHeight="26px"
                                letterSpacing="-0.31px"
                                opacity={0.9}
                                maxW="281px"
                                mb="16px"
                            >
                                Your proposal does not need to be finalized when you apply. Outline
                                your research interests and initial project direction; you can refine
                                the details during the program.
                            </Text>
                        </Box>



                        <Box
                            bg="#001233"
                            borderRadius="14px"
                            border="1px solid #002855"
                            p={6}
                            maxW="384px"
                        >
                            <Box
                                bg="#001845"
                                borderRadius="full"
                                w="56px"
                                h="56px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                mb="24px"
                            >
                                <Icon
                                    as={LuHandshake as React.ElementType}
                                    boxSize="28px"
                                    color="#8ecae6"
                                />
                            </Box>
                            <Text
                                color="light"
                                fontSize={['16px', '20px']}
                                fontWeight="normal"
                                lineHeight="28px"
                                mb="12px"
                            >
                                Support
                            </Text>
                            <Text
                                color="#FFFFFFB2"
                                fontSize={['14px', '16px']}
                                lineHeight="26px"
                                letterSpacing="-0.31px"
                                opacity={0.9}
                                maxW="281px"
                                mb="16px"
                            >
                                All participants have access to mentorship, workshops, and professional
                                development opportunities throughout the program.
                            </Text>
                        </Box>

                        <Box
                            bg="#001233"
                            borderRadius="14px"
                            border="1px solid #002855"
                            p={6}
                            maxW="384px"
                        >
                            <Box
                                bg="#001845"
                                borderRadius="full"
                                w="56px"
                                h="56px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                mb="24px"
                            >
                                <Icon
                                    as={LuRocket as React.ElementType}
                                    boxSize="28px"
                                    color="#8ecae6"
                                />
                            </Box>
                            <Text
                                color="light"
                                fontSize={['16px', '20px']}
                                fontWeight="normal"
                                lineHeight="28px"
                                mb="12px"
                            >
                                ConferenceX
                            </Text>
                            <Text
                                color="#FFFFFFB2"
                                fontSize={['14px', '16px']}
                                lineHeight="26px"
                                letterSpacing="-0.31px"
                                opacity={0.9}
                                maxW="281px"
                                mb="16px"
                            >
                                After January 15, top finalists from both streams are
                                invited to present live at ConferenceX, UofT AI's annual two-day flagship event
                                in February.
                            </Text>
                        </Box>

                        <Box
                            bg="#001233"
                            borderRadius="14px"
                            border="1px solid #002855"
                            p={6}
                            maxW="384px"
                        >
                            <Box
                                bg="#001845"
                                borderRadius="full"
                                w="56px"
                                h="56px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                mb="24px"
                            >
                                <Icon
                                    as={LuTrophy as React.ElementType}
                                    boxSize="28px"
                                    color="#8ecae6"
                                />
                            </Box>
                            <Text
                                color="light"
                                fontSize={['16px', '20px']}
                                fontWeight="normal"
                                lineHeight="28px"
                                mb="12px"
                            >
                                Finalists
                            </Text>
                            <Text
                                color="#FFFFFFB2"
                                fontSize={['14px', '16px']}
                                lineHeight="26px"
                                letterSpacing="-0.31px"
                                opacity={0.9}
                                maxW="281px"
                                mb="16px"
                            >
                                Receive a VIP ticket and the opportunity to present alongside industry
                                professionals and AI experts from across North America. They can share their research,
                                build professional connections, and seek support for their projects.
                            </Text>
                        </Box>
                    </SimpleGrid>
                </Box>
                <Box width={'100%'}>
                    <Text
                        fontWeight={'medium'}
                        fontSize={[30, 40]}
                        color={'light'}
                        m={'20px 0px'}
                    >
                        Have Questions?
                    </Text>
                    <Text
                        color={'light'}>
                        Contact <Text as='span' color={'#a2d2ff'}><a href='mailto:uoftaigroup@gmail.com'>uoftaigroup@gmail.com</a></Text>. We will make our best to accomodate!
                    </Text>
                </Box>
                <Box></Box>
            </VStack>
        </Box>
    </Box>
}