import { useState } from "react";

import Tasks from "./Tasks";
import TaskHeader from "./TaskHeader";
import TaskFooter from "./TaskFooter";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="m-10 mx-auto w-3/4">
      <TaskHeader />
      <Tasks />

      <TaskFooter />
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   useEffect(() => {
//     const textarea = document.getElementById("textarea");
//     textarea.style.height = "auto";
//     textarea.style.height = `${textarea.scrollHeight}px`;
//   }, [text]);

//   return (
//     <div className="mx-auto w-5/6">
//       <textarea
//         id="textarea"
//         className=" w-full resize-none"
//         type="text"
//         value={text}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }

// export default App;
