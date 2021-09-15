import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

// Show all unarchived tasks
const Tasks = ({ tasks, archiveFunction, showArchived, onCheck, onDelete }) => {
  return (
    <Droppable droppableId="tasksList">
      {(provided) => (
        <div
          className="tasks"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {tasks.map((task, index) => {
            if (task.archived === showArchived) {
              return (
                <Task
                  archiveFunction={archiveFunction}
                  color={showArchived ? "grey" : "green"}
                  index={index}
                  key={task.id}
                  onCheck={onCheck}
                  onDelete={onDelete}
                  task={task}
                  text={showArchived ? "Unarchive" : "Archive"}
                />
              );
            }
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Tasks;
