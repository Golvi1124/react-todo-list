import Header from "./components/Header.jsx";
import ToDoList from "./components/ToDoList.jsx";
import { useState, useEffect } from "react";

function App() {
  const [todoData, setTodoData] = useState(() => {
    // call back and return will be initial state in UseState
    const savedData = localStorage.getItem("todoData");
    return savedData
      ? JSON.parse(savedData).map((task) => ({
          ...task,
          timestamp: new Date(task.timestamp), // Convert timestamp back to Date object
        }))
      : [];
  });

  const [sortOption, setSortOption] = useState(() => {
    const savedSort = localStorage.getItem("sortOption");
    return (
      JSON.parse(savedSort) || {
        sortBy: "newest", // Default sorting option
        hideCompleted: false, // Default to showing completed tasks
      }
    );
  }); // State to manage sorting option

  //useEffect will run every time the component mounts or updates and save data to local storage
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
    localStorage.setItem("sortOption", JSON.stringify(sortOption));
  }, [todoData, sortOption]);

  function addTask(newTask) {
    setTodoData((prev) => [...prev, newTask]);
  }

  function deleteTask(id) {
    // gets all data, deletes one with matching id in parameter
    setTodoData((prev) => prev.filter((task) => task.id !== id));
  }

  function editTask(id, updatedTask) {
    // gets all data, edits one with matching id in parameter
    setTodoData((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  }
  // Sorting logic based on the selected sort option
  const sortedData = [...todoData]
    .filter((task) => !task.completed || !sortOption.hideCompleted)
    .sort((a, b) => {
      switch (sortOption.sortBy) {
        case "a-to-z":
          return a.name.localeCompare(b.name); // Checking that a comes before b alphabetically
        case "z-to-a":
          return b.name.localeCompare(a.name);
        case "oldest":
          return a.timestamp - b.timestamp;
        case "newest":
          return b.timestamp - a.timestamp;
      }
    });

  return (
    <>
      <Header data={{ addTask, sortOption, setSortOption }} />
      <ToDoList data={{ sortedData, editTask, deleteTask }} />
    </>
  );
}

export default App;
