import * as React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Partner from './pages/Partner'
import Navbar from './components/Navbar'

export const App = () => (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partner-with-us" element={<Partner />} />
        </Routes>
        <Footer />
    </>
)
