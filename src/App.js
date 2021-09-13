import { useState, useEffect } from "react";
import Header from "./components/Header";
import SaveTask from "./components/SaveTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [display, setDisplay] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Do laundry",
      datetime: "October 10 at 1:30pm",
      complete: true,
    },
    {
      id: 2,
      text: "Buy food",
      datetime: "October 1 at 5:30pm",
      complete: false,
    },
  ]);

  const handleAdd = () => {
    setDisplay(!display);
  };

  // Toggles checkbox's checked/unchecked status
  const handleCheckbox = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.complete = !task.complete;
          return task;
        } else return task;
      })
    );
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
      {display ? <SaveTask onSave={handleSave} /> : null}
      <Tasks tasks={tasks} onCheck={handleCheckbox} onDelete={handleDelete} />
    </div>
  );
};

export default App;
