import Task from "./Task";

const Tasks = ({ tasks, onCheck, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onCheck={onCheck} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
