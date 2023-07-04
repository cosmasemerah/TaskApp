import React, { useState } from "react";

import TaskItem from "./TaskItem";

const TaskList = ({
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

  const handleCloseMenu = () => {
    setOpenMenuTaskId(null);
  };

  const handleTaskChange = (taskId, updatedTask) => {
    onUpdateTask(taskId, updatedTask);
  };

  const allCompleted = tasks.every((task) => task.completed);
  return (
    <>
      {tasks.length === 0 ? (
        <p className="p-10 text-center text-xl">ADD A NEW TASK</p>
      ) : (
        allCompleted && (
          <p className="p-10 text-center text-xl">All tasks are completed</p>
        )
      )}

      {tasks.length > 0 && (
        <ul
          className={`${allCompleted ? "hidden" : "flex flex-col"} gap-2 py-4`}
        >
          {tasks.map((task, index) => [
            <TaskItem
              key={task.id}
              task={task}
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
            />,
          ])}
        </ul>
      )}
    </>
  );
};

export default TaskList;
