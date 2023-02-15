import { Link } from "react-router-dom";

const Dash = () => {
    return ( <div>
        <Link className="flex justify-center" to={'/reducer'}><button className="p-4 bg-slate-400 text-white rounded">Use Reducer</button></Link>
        <br />
        <Link className="flex justify-center" to={'/reducer'}><button className="p-4 bg-slate-400 text-white rounded">Use Reducer</button></Link>
        <br />
    </div> );
}
 
export default Dash;