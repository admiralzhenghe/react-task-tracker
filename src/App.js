import { useState } from "react";
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'Do laundry',
    day: 'October 10 at 1:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Buy food',
    day: 'October 1 at 5:30pm',
    reminder: true,
  },
  ])

  const deleteTask = (id) => {
    console.log('delete', id)
    // setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={ tasks } onDelete={deleteTask}/>
    </div>
  )
}

export default App