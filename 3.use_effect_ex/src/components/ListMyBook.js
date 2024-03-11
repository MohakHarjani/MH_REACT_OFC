
import MyBookForm from "./MyBookForm";
import { useState} from "react"
export default function ListMyBook()
{
    const [bookList, setBookList] = useState([
        {
          bookId : 1,
          bookName : 'Harry Potter',
          bookPrice : 1000
        }
    ]);

    function addBook(newBook)
    {
        console.log('Inside List Book...');
        console.log(newBook);

        setBookList([...bookList, newBook])
    }

    return (
        <div>

            <MyBookForm 
            outputEventAddBook = {(book)=>{ addBook(book)}} 
            // outputEventAddBook = {addBook}
            bookId  = '1' bookName = 'Harry Potter' bookPrice = '1000'/>

            <p>Total book = {bookList.length}</p>

            <ul>
                {
                    bookList.map((book)=>{

                        return <li key = {book.bookId}>
                            {book.bookId}<br/>
                            {book.bookName} <br/>
                            {book.bookPrice} <br/>

                        </li>

                    })
                }
            </ul>
        </div>
    )
}