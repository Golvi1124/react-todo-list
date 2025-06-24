import ToDoItem from "./ToDoItem.jsx";

// prop drilling = we don't use "delete, update" functions here, but we pass them down to ToDoItem
// so that ToDoItem can use them to delete or update a task
export default function ToDoList({
  data: { sortedData, editTask, deleteTask },
}) {
  if (sortedData.length === 0) {
    return <h3>No tasks available. Please add a task to begin.</h3>;
  }

  return (
    <ul>
      <h2>To-Do List Overview</h2>
      {sortedData.map((task) => {
        return <ToDoItem key={task.id} data={{ task, editTask, deleteTask }} />;
      })}
    </ul>
  );
}
