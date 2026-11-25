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
const ConferenceXRecap = lazy(() => import('./pages/ConferenceXRecap'))
const Newsletter = lazy(() => import('./pages/Newsletter'))
const ProjectX = lazy(() => import('./pages/ProjectX'))
const ProjectX2020 = lazy(() => import('./components/projectX2020'))
const ProjectX2021 = lazy(() => import('./components/projectX2021'))
const ProjectX2022 = lazy(() => import('./components/projectX2022'))
const ProjectX2023 = lazy(() => import('./components/projectX2023'))
const ProjectX2024 = lazy(() => import('./components/projectX2024'))
const ProjectX2026 = lazy(() => import('./components/projectX2026'))
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
                <Route path="/conferencex">
                    <Route index element={<ConferenceX />} />
                    <Route path=":year" element={<ConferenceXRecap />} />
                </Route>
                <Route element={<ChakraLayout />}>
                    <Route path="/partner-with-us" element={<Partner />} />
                    <Route path="/projectx">
                        <Route index element={<ProjectX />} />
                        <Route path="2020" element={<ProjectX2020 />} />
                        <Route path="2021" element={<ProjectX2021 />} />
                        <Route path="2022" element={<ProjectX2022 />} />
                        <Route path="2023" element={<ProjectX2023 />} />
                        <Route path="2024" element={<ProjectX2024 />} />
                        <Route path="2026" element={<ProjectX2026 />} />
                    </Route>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Suspense>
        <SiteFooter />
    </>
)
