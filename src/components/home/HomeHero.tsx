import { Link as RouterLink } from 'react-router'
import Typewriter from 'typewriter-effect'
import DotField from '../DotField'
import { HERO_WORDS } from '../../data/home'

const HomeHero = () => (
    <header className="hm-hero">
        <DotField />
        <div className="hm-wrap hm-hero-inner">
            <RouterLink className="hm-announce" to="/conferencex-2027">
                <i>Up next</i>ConferenceX 2027: The Past and Future of AI →
            </RouterLink>
            <h1 className="hm-title">
                <span className="hm-brand">UofT AI</span>: advancing AI through{' '}
                <span className="hm-word">
                    <Typewriter
                        options={{ delay: 85, deleteSpeed: 45, loop: true }}
                        onInit={(typewriter) => {
                            for (const word of HERO_WORDS) {
                                typewriter
                                    .typeString(word)
                                    .pauseFor(2600)
                                    .deleteAll()
                            }
                            typewriter.start()
                        }}
                    />
                </span>
            </h1>
            <div className="hm-hero-row">
                <p>
                    The University of Toronto's student AI community.
                    Competitions, conferences and courses for undergraduates who
                    want to build.
                </p>
                <div className="hm-ctas">
                    <a className="hm-btn hm-btn-solid" href="#join">
                        Join UofT AI
                    </a>
                    <a className="hm-btn" href="#programs">
                        What we run ↓
                    </a>
                </div>
            </div>
        </div>
    </header>
)

export default HomeHero
