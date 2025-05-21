import { Link } from "react-router-dom";
import './Navbar.css';
export default function Navbar(){
    return(
        <div>
            <h1 className="Head-set">Tasks-List</h1>
            <nav className="Nav-set">
                <Link to="/tasklist">Tasks List</Link>
                <Link to="/taskform">Task Form</Link>
            </nav>
        </div>
    );
}