import {nums} from './data'


export default function ListNumbers()
{
    return (
        <>
           <ul>
           {
              nums.map((num, index)=>{
                 return <li key = {index}>{num}</li>
                })
           }
           </ul>
        
        </>
    )
}