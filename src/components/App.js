// src/components/App.js
import React, { useState } from "react";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter";

import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  console.log("Filtering tasks for category:", selectedCategory);

  
  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  
  const handleTaskSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  
  const handleTaskDelete = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  const handleCategorySelect = (category) => {
    console.log("Category clicked:", category);
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleTaskDelete} />
    </div>
  );
}

export default App;