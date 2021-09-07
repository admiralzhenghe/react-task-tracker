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
  }
  ])
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App