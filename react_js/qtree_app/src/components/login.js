import { useState } from "react";
import Profile from "./profile";

const Login = () =>{

    let username = "admin";
    let password = "admin123";

    const [login,setLogin] = useState(false);

    const validateUser = () =>{
        if(username == 'admin' && password == 'admin123'){
            setLogin(true);
        }
        else{
            setLogin(false);
        }
    }

    const Logout = ()=>{
        setLogin(false);
        //setLogin(!login);
    }

    if(!login)
    {
        return(
            <>
                <button onClick={()=>validateUser()}>Login</button>
            </>
        );
    }
    else{
        return(
                <>
                    {/* <Profile/> */}
                    <h1>Login success</h1>
                    <button onClick={()=>Logout()}>Logout</button>
                </>
            )
    }

}
export default Login;