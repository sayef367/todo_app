'use client'
import InputTask from "@/components/inputTask";
import ViewTask from "@/components/viewTask";
import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('low');

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      priority: priority
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const taskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <main className="container text-center">
      <h1 className="fw-bold mt-4 mb-4">Wellcome to Todo App</h1>
        <InputTask 
          taskText={taskText}
          setTaskText={setTaskText}
          priority={priority}
          setPriority={setPriority}
          addTask={addTask}
          />
      <div className="row">
        <h2 className="fw-bold mt-4 mb-4">All Tasks List</h2>
        <h4 className="col-lg-6 col-sm-12 text-end mb-4">
          Total Tasks: {tasks.length}
        </h4>
        <h4 className="col-lg-6 col-sm-12 text-start mb-4">
          Completed Tasks: {tasks.filter((task) => task.completed).length}
        </h4>
        <ViewTask 
          tasks={tasks}
          taskCompletion={taskCompletion}
          deleteTask={deleteTask}
        />
      </div>
    </main>
  );
};
