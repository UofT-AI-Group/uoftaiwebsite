import { useNavigate } from 'react-router'

export function InitiativeDescription(props: {
    title: string
    description: string
    theme: string
    location: string
}) {
    const themeClass = props.theme === 'dark' ? '' : '_light'
    const navigate = useNavigate()
    const routeChange = () => {
        let path = props.location
        navigate(path)
    }
    return (
        <div className={`description-container${themeClass}`}>
            <div className="description-box">
                <p className={`description-message${themeClass}`}>
                    {props.description}
                </p>
                <button
                    onClick={routeChange}
                    className={`more-info-button${themeClass}`}
                >
                    Learn More
                </button>
            </div>
        </div>
    )
}
