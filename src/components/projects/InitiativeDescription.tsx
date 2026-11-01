import { Link } from 'react-router'

export function InitiativeDescription(props: {
    title: string
    description: string
    theme: string
    location: string
}) {
    const themeClass = props.theme === 'dark' ? '' : '_light'
    return (
        <div className={`description-container${themeClass}`}>
            <div className="description-box">
                <p className={`description-message${themeClass}`}>
                    {props.description}
                </p>
                <Link
                    to={props.location}
                    className={`more-info-button${themeClass}`}
                >
                    Learn More
                </Link>
            </div>
        </div>
    )
}
