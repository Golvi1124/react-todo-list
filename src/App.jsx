import Header from "./components/Header.jsx";
import ToDoList from "./components/ToDoList.jsx";
import { useState } from "react";

function App() {
  const [todoData, setTodoData] = useState([]);

  function addTask(newTask) {
    setTodoData((prev) => [...prev, newTask]);
  }

  function deleteTask(id) { // gets all data, deletes one with matching id in parameter
    setTodoData((prev) => prev.filter((task) => task.id !== id));
  }

  function editTask(id, updatedTask) { // gets all data, edits one with matching id in parameter
    setTodoData((prev) =>
      prev.map((task) => (task.id === id ? { ...task, updatedTask } : task))
    );
  }

  return (
    <>
      <Header data={{ addTask }} />
      <ToDoList data={{ todoData, editTask, deleteTask }} />
    </>
  );
}

export default App;
