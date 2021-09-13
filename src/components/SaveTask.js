import { useState } from "react";

const SaveTask = ({ onSave }) => {
  const [text, setText] = useState("");
  const [datetime, setDatetime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onSave({
      id: Date.now(),
      text: text,
      datetime: datetime,
      complete: false,
    });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <input
          type="datetime-local"
          placeholder="Add Date & Time"
          value={datetime}
          onChange={(e) => {
            setDatetime(e.target.value);
          }}
        />
      </div>
      <div className="submit-container">
        <input type="submit" value="Save" className="btn save-btn"></input>
      </div>
    </form>
  );
};

export default SaveTask;
