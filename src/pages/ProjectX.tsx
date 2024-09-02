import { Box } from '@chakra-ui/react'
import React from 'react'
import ProjectXLanding from '../components/projectXlanding'
import ProjectX2024 from '../components/projectX2024'
import ProjectX2023 from '../components/projectX2023'

const ProjectX = () => {
    const [view2023, setView2023] = React.useState(false)
    const [viewcurrent, setViewCurrent] = React.useState(false)
    const [viewLanding, setViewLanding] = React.useState(true)

    const click2023 = () => {
        setView2023(true)
        setViewCurrent(false)
        setViewLanding(false)
    }

    const clickCurrent = () => {
        setView2023(false)
        setViewCurrent(true)
        setViewLanding(false)
    }

    const clickLanding = () => {
        setView2023(false)
        setViewCurrent(false)
        setViewLanding(true)
    }

    return (
        <Box fontFamily={'Tabular, sans-serif'}>
            {viewLanding && (
                <ProjectXLanding
                    onClick2023={click2023}
                    onClickCurrent={clickCurrent}
                />
            )}
            {viewcurrent && (
                <ProjectX2024
                    onClick2023={click2023}
                    onClickLanding={clickLanding}
                />
            )}
            {view2023 && (
                <ProjectX2023
                    onClickCurrent={clickCurrent}
                    onClickLanding={clickLanding}
                />
            )}
        </Box>
    )
}

export default ProjectX
