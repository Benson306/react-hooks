import { Link } from "react-router-dom";

const Dash = () => {
    return ( <div>
        <Link className="flex justify-center" to={'/reducer'}><button className="p-4 bg-slate-400 text-white rounded">Use Reducer</button></Link>
        <br />
        <Link className="flex justify-center" to={'/useContext'}><button className="p-4 bg-slate-400 text-white rounded">Use Context</button></Link>
        <br />
        <Link className="flex justify-center" to={'/useMemo'}><button className="p-4 bg-slate-400 text-white rounded">Use Memo</button></Link>
        <br />
    </div> );
}
 
export default Dash;