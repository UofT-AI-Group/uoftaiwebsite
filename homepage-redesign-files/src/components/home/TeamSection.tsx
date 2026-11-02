import {
    Box,
    Flex,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { TEAM_GROUPS, TEAM_MEMBERS, type TeamMember } from '../../data/team'
import { SectionContainer, SectionTitle } from './shared'
import { BODY_FONT, HEADING_FONT, HOME_COLORS } from './tokens'

/** Shortens "Co-Director of Partnerships" to "Co-Director" where the group heading already says it. */
const shortRole = (member: TeamMember) =>
    member.role.startsWith('Co-Director') ? 'Co-Director' : member.role

const MemberButton = ({
    member,
    onSelect,
}: {
    member: TeamMember
    onSelect: (member: TeamMember) => void
}) => (
    <Box
        as={'button'}
        type={'button'}
        onClick={() => onSelect(member)}
        aria-label={`Read ${member.name}'s bio`}
        w={'124px'}
        textAlign={'left'}
        data-group
        display={'block'}
        cursor={'pointer'}
    >
        <Image
            src={member.image}
            alt=""
            w={'124px'}
            h={'124px'}
            objectFit={'cover'}
            border={`2px solid ${HOME_COLORS.ink}`}
            borderRadius={'4px'}
            bg={'#E6E3EC'}
            boxShadow={`6px 6px 0 ${HOME_COLORS.paleLavender}`}
            transition={'transform 0.18s ease, box-shadow 0.18s ease'}
            _groupHover={{
                transform: 'translate(-3px, -3px)',
                boxShadow: `9px 9px 0 ${HOME_COLORS.ink}`,
            }}
            _groupFocusVisible={{
                transform: 'translate(-3px, -3px)',
                boxShadow: `9px 9px 0 ${HOME_COLORS.ink}`,
            }}
            sx={{
                '@media (prefers-reduced-motion: reduce)': {
                    transition: 'none',
                },
            }}
        />
        <Stack spacing={0.5} mt={2.5}>
            <Text fontWeight={600} fontSize={'15px'} lineHeight={1.3}>
                {member.name}
            </Text>
            <Text fontSize={'13px'} lineHeight={1.35} color={HOME_COLORS.muted}>
                {shortRole(member)}
            </Text>
        </Stack>
    </Box>
)

const TeamSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selected, setSelected] = useState<TeamMember | null>(null)

    const openBio = (member: TeamMember) => {
        setSelected(member)
        onOpen()
    }

    return (
        <Box
            as={'section'}
            id={'meet-the-team'}
            bg={HOME_COLORS.gray}
            borderTop={`2px solid ${HOME_COLORS.ink}`}
            py={{ base: 16, md: 20 }}
            fontFamily={BODY_FONT}
        >
            <SectionContainer>
                <Stack spacing={9}>
                    <Stack spacing={2}>
                        <SectionTitle>
                            {TEAM_MEMBERS.length} students run UofT AI
                        </SectionTitle>
                        <Text fontSize={'16px'} color={HOME_COLORS.muted}>
                            Click on anyone to read their bio.
                        </Text>
                    </Stack>
                    <Flex wrap={'wrap'} columnGap={12} rowGap={10}>
                        {TEAM_GROUPS.map((group) => (
                            <Stack key={group} spacing={4}>
                                <Heading
                                    as={'h3'}
                                    pb={2.5}
                                    borderBottom={`2px solid ${HOME_COLORS.ink}`}
                                    fontFamily={HEADING_FONT}
                                    fontWeight={700}
                                    fontSize={'16px'}
                                    lineHeight={1.3}
                                >
                                    {group}
                                </Heading>
                                <Flex
                                    wrap={'wrap'}
                                    gap={'18px'}
                                    align={'flex-start'}
                                >
                                    {TEAM_MEMBERS.filter(
                                        (m) => m.group === group,
                                    ).map((member) => (
                                        <MemberButton
                                            key={member.name}
                                            member={member}
                                            onSelect={openBio}
                                        />
                                    ))}
                                </Flex>
                            </Stack>
                        ))}
                    </Flex>
                </Stack>
            </SectionContainer>

            <Modal isOpen={isOpen} onClose={onClose} size={'lg'} isCentered>
                <ModalOverlay />
                <ModalContent
                    borderRadius={'6px'}
                    border={`2px solid ${HOME_COLORS.ink}`}
                    boxShadow={`12px 12px 0 ${HOME_COLORS.accent}`}
                    mx={4}
                    fontFamily={BODY_FONT}
                >
                    <ModalCloseButton />
                    {selected && (
                        <ModalBody p={{ base: 6, md: 8 }}>
                            <Flex gap={5} align={'center'} mb={5} pr={8}>
                                <Image
                                    src={selected.image}
                                    alt=""
                                    w={'88px'}
                                    h={'88px'}
                                    objectFit={'cover'}
                                    border={`2px solid ${HOME_COLORS.ink}`}
                                    borderRadius={'4px'}
                                />
                                <Stack spacing={1}>
                                    <Heading
                                        as={'h3'}
                                        fontFamily={HEADING_FONT}
                                        fontWeight={700}
                                        fontSize={'22px'}
                                    >
                                        {selected.name}
                                    </Heading>
                                    <Text color={HOME_COLORS.muted}>
                                        {selected.role}
                                    </Text>
                                </Stack>
                            </Flex>
                            <Text
                                fontSize={'16px'}
                                lineHeight={1.65}
                                color={HOME_COLORS.inkSoft}
                            >
                                {selected.description}
                            </Text>
                        </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default TeamSection
