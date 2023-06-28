const TaskMenu = ({
  onUpdateTask,
  onMoveUp,
  onMoveDown,
  isOpen,
  onOpen,
  onClose,
  onHideDescription,
  onHideLink,
  onDeleteTask,
  hideDescription,
  hideLink,
  onDuplicateTask,
}) => {
  const handleSetPriority = (newPriority) => {
    onUpdateTask({ priority: newPriority });
  };

  const deleteTask = () => {
    onDeleteTask();
  };

  const duplicateTask = (taskId) => {
    onDuplicateTask(taskId);
  };

  return (
    <div className="relative flex w-min items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7 cursor-pointer rounded-md p-1 hover:bg-customGray/50"
        onClick={onMoveUp}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7 cursor-pointer rounded-md p-1 hover:bg-customGray/50"
        onClick={onMoveDown}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7 cursor-pointer rounded-md p-1 hover:bg-customGray/50"
        onClick={onOpen}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {isOpen && (
        <div className="absolute right-full top-0 flex h-auto w-60 flex-col divide-y bg-customGray text-sm font-semibold text-white">
          <div className="flex items-center justify-between p-2">
            <p>Task: Go shopping</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 rounded-md p-1 hover:bg-customBlack/50"
              onClick={onClose}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="space-y-3 p-2">
            <p>Priority</p>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 rounded-md p-1 text-red-500 hover:bg-customBlack/50"
                onClick={() => handleSetPriority("urgent")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 rounded-md p-1 text-yellow-500 hover:bg-customBlack/50"
                onClick={() => handleSetPriority("high")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 rounded-md p-1 text-blue-500 hover:bg-customBlack/50"
                onClick={() => handleSetPriority("medium")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 rounded-md p-1 text-gray-200 hover:bg-customBlack/50"
                onClick={() => handleSetPriority("low")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
            </div>
          </div>
          <div className="py-2">
            <p className="p-2 hover:bg-customBlack/50" onClick={onMoveUp}>
              Move up
            </p>
            <p className="p-2 hover:bg-customBlack/50" onClick={onMoveDown}>
              Move down
            </p>
          </div>
          <div className="py-2">
            <p
              className="p-2  hover:bg-customBlack/50"
              onClick={onHideDescription}
            >
              {hideDescription ? "Show description" : "Hide description"}
            </p>
            <p className="p-2  hover:bg-customBlack/50" onClick={onHideLink}>
              {hideLink ? "Show link" : "Hide link"}
            </p>
            <p
              className="p-2  hover:bg-customBlack/50"
              onClick={(taskId) => duplicateTask(taskId)}
            >
              Duplicate
            </p>
          </div>
          <p
            className="p-2 text-red-200 hover:bg-customBlack/50"
            onClick={deleteTask}
          >
            Delete task
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskMenu;
