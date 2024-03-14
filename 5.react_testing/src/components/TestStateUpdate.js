import React from 'react';
import { useState } from "react";



const TestStateUpdate = () => {

    const [toggleTextVisible, setToggleTextVisible] = useState(false);


 return (
    <>
    {toggleTextVisible && <p> Text visible </p> }
    <button onClick={() => { setToggleTextVisible(!toggleTextVisible) }}> 
        Toggle text 
    </button>
    </>
)};

export default TestStateUpdate;