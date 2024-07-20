import React from 'react'
import CSS from 'csstype'
import { Card, CardHeader, CardBody, Box } from '@chakra-ui/react'

const TextCard = function TextCard({
    title,
    body,
}: {
    title: string
    body: string
}) {
    const cardStyles: CSS.Properties = {
        width: '400px',
        height: '500px',
        border: '3px solid black',
        borderRadius: 0,
        boxShadow: '20px 20px black',
        textAlign: 'center',
        margin: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '20px',
    }

    return (
        <Card style={cardStyles}>
            <Box fontSize={'30px'} fontWeight={'medium'} mb={'20px'}>
                {title}
            </Box>
            <Box height={'280px'} fontSize={'20px'}>
                {body}
            </Box>
        </Card>
    )
}

export default TextCard
