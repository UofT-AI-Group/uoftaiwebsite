import img1 from '../../static/assets/Frame 7.png'
import img2 from '../../static/assets/Frame 8.png'
import img3 from '../../static/assets/Frame 9.png'
import conferencex from '../../static/assets/conferencex.png'
import learnai from '../../static/assets/learnai.png'
import projectx from '../../static/assets/projectx.png'

import { Initiative } from './Initiative'
export function Projects() {
    return (
        <div className="projects">
            <Initiative
                title="ProjectX"
                description="The largest undergraduate ML competition in North America. 200+ participants, $40k in prize money, 40+ participating Universities all across the world. "
                image={img1}
                image2={projectx}
                theme="dark"
                location="projectx"
            />
            <Initiative
                title="The UofT AI Conference"
                description="A space where humanity meets technology through discussions, collective learning and relationship-building. 500+ attendees, 8 startup showcases and key sponsors including BMO, KPMG, Vector Institute and Ripple Ventures."
                image={img2}
                image2={conferencex}
                theme="light"
                location="conferencex"
            />
            <Initiative
                title="Learn AI"
                description="A 4-month course that bridges the gap between theoretical knowledge and practical application in AI technologies."
                image={img3}
                image2={learnai}
                theme="dark"
                location="learnai"
            />
        </div>
    )
}
