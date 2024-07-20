export function InitiativeDescription(props: {
    title: string
    description: string
    theme: string
}) {
    const themeClass = props.theme === 'dark' ? '' : '_light'

    return (
        <div className={`description-container${themeClass}`}>
            <div className="description-box">
                <p className={`description-message${themeClass}`}>
                    {props.description}
                </p>
                <button className={`more-info-button${themeClass}`}>
                    Learn More
                </button>
            </div>
        </div>
    )
}
