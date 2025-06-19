import Header from "./components/Header.jsx";
import ToDoList from "./components/ToDoList.jsx";
import { useState } from "react";

function App() {
  const [todoData, setTodoData] = useState([]);

  function addTask(newTask) {
    setTodoData((prev) => [...prev, newTask]);
  }

  return (
    <>
      <Header data={{ addTask }} />
      <ToDoList data={{ todoData }} />
    </>
  );
}

export default App;
