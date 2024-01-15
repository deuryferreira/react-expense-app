
import { useState } from 'react'


const TaskCreator = () => {


    const [newTaskName, setNewTaskName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("test", newTaskName);
        setNewTaskName("")
    }


    return (


        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Write a New Task' value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
            <button onClick={() => alert(newTaskName)}>Save</button>
        </form>

    )

}




export default TaskCreator