import React from "react";

const TaskHeader = () => {
  return (
    <header className="border-b border-customGray">
      <textarea
        className="h-full w-full resize-y bg-transparent p-2 text-xl"
        placeholder="My Checklist"
        rows="1"
      ></textarea>
      <textarea
        className="h-full w-full resize-y bg-transparent p-2 placeholder:italic"
        placeholder="Add any description..."
        rows="1"
      ></textarea>
    </header>
  );
};

export default TaskHeader;
