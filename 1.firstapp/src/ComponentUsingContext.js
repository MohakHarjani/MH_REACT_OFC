import { useState,createContext, useContext } from "react";
 
const UserContext = createContext(); //step 1
 
function ComponentUsingContext(props) {
    const [user, setUser] = useState(props.username);
 
    return (
      <UserContext.Provider value={{user,setUser}}> //step 2
        <h1>{`Hello ${user}!`}</h1>
        <h1> Hello {user}! </h1>
        <Component2  />
        <Component3 />
        <Component4  />
      </UserContext.Provider>
    );
  }
 
  /*
   function Component2({user}) {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 user={user} />
      </>
    );
  }
  */
 
  function Component2() {
    let {user}  = useContext(UserContext); //step 3
    return (
      <>
        <h1>Component 2 {user}</h1>
   
      </>
    );
  }
 
  function Component3() {
    let {user,setUser}  = useContext(UserContext); //step 3
    return (
      <>
       <h1>Component 3 - {user}</h1>  
       <div>
        <button onClick={()=>{setUser('Virat')}}>change User</button> : <p>{user}</p>
        </div>
       
      </>
    );
  }
 
  function Component4() {
    let {user}  = useContext(UserContext);
    return (
      <>
        <h1>Component 4 - {user}</h1>
        </>
    );
  }
 
 
  export default ComponentUsingContext;