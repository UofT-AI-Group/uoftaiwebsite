interface TeamCardProps {
    role: string
    name: string
    image: string
    description: string
}

const TeamCard = ({ role, name, image, description }: TeamCardProps) => (
    <article className="team-member">
        <img
            className="team-member__portrait"
            src={image}
            alt={`${name} headshot`}
            width="256"
            height="256"
            loading="lazy"
        />
        <h3>{name}</h3>
        <p className="team-member__role">{role}</p>
        <details className="team-member__bio">
            <summary>
                Bio <span aria-hidden="true">+</span>
            </summary>
            <p>{description}</p>
        </details>
    </article>
)

export default TeamCard
