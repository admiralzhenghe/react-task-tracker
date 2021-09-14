const Checkbox = ({ task, onCheck }) => {
  return (
    <div className="task-complete">
      <input
        checked={task.complete}
        id="checkbox"
        onChange={() => onCheck(task.id)}
        title={task.complete ? "Mark incomplete" : "Mark complete"}
        type="checkbox"
      />
      <label htmlFor="checkbox"></label>
    </div>
  );
};

export default Checkbox;
