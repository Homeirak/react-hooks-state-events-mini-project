// src/components/NewTaskForm.js
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      onTaskFormSubmit({ text, category });
      setText("");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        aria-label="Details"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select aria-label="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories
          .filter((cat) => cat !== "All")
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;