import { useState } from "react";

function Largest(props)
{
    // const [showString, setShowSting] = useState('');

    let num1 = props.num1;
    let num2 = props.num2;
    let num3 = props.num3;
    let largest = 0;

    if (num1 > num2)
    {
        if (num1 > num3)
          largest = num1;
        else
           largest = num3;
    }
    else
    {
        if (num2 > num3)
          largest = num2;
        else
          largest = num3;
    }
      

    return (
        <> 
            Largest number is {largest}
        
           
        </>
    )

}

export default Largest;