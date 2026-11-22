import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

const items = [
    { question: 'When is it?', answer: 'In January.' },
    { question: 'Is food provided?', answer: 'Yes, lunch.' },
]

test('opens answers from the keyboard and keeps earlier ones open', async () => {
    const user = userEvent.setup()
    render(<Faq items={items} />)
    const [first, second] = screen.getAllByRole('button')

    await user.tab()
    expect(first).toHaveFocus()
    await user.keyboard('{Enter}')
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('In January.')).toBeVisible()

    await user.keyboard('{ArrowDown}')
    expect(second).toHaveFocus()
    await user.keyboard(' ')
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'true')
})
