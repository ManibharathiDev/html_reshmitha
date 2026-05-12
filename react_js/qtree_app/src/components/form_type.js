import { useState } from "react";

const FormType = () =>{

    const[myName,setMyName] = useState("")

    const renderMyName = (e) =>{
        console.log(e.target.value);
        setMyName(e.target.value);
    }

    return(
        <>
            <label>Enter Your Name</label>
            <input type="text" value={myName} onChange={(e)=>renderMyName(e)}/>
            <h1>My Name is {myName}</h1>    
        </>
    )
}

export default FormType;