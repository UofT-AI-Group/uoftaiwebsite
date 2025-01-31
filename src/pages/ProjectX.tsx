import { Box } from '@chakra-ui/react'
import React from 'react'
import ProjectXLanding from '../components/projectXlanding'
import ProjectX2024 from '../components/projectX2024'
import ProjectX2023 from '../components/projectX2023'
import ProjectX2022 from '../components/projectX2022'
import ProjectX2021 from '../components/projectX2021'
import ProjectX2020 from '../components/projectX2020'

const ProjectX = () => {
    const [viewLanding, setViewLanding] = React.useState(true)
    const [viewCurrent, setViewCurrent] = React.useState(false)
    const [view2023, setView2023] = React.useState(false)
    const [view2022, setView2022] = React.useState(false)
    const [view2021, setView2021] = React.useState(false)
    const [view2020, setView2020] = React.useState(false)

    const resetViews = () => {
        setViewLanding(false)
        setViewCurrent(false)
        setView2023(false)
        setView2022(false)
        setView2021(false)
        setView2020(false)
    }

    const clickLanding = () => {
        resetViews()
        setViewLanding(true)
    }

    const clickCurrent = () => {
        resetViews()
        setViewCurrent(true)
    }

    const click2023 = () => {
        resetViews()
        setView2023(true)
    }

    const click2022 = () => {
        resetViews()
        setView2022(true)
    }

    const click2021 = () => {
        resetViews()
        setView2021(true)
    }

    const click2020 = () => {
        resetViews()
        setView2020(true)
    }

    return (
        <Box fontFamily={'Tabular, sans-serif'}>
            {viewLanding && (
                <ProjectXLanding
                    onClickCurrent={clickCurrent}
                    onClick2023={click2023}
                    onClick2022={click2022}
                    onClick2021={click2021}
                    onClick2020={click2020}
                />
            )}
            {viewCurrent && (
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
            {view2022 && (
                <ProjectX2022
                    onClickCurrent={clickCurrent}
                    onClickLanding={clickLanding}
                />
            )}
            {view2021 && (
                <ProjectX2021
                    onClickCurrent={clickCurrent}
                    onClickLanding={clickLanding}
                />
            )}
            {view2020 && (
                <ProjectX2020
                    onClickCurrent={clickCurrent}
                    onClickLanding={clickLanding}
                />
            )}
        </Box>
    )
}

export default ProjectX
