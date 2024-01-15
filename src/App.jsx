
import { useState } from 'react'
import './App.css'

function App() {

  const [newTaskName, setNewTaskName] = useState()

  return (
    <div className='App'>
      <input type="text" placeholder='Write a New Task' onChange={(e) => setNewTaskName(e.target.value)} />
      <button onClick={() => alert(newTaskName)}>Save</button>
    </div>
  )
}

export default App
