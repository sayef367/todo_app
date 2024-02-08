
export default function inputTask(props) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task..."
        value={props.taskText}
        onChange={(e) => props.setTaskText(e.target.value)}
      />
      <select 
        className="form-select"
        value={props.priority} 
        onChange={(e) => props.setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button 
        className="btn btn-primary"
        onClick={props.addTask}>
        Add Task
      </button>
    </div>
  );
};
