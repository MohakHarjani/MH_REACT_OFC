import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Largest from "./Largest";
import Book from './Book'
import ListNumbers from './ListNumbers';
import ListBooks from './ListBooks';
import BookForm from './BookForm';
import EmpForm from './EmpForm'
import BookForm1 from './BookForm1';
import ComponentUsingContext from './ComponentUsingContext';

function App(props) {

  let firstName = 'Mohak'
  let lastName = props.lastName
  let number1 = 10;
   
  //props are "read-only" 
  //props.firstName = props.firstName + "Allo";

  const changeName = (newFirstName)=> {

    firstName = 'Kahom'
    // alert(firstName)


  }

  return (
    <div className = 'app'>  
         <p>    
          Learn React with {firstName}, {lastName}, 
          Age = {props.age}
          {changeName('Allooo')}
          </p>
          <hr></hr>
          <br></br>

          <Book bookId = '1' bookName = 'Harry Potter' bookPrice = '1000'/>

          <hr>
          </hr>
          <br></br>

          <Largest num1 = {number1} num2 = '1' num3  = '99'/>

          <hr/><br/>

          <ListNumbers/>

          <hr></hr><br/>

          <ListBooks/>

          <hr></hr><br></br>

          <BookForm bookId = '1' bookName = 'Man called Ove' bookPrice = '1000'/>

          <hr/><br/>

          <EmpForm empId = '1' empName = 'Mohak' empSal = '35000'/>

          <hr/><br/>

          <BookForm1 bookId = '1' bookName = 'Man called Ove' bookPrice = '1000'/>

          <hr/><br/>

          <ComponentUsingContext username = 'Mohak'/>

    </div>
    
  );
}

export default App;
