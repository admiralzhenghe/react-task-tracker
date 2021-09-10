import Task from "./Task";

const Tasks = ({ tasks, buttonMode, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          buttonMode={buttonMode}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Tasks;
