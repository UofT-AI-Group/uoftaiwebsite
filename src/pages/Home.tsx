import Hero from '../components/home/Hero'
import About from '../components/home/About'
import ProgramStory from '../components/home/ProgramStory'
import Speakers from '../components/home/Speakers'
import History from '../components/home/History'
import Sponsors from '../components/home/Sponsors'
import Team from '../components/home/Team'
import Join from '../components/home/Join'

const Home = () => (
    <main className="bg-ink font-mono text-fg antialiased">
        <Hero />
        <About />
        <ProgramStory />
        <Speakers />
        <History />
        <Sponsors />
        <Team />
        <Join />
    </main>
)

export default Home
