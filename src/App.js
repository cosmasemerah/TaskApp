import TaskList from "./components/TaskList";
import TaskHeader from "./components/Header";
import TaskFooter from "./components/Footer";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [taskHeader, setTaskHeader] = useState(() => {
    const header = localStorage.getItem("taskHeader");
    if (header == null) return {};

    return JSON.parse(header);
  });

  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("tasks");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    //Store taskHeader to localStorage
    localStorage.setItem("taskHeader", JSON.stringify(taskHeader));
  }, [taskHeader]);

  useEffect(() => {
    //Store task to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleToggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const handleAddTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: uuidv4(),
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
    const taskToDuplicate = tasks.find((task) => task.id === taskId);
    if (taskToDuplicate) {
      const duplicateTask = { ...taskToDuplicate, id: uuidv4() };
      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      const updatedTasks = [...tasks];
      updatedTasks.splice(taskIndex + 1, 0, duplicateTask);
      setTasks(updatedTasks);
    }
  };

  const handleTaskChange = (taskId, updatedTask) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
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

  function handleHeaderChange(e) {
    const { name, value } = e.target;

    setTaskHeader((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  return (
    <div className="container mx-auto mb-0 flex min-h-screen max-w-5xl flex-col">
      <div className="flex-grow p-10 ">
        <TaskHeader taskHeader={taskHeader} onChange={handleHeaderChange} />
        <TaskList
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

      <div className="p-4 text-center text-sm text-gray-400">
        &copy; 2023 Cosmas Emerah.
      </div>
    </div>

    // <div className="flex flex-col bg-customBlack text-customLight">
    //   <div className="flex-grow">
    //     <TaskHeader taskHeader={taskHeader} onChange={handleHeaderChange} />
    //     <TaskList
    //       tasks={tasks}
    //       onUpdateTask={handleTaskChange}
    //       onMoveUp={handleMoveUp}
    //       onMoveDown={handleMoveDown}
    //       showCompleted={showCompleted}
    //       onDeleteTask={handleDeleteTask}
    //       onDuplicateTask={handleDulicateTask}
    //     />
    //     <TaskFooter
    //       onAddTask={handleAddTask}
    //       tasks={tasks}
    //       onToggleCompleted={handleToggleCompleted}
    //       showCompleted={showCompleted}
    //     />
    //   </div>
    //   <div className="p-4 text-sm text-gray-400">
    //     &copy; 2023 Cosmas Emerah.
    //   </div>
    // </div>
  );
}

export default App;
