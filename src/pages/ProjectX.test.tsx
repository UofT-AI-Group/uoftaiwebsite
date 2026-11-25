import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter, Route, Routes, useLocation } from 'react-router'
import ProjectX from './ProjectX'
import ProjectXArchive from './ProjectXArchive'

const Location = () => {
    const { pathname, hash } = useLocation()
    return <output aria-label="location">{pathname + hash}</output>
}

const renderAt = (path: string) =>
    render(
        <MemoryRouter initialEntries={[path]}>
            <Routes>
                <Route path="/projectx" element={<ProjectX />} />
                <Route path="/projectx/:year" element={<ProjectXArchive />} />
            </Routes>
            <Location />
        </MemoryRouter>,
    )

const archiveLinks = (title: string) =>
    within(screen.getByRole('region', { name: title }))
        .getAllByRole('link')
        .map((link) => link.getAttribute('href'))

test('opens /projectx on the 2026 cycle and archives only 2020 to 2024', () => {
    renderAt('/projectx')
    expect(
        screen.getByRole('heading', { level: 1, name: /^ProjectX\s*2026$/ }),
    ).toBeInTheDocument()
    expect(archiveLinks('Past cycles')).toEqual([
        '/projectx/2024',
        '/projectx/2023',
        '/projectx/2022',
        '/projectx/2021',
        '/projectx/2020',
    ])
})

test('sends old /projectx/2026 links to /projectx, keeping the section', () => {
    renderAt('/projectx/2026#faq')
    expect(screen.getByLabelText('location')).toHaveTextContent('/projectx#faq')
    expect(
        screen.getByRole('heading', { level: 1, name: /^ProjectX\s*2026$/ }),
    ).toBeInTheDocument()
})

test('keeps a past cycle at its own URL, marked archived, with its documents downloadable', () => {
    renderAt('/projectx/2021')
    expect(
        screen.getByRole('heading', { level: 1, name: /^ProjectX\s*2021$/ }),
    ).toBeInTheDocument()
    expect(
        screen.getByRole('link', { name: 'Code of Conduct' }),
    ).toHaveAttribute('download', 'ProjectX Code of Conduct.pdf')
    expect(
        within(
            screen.getByRole('complementary', { name: 'Archived page' }),
        ).getByRole('link', { name: 'ProjectX 2026' }),
    ).toHaveAttribute('href', '/projectx')
    expect(
        screen.getByRole('link', {
            name: /^ProjectX\s*2021$/,
            current: 'page',
        }),
    ).toBeInTheDocument()
})

test('shows the not found page for a year without a cycle', () => {
    renderAt('/projectx/2025')
    expect(
        screen.getByRole('heading', { level: 1, name: /not found|doesn/i }),
    ).toBeInTheDocument()
})
