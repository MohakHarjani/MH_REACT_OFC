import { render, screen } from '@testing-library/react'
import Book from '../components/Book';
import {userEvent} from '@testing-library/user-event'
 
test("Toggle text visible", async () => {
    render(<Book bkid = {1} bkname = {"Harry Potter"} bkprice = {5000}/>);
 
   
    const arr = screen.getAllByText(/Goodbye/i);
       arr.forEach(ele => expect(ele).toBeInTheDocument());
   
    expect(screen.queryAllByText("Goodbye").length).toBe(2);
  //  expect(screen.getByText(/Goodbye/i)).toBeInTheDocument(); //use this for single text Goodbye rendered
    expect(screen.getByText(/HaRrY pOTtEr/i)).toBeInTheDocument();
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/5000/i)).toBeInTheDocument();
 
    await userEvent.click(screen.getByText(/clickme/i));
 
    const arr1 = screen.getAllByText(/Hello/i);
     arr1.forEach(ele => expect(ele).toBeInTheDocument());
    //expect(screen.getByText(/Hello/i)).toBeInTheDocument();  //use for single text Hello rendered.
    expect(screen.getByText(/ILA/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/200/i)).toBeInTheDocument();
})