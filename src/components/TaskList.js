import { useNavigate } from "react-router-dom";
    

export default function TaskList(){
    const navigate = useNavigate();
    const goToForm = ()=>{
        navigate('/taskform');
    }

    return(
    <div>
        <h1>Task List</h1>
        <button onClick={goToForm}>Create New Task</button>
    </div>
    );
}
