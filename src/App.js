import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Header from "./components/Header";
import SaveTask from "./components/SaveTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleAdd = () => {
    setShowAdd(!showAdd);
  };

  // Toggle archive/unarchived status
  const handleToggleArchive = async (id) => {
    let status = null;
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.archived = !task.archived;
          status = task.archived;
          return task;
        } else return task;
      })
    );

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        archived: status,
      }),
    });
  };

  // Toggle checked/unchecked status
  const handleCheckbox = async (id) => {
    let status = null;
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
          status = task.completed;
          return task;
        } else return task;
      })
    );

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        completed: status,
      }),
    });
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleSave = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    setTasks([...tasks, data]);
  };

  const handleShowArchived = () => {
    setShowArchived(!showArchived);
  };

  const handleOneDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);
    setTasks([...items]);
  };

  return (
    <div className="container">
      <Header
        showAdd={showAdd}
        showArchived={showArchived}
        onAdd={handleAdd}
        onShowArchived={handleShowArchived}
      />
      {showAdd ? <SaveTask onSave={handleSave} /> : null}
      <DragDropContext onDragEnd={handleOneDragEnd}>
        <Tasks
          tasks={tasks}
          showArchived={showArchived}
          archiveFunction={handleToggleArchive}
          onCheck={handleCheckbox}
          onDelete={handleDelete}
        />
      </DragDropContext>
    </div>
  );
};

export default App;
