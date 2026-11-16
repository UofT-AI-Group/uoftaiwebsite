import './styles.css'
import { Box } from '@chakra-ui/react'

const ConferenceXBenefits = () => {
    return (
        <Box className="conferencexbenefits-container" p={['10px', '50px']}>
            <Box className="conferencexbenefits-content">
                <h1 className="conferencexbenefits-title">ConferenceX</h1>
                <h2 className="conferencexbenefits-subtitle">
                    Partner Benefits
                </h2>
            </Box>
            <Box className="conferencexbenefits-details">
                <p className="conferencexbenefits-detail-item">
                    500+ applications
                </p>
                <p className="conferencexbenefits-detail-item">
                    8 startup showcases
                </p>
                <p className="conferencexbenefits-detail-item">
                    Sponsors: BMO, KPMG, Vector Institute, Ripple Ventures, etc.
                </p>
            </Box>
        </Box>
    )
}

export default ConferenceXBenefits
