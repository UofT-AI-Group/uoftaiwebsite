import { Fragment, type ElementType } from 'react'
import {
    Box,
    Flex,
    Grid,
    Icon,
    Text,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react'
import { LuArrowDown, LuArrowLeft, LuArrowRight } from 'react-icons/lu'

interface TimelineMilestone {
    date: string
    title: string
    highlight?: boolean
}

const MILESTONES: TimelineMilestone[] = [
    {
        date: 'October 20, 2026',
        title: 'Applications closed',
    },
    {
        date: 'November 7, 2026',
        title: 'Kickoff and Networking Mixer (in-person)',
    },
    {
        date: 'November 27, 2026',
        title: 'Virtual Mentorship and Networking Event',
    },
    {
        date: 'December 2026',
        title: 'Research Methods Workshop (Research Stream)',
    },
    {
        date: 'December 2026',
        title: 'Pitch and Proposal Talk and Q&A (Proposal + Pitch Stream)',
    },
    {
        date: 'January 2027',
        title: 'Virtual Office Hours — Research Stream',
    },
    {
        date: 'January 2027',
        title: 'Virtual Office Hours — Proposal + Pitch Stream',
    },
    {
        date: 'January 15, 2027',
        title: 'Final submission deadline',
        highlight: true,
    },
    {
        date: 'February 2027',
        title: 'ConferenceX — live presentations and awards (date pending)',
        highlight: true,
    },
]

function MilestoneCard({
    milestone,
    index,
}: {
    milestone: TimelineMilestone
    index: number
}) {
    const stepNumber = String(index + 1).padStart(2, '0')
    const isHighlight = Boolean(milestone.highlight)

    return (
        <Box
            role="listitem"
            bg={isHighlight ? 'rgba(135, 167, 255, 0.16)' : '#1a223a'}
            border={
                isHighlight
                    ? '1.5px solid #87a7ff'
                    : '1px solid rgba(255, 255, 255, 0.12)'
            }
            borderRadius="14px"
            p={5}
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            gap={3}
            boxShadow={
                isHighlight
                    ? '0 8px 24px rgba(135, 167, 255, 0.22)'
                    : '0 6px 18px rgba(0, 0, 0, 0.25)'
            }
            transition="transform 0.2s ease, border-color 0.2s ease"
            _hover={{
                borderColor: '#87a7ff',
                transform: 'translateY(-2px)',
            }}
        >
            <Flex align="center" justify="space-between" gap={2}>
                <Text
                    fontSize={{ base: '13px', md: '14px' }}
                    fontWeight={isHighlight ? 'bold' : 'semibold'}
                    color={isHighlight ? '#caf0f8' : '#87a7ff'}
                    letterSpacing="0.02em"
                >
                    {milestone.date}
                </Text>
                <Flex
                    align="center"
                    justify="center"
                    minW="28px"
                    h="28px"
                    px={2}
                    borderRadius="full"
                    bg={isHighlight ? '#87a7ff' : 'rgba(97, 116, 200, 0.28)'}
                    color={isHighlight ? '#0d152a' : '#caf0f8'}
                    fontSize="12px"
                    fontWeight="bold"
                    flexShrink={0}
                >
                    {stepNumber}
                </Flex>
            </Flex>

            <Text
                color="light"
                fontSize={{ base: '15px', md: '16px' }}
                fontWeight={isHighlight ? 'bold' : 'medium'}
                lineHeight="1.45"
            >
                {milestone.title}
            </Text>
        </Box>
    )
}

export default function ProjectXTimeline() {
    const cols = useBreakpointValue({ base: 1, md: 2, lg: 3 }) ?? 1

    if (cols === 1) {
        return (
            <VStack
                role="list"
                aria-label="Project X 2026 Timeline"
                spacing={0}
                align="stretch"
                mt={8}
            >
                {MILESTONES.map((milestone, idx) => (
                    <Fragment key={`${milestone.date}-${milestone.title}`}>
                        <MilestoneCard milestone={milestone} index={idx} />
                        {idx < MILESTONES.length - 1 && (
                            <Flex justify="center" py={2} aria-hidden="true">
                                <Icon
                                    as={LuArrowDown as ElementType}
                                    boxSize="22px"
                                    color="#87a7ff"
                                />
                            </Flex>
                        )}
                    </Fragment>
                ))}
            </VStack>
        )
    }

    const rows: { milestone: TimelineMilestone; index: number }[][] = []
    for (let i = 0; i < MILESTONES.length; i += cols) {
        rows.push(
            MILESTONES.slice(i, i + cols).map((milestone, offset) => ({
                milestone,
                index: i + offset,
            })),
        )
    }

    const gridTemplateColumns = Array.from({ length: cols }, () => '1fr').join(
        ' 36px ',
    )

    return (
        <Box
            role="list"
            aria-label="Project X 2026 Timeline"
            mt={8}
            width="100%"
        >
            {rows.map((rowItems, rowIdx) => {
                const isReversed = rowIdx % 2 === 1
                const hasNextRow = rowIdx < rows.length - 1
                const turnCol = isReversed ? 1 : cols * 2 - 1

                return (
                    <Fragment key={rowIdx}>
                        <Grid
                            templateColumns={gridTemplateColumns}
                            alignItems="stretch"
                        >
                            {rowItems.map(({ milestone, index }, pos) => {
                                const cardCol = isReversed
                                    ? (cols - 1 - pos) * 2 + 1
                                    : pos * 2 + 1
                                const hasHorizontalArrow =
                                    pos < rowItems.length - 1
                                const arrowCol = isReversed
                                    ? cardCol - 1
                                    : cardCol + 1

                                return (
                                    <Fragment
                                        key={`${milestone.date}-${milestone.title}`}
                                    >
                                        <Box
                                            gridColumn={cardCol}
                                            gridRow={1}
                                            height="100%"
                                        >
                                            <MilestoneCard
                                                milestone={milestone}
                                                index={index}
                                            />
                                        </Box>
                                        {hasHorizontalArrow && (
                                            <Flex
                                                gridColumn={arrowCol}
                                                gridRow={1}
                                                align="center"
                                                justify="center"
                                                aria-hidden="true"
                                            >
                                                <Icon
                                                    as={
                                                        (isReversed
                                                            ? LuArrowLeft
                                                            : LuArrowRight) as ElementType
                                                    }
                                                    boxSize="22px"
                                                    color="#87a7ff"
                                                />
                                            </Flex>
                                        )}
                                    </Fragment>
                                )
                            })}
                        </Grid>

                        {hasNextRow && (
                            <Grid
                                templateColumns={gridTemplateColumns}
                                py={2.5}
                                aria-hidden="true"
                            >
                                <Flex
                                    gridColumn={turnCol}
                                    align="center"
                                    justify="center"
                                >
                                    <Icon
                                        as={LuArrowDown as ElementType}
                                        boxSize="22px"
                                        color="#87a7ff"
                                    />
                                </Flex>
                            </Grid>
                        )}
                    </Fragment>
                )
            })}
        </Box>
    )
}
