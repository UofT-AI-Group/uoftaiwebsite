import { Link as RouterLink } from 'react-router'
import HomeHero from '../components/home/HomeHero'
import Stats from '../components/home/Stats'
import ProgramStory from '../components/home/ProgramStory'
import Speakers from '../components/home/Speakers'
import Timeline from '../components/home/Timeline'
import TeamList from '../components/home/TeamList'
import '../components/home/home.css'

const Home = () => (
    <div className="hm">
        <HomeHero />
        <main className="hm-wrap">
            <Stats />
            <ProgramStory />
            <Speakers />
            <Timeline />
            <TeamList />
            <section className="hm-section hm-join" id="join">
                <div className="hm-kicker">Join</div>
                <h2 className="hm-h2">Start building with us.</h2>
                <div className="hm-ctas">
                    <RouterLink
                        className="hm-btn hm-btn-solid"
                        to="/newsletter"
                    >
                        Read the newsletter
                    </RouterLink>
                    <a className="hm-btn" href="mailto:uoftaigroup@gmail.com">
                        Get in touch
                    </a>
                    <RouterLink className="hm-btn" to="/partner-with-us">
                        Partner with us
                    </RouterLink>
                </div>
            </section>
        </main>
    </div>
)

export default Home
