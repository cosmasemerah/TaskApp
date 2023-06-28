import { useState } from "react";
import TaskMenu from "./TaskMenu";

const Task = ({
  title,
  description,
  link,
  onUpdateTask,
  completed,
  priority,
  onMoveUp,
  onMoveDown,
  isOpen,
  onOpenMenu,
  onCloseMenu,
  showCompleted,
  onDeleteTask,
  onDuplicateTask,
}) => {
  const [hideDescription, setHideDescription] = useState(true);
  const [hideLink, setHideLink] = useState(true);

  const handleHideDescription = () => {
    setHideDescription((prevHideDescription) => !prevHideDescription);
  };
  const handleHideLink = () => {
    setHideLink((prevHideLink) => !prevHideLink);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const updatedValue = name === "completed" ? checked : value;
    onUpdateTask({ [name]: updatedValue });
  };

  const priorityStyle =
    priority === "low"
      ? "border-gray-200"
      : priority === "medium"
      ? "border-blue-500"
      : priority === "high"
      ? "border-yellow-500"
      : priority === "urgent"
      ? "border-red-500"
      : "";

  const isCompleted = completed && showCompleted ? "hidden" : "flex";

  return (
    <li
      className={`${isCompleted} items-center gap-4 border-l-8 ${priorityStyle} p-2 shadow-lg`}
    >
      <input
        name="completed"
        type="checkbox"
        checked={completed}
        onChange={handleChange}
        className="ml-2 h-6 w-6 cursor-pointer rounded"
      />

      <div className="w-full">
        <textarea
          className="h-full w-full resize-none bg-transparent text-lg"
          name="title"
          placeholder="Title..."
          value={title}
          rows="1"
          onChange={handleChange}
        ></textarea>
        <textarea
          className={`${
            hideDescription ? "hidden" : ""
          } h-full w-full  resize-none bg-transparent placeholder:italic`}
          name="description"
          value={description}
          placeholder="Description..."
          rows="1"
          onChange={handleChange}
        ></textarea>
        <div className={`${hideLink ? "hidden" : "flex"} items-center gap-1`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>

          <textarea
            className={` h-full w-full  resize-none bg-transparent placeholder:italic`}
            name="link"
            value={link}
            rows="1"
            placeholder="Paste any link..."
            type="url"
            onChange={handleChange}
          />
        </div>
      </div>

      <TaskMenu
        isOpen={isOpen}
        onOpen={onOpenMenu}
        onClose={onCloseMenu}
        onUpdateTask={onUpdateTask}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
        onHideDescription={handleHideDescription}
        onHideLink={handleHideLink}
        onDeleteTask={onDeleteTask}
        hideDescription={hideDescription}
        hideLink={hideLink}
        onDuplicateTask={onDuplicateTask}
      />
    </li>
  );
};

export default Task;
