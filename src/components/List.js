import { useState, useEffect } from "react";

const List = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        setItems(getItems(5));
        console.log('Uploading Items');
    },[getItems])

    return items.map(item => <div className="p-4 bg-zinc-500 text-2xl" key={item}>{item}</div>)
}
export default List;