import Tasks from "./components/Tasks";
import TaskHeader from "./components/Header";
import TaskFooter from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  }, [tasks]);

  const handleToggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const handleAddTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        link: "",
        priority: "low",
        completed: false,
      },
    ]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== taskId));
  };

  const handleDulicateTask = (taskId) => {
    const taskToDuplicate = tasks.filter((task) => task.id === taskId);
    if (taskToDuplicate) {
      const duplicateTask = { ...taskToDuplicate, id: crypto.randomUUID() };
      setTasks((prevTask) => [...prevTask, duplicateTask]);
    }
  };

  const handleTaskChange = (taskId, updatedTask) => {
    setTasks((prevTask) => {
      return prevTask.map((task) => {
        if (task.id === taskId) {
          return { ...task, ...updatedTask };
        }
        return task;
      });
    });
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];

      setTasks(updatedTasks);
    }
  };
  const handleMoveDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index + 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index + 1],
      ];

      setTasks(updatedTasks);
    }
  };

  return (
    <div className="m-10 mx-auto w-3/4">
      <TaskHeader />
      <Tasks
        tasks={tasks}
        onUpdateTask={handleTaskChange}
        onMoveUp={handleMoveUp}
        onMoveDown={handleMoveDown}
        showCompleted={showCompleted}
        onDeleteTask={handleDeleteTask}
        onDuplicateTask={handleDulicateTask}
      />
      <TaskFooter
        onAddTask={handleAddTask}
        tasks={tasks}
        onToggleCompleted={handleToggleCompleted}
        showCompleted={showCompleted}
      />
    </div>
  );
}

export default App;
