import * as React from 'react'
import { Route, Routes } from 'react-router'
import { ScrollRestoration } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Partner from './pages/Partner'
import Navbar from './components/Navbar'
import ConferenceX2025 from './pages/ConferenceX2025'
import ConferenceX2026 from './pages/ConferenceX2026'
import ConferenceX from './pages/ConferenceX'
import ScrollToTop from './components/scrollToTop'
import Newsletter from './pages/Newsletter'
import ComingSoon from './pages/ComingSoon'
import ProjectX from './pages/ProjectX'

// This is the deployment branch

export const App = () => (
    <>
        <Navbar />
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partner-with-us" element={<Partner />} />
            <Route path="/conferencex" element={<ConferenceX2026 />} />
            <Route path="/conferencex-2026" element={<ConferenceX2026 />} />
            <Route path="/conferencex-2025" element={<ConferenceX2025 />} />
            <Route path="/conferencex-2024" element={<ConferenceX />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/learnai" element={<ComingSoon />} />
            <Route path="/projectx" element={<ProjectX />} />
        </Routes>
        <Footer />
    </>
)
