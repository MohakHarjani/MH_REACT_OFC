
import { useState } from 'react';

export default function MyBookForm(props)
{
    const [book, setBook] = useState({

        bookId : props.bookId,
        bookName : props.bookName, 
        bookPrice : props.bookPrice

    })

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(book);


        
        props.outputEventAddBook(book);
        

    }

    return (
        <div>
            <form >
            <label for='bookId'>Book Id : </label>
                <input type='number' value={book.bookId} id='bookId'
                    onChange={(e) => { setBook({ ...book, bookId: e.target.value }) }}
                /><br />


                <label for='bookName'>Book Name : </label>
                <input type='text' value={book.bookName} id='bookName'
                    onChange={(e) => { setBook({ ...book, bookName: e.target.value }) }}
                /><br />



                <label for='bookPrice'>Book Price  : </label>
                <input type='number' value={book.bookPrice} id='bookPrice'
                    onChange={(e) => { setBook({ ...book, bookPrice: e.target.value }) }}
                /><br />

                <button onClick={(e) => { handleSubmit(e) }}>Submit</button>

            </form>

            <div>
                    Book Details : <br />
                    BookId = {book.bookId}, <br />
                    BookName = {book.bookName}, <br />
                    BookPrice = {book.bookPrice} <br />
            </div>



        </div>
    )

}




