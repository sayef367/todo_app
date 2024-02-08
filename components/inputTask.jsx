
export default function inputTask() {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task..."
      />
      <select className="form-select">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className="btn btn-primary">Add Task</button>
    </div>
  );
};
