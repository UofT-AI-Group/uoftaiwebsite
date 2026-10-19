import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar'
import ScrollManager from './components/ScrollManager'

const Partner = lazy(() => import('./pages/Partner'))
const ConferenceX = lazy(() => import('./pages/ConferenceX'))
const ConferenceX2025 = lazy(() => import('./pages/ConferenceX2025'))
const ConferenceX2026 = lazy(() => import('./pages/ConferenceX2026'))
const ConferenceX2027 = lazy(() => import('./pages/ConferenceX2027'))
const Newsletter = lazy(() => import('./pages/Newsletter'))
const ComingSoon = lazy(() => import('./pages/ComingSoon'))
const NotFound = lazy(() => import('./pages/NotFound'))
const ProjectX = lazy(() => import('./pages/ProjectX'))
const ProjectX2020 = lazy(() => import('./components/projectX2020'))
const ProjectX2021 = lazy(() => import('./components/projectX2021'))
const ProjectX2022 = lazy(() => import('./components/projectX2022'))
const ProjectX2023 = lazy(() => import('./components/projectX2023'))
const ProjectX2024 = lazy(() => import('./components/projectX2024'))
const ProjectX2026 = lazy(() => import('./components/projectX2026'))

export const App = () => (
    <>
        <Navbar />
        <ScrollManager />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
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
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
        <Footer />
    </>
)
