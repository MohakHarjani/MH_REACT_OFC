import {nums} from './data'
import {books} from './data'
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
export default function ListBooks()
{
    return (
        <>

           <ul>
           {
            

              books.map((book)=>{
                
                 return <ShowBook key = {book.bookId} bookId = {book.bookId} bookName = {book.bookName} bookPrice = {book.bookPrice}/>
                
                
                })
           }
           </ul>
        
        </>
    )
}