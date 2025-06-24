import { useState, useContext } from "react";
import { v4 as uuid } from "uuid"; // Importing uuid for unique IDs
import { AppContext } from "../App.jsx"; // Importing the context from App.jsx
import { ThemeContext } from "../ThemeContext.jsx";

export default function Header({
  data: { addTask, setSortOption, sortOption },
}) {
  const [cart] = useContext(AppContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const name = "Guest";
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
    setNewTaskName(""); // Clear the input field after adding the task
  }

  return (
    <div>
      <h1>{name}'s To Do List</h1>
      <h2>Times you have clicked Add to cart button: {cart}</h2>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
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
