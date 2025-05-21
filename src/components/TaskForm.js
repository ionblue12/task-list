export default function TaskForm(){
    return(
        <form>
            <h1>Enter new task</h1>
            <labe>Task Name</labe>
            <input type="text"></input>
            <label>Task Details</label>
            <input type="text"></input>
            <label>Date</label>
            <input type="date"></input>
            <button>Submit Task</button>

        </form>

    );
}