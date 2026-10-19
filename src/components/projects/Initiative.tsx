import { InitiativeDescription } from './InitiativeDescription'
import './initiatives.css'

export function Initiative(props: {
    title: string
    description: string
    image: string
    image2: string
    theme: string
    location: string
}) {
    const themeClass = props.theme === 'dark' ? '' : '_light'

    return (
        <div className={`project-section${themeClass}`}>
            <h1 className={`description-child description-title${themeClass}`}>
                {props.title}
            </h1>
            <InitiativeDescription
                title={props.title}
                description={props.description}
                theme={props.theme}
                location={props.location}
            />
            {/* <div className="project-img-container"> */}
            <img className="project-image" src={props.image} alt="" />
            <img className="project-image-2" src={props.image2} alt="" />
            {/* </div> */}
        </div>
    )
}
