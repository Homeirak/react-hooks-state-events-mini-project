// src/components/TaskList.js
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  console.log("Rendering TaskList with tasks:", tasks); // Debugging log

  return (
    <div className="tasks">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            category={task.category}
            onDelete={onDeleteTask}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default TaskList;