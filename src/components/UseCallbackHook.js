import { useCallback, useState } from "react";
import List from "./List";

const UseCallbackHook = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback((incrementor) => {
        return [number + incrementor, number + 1 + incrementor, number + incrementor + 2]
    },[number])

    const theme = {
        backgroundColour: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return ( <div style={theme}>
        <input 
            className="p-4 m-1 text-2xl"
            type="number" 
            onChange={e => setNumber(parseInt(e.target.value))}
         />
         <br />
        <button 
            className="bg-lime-500 p-4 m-1"
            onClick={()=> setDark(prevDark => !prevDark)}
        >Toogle Theme</button>

        <List getItems={getItems} />

    </div> );
}
 
export default UseCallbackHook;