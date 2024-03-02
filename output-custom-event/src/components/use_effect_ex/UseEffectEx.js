import {useEffect} from 'react'
import {useState} from 'react'


export default function UseEffectEx()
{
    let [count, setCount] = useState(0)
    useEffect(()=>{

        console.log('Use effect Hook called...');
    
    })

    //here useEffect will run only once during the first render
    // useEffect(()=>{
        
    //     console.log('Use effect Hook called...');
    
    // }, [])

    function changeCount()
    {
        setCount(count + 1);

    }
    return (
        <>

         <h2>Count = {count}</h2>

         <button onClick={changeCount}>Increment Count</button>
        
        
        </>
    )
}