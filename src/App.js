import { useState } from "react";
import Header from './components/Header'
import AddTask from "./components/AddTask";
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Do laundry',
      datetime: 'October 10 at 1:30pm',
      complete: false,
    },
    {
      id: 2,
      text: 'Buy food',
      datetime: 'October 1 at 5:30pm',
      complete: false,
    },
  ])
  
  const handleAdd = (task) => {
    setTasks([...tasks, task])
  }
  
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={handleAdd}/>
      <Tasks tasks={tasks} onDelete={handleDelete}/>
    </div>
  )
}

export default App