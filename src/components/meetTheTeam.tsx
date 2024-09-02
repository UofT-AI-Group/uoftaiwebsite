import React from 'react'
import TeamCard from './teamcard'
import '../static/styles/teamcard.css'
import adibvafa from '../static/assets/Adibvafa_Fallahpour.png'
import falak from '../static/assets/Falak_Rastogi.png'
import shirley from '../static/assets/Shirley_Chen.jpg'
import sonia from '../static/assets/Sonia_Vaidya.jpg'
import brandon from '../static/assets/Tang_Brandon.jpg'
import shiri from '../static/assets/shiri-yeung.jpg'
import dev from '../static/assets/Dev-Shah.jpg'
import ethan from '../static/assets/Ethan-Cheung.jpeg'
import shreena from '../static/assets/shreena-badami.png'
import harshit from '../static/assets/harshit-sahoney.png'
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
                    <Box>
                        <TeamCard
                            role="Co-President"
                            name="Shiri Yeung"
                            image={shiri}
                            description="Shiri is a systems thinker passionate about driving positive change with technology. With a background in AI policy, her approach prioritizes building processes, programs, and relationships driven by empathy and sustainability. She is looking forward to creating a space where innovative minds can ideate, learn and build together. You’ll catch her at the gym or experimenting with new recipes outside of work :)"
                        />
                    </Box>
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
                            role="Partnerships"
                            name="Ethan Cheung"
                            image={ethan}
                            description="Ethan is a fourth-year Computer Science Specialist with a focus on Artificial Intelligence. Beyond the classroom, Ethan enjoys climbing, jiujitsu, reading, and cooking."
                        />
                    </Box>
                    <Box>
                        <TeamCard
                            role="Partnerships"
                            name="Falak Ragosti"
                            image={falak}
                            description={
                                'Falak is a third-year Computer Science Specialist with a focus on AI and Computer Vision. She is passionate about all things tech and enjoys exploring the latest gadgets through fun videos. Falak lives by the quote, "Shoot for the moon, even if you miss, you\'ll land among the stars," which drives her pursuit of innovation. She loves travelling and experimenting with new cuisines!'
                            }
                        />
                    </Box>
                    <Box>
                        <TeamCard
                            role="Project X"
                            name="Harshit Sahoney"
                            image={harshit}
                            description="Harshit is a fourth-year ECE student with a minor in AI, deeply passionate about the future of the internet and responsible technology. When he's not immersed in tech, you'll find him playing his guitar, diving into a good book, or enjoying a movie."
                        />
                    </Box>
                    <Box>
                        <TeamCard
                            role="Project X"
                            name="Shreena Badami"
                            image={shreena}
                            description="Shreena is a second-year Computer Science Specialist with a growing passion in data science and machine learning. Beyond that, she loves bollywood movies, dancing, travelling and reading."
                        />
                    </Box>
                    <Box>
                        <TeamCard
                            role="Community"
                            name="Brandon Tang"
                            image={brandon}
                            description="Brandon is a fourth year computer science specialist, stats major, math minor who is passionate about applying AI and ML techniques to a variety of domains to solve real world problems including economics, health care, and sports."
                        />
                    </Box>
                    <Box>
                        <TeamCard
                            role="Gen AI Genesis"
                            name="Adib Fallahpour"
                            image={adibvafa}
                            description="Adib is a third year double major in Computer Science and Neuroscience with a passion for advnacing research on human brain and artificial intelligence. He has a professional rat tickling certificate and in his free time enjoys watching movies, reading novels, cooking, and going to gym."
                        />
                    </Box>
                    <Box>
                        <TeamCard
                            role="Marketing"
                            name="Shirley Chen"
                            image={shirley}
                            description="Shirley is a fourth year Bachelor of Information student with a growing passion in data science and UX/UI design. She loves exploring music of all genres, travelling, and thrifting in her free time!"
                        />
                    </Box>
                    <Box>
                        <TeamCard
                            role="Conference X"
                            name="Sonia Vaidya"
                            image={sonia}
                            description="Sonia is a second year computer science specialist student with a passion for tech and research in politics, media, art, and their interaction with social issues. She loves photography, dancing, filmmaking, and reading."
                        />
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default MeetTheTeam
