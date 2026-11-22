import { expect, test } from 'vitest'
import { act } from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import SiteHeader from './SiteHeader'

const renderHeader = (route = '/') =>
    render(
        <MemoryRouter initialEntries={[route]}>
            <SiteHeader />
        </MemoryRouter>,
    )

const openMenu = async (group: string) => {
    const user = userEvent.setup()
    const navigation = within(
        screen.getByRole('navigation', { name: 'Main navigation' }),
    )
    const trigger = navigation.getByRole('button', { name: group })
    await act(async () => {
        trigger.focus()
        await user.keyboard('{Enter}')
    })
    return { trigger, user }
}

test.each([
    ['/#team', 'About', 'Our team', '/#team'],
    ['/projectx/2026', 'Programs', 'ProjectX', '/projectx'],
    ['/conferencex-2026', 'Programs', 'ConferenceX', '/conferencex'],
])(
    'marks the current section on %s',
    async (route, group, label, destination) => {
        renderHeader(route)
        const { trigger } = await openMenu(group)
        expect(trigger).toHaveAttribute('data-current', 'true')
        const link = await screen.findByRole('link', {
            name: new RegExp(`^${label}`),
        })
        expect(link).toHaveAttribute('aria-current', 'page')
        expect(link).toHaveAttribute('href', destination)
    },
)

test('links the newsletter internally and the AI Review externally', async () => {
    renderHeader()
    await openMenu('News')
    expect(
        await screen.findByRole('link', { name: /Newsletter/ }),
    ).toHaveAttribute('href', '/newsletter')
    expect(screen.getByRole('link', { name: /AI Review/ })).toHaveAttribute(
        'href',
        'https://torontoaireview.framer.website/',
    )
})

test('closes the mobile menu after navigation and with Escape, restoring focus', async () => {
    const user = userEvent.setup()
    renderHeader()
    const menuButton = screen.getByRole('button', { name: 'Open menu' })

    await act(async () => user.click(menuButton))
    const dialog = await screen.findByRole('dialog')
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    await act(async () =>
        user.click(within(dialog).getByRole('link', { name: 'ProjectX' })),
    )
    await waitFor(() =>
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    await waitFor(() => expect(menuButton).toHaveFocus())

    await act(async () => user.click(menuButton))
    await screen.findByRole('dialog')
    await act(async () => user.keyboard('{Escape}'))
    await waitFor(() =>
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    await waitFor(() => expect(menuButton).toHaveFocus())
})
