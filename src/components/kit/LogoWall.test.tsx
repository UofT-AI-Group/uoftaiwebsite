import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { LogoWall } from './LogoWall'
import { Section } from './Section'

const groups = [
    { title: 'Sponsors', logos: [{ name: 'EY', src: '/ey.webp', width: 119 }] },
]

test('keeps logos on white even when a caller asks for a dark background', () => {
    const { container } = render(
        <Section tone="ink">
            <LogoWall groups={groups} className="bg-ink text-fg" />
        </Section>,
    )
    const wall = container.querySelector('section > div > div')
    expect(wall).toHaveClass('bg-white', 'text-ink')
    expect(wall).not.toHaveClass('bg-ink')
    expect(wall).not.toHaveClass('text-fg')
})
