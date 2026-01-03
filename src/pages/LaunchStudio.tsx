import {
    Box,
    Container,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
    Tag,
    Text,
    VStack,
} from '@chakra-ui/react'

const profilingRows = [
    {
        dimension: 'Project Type',
        examples:
            'Applied ML product, research prototype, agentic system, foundation model fine-tuning, robotics, etc.',
        why: 'Determines resource type (compute-heavy vs. mentorship-heavy).',
    },
    {
        dimension: 'Technical Stack',
        examples: 'PyTorch, TensorFlow, JAX, LangChain, HuggingFace, etc.',
        why: 'Aligns mentor expertise and credits.',
    },
    {
        dimension: 'Compute Needs',
        examples: 'GPU vs CPU, data size, expected training time, frameworks.',
        why: 'Decides Tier 1 vs Tier 2 resource allocation.',
    },
    {
        dimension: 'Mentorship Needs',
        examples:
            'Algorithmic guidance vs. applied systems design vs. industry strategy.',
        why: 'Helps match mentors precisely.',
    },
    {
        dimension: 'Impact Goal',
        examples:
            'Research publication, social good application, product launch.',
        why: 'Influences partner matching and showcase strategy.',
    },
]

const steps = [
    {
        title: 'STEP 1 — Project Profiling',
        goal: 'Goal: Understand what each project needs',
        body: 'Within 1 week of cohort selection, the Launch Studio team conducts a call with each team to capture what the project actually needs to succeed.',
        highlights: profilingRows,
        footer: 'Mentor matching happens after that call — not by keyword — to avoid misalignment.',
    },
    {
        title: 'STEP 2 — Team Building & Mentor Matching',
        goal: 'Goal: Put the right team around each project',
        body: 'Use Project Profiles to match by technical alignment, mentorship style, and availability.',
        bullets: [
            'Technical alignment (e.g., NLP → Cohere, Reinforcement Learning → Vector, Robotics → MIE faculty).',
            'Mentorship style (hands-on coder vs. conceptual advisor).',
            'Availability and engagement level.',
            '1 Primary Mentor per project, plus 1–2 Floating Mentors for specialized check-ins.',
            'Shared channels (Notion or Slack) so mentors see updates in real time.',
        ],
    },
    {
        title: 'STEP 3 — Tooling & Integration',
        goal: 'Goal: Equip each project with the right stack',
        body: 'Review each project’s stack and identify accelerators, then allocate per project via sponsor partnerships.',
        bullets: [
            'LLMs → OpenAI / Anthropic credits.',
            'ML Ops → Weights & Biases / Comet ML.',
            'Deployment → Streamlit / Vercel.',
            'Vision → Roboflow / Lightning.ai.',
            'Deliverable: a shared “Launch Toolkit” page listing available APIs, credits, logins, and setup guides.',
        ],
    },
    {
        title: 'STEP 4 — DEMO NIGHT',
        goal: 'Goal: Ship and showcase',
        body: 'Launch Studio × AI Tinkerers Toronto: a modern demo night to showcase the most exciting student-led and independent AI projects emerging in the city.',
        bullets: [
            'Host Office Partner — venue, food/drinks, branding.',
            'Compute Partner (e.g., NVIDIA / Cohere) — small talk segment or AI showcase corner.',
            'Media Partner (Toronto AI Review) — photography, video recap, builder interviews.',
            'Community Partners — Vector Institute, NextAI, Creative Destruction Lab.',
        ],
        placeholder: '[Demo night photo placeholder — add event imagery later]',
    },
]

const supportCards = [
    {
        title: 'Real users & markets',
        body: 'Pair with pilots, partners, or communities to stress test in the wild — not just in a classroom.',
    },
    {
        title: 'Talent & collaborators',
        body: 'Engineers, designers, or researchers who can ship with you, not just advise.',
    },
    {
        title: 'Mentors & investors',
        body: 'Direct conversations with VCs and industry experts who have shipped at scale.',
    },
    {
        title: 'Compute & tooling',
        body: 'Credits and environments that scale with your ambition — not capped prototypes.',
    },
    {
        title: 'Product & research polish',
        body: 'Applied systems design, technical guidance, and packaging for users, conferences, or publication.',
    },
    {
        title: 'Stage time',
        body: 'A modern demo night in front of the best minds in North America.',
    },
]

