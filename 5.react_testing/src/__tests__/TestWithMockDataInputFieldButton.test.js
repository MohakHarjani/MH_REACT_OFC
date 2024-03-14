import { render, screen } from '@testing-library/react'
import TestWithMockDataInputFieldButton from '../components/TestWithMockDataInputFieldButton'
 
 
 
test("test particular input text and button", () => {
    render(<TestWithMockDataInputFieldButton />)
 
 
  // const inputElement = screen.getByRole('textbox');  //for only 1 textbox element
   // expect(inputElement).toBeInTheDocument();
   // const button = screen.getByRole('button'); //for only 1 button element present in the document
    // expect(button).toBeInTheDocument();
   
     
    const nameInput = screen.getByPlaceholderText(/enter name/i);
    expect(nameInput).toBeInTheDocument();
    const descrInput = screen.getByPlaceholderText(/enter description/i);
    expect(descrInput).toBeInTheDocument();
    const passwordInput = screen.getByLabelText(/enter password/i);
    expect(passwordInput).toBeInTheDocument();
 
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
 
    const applyButton = screen.getByRole('button', { name: /apply/i });
    expect(applyButton).toBeInTheDocument();
 
   
})
 
test('test multiple input elements present in the document',()=>{
  render(<TestWithMockDataInputFieldButton />)
  const inputElementarr = screen.getAllByRole('textbox')  //for multiple elements of same type
  inputElementarr.forEach(inputEle => expect(inputEle).toBeInTheDocument());
 
})
 
test('test multiple input checkbox elements present in the document',()=>{
  render(<TestWithMockDataInputFieldButton />)
  const checkboxarr = screen.getAllByRole('checkbox')  //for multiple elements of same type
  checkboxarr.forEach(checkbox => expect(checkbox).toBeInTheDocument());
 
})
 
test('test that there is no checkbox with empty label',()=>{
    render(<TestWithMockDataInputFieldButton />)
   //test that there is no checkbox without a label in the document
   const checkboxLabels = screen.queryAllByLabelText("") //query all input ele (getByText) whose label is empty
   checkboxLabels.forEach(emptyLabel => expect(emptyLabel).not.toBeInTheDocument()) //such a checkbox withoyt label should not be there
})