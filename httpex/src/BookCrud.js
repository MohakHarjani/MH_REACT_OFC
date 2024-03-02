
import {useState, useEffect} from "react";
import axios from 'axios';
import './BookCrud.css'

export default function BookCrud()
{

    const [bookList, setBookList] = useState([]);
    const [book, setBook] = useState({
        id : 3,
        bookName : 'Java Book',
        bookPrice : 2000
    })

    const baseUrl = "http://localhost:5000/books";

    const getAllBooks = ()=>{

        axios.get(baseUrl)
        .then((response)=>{

           console.log(response.data);
           setBookList(response.data)

        })

    }
    //=======================================================
    useEffect(()=>{

        getAllBooks();

    }, []);
    //==========================================================
    function deleteBook(book)
    {
        console.log(book)
        axios
        .delete(baseUrl + '/' + book.id)
        .then(() => {

            // alert("")

            getAllBooks();

        })
        .catch((error)=>{

            console.log(error);

        })

    }
    async function deleteBook1()
    {
        try{
        let result = await axios.delete(baseUrl + '/' + book.id)
        
        //code in then goes here
        console.log(result);
        getAllBooks();

        }
        catch(err)
        {
            console.log(err);
        }
    }
    function editBook(book)
    {
        console.log(book);
        setBook(book)
    }
    function addBook(e)
    {
        e.preventDefault();

        let filteredList = bookList.filter((b)=>{
            return (b.id == book.id);
        });

        if (filteredList.length == 0)
        {
            axios
            .post(baseUrl, book)
            .then((response) => {
            
                console.log('Book with id ' + book.id + " updated " );
                console.log(response.data)
    
                getAllBooks();
    
            });
        }
        else
        {
            axios
            .put(baseUrl + "/" + book.id, book)
            .then((response) => {
            
                console.log('Book with id ' + book.id + " posted " );
                console.log(response.data)

                getAllBooks();

            });
        }
    }
    //===========================================================================
    return (

        <div>

<div>
                <form >
                    <label for='bookId'>Book Id : </label>
                    <input type='number' value={book.id} id='bookId'
                        onChange={ (e) => { setBook({ ...book, id : e.target.value}) } }
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



            <table>
                <thead>
                    <tr>
                        <th>Book Id</th>
                        <th>Book Name</th>
                        <th>Book Price</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        bookList.map((book)=>{
                            return <tr key = {book.id}>
                                <td>{book.id}</td>
                                <td>{book.bookName}</td>
                                <td>{book.bookPrice}</td>
                                <td><button onClick = {()=>{deleteBook1(book)}}>Delete</button></td>
                                <td><button onClick = {()=>{editBook(book)}}>Edit</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
{/* 
            <ul>
                {
                    bookList.map((book)=>{

                        return <li 
                          key = {book.id}
                        >

                            {book.id}, 
                            {book.bookName},
                            {book.bookPrice},

                          


                        </li>
                        
                    })


                }
            </ul>
 */}

        </div>
    )
}