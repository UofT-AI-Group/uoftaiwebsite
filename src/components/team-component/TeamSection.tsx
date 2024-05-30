import React from 'react'
import FlipCard from './FlipCard'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'
import { Card } from './FlipCard'
import { cards } from './team-data'

const TeamSection: React.FC = () => {
    return (
        <div className="container">
            <h3 className="font-weight-700">Meet the team!</h3>
            <div className="team-greeting"></div>
            <div className="row h-100">
                <div className="card-list-components col d-flex flex-column flex-md-row flex-wrap justify-content-around align-items-center">
                    {cards.map((card) => (
                        <FlipCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamSection
