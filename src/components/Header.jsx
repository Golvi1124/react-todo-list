import { useState } from "react";
import { v4 as uuid } from "uuid"; // Importing uuid for unique IDs

export default function Header({ data: { addTask } }) {
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
        <input type="text" onChange={e => setNewTaskName(e.target.value)} />
        <button type="submit">Submit Task</button>
      </form>
    </div>
  );
}
