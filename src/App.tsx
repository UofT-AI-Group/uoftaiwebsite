import * as React from 'react'
import { Route, Routes } from 'react-router'
import { ScrollRestoration } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Partner from './pages/Partner'
import Navbar from './components/Navbar'
import ConferenceX from './pages/ConferenceX'
import ScrollToTop from './components/scrollToTop'
import Newsletter from './pages/Newsletter'

// This is the deployment branch

export const App = () => (
    <>
        <Navbar />
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partner-with-us" element={<Partner />} />
            <Route path="/conferencex" element={<ConferenceX />} />
            <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
        <Footer />
    </>
)
