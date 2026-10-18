import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Partner from './pages/Partner'
import Navbar from './components/Navbar'
import ConferenceX2025 from './pages/ConferenceX2025'
import ConferenceX2026 from './pages/ConferenceX2026'
import ConferenceX2027 from './pages/ConferenceX2027'
import ConferenceX from './pages/ConferenceX'
import ScrollManager from './components/ScrollManager'
import Newsletter from './pages/Newsletter'
import ComingSoon from './pages/ComingSoon'
import ProjectX from './pages/ProjectX'
import ProjectX2020 from './components/projectX2020'
import ProjectX2021 from './components/projectX2021'
import ProjectX2022 from './components/projectX2022'
import ProjectX2023 from './components/projectX2023'
import ProjectX2024 from './components/projectX2024'
import ProjectX2026 from './components/projectX2026'

// This is the deployment branch

export const App = () => (
    <>
        <Navbar />
        <ScrollManager />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partner-with-us" element={<Partner />} />
            <Route path="/conferencex" element={<ConferenceX2027 />} />
            <Route path="/conferencex-2027" element={<ConferenceX2027 />} />
            <Route path="/conferencex-2026" element={<ConferenceX2026 />} />
            <Route path="/conferencex-2025" element={<ConferenceX2025 />} />
            <Route path="/conferencex-2024" element={<ConferenceX />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/learnai" element={<ComingSoon />} />
            <Route path="/projectx">
                <Route index element={<ProjectX />} />
                <Route path="2020" element={<ProjectX2020 />} />
                <Route path="2021" element={<ProjectX2021 />} />
                <Route path="2022" element={<ProjectX2022 />} />
                <Route path="2023" element={<ProjectX2023 />} />
                <Route path="2024" element={<ProjectX2024 />} />
                <Route path="2026" element={<ProjectX2026 />} />
            </Route>
        </Routes>
        <Footer />
    </>
)
