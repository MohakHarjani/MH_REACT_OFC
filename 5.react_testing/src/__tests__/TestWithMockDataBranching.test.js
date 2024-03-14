import { render, screen } from '@testing-library/react'
import TestWithMockDataBranching from '../components/TestWithMockDataBranching'



  const mockData = [
    {
        "id": 1,
        "first_name": "Fletcher",
        "last_name": "McVanamy",
        "email": "mmcvanamy0@e-recht24.de",
        "age": 30
      }, {
        "id": 2,
        "first_name": "Clarice",
        "last_name": "Harrild",
        "email": "charrild1@dion.ne.jp",
        "age": 35
      }, 
      {
        "id": 3,
        "first_name": "Amby",
        "last_name": "Emmer",
        "email": "aemmer2@buzzfeed.com",
        "age": 67
    }
]



test("Unordered List renders successfully", () => {
    render(<TestWithMockDataBranching data={mockData} displayUnorderedList={true} />)
    expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
})
  
test("Ordered list renders", () => {
    render(<TestWithMockDataBranching data={mockData} displayUnorderedList={false} />)

    expect(screen.getByText(/McVanamy/i)).toBeInTheDocument()
})

test("Unordered renders successfully with item entry for age greater than 50", () => {
    render(<TestWithMockDataBranching data={mockData} displayUnorderedList={true} />)
  
    expect(screen.getByText(/Amby/i)).toBeInTheDocument();
   
})

test("Unordered renders successfully with item entry for age greater than 50", () => {
    render(<TestWithMockDataBranching data={mockData} displayUnorderedList={true} />)
  
    expect(screen.getByText(/Senior/)).toBeInTheDocument();
   
})

