import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../App";



const UseContextHook = () => {
    const loggedIn = useContext(LoginContext);

    useEffect(()=>{
        console.log(loggedIn)
    })
    return ( <div>
        
    </div> );
}
 
export default UseContextHook;