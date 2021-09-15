import Button from "./Button";
import Checkbox from "./Checkbox";
import { Draggable } from "react-beautiful-dnd";

const Task = ({
  archiveFunction,
  color,
  index,
  onCheck,
  onDelete,
  task,
  text,
}) => {
  return (
    <Draggable key={task.id} draggableId={String(task.id)} index={index}>
      {(provided) => (
        <div
          className="task"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
      )}
    </Draggable>
  );
};

export default Task;
