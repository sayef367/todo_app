'use client'
import InputTask from "@/components/inputTask";
import ViewTask from "@/components/viewTask";
import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [completed, setCompleted] = useState('Completed');
  const [priority, setPriority] = useState('low');

  // add a todo
  const addTask = () => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed,
      priority
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  // Delete a todo
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Update a todo
  const updateTask = (data) => {
    const index = tasks.findIndex(todo => todo.id === data.id);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...data };
      setTasks([...tasks]);
    };
  };

  return (
    <main className="container text-center">
      <h1 className="fw-bold mt-4 mb-4">Wellcome to Todo App</h1>
        <InputTask 
          taskText={taskText}
          setTaskText={setTaskText}
          priority={priority}
          setPriority={setPriority}
          completed={completed}
          setCompleted={setCompleted}
          addTask={addTask}
        />
      <div className="row">
        {/* <h2 className="fw-bold mt-4 mb-4">All Tasks List</h2> */}
        <h4 className="col-lg-6 col-sm-12 text-lg-end text-center mb-4">
          Total Tasks: {tasks.length}
        </h4>
        <h4 className="col-lg-6 col-sm-12 text-lg-start text-center mb-4">
          Completed Tasks: {tasks.filter((task) => task.completed === 'Completed').length}
        </h4>
        {tasks.length === 0 ? <h3 className="mt-4">Empty Todos</h3> : ''}
        <ViewTask 
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </main>
  );
};
