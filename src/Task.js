import React from "react";
import TaskMenu from "./TaskMenu";

const Task = () => {
  return (
    <li>
      <form className="flex items-center gap-4 border-l-8 border-yellow-500 p-2 shadow-lg">
        <label id="checkbox" htmlFor="checkbox">
          <input
            type="checkbox"
            className="ml-2 h-6 w-6 cursor-pointer rounded"
          />
        </label>

        <div className="w-full">
          <textarea
            className="h-full w-full resize-y bg-transparent text-lg"
            placeholder="Title..."
            rows="1"
          ></textarea>
          <textarea
            className="h-full w-full resize-y bg-transparent  placeholder:italic"
            placeholder="Description..."
            rows="1"
          ></textarea>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>

            <input
              className="h-full w-full resize-y bg-transparent  placeholder:italic"
              placeholder="Paste any link..."
              type="url"
            />
          </div>
        </div>
        <TaskMenu />
      </form>
    </li>
  );
};

export default Task;
