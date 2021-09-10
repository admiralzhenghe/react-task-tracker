import Button from "./Button";

const Task = ({ task, buttonMode, onDelete }) => {
  return (
    <div className="task">
      <div className="task-container">
        <div className="task-text">{task.text}</div>
        <Button
          color="red"
          text="Delete"
          id={task.id}
          buttonMode={buttonMode}
          onDelete={onDelete}
        />
      </div>
      <div className="task-day">{task.datetime}</div>
    </div>
  );
};

export default Task;
