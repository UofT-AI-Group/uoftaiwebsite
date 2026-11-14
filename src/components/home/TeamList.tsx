import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    useBreakpointValue,
} from '@chakra-ui/react'
import { TEAM_MEMBERS } from '../../data/team'

type Member = (typeof TEAM_MEMBERS)[number]

const MemberRow = ({ name, role, image, description }: Member) => (
    <AccordionItem className="hm-member" border={0}>
        {({ isExpanded }) => (
            <>
                <AccordionButton
                    className="hm-member-btn"
                    px={0}
                    py={0}
                    _hover={{ bg: 'transparent' }}
                    _focusVisible={{ boxShadow: 'none' }}
                >
                    <img src={image} alt="" loading="lazy" />
                    <span className="hm-member-text">
                        <span className="hm-member-role">{role}</span>
                        <span className="hm-member-name">{name}</span>
                    </span>
                    <span
                        className={`hm-member-toggle${isExpanded ? ' is-open' : ''}`}
                        aria-hidden="true"
                    />
                </AccordionButton>
                <AccordionPanel className="hm-member-bio" px={0} pt={0}>
                    {description}
                </AccordionPanel>
            </>
        )}
    </AccordionItem>
)

/**
 * The executive team as two expandable lists. Rows read across like the
 * previous homepage, so the co-presidents sit side by side at the top.
 */
const TeamList = () => {
    // Two columns on wide screens; one list in the original order on phones.
    const twoColumns = useBreakpointValue({ base: false, lg: true }) ?? true
    const columns = twoColumns
        ? [
              TEAM_MEMBERS.filter((_, i) => i % 2 === 0),
              TEAM_MEMBERS.filter((_, i) => i % 2 === 1),
          ]
        : [TEAM_MEMBERS]

    return (
        <section className="hm-section" id="meet-the-team">
            <div className="hm-kicker">Team</div>
            <h2 className="hm-h2">
                Run by students. <em>Meet the 2026 executive team.</em>
            </h2>
            <p className="hm-hint">Select a name to read their story.</p>
            <div
                className="hm-team"
                style={{
                    gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
                }}
            >
                {columns.map((members, i) => (
                    <Accordion key={i} allowMultiple className="hm-team-col">
                        {members.map((member) => (
                            <MemberRow key={member.name} {...member} />
                        ))}
                    </Accordion>
                ))}
            </div>
        </section>
    )
}

export default TeamList
