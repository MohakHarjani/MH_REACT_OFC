
import { useContext, useState } from 'react';
import { Context } from './RegisterBook';

function ShowBook(props) {
    return (

        <li>
            {props.bookId}<br />
            {props.bookName}<br />
            {props.bookPrice}<br /><br />
        </li>
    )

}

export default function ListBook() {
    let {tempBook : book} = useContext(Context);
    //let tempBook = {...book};

    let [bookList, setBookList] = useState([]);
    function fetchBooks()
    {
        setBookList([...bookList, {

            bookId:book.bookId,
            bookName: book.bookName,
            bookPrice: book.bookPrice

        }]);
    }


    return (
        <div class = 'context_1_list'>
            <h2>------------------------Book List-----------------------</h2>

            <button onClick={() => { fetchBooks() }}>Fetch Books</button>

            <ul>
                {
                    bookList.map((book) => {
                        return <ShowBook key={book.bookId} bookId={book.bookId} bookName={book.bookName} bookPrice={book.bookPrice} />

                    })
                }
            </ul>
        </div>

    )

}