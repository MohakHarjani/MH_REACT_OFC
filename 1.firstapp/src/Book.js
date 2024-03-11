
import { useState } from "react";

function Book(props)
{
    //useState takes initial value as an argument
    let [bookId, setBookId] = useState(0);
    let  [bookName, setBookName] = useState("Dummy");
    let [bookPrice, setBookPrice] = useState(0);


    let wrongChangeBookId = (newBookId)=>{
        bookId = newBookId;  //value changes but no-renrender
    }

    let populateValues = ()=>{
       setBookId(props.bookId);
       setBookName(props.bookName)
       setBookPrice(props.bookPrice)
    }

    const myHeading = <h1>This is a book</h1>
    const x = 5;
    let text = "Goodbye";
    if (x < 10) {
        text = "Hello";
    }
    const greet = <h1>{text}</h1>;


    return (

        <div>
            {greet}
            {myHeading}

            Book Details : <br/>
            BookId = {bookId}, <br/>
            BookName = {bookName}, <br/>
            BookPrice = {bookPrice} <br/>




            {/* so we have to pass a "function" and not a "function-call" inside {} */}
            <button onClick={()=>populateValues()}>Populate Values</button>

            {/* adding a function call inside {} will call it immediately
            <button onClick={changeBookId(3)}>Change Id</button> */}
        

        </div>
    )
}


export default Book;