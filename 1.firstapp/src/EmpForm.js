import { useState } from "react";

function ShowEmployee(props)
{
    return <li>
        {props.empId} <br/>
        {props.empName} <br/>
        {props.empSal} <br/>
     </li>

}

export default function EmpForm(props)
{
    let [empId, setEmpId] = useState(props.empId);
    let [empName, setEmpName] = useState(props.empName);
    let [empSal, setEmpSal] = useState(props.empSal);
    let [empList, setEmpList] = useState([]);

    function addEmployee(e)
    {
        e.preventDefault();

        setEmpList([...empList, {empId, empName, empSal}])
    }

    return (
        <>
            <form>
                <div>
                    <label for = 'empId'>Employee Id : </label>
                    <input 
                        type = 'number'
                        id = 'empId'
                        value = {empId}
                        onChange={(e)=>{setEmpId(e.target.value)}}
                    />
                </div>
                <div>
                    <label for = 'empName'>Employee Name : </label>
                    <input 
                        type = 'text'
                        id = 'empName'
                        value = {empName}
                        onChange={(e)=>{setEmpName(e.target.value)}}
                    />
                </div>
                <div>
                    <label for = 'empSal'>Employee Salary : </label>
                    <input 
                        type = 'number'
                        id = 'empSal'
                        value = {empSal}
                        onChange={(e)=>{setEmpSal(e.target.value)}}
                    />
                </div>

                <button onClick={(e)=>{ addEmployee(e)}}> SUBMIT </button>
            </form>

            <div>
                Employee Details : 
                <p>Employee Id : {empId}</p>
                <p>Employee Name : {empName}</p>
                <p>Employee Salary : {empSal}</p>
                
            </div>


            <div>
                <ul>
                    {
                        empList.map((emp)=>{

                            return <ShowEmployee key = {emp.empId} empId = {emp.empId} empName = {emp.empName} empSal = {emp.empSal}/>

                        })
                    }
                </ul>

            </div>

            <div>
                <table>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Employee Sal</th>
                    </tr>
                    {
                        empList.map((emp)=>{

                            return <tr key = {emp.empId}>
                              <td>{emp.empId}</td>
                              <td>{emp.empName}</td>
                              <td>{emp.empSal}</td>
                            
                            </tr>

                        })
                    }
                </table>
            </div>
        
        </>
    )



}