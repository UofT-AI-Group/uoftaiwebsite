import React, { useState, useRef, useEffect } from 'react'
import chevron from '../static/assets/chevron-down.svg'
import { Text, Box, Image, VStack } from '@chakra-ui/react'

interface TeamCard {
    role: string
    name: string
    image: string
    description: string
}

const TeamCard: React.FC<TeamCard> = ({ role, name, image, description }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [height, setHeight] = useState('0px')
    const contentRef = useRef<HTMLDivElement>(null)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
        }
    }, [isOpen])

    return (
        <div className="meet-the-team-item">
            <div className="meet-the-team-question" onClick={toggleOpen}>
                <Box display={'flex'}>
                    <Box
                        borderRadius={'50%'}
                        border={'3px solid black'}
                        h={['60px', '80px', '128px']}
                        w={['60px', '80px', '128px']}
                    >
                        <Image src={image} />
                    </Box>
                    <VStack mt={['10px', '15px', '20px']} ml={'20px'}>
                        <Text
                            border={'2px solid black'}
                            fontWeight={'medium'}
                            fontSize={['14px', '20px', '28px']}
                            pl={'15px'}
                            pr={'15px'}
                        >
                            {role}
                        </Text>

                        <Text fontSize={['11px', '14px', '20px']}>{name}</Text>
                    </VStack>
                </Box>

                <img
                    src={chevron}
                    className={`arrow ${isOpen ? 'open' : ''}`}
                ></img>
            </div>
            <div
                ref={contentRef}
                className={`meet-the-team-answer ${isOpen ? 'show' : ''}`}
                style={{ maxHeight: `${height}` }}
            >
                <Text fontSize={['10px', '12px', '15px']} mt={'15px'}>
                    {description}
                </Text>
            </div>
        </div>
    )
}

export default TeamCard
