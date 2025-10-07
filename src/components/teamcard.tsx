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
                        <Image
                            src={image}
                            borderRadius={'50%'}
                            width="100%"
                            height="100%"
                            objectFit="cover"
                        />
                    </Box>
                    <VStack
                        mt={['10px', '15px', '20px']}
                        ml={'20px'}
                        alignItems={'flex-start'}
                    >
                        <Text
                            border={'2px solid black'}
                            fontSize={['12px', '14px', '20px']}
                            pl={'15px'}
                            pr={'15px'}
                        >
                            {role}
                        </Text>

                        <Text
                            fontSize={['14px', '20px', '28px']}
                            fontWeight={'medium'}
                        >
                            {name}
                        </Text>
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
                <Text fontSize={['12px', '12px', '15px']} mt={'15px'}>
                    {description}
                </Text>
            </div>
        </div>
    )
}

export default TeamCard
