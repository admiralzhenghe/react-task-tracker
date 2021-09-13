const Checkbox = ({ task, onCheck }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={task.complete}
        onChange={() => onCheck(task.id)}
      />
      {/* <span className="checkmark"></span> */}
    </>
  );
};

export default Checkbox;
