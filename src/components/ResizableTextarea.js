import React, { useEffect, useRef } from "react";

const ResizableTextarea = ({
  value,
  onChange,
  hideLink,
  hideDescription,
  showCompleted,
  ...rest
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    console.log(textareaRef.current);
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value, hideLink, hideDescription, showCompleted]);

  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default ResizableTextarea;
