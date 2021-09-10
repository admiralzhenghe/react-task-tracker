import { useState } from "react";
import Header from "./components/Header";
import SaveTask from "./components/SaveTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Do laundry",
      datetime: "October 10 at 1:30pm",
      complete: false,
    },
    {
      id: 2,
      text: "Buy food",
      datetime: "October 1 at 5:30pm",
      complete: false,
    },
  ]);

  const handleAdd = () => {
    let display = document.querySelector(".add-form").classList;
    if (display.contains("hide-display"))
      document.querySelector(".add-form").classList.remove("hide-display");
    else document.querySelector(".add-form").classList.add("hide-display");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleSave = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container">
      <Header onAdd={handleAdd} />
      <SaveTask onSave={handleSave} />
      <Tasks tasks={tasks} buttonMode="delete" onDelete={handleDelete} />
    </div>
  );
};

export default App;
