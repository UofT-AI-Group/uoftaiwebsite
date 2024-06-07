import * as React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'

export const App = () => (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </>
)
