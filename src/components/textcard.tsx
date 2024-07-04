import React from 'react'
import CSS from 'csstype'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'

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
    }

    return (
        <Card style={cardStyles}>
            <CardHeader
                fontSize={'30px'}
                marginTop={'80px'}
                fontWeight={'medium'}
            >
                {title}
            </CardHeader>
            <CardBody fontSize={'20px'}>{body}</CardBody>
        </Card>
    )
}

export default TextCard
