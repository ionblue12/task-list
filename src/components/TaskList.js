import { useNavigate } from "react-router-dom";
    

export default function TaskList(){
    const navigate = useNavigate();
    const goToForm = ()=>{
        navigate('/tasklist/taskform');
    }

    return(
    <div>
        <h1>Task List</h1>
        <button onClick={goToForm}>Go to Form</button>
    </div>
    );
}
