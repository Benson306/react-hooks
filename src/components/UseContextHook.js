import { useContext } from "react";
import { LoginContext } from "../App";



const UseContextHook = () => {
    const [loggedIn, setLoggedIn] = useContext(LoginContext);

    const handleLogOut = () =>{
        setLoggedIn(false);
    }

    const handleLoggedIn = () => {
        setLoggedIn(true)
    }
    return ( <div className="flex justify-center">
        { loggedIn ? 
            <div className=""> 
                <div className="text-sky-100 m-1 flex justify-center">Logged In</div>
                <button className="bg-slate-400 text-white m-1 p-3 text-xl" onClick={() => handleLogOut()}>Log Out</button>
            </div>
            : 
            <div className=""> 
                <div className="text-sky-100 m-1">Logged Out</div>
                <button className="bg-slate-400 text-white m-1 p-3 text-xl" onClick={() => handleLoggedIn()}>Log In</button>
            </div> }
    </div> );
}
 
export default UseContextHook;