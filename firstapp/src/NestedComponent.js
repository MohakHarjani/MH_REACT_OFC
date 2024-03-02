import { useState } from "react";
 
function Component1(props) {
    const [user, setUser] = useState(props.username);
 
    return (
      <>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </>
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
 
  function Component2(props) {
    return (
      <>
        <h1>Component 2 {props.user}</h1>
        {/*
        {setUser('namrata')}
        {user}
        */}
 
        <Component3 user={props.user} />
      </>
    );
  }
 
  function Component3(props) {
    return (
      <>
        <h1>Component 3 - {props.user}</h1>
       
        <Component4 user={props.user} />
      </>
    );
  }
 
  function Component4({ user }) {
    return (
      <>
        <h1>Component 4 - {user}</h1>
      {/*
        {setUser('namrata')}
        {user}
    */}
       
      </>
    );
  }
 
 
  export default Component1;