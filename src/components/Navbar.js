import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <h2>Tasks</h2>
            <Link to="/tasklist">Tasklist</Link>
        </nav>
    );
}