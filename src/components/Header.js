import React, { useEffect, useState } from "react";

const TaskHeader = () => {
  const [content, setContent] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setContent((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  useEffect(() => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  }, [content]);

  return (
    <header className="border-b border-customGray">
      <textarea
        className="h-full w-full resize-none bg-transparent p-2 text-2xl"
        placeholder="My Checklist"
        rows="1"
        name="title"
        value={content.title}
        onChange={handleChange}
      ></textarea>
      <textarea
        className="h-full w-full resize-none bg-transparent p-2 placeholder:italic"
        placeholder="Add any description..."
        rows="1"
        name="description"
        value={content.description}
        onChange={handleChange}
      ></textarea>
    </header>
  );
};

export default TaskHeader;
