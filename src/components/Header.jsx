import { useState } from "react";
import { v4 as uuid } from "uuid"; // Importing uuid for unique IDs

export default function Header({
  data: { addTask, setSortOption, sortOption },
}) {
  const [newTaskName, setNewTaskName] = useState("");

  function handleAddTask(e) {
    e.preventDefault(); //  prevent form-submission from reloading the page

    const newTask = {
      name: newTaskName,
      timestamp: new Date(), // Set the current date and time as the timestamp
      completed: false,
      id: uuid(),
    };

    addTask(newTask); // Call the addTask function passed from App.jsx
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" onChange={(e) => setNewTaskName(e.target.value)} />
        <button type="submit">Submit Task</button>
      </form>
      <select
        value={sortOption.sortBy}
        onChange={(e) =>
          setSortOption((prev) => ({ ...prev, sortBy: e.target.value }))
        }
      >
        {/*  <option value="">Filter Tasks</option> ...need to check if can add this and not mess up code */}
        <option value="newest">Newest to Oldest</option>
        <option value="oldest">Oldest to Newest</option>
        <option value="a-to-z">A to Z</option>
        <option value="z-to-a">Z to A</option>
      </select>
      <label htmlFor="hideorshow">
        Hide completed tasks:
        <input
          type="checkbox"
          id="hideorshow"
          checked={sortOption.hideCompleted}
          onChange={(e) =>
            setSortOption((prev) => ({
              ...prev,
              hideCompleted: e.target.checked,
            }))
          }
        />
      </label>
    </div>
  );
}
