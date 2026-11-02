/** Colours used across the homepage sections. */
export const HOME_COLORS = {
    ink: '#111014',
    inkSoft: '#2E2B35',
    body: '#3D3A45',
    muted: '#55525C',
    /** Deeper purple for text on white (passes contrast). */
    accent: '#7B3FC4',
    /** Lighter purple for text and details on black. */
    accentOnDark: '#C9A8EC',
    lavender: '#EFE6FA',
    lavenderLine: '#DCCBF1',
    lavenderPanel: '#EADDF8',
    paleLavender: '#DCC8F2',
    darkCard: '#1D1B22',
    darkBorder: '#34303D',
    textOnDark: '#D6D2DD',
    gray: '#F4F3F6',
}

export const HEADING_FONT = 'Tabular, monospace'
export const BODY_FONT = 'Inter, system-ui, sans-serif'

/** Black border plus a solid offset shadow, used on photos and panels. */
export const offsetFrame = (shadowColor: string, x = 12, y = 12) => ({
    border: `2px solid ${HOME_COLORS.ink}`,
    boxShadow: `${x}px ${y}px 0 ${shadowColor}`,
})
