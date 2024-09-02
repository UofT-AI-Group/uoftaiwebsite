import * as React from 'react'
import { Route, Routes } from 'react-router'
import { ScrollRestoration } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Partner from './pages/Partner'
import Navbar from './components/Navbar'
import ConferenceX from './pages/ConferenceX'
import ScrollToTop from './components/scrollToTop'
import ProjectXComponent from './components/project-x/ProjectXComponent'
import ProjectYear from './components/project-x/ProjectYear'

export const App = () => (
    <>
        <Navbar />
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partner-with-us" element={<Partner />} />
            <Route path="/conferencex" element={<ConferenceX />} />
            <Route path="/projectx" element={<ProjectXComponent />} />
            <Route path="/projectx/2020" element={<ProjectYear />} />
            <Route path="/projectx/2021" element={<ProjectYear />} />
            <Route path="/projectx/2022" element={<ProjectYear />} />
            <Route path="/projectx/2023" element={<ProjectYear />} />
        </Routes>
        <Footer />
    </>
)
