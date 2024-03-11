
import { useState } from "react";
function ShowBook(props)
{  
    return (

        <li>
           {props.bookId}<br/>
           {props.bookName}<br/>
           {props.bookPrice}<br/><br/>
        </li>
    )

}

export default function BookForm(props) {
    //useState takes initial value as an argument
    let [bookId, setBookId] = useState(props.bookId);
    let [bookName, setBookName] = useState(props.bookName);
    let [bookPrice, setBookPrice] = useState(props.bookPrice);

    let [bookList, setBookList] = useState([]);

    let addBook = (e) => {
        e.preventDefault();

        setBookList([...bookList, {bookId, bookName, bookPrice}]);

        //generally you will create a new Book Object here...
        //then use bookService.addBook() to add book to a service

        console.log(bookId + ", " + bookName + ", " + bookPrice)

    }

    

    return (
        <>
            <div>
                <form >
                    <label for='bookId'>Book Id : </label>
                    <input type='number' value={bookId} id='bookId'
                        onChange={(e) => { setBookId(e.target.value) }}
                    /><br />


                    <label for='bookName'>Book Name : </label>
                    <input type='text' value={bookName} id='bookName'
                         onChange={(e) => { setBookName(e.target.value) }}
                    /><br/>



                    <label for='bookPrice'>Book Price  : </label>
                    <input type='number' value={bookPrice} id='bookPrice'
                        onChange={(e) => { setBookPrice(e.target.value) }}
                    /><br/>

                    <button onClick={(e)=>{addBook(e)}}>Submit</button>

                </form>

            </div><br/>

            <div>


                Book Details : <br />
                BookId = {bookId}, <br />
                BookName = {bookName}, <br />
                BookPrice = {bookPrice} <br />

            </div><br/>

            <div>
                <ul>
                    {
                        bookList.map((book)=>{

                            return <ShowBook key = {book.bookId} bookId = {book.bookId} bookName = {book.bookName} bookPrice = {book.bookPrice}/>

                        })
                    }
                </ul>
            </div>



        </>
    )
}


