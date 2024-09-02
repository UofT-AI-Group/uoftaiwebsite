import CSS from 'csstype'
import { Card, CardHeader, CardBody, Box, Image } from '@chakra-ui/react'
import '../static/styles/issue.css'

const Issue = function Issue({
    issueLink,
    img,
    title,
    desc,
    date,
}: {
    issueLink: string
    img: string
    title: string
    desc: string
    date: string
}) {
    const cardStyles: CSS.Properties = {
        width: '400px',
        height: '600px',
        border: '3px solid black',
        borderRadius: 0,
        boxShadow: '20px 20px black',
        textAlign: 'center',
        margin: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '10px',
    }

    const handleClick = () => {
        window.location.href = issueLink
    }

    return (
        <Card style={cardStyles} onClick={handleClick} className="issue">
            <Image h={['150', '230px']} borderRadius={'30px'} src={img}></Image>
            <CardHeader fontWeight={'medium'} fontSize={25} pb={'5px'}>
                {title}
            </CardHeader>
            <CardBody>{desc}</CardBody>
            <Box>{date}</Box>
        </Card>
    )
}

export default Issue
