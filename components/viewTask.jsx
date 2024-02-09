import { useState } from "react";
import EditTask from "./editTask";

export default function viewTask({tasks, taskCompletion, deleteTask, updateTask}) {
  const [update, setUpdate] = useState();
  const priorityColor = (priority) => {
    if(priority == 'low') return 'bg-secondary p-2 text-dark bg-opacity-10';
    if(priority == 'medium') return 'bg-secondary p-2 text-dark bg-opacity-25';
    if(priority == 'high') return 'bg-secondary p-2 text-dark bg-opacity-50';
  };

  return (
    <>
      {tasks.map((task) => (
        <div 
          className="col-lg-4 col-md-6 col-sm-12 mb-4"
          key={task.id}
        >
          <div className={`card p-3 ${priorityColor(task.priority)}`}>
            <span className="mb-2">{task.text}</span>
            <div className="mt-2">
              <button 
                className={`btn 
                  ${task.completed ? 'btn-outline-warning' : 'btn-outline-success'}
                  btn-sm me-2
                `}
                onClick={() => taskCompletion(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button 
                className="btn btn-outline-dark btn-sm me-2"
                data-bs-toggle="modal" 
                data-bs-target="#editModal"
                onClick={() => setUpdate(task)}
                >
                Edit
              </button>
              <button 
                className="btn btn-outline-danger btn-sm"
                onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <EditTask 
        data={update}
        updateTask={updateTask}
      />
    </>
  );
};
