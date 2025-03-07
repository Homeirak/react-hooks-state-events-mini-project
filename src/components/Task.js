// src/components/Task.js
import React from "react";

function Task({ text, category, onDelete }) {
  console.log(`Rendering Task: ${text} (${category})`);

  return (
    <div className="task" data-testid="task">
      <span className="task-text" data-testid="task-text">{text}</span>
      <span className="task-category" data-testid="task-category">{category}</span>
      <button className="delete" data-testid="delete-button" onClick={() => onDelete(text)}>
        X
      </button>
    </div>
  );
}

export default Task;