import { render, screen } from '@testing-library/react'
import { Largest } from '../components/Largest'
 
test("tesing for no1 Largest", () => {
    render(<Largest no1={90} no2={60} no3={40} />)
    expect(screen.getByText(/no1 is largest:90/)).toBeInTheDocument();
})
test("tesing for no2 Largest", () => {
    render(<Largest no1={90} no2={160} no3={40} />)
    expect(screen.getByText(/no2 is largest:160/)).toBeInTheDocument();
})
test("tesing for no3 Largest", () => {
    render(<Largest no1={90} no2={60} no3={140} />)
    expect(screen.getByText(/no3 is largest:140/)).toBeInTheDocument();
})
 
 
 