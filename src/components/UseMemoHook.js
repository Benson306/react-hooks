import { useState, useMemo } from "react";

function slowFunction(num){
    console.log('Calling slow Function')
    for(let i =0; i <= 1000000000; i++){}

    return num * 2
}

const UseMemoHook = () =>{
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    },[number])


    const themeStyles = useMemo(()=>{
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    },[dark])
    return (
        <div>
            <input type="number" className="p-3 m-1 text-2xl" value={number} onChange={ e =>setNumber(parseInt(e.target.value)) } />
            <br />
            <button className="p-3 m-1 bg-lime-500 text-2xl" onClick={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
            <br />
            <div className="p-3 m-1 text-2xl" style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

export default UseMemoHook;