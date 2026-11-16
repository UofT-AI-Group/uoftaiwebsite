import { ChakraProvider } from '@chakra-ui/react'
import { act } from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import theme from '../theme'
import Navbar from './Navbar'

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: string) => ({
            matches: false,
            media: query,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
        }),
    })
})

const renderNavbar = (route = '/') =>
    render(
        <ChakraProvider theme={theme}>
            <MemoryRouter initialEntries={[route]}>
                <Navbar />
            </MemoryRouter>
        </ChakraProvider>,
    )

test.each([
    ['/#meet-the-team', 'About Us', 'Our Team', '/#meet-the-team'],
    ['/projectx/2026', 'Programs', 'ProjectX', '/projectx'],
])(
    'marks the current section on %s',
    async (route, group, label, destination) => {
        const user = userEvent.setup()
        renderNavbar(route)
        const navigation = within(
            screen.getByRole('navigation', { name: 'Main navigation' }),
        )
        const trigger = navigation.getByRole('button', { name: group })
        expect(trigger).toHaveAttribute('data-current', 'true')
        await act(async () => user.click(trigger))
        const menu = within(await screen.findByRole('menu'))
        expect(menu.getByRole('menuitem', { name: label })).toHaveAttribute(
            'aria-current',
            'page',
        )
        expect(
            navigation.getByRole('link', { name: 'Home' }),
        ).not.toHaveAttribute('aria-current')
        expect(menu.getByRole('menuitem', { name: label })).toHaveAttribute(
            'href',
            destination,
        )
    },
)

test('keeps publication destinations and supports keyboard navigation', async () => {
    const user = userEvent.setup()
    renderNavbar()
    const trigger = within(
        screen.getByRole('navigation', { name: 'Main navigation' }),
    ).getByRole('button', { name: 'News' })
    await act(async () => user.click(trigger))
    const newsletter = await screen.findByRole('menuitem', {
        name: 'Newsletter',
    })
    const review = screen.getByRole('menuitem', { name: 'AI Review' })
    expect(newsletter).toHaveAttribute('href', '/newsletter')
    expect(review).toHaveAttribute(
        'href',
        'https://torontoaireview.framer.website/',
    )
    await waitFor(() => expect(newsletter).toHaveFocus())
    await act(async () => user.keyboard('{ArrowDown}'))
    await waitFor(() => expect(review).toHaveFocus())
    await act(async () => user.keyboard('{Escape}'))
    await waitFor(() => expect(trigger).toHaveFocus())
})

test('closes the mobile menu after navigation and with Escape, restoring focus', async () => {
    const user = userEvent.setup()
    renderNavbar()
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
    expect(menuButton).toHaveFocus()
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await act(async () => user.click(menuButton))
    await screen.findByRole('dialog')
    await act(async () => user.keyboard('{Escape}'))
    await waitFor(() =>
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    expect(menuButton).toHaveFocus()
})
