import { useState, MouseEvent } from 'react'
import cn from 'classnames'

export interface Card {
    id: string
    variant: 'click' | 'hover'
    displayedData: {
        name: string
        message: string
        position: string
    }
    picture: string
}

interface FlipCardProps {
    card: Card
}

const FlipCard: React.FC<FlipCardProps> = ({ card }) => {
    const { displayedData, picture } = card
    const [showBack, setShowBack] = useState(false)

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        if (card.variant === 'click') {
            setShowBack(!showBack)
        }
    }

    return (
        <div className="flip-card-outer" onClick={handleClick}>
            <div className={cn('flip-card-inner', { showBack })}>
                <div className="card front d-row-flex">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <img
                            className="card-body-img"
                            width="75%"
                            src={picture}
                            alt={`Picture of ${displayedData.name}`}
                        />
                        <div className="person-details d-row-flex">
                            <div className="card-club-position card-text fs-7">
                                {displayedData.position}
                            </div>
                            <p className="card-text fs-8">
                                {displayedData.name}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card back">
                    <div className="card-body justify-content-center align-items-center">
                        <p className="card-text bio-title">Bio:</p>
                        <p className="card-text bio-message">
                            {displayedData.message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard
