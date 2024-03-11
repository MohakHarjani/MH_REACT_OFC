
import { useState } from "react";
function ShowBook1(props) {
    return (

        <li>
            {props.bookId}<br />
            {props.bookName}<br />
            {props.bookPrice}<br /><br />
        </li>
    )

}

export default function BookForm1(props) {
    //useState takes initial value as an argument
    // let [bookId, setBookId] = useState(props.bookId);
    // let [bookName, setBookName] = useState(props.bookName);
    // let [bookPrice, setBookPrice] = useState(props.bookPrice);

    let [book, setBook] = useState({

        bookId : props.bookId,
        bookName : props.bookName,
        bookPrice : props.bookPrice
        
    })
    let [bookList, setBookList] = useState([]);

    let addBook = (e) => {
        e.preventDefault();

        setBookList([...bookList, {
            
            bookId : book.bookId,
            bookName : book.bookName,
            bookPrice : book.bookPrice
        
        }]);

        //generally you will create a new Book Object here...
        //then use bookService.addBook() to add book to a service

        // console.log(bookId + ", " + bookName + ", " + bookPrice)

    }



    return (
        <>
        <h2>Efficient Hooks</h2>
            <div>
                <form >
                    <label for='bookId'>Book Id : </label>
                    <input type='number' value={book.bookId} id='bookId'
                        onChange={ (e) => { setBook({ ...book, bookId : e.target.value}) } }
                    /><br />


                    <label for='bookName'>Book Name : </label>
                    <input type='text' value={book.bookName} id='bookName'
                        onChange={(e) => { setBook({ ...book, bookName : e.target.value}) }}
                    /><br />



                    <label for='bookPrice'>Book Price  : </label>
                    <input type='number' value={book.bookPrice} id='bookPrice'
                        onChange={(e) => { setBook({ ... book, bookPrice : e.target.value}) }}
                    /><br />

                    <button onClick={(e) => { addBook(e) }}>Submit</button>

                </form>

            </div><br />

            <div>


                Book Details : <br />
                BookId = {book.bookId}, <br />
                BookName = {book.bookName}, <br />
                BookPrice = {book.bookPrice} <br />

            </div><br />

            <div>
                <ul>
                    {
                        bookList.map((book) => {

                            return <ShowBook1 key={book.bookId} bookId={book.bookId} bookName={book.bookName} bookPrice={book.bookPrice} />

                        })
                    }
                </ul>
            </div>



        </>
    )
}


