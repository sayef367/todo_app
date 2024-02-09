'use client'

export default function inputTask(props) {
  return (
    <div className="input-group mb-4">
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
      <select 
        className="form-select"
        value={props.completed} 
        onChange={(e) => props.setCompleted(e.target.value)}
        >
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      <button 
        className="btn btn-primary"
        onClick={props.addTask}>
        Add Task
      </button>
    </div>
  );
};
