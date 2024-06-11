import * as React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'

export const App = () => (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
)
