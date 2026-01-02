import { Link, useLocation } from 'react-router-dom'

interface YearTab {
    year: string
    link: string
}

export default function ConferenceYearTabs() {
    const location = useLocation()

    const tabs: YearTab[] = [
        { year: '2025', link: '/conferencex' },
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
            {tabs.map((t) => (
                <Link
                    key={t.year}
                    to={t.link}
                    style={{
                        fontFamily: 'Tabular, sans-serif',
                        fontWeight:
                            location.pathname === t.link ? 'bold' : 'normal',
                        textDecoration: 'none',
                        color:
                            location.pathname === t.link ? '#b185ff' : '#111',
                        borderBottom:
                            location.pathname === t.link
                                ? '2px solid #b185ff'
                                : 'none',
                        paddingBottom: '3px',
                    }}
                >
                    {t.year}
                </Link>
            ))}
        </div>
    )
}
