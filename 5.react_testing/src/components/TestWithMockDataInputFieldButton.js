import React from 'react'
 
const TestWithMockDataInputFieldButton = () => {
  return (
    <div>
        <input placeholder='Enter name'/>
        <button> Submit </button>
        <button> Apply </button>
        <input placeholder='Enter description'/>
 
        <label htmlFor='password'> Enter password</label>
        <input type='password' id='password'/>
        <div>
        <label htmlFor='first-input'>
        <input id="first-input" type="checkbox" />
        Cookies
        </label>
        <label htmlFor='second-input'>
        <input id="second-input" type="checkbox" />
        Cake
        </label>
        <label htmlFor='third-input'>
        <input id="third-input" type="checkbox" />
        Chips
        </label>
        <label htmlFor='fourth-input'>
        <input id="fourth-input" type="checkbox" />
        Coke
        </label>

        <label htmlFor='fifth-input'>Cannot be empty</label>
        <input id="fifth-input" type="checkbox" />


        </div>
 
       
    </div>
  )
}
 
export default TestWithMockDataInputFieldButton;