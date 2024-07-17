import React from 'react'
import './styles.css'

const ConferenceXBenefits: React.FC = () => {
    return (
        <div className="conferencexbenefits-container">
            <div className="conferencexbenefits-content">
                <h1 className="conferencexbenefits-title">ConferenceX</h1>
                <h2 className="conferencexbenefits-subtitle">
                    Partner Benefits
                </h2>
                <button className="conferencexbenefits-event-button">
                    Go to Event Page
                </button>
            </div>
            <div className="conferencexbenefits-details">
                <p className="conferencexbenefits-detail-item">
                    500+ applications
                </p>
                <p className="conferencexbenefits-detail-item">
                    8 startup showcases
                </p>
                <p className="conferencexbenefits-detail-item">
                    Sponsors: BMO, KPMG, Vector Institute, Ripple Ventures, etc.
                </p>
            </div>
        </div>
    )
}

export default ConferenceXBenefits
