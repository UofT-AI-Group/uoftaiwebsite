import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

test('arrow keys move between tabs and show the matching panel', async () => {
    const user = userEvent.setup()
    render(
        <Tabs defaultValue="day-1">
            <TabsList aria-label="Schedule day">
                <TabsTrigger value="day-1">Day 1</TabsTrigger>
                <TabsTrigger value="day-2">Day 2</TabsTrigger>
            </TabsList>
            <TabsContent value="day-1">Opening remarks</TabsContent>
            <TabsContent value="day-2">Closing panel</TabsContent>
        </Tabs>,
    )

    await user.tab()
    expect(screen.getByRole('tab', { name: 'Day 1' })).toHaveFocus()
    await user.keyboard('{ArrowRight}')

    const day2 = screen.getByRole('tab', { name: 'Day 2' })
    expect(day2).toHaveFocus()
    expect(day2).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Closing panel')
})
