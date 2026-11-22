import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { PageMeta } from './PageMeta'

const description = () =>
    document.head.querySelectorAll('meta[name="description"]')

test('puts the page title and description in the head and removes them on unmount', () => {
    const { unmount } = render(
        <PageMeta title="ProjectX" description="A research competition." />,
    )
    expect(document.title).toBe('ProjectX | UofT AI')
    expect(description()).toHaveLength(1)
    expect(description()[0]).toHaveAttribute(
        'content',
        'A research competition.',
    )

    unmount()
    expect(description()).toHaveLength(0)
})

test('uses the bare site name when no page title is given', () => {
    render(<PageMeta description="Home." />)
    expect(document.title).toBe('UofT AI')
})
