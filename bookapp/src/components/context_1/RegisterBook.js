import { useState, createContext, useContext } from "react";
import ListBook from "./ListBook";

const Context = createContext();

function RegisterBook(props) {

    let [book, setBook] = useState({

        bookId: props.bookId,
        bookName: props.bookName,
        bookPrice: props.bookPrice

    });
    let [tempBook, setTempBook] = useState({})


    let [status, setStatus] = useState('Click the submit button to add....')


    function addBook(e) {
        e.preventDefault();

        setTempBook({...book});
        setStatus(book.bookId + ", " + book.bookName + ", " + book.bookPrice + " Book Added")
        setBook({

            bookId : 0,
            bookName : ' ',
            bookPrice : 0

        })
    }


    return (

        <Context.Provider value={{ tempBook, setTempBook }}>
            <div class='context_1_register'>
                <h2>----------------Register Book----------------------</h2>
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

                        <button onClick={(e) => { addBook(e) }}>Submit</button>

                    </form><br/>

                    <div>
                        Book Details : <br />
                        BookId = {book.bookId}, <br />
                        BookName = {book.bookName}, <br />
                        BookPrice = {book.bookPrice} <br />
                    </div><br/>

                    <div>
                        <span><b>Status : </b></span>{status}
                    </div>


                </div>

                {/* ================================================================================== */}


                <ListBook />
            </div>
        </Context.Provider>
    )
}

export { RegisterBook, Context }