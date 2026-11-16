import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MeetTheTeam from './meetTheTeam'

test('keeps the complete team roster and makes each biography accessible', async () => {
    const user = userEvent.setup()
    render(<MeetTheTeam />)
    const members = screen.getAllByRole('article')
    expect(members).toHaveLength(16)
    expect(screen.getAllByRole('img')).toHaveLength(16)
    expect(
        screen.getByRole('heading', { name: 'Hana Greenberg' }),
    ).toBeVisible()
    expect(screen.getByRole('heading', { name: 'Aaina Garg' })).toBeVisible()

    expect(
        screen.getByRole('heading', { name: 'Maria Ramos Sanchez' }),
    ).toBeVisible()

    const firstMember = within(members[0])
    const biography = firstMember.getByText(
        /fourth-year Bachelor of Information student/,
    )
    expect(biography).not.toBeVisible()
    await user.click(firstMember.getByText('Bio'))
    expect(biography).toBeVisible()
    await user.click(firstMember.getByText('Bio'))
    expect(biography).not.toBeVisible()
})
