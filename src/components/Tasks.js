import Task from "./Task";

// Show all unarchived tasks
const Tasks = ({ tasks, showArchived, archiveFunction, onCheck, onDelete }) => {
  return (
    <>
      {tasks.map((task) => {
        if (task.archived === showArchived) {
          return (
            <Task
              key={task.id}
              task={task}
              archiveFunction={archiveFunction}
              color={showArchived ? "grey" : "green"}
              text={showArchived ? "Unarchive" : "Archive"}
              onCheck={onCheck}
              onDelete={onDelete}
            />
          );
        }
      })}
    </>
  );
};

export default Tasks;
