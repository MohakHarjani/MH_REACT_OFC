import { useState } from "react";
 
function Book(props)
{
   const [bkid,setbkid] = useState(props.bkid);
   const [bkname,setbkname] = useState(props.bkname);
 
   const [bkprice,setbkprice] = useState(props.bkprice);
 
   
  //it's JSX
   const myElement = <h1>I Love JSX!</h1>; //html is mixed with JS (u r not gving it as string)
 
   //it's JSX
   const data =  <div>
                    <p>Book details!</p>
                    {bkid}<br/>
                    {bkname}<br/>
                     {bkprice}<br/>
                  </div>;
 
    const func = (id)=>{
     //  bkid=id; //should not change state property this way, use useState hook setter method
      // alert(bkid);
        setbkid(id);
    }
 
   // const x = 5;
    let text = "Goodbye";
    if (bkprice < 3000) {
        text = "Hello";
     }
    const myElement1 = <h1>{text}</h1>;
 
 
   
    return(
 
       
     <div>
       
    {/*  {data}    
       
    */}
 
        <div>
            {myElement1}
            { bkprice<3000 ? <h1>Hello</h1>:<h1>Goodbye</h1>}
            <p>Book details!</p>
               {bkid}<br/>
               {bkname}<br/>
               {bkprice}<br/>
        </div>
   
        <button onClick = {()=>{setbkid(2); setbkname('ila'); setbkprice(200);}}>clickme</button>
       
        <hr/>
        {myElement}
     </div>
    );
}
 
 
export default Book;