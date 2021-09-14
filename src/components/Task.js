import Button from "./Button";
import Checkbox from "./Checkbox";

const Task = ({ task, color, text, archiveFunction, onCheck, onDelete }) => {
  return (
    <div className="task">
      <div className="task-container">
        <div className="task-complete-container">
          <Checkbox task={task} onCheck={onCheck} />
        </div>

        <div className="task-wrapper">
          <div className="task-text">{task.text}</div>
          <div className="task-day">{task.datetime}</div>
        </div>
      </div>

      <div>
        <Button
          color={color}
          text={text}
          buttonFunction={() => archiveFunction(task.id)}
        />
        <span> </span>
        <Button
          color="red"
          text="Delete"
          buttonFunction={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
