import { render, screen } from '@testing-library/react'
import TestStateUpdate from '../components/TestStateUpdate'
import {userEvent} from '@testing-library/user-event'

test("Toggle text visible", async () => {
    render(<TestStateUpdate/>);
    await userEvent.click(screen.getByText(/toggle text/i));
    expect(screen.getByText(/text visible/i)).toBeInTheDocument();
})

