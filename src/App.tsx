import * as React from 'react'
import { Route, Routes } from 'react-router'
import { ScrollRestoration } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Partner from './pages/Partner'
import Navbar from './components/Navbar'
import ConferenceX2025 from './pages/ConferenceX2025'
import ConferenceX from './pages/ConferenceX'
import ScrollToTop from './components/scrollToTop'
import Newsletter from './pages/Newsletter'
import ComingSoon from './pages/ComingSoon'
import ProjectX from './pages/ProjectX'
import LaunchStudio from './pages/LaunchStudio'

// This is the deployment branch

export const App = () => (
    <>
        <Navbar />
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partner-with-us" element={<Partner />} />
            <Route path="/conferencex" element={<ConferenceX2025 />} />
            <Route path="/conferencex-2024" element={<ConferenceX />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/learnai" element={<ComingSoon />} />
            <Route path="/projectx" element={<ProjectX />} />
            <Route path="/launch-studio" element={<LaunchStudio />} />
        </Routes>
        <Footer />
    </>
)
