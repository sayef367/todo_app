'use client'
import { useEffect, useState } from "react";

export default function EditTask({data, updateTask}) {
  const [todo, setTodo] = useState(null);
  
  useEffect(() => {
    setTodo(data);
  },[data]);

  const handelSubmit = () => {
    updateTask(todo);
  };

  return (
    <div className="modal fade" id="editModal" aria-labelledby="editModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editModalLabel">Edit todo</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter task..."
                  value={todo == null ? 'empty' : todo.text}
                  onChange={(e) => setTodo({...todo, text: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <select 
                  className="form-select"
                  value={todo == null ? 'low' : todo.priority} 
                  onChange={(e) => setTodo({...todo, priority: e.target.value})}
                  >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button 
              className="btn btn-primary"
              onClick={handelSubmit}
              >
              Update Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
