import ResizableTextarea from "./ResizableTextarea";

const TaskHeader = ({ taskHeader, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <header className="border-b border-customGray">
      <ResizableTextarea
        className="h-full w-full resize-none bg-transparent p-2 text-2xl"
        placeholder="My Checklist"
        rows="1"
        name="title"
        value={taskHeader.title}
        onChange={handleChange}
      ></ResizableTextarea>

      <ResizableTextarea
        className="h-full w-full resize-none bg-transparent p-2 placeholder:italic"
        placeholder="Add any description..."
        rows="1"
        name="description"
        value={taskHeader.description}
        onChange={handleChange}
      ></ResizableTextarea>
    </header>
  );
};

export default TaskHeader;
