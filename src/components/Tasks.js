import React, { useState } from "react";

import Task from "./Task";

const Tasks = ({
  tasks,
  onUpdateTask,
  onMoveUp,
  onMoveDown,
  showCompleted,
  onDeleteTask,
  onDuplicateTask,
}) => {
  const [openMenuTaskId, setOpenMenuTaskId] = useState(null);

  const handleOpenMenu = (taskId) => {
    setOpenMenuTaskId(taskId);
  };

  const handleCloseMenu = (taskId) => {
    setOpenMenuTaskId(null);
  };

  const handleTaskChange = (taskId, updatedTask) => {
    onUpdateTask(taskId, updatedTask);
  };

  return (
    <>
      {tasks.length === 0 ? (
        <p className="p-10 text-center text-xl">ADD A NEW TASK</p>
      ) : (
        tasks.every((task) => task.completed) && (
          <p className="p-10 text-center text-xl">All tasks are completed</p>
        )
      )}

      {tasks.length > 0 && (
        <ul className="flex flex-col gap-2 py-4">
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              title={task.title}
              description={task.description}
              link={task.link}
              completed={task.completed}
              priority={task.priority}
              onUpdateTask={(updatedTask) =>
                handleTaskChange(task.id, updatedTask)
              }
              onMoveUp={() => onMoveUp(index)}
              onMoveDown={() => onMoveDown(index)}
              isOpen={openMenuTaskId === task.id}
              onOpenMenu={() => handleOpenMenu(task.id)}
              onCloseMenu={handleCloseMenu}
              showCompleted={showCompleted}
              onDeleteTask={() => onDeleteTask(task.id)}
              onDuplicateTask={() => onDuplicateTask(task.id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Tasks;
