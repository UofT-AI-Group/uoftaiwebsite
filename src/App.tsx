import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import SiteFooter from './components/site/SiteFooter'
import SiteHeader from './components/site/SiteHeader'
import ScrollManager from './components/ScrollManager'

const ChakraLayout = lazy(() => import('./layouts/ChakraLayout'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))
const Partner = lazy(() => import('./pages/Partner'))
const ConferenceX = lazy(() => import('./pages/ConferenceX'))
const ConferenceX2025 = lazy(() => import('./pages/ConferenceX2025'))
const ConferenceX2026 = lazy(() => import('./pages/ConferenceX2026'))
const ConferenceX2027 = lazy(() => import('./pages/ConferenceX2027'))
const Newsletter = lazy(() => import('./pages/Newsletter'))
const ProjectX = lazy(() => import('./pages/ProjectX'))
const ProjectXArchive = lazy(() => import('./pages/ProjectXArchive'))
const Kit = import.meta.env.DEV ? lazy(() => import('./pages/Kit')) : null

export const App = () => (
    <>
        <SiteHeader />
        <ScrollManager />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
            <Routes>
                <Route path="/" element={<Home />} />
                {Kit && <Route path="/kit" element={<Kit />} />}
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/projectx" element={<ProjectX />} />
                <Route path="/projectx/:year" element={<ProjectXArchive />} />
                <Route element={<ChakraLayout />}>
                    <Route path="/partner-with-us" element={<Partner />} />
                    <Route path="/conferencex" element={<ConferenceX2027 />} />
                    <Route
                        path="/conferencex-2027"
                        element={<ConferenceX2027 />}
                    />
                    <Route
                        path="/conferencex-2026"
                        element={<ConferenceX2026 />}
                    />
                    <Route
                        path="/conferencex-2025"
                        element={<ConferenceX2025 />}
                    />
                    <Route path="/conferencex-2024" element={<ConferenceX />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Suspense>
        <SiteFooter />
    </>
)
