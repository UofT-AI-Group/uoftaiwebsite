import React from 'react'
import TeamCard from './teamcard'
import '../static/styles/teamcard.css'
import sonia from '../static/assets/Sonia_Vaidya.jpg'
import dev from '../static/assets/Dev-Shah.jpg'
import ansh from '../static/assets/Ansh_Agrawal.png'
import natalie from '../static/assets/Natalie-Oulikhanian.png'
import zoey from '../static/assets/Zoey-Xie.png'
import hana from '../static/assets/Hana-Greenberg.png'
import brandon from '../static/assets/Tang_Brandon.jpg'
import sherry from '../static/assets/Sherry-Wang.png'
import purav from '../static/assets/Purav-Gupta.png'
import rui from '../static/assets/Rui-Weng.png'
import { Card, CardHeader, CardBody, Box, SimpleGrid } from '@chakra-ui/react'

const MeetTheTeam: React.FC = () => {
    return (
        <Box className="meet-the-team-container">
            <Box className="container-items">
                <h2 className="meet-the-team-h2">
                    <span className="underline">M</span>eet The Team
                </h2>
                <SimpleGrid
                    columns={[1, 1, 1, 1, 2]}
                    justifyItems={'center'}
                    maxW={'1200px'}
                    mr={'auto'}
                    ml={'auto'}
                >
                    {/* <Box>
                        <TeamCard
                            role="Co-President"
                            name="Sonia Vaidya"
                            image={sonia}
                            description="Need to fill in"
                        />
                    </Box> */}
                    <Box>
                        <TeamCard
                            role="Co-President"
                            name="Dev Shah"
                            image={dev}
                            description="Dev is a 3rd year Computer Science Specialist with a minor in Math with a passion for Machine Learning and specifically what the future of ML holds in the future of healthcare. Beyond the time I spend learning about ML, I love writing, playing soccer, reading, and going on random rabbitholes."
                        />
                    </Box>
                    <Box>
                        <TeamCard
                            role="Conference X"
                            name="Natalie Oulikhanian"
                            image={natalie}
                            description={
                                "Hi, I'm Natalie, your director of ConferenceX 2026! I'm a third-year student studying Public Policy and Economics passionate about how innovation shapes society. I'm fascinated by the importance of applying concepts from the social sciences to AI, especially when designing mechanisms for AI alignment. Incredibly excited to make a conference that is as diverse in subjects, perspectives, and people as the field of AI right now! "
                            }
                        />
                    </Box>
                    <Box>
                        <TeamCard
                            role="Partnerships"
                            name="Ansh Agrawal"
                            image={ansh}
                            description="Ansh is a 4th year Computer Science student specializing in Artificial Intelligence. He's interested in startups and the future of deep learning, and hopes to one day build technology that makes a real difference. Outside of school, he enjoys travelling, watching movies, DJing, and checking out new restaurants."
                        />
                    </Box>
                    {/* <Box>
                        <TeamCard
                            role="Partnerships"
                            name="Georgia Goldsworthy"
                            image={brandon}
                            description="Need to fill in"
                        />
                    </Box> */}
                    {/* <Box>
                        <TeamCard
                            role="Campus Strategy"
                            name="James Han"
                            image={brandon}
                            description={'Need to fill in'}
                        />
                    </Box> */}
                    <Box>
                        <TeamCard
                            role="Technical Development"
                            name="Purav Gupta"
                            image={purav}
                            description="Purav is a third-year student at the University of Toronto, specializing in Bioinformatics and Compuational Biology, along with Molecular Genetics and Computer Science. He is very passionate about the intersection of biology and machine learning and outside of research, you can find him buried in books or out on a run!"
                        />
                    </Box>
                    {/* <Box>
                        <TeamCard
                            role="Technical Development"
                            name="TBD"
                            image={brandon}
                            description="Need to fill in"
                        />
                    </Box> */}
                    <Box>
                        <TeamCard
                            role="Publishing"
                            name="Hana Greenberg"
                            image={hana}
                            description="Hi! My name is Hana and I'm a second year student studying Political Science, Applied Data Science, and Creative Writing. My AI interests include AI ethics, Large Language Models, and Digital Policy. As the Head of Publishing, I look forward to sharing stories and articles rooted in tech with you all :)"
                        />
                    </Box>
                    {/* <Box>
                        <TeamCard
                            role="Venture Strategy"
                            name="TBD"
                            image={brandon}
                            description="Need to fill in"
                        />
                    </Box> */}
                    {/* <Box>
                        <TeamCard
                            role="Marketing"
                            name="Caitlyn Mae Hundey"
                            image={brandon}
                            description="Need to fill in"
                        />
                    </Box> */}
                    <Box>
                        <TeamCard
                            role="Finance"
                            name="Sherry Yuehua Wang"
                            image={sherry}
                            description="Hey everyone! I’m Sherry, a second-year studying Mathematical Applications in Economics and Finance, with a minor in Computer Science. Lately I’ve been diving into data science and I’m interested about how AI is reshaping the world of finance. Outside of academics, I like eating candies and sleeping. Excited to be part of the team this year!"
                        />
                    </Box>
                    <Box>
                        <TeamCard
                            role="Community Engagement"
                            name="Zoey Xie"
                            image={zoey}
                            description="Hi! I’m Zoey, a 4th year CS spec. I’m love learning about the intersection of AI and other fields within and outside CS, like biology or cybersecurity!"
                        />
                    </Box>
                    <Box>
                        <TeamCard
                            role="Community"
                            name="Rui Weng"
                            image={rui}
                            description="Hi everyone! My name is Rui, I’m a second-year CS + Math student at UofT, and I’m super excited to be Co-director of Community Engagement this year! Fun fact: I like playing badminton, and I have a pet bunny 🏸🐰 "
                        />
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default MeetTheTeam
