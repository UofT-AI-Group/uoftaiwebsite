import { Link, useLocation } from 'react-router-dom'

interface YearTab {
    year: string
    link: string
}

export default function ConferenceYearTabs() {
    const location = useLocation()

    const tabs: YearTab[] = [
        { year: '2027', link: '/conferencex' },
        { year: '2026', link: '/conferencex-2026' },
        { year: '2025', link: '/conferencex-2025' },
        { year: '2024', link: '/conferencex-2024' },
    ]

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                marginTop: '20px',
            }}
        >
            {tabs.map((t) => {
                const isActive =
                    location.pathname === t.link ||
                    (t.year === '2027' &&
                        location.pathname === '/conferencex-2027')

                return (
                    <Link
                        key={t.year}
                        to={t.link}
                        style={{
                            fontFamily: 'Tabular, sans-serif',
                            fontWeight: isActive ? 'bold' : 'normal',
                            textDecoration: 'none',
                            color: isActive ? '#b185ff' : '#111',
                            borderBottom: isActive
                                ? '2px solid #b185ff'
                                : 'none',
                            paddingBottom: '3px',
                        }}
                    >
                        {t.year}
                    </Link>
                )
            })}
        </div>
    )
}
