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
                description="Lorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum Dolor"
                image={img1}
                image2={projectx}
                theme="dark"
            />
            <Initiative
                title="The UofT AI Conference"
                description="Lorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum Dolor"
                image={img2}
                image2={conferencex}
                theme="light"
            />
            <Initiative
                title="Learn AI"
                description="Lorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum Dolor"
                image={img3}
                image2={learnai}
                theme="dark"
            />
        </div>
    )
}
