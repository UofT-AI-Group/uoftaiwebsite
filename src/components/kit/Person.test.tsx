import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PersonGrid } from './Person'

const people = ['Ada', 'Grace', 'Alan', 'Barbara'].map((name) => ({
    name,
    role: 'Speaker',
    photo: `/${name}.webp`,
}))

test('shows the first people in order and reveals the rest on request', async () => {
    const user = userEvent.setup()
    render(<PersonGrid people={people} initialCount={2} noun="speakers" />)

    expect(screen.getByRole('img', { name: 'Grace' })).toBeVisible()
    expect(screen.queryByRole('img', { name: 'Alan' })).not.toBeInTheDocument()

    const toggle = screen.getByRole('button', { name: 'Show all 4 speakers' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)

    expect(screen.getByRole('img', { name: 'Barbara' })).toBeVisible()
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveTextContent('Show fewer speakers')
})