const LaunchStudio = () => {
    return (
        <Box fontFamily={'Tabular, sans-serif'} bg={'white'}>
            <Box bg={'dark'} color={'light'} py={[16, 24]}>
                <Container maxW={'6xl'}>
                    <Flex
                        direction={['column', 'row']}
                        alignItems={['flex-start', 'center']}
                        gap={[10, 14]}
                    >
                        <VStack alignItems={'flex-start'} spacing={4} flex={1}>
                            <Tag
                                size={'lg'}
                                colorScheme="yellow"
                                bg={'yellow'}
                                color={'black'}
                            >
                                Launch Studio
                            </Tag>
                            <Heading
                                fontSize={['32px', '44px']}
                                lineHeight={1.1}
                                maxW={'760px'}
                            >
                                Accelerating the right AI projects from UofT
                            </Heading>
                            <Text fontSize={['15px', '18px']} maxW={'760px'}>
                                Launch Studio identifies and accelerates the
                                most promising student-led AI projects at the
                                University of Toronto. We put the full weight of
                                UofT AI — our network, resources, mentors, and
                                more — behind a small number of projects with
                                the potential to shape the future.
                            </Text>
                            <Text fontSize={['15px', '18px']} maxW={'760px'}>
                                Your project becomes a UofT AI–backed project:
                                ambitious, technically sharp, and built with
                                real-world impact in mind.
                            </Text>
                        </VStack>
                        <Box
                            flex={1}
                            minH={'220px'}
                            borderRadius={'xl'}
                            border={'2px dashed rgba(255,255,255,0.35)'}
                            bg={'rgba(255,255,255,0.08)'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            textAlign={'center'}
                            px={6}
                        >
                            <Text fontSize={['15px', '18px']} color={'light'}>
                                [Hero image placeholder — add Launch Studio
                                visual]
                            </Text>
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <Container maxW={'6xl'} py={[12, 20]}>
                <VStack alignItems={'flex-start'} spacing={[10, 14]}>
                    <Box w={'full'}>
                        <Heading fontSize={['26px', '34px']} mb={3}>
                            What makes Launch Studio different
                        </Heading>
                        <SimpleGrid columns={[1, 3]} spacing={[4, 6]}>
                            <Box
                                bg={'gray.50'}
                                p={6}
                                borderRadius={'xl'}
                                border={'1px solid'}
                                borderColor={'gray.100'}
                            >
                                <Text fontWeight={'semibold'} fontSize={'lg'}>
                                    Selective, not one-size-fits-all
                                </Text>
                                <Text mt={3} color={'gray.700'}>
                                    We back a small number of technically
                                    ambitious, high-impact projects — the ones
                                    that should break through.
                                </Text>
                            </Box>
                            <Box
                                bg={'gray.50'}
                                p={6}
                                borderRadius={'xl'}
                                border={'1px solid'}
                                borderColor={'gray.100'}
                            >
                                <Text fontWeight={'semibold'} fontSize={'lg'}>
                                    Full-stack support
                                </Text>
                                <Text mt={3} color={'gray.700'}>
                                    Compute, access to real markets, mentors,
                                    and a network that opens doors — tailored to
                                    what each builder actually needs.
                                </Text>
                            </Box>
                            <Box
                                bg={'gray.50'}
                                p={6}
                                borderRadius={'xl'}
                                border={'1px solid'}
                                borderColor={'gray.100'}
                            >
                                <Text fontWeight={'semibold'} fontSize={'lg'}>
                                    Built to ship
                                </Text>
                                <Text mt={3} color={'gray.700'}>
                                    Projects end on stage in front of industry,
                                    researchers, investors, and Toronto’s AI
                                    community — a fast-paced, hands-on demo
                                    night.
                                </Text>
                            </Box>
                        </SimpleGrid>
                    </Box>

                    <Box w={'full'}>
                        <Heading fontSize={['26px', '34px']} mb={3}>
                            What you can tap into
                        </Heading>
                        <SimpleGrid columns={[1, 2, 3]} spacing={[4, 6]}>
                            {supportCards.map((card) => (
                                <Box
                                    key={card.title}
                                    bg={'white'}
                                    p={5}
                                    borderRadius={'xl'}
                                    border={'1px solid'}
                                    borderColor={'gray.100'}
                                    boxShadow={'sm'}
                                >
                                    <Text fontWeight={'semibold'}>
                                        {card.title}
                                    </Text>
                                    <Text mt={2} color={'gray.700'}>
                                        {card.body}
                                    </Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>

                    <Box w={'full'}>
                        <Heading fontSize={['26px', '34px']} mb={3}>
                            How Launch Studio runs
                        </Heading>
                        <Stack spacing={[8, 10]}>
                            {steps.map((step) => (
                                <Box
                                    key={step.title}
                                    bg={'white'}
                                    p={[5, 7]}
                                    borderRadius={'2xl'}
                                    boxShadow={'md'}
                                    border={'1px solid'}
                                    borderColor={'gray.100'}
                                >
                                    <Stack
                                        direction={['column', 'row']}
                                        justifyContent={'space-between'}
                                        alignItems={['flex-start', 'center']}
                                        spacing={4}
                                        flexWrap={'wrap'}
                                    >
                                        <Heading fontSize={['20px', '24px']}>
                                            {step.title}
                                        </Heading>
                                        <Tag
                                            colorScheme="purple"
                                            variant="subtle"
                                        >
                                            {step.goal}
                                        </Tag>
                                    </Stack>
                                    <Text mt={3} color={'gray.700'}>
                                        {step.body}
                                    </Text>
                                    {step.highlights && (
                                        <SimpleGrid
                                            columns={[1, 3]}
                                            spacing={[4, 6]}
                                            mt={5}
                                        >
                                            {step.highlights.map(
                                                ({
                                                    dimension,
                                                    examples,
                                                    why,
                                                }) => (
                                                    <Box
                                                        key={dimension}
                                                        p={4}
                                                        borderRadius={'lg'}
                                                        border={'1px solid'}
                                                        borderColor={'gray.100'}
                                                        bg={'gray.50'}
                                                    >
                                                        <Text
                                                            fontWeight={
                                                                'semibold'
                                                            }
                                                        >
                                                            {dimension}
                                                        </Text>
                                                        <Text
                                                            mt={2}
                                                            color={'gray.700'}
                                                        >
                                                            {examples}
                                                        </Text>
                                                        <Text
                                                            mt={2}
                                                            fontSize={'sm'}
                                                            color={'gray.600'}
                                                        >
                                                            {why}
                                                        </Text>
                                                    </Box>
                                                ),
                                            )}
                                        </SimpleGrid>
                                    )}
                                    {step.bullets && (
                                        <VStack
                                            alignItems={'flex-start'}
                                            spacing={2}
                                            mt={4}
                                        >
                                            {step.bullets.map((item) => (
                                                <Text
                                                    key={item}
                                                    color={'gray.700'}
                                                >
                                                    • {item}
                                                </Text>
                                            ))}
                                        </VStack>
                                    )}
                                    {step.placeholder && (
                                        <Box
                                            mt={5}
                                            minH={'180px'}
                                            borderRadius={'xl'}
                                            border={'2px dashed #CBD5E0'}
                                            bg={'gray.50'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                            textAlign={'center'}
                                            px={4}
                                        >
                                            <Text color={'gray.600'}>
                                                {step.placeholder}
                                            </Text>
                                        </Box>
                                    )}
                                    {step.footer && (
                                        <Text mt={4} color={'gray.700'}>
                                            {step.footer}
                                        </Text>
                                    )}
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}

export default LaunchStudio
