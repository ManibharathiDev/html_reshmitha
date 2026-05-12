import { useState } from "react";

const SampleState = () =>{

    let age = 20;

    const[myAge,setMyAge] = useState(10);

    

    const increment = (ex) =>{

        setMyAge(myAge+1);

        //console.log(ex.target.value);

        // console.log("Called");

        //age = age + 1;
    }

    const decrement = (ex) =>{

        if(myAge-1 < 0)
            {
                setMyAge(0)
            }
        else    
            setMyAge(myAge-1);
    }

    return(

        // console.log("test"), // Check why prints two times

        <>
            <h1>
                Current Age is {myAge}
            </h1>

            <input type="button" value="Increment" onClick={(e)=>increment(e)}/>

            <input type="button" value="Decrement" onClick={(e)=>decrement(e)}/>

        </>
    )

}
export default SampleState;