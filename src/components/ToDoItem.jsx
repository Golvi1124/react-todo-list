import { useState } from "react"; // need State to check if input is readonly before editing

export default function ToDoItem({ data: { task, editTask, deleteTask } }) {
  const [isReadOnly, setIsReadOnly] = useState(true); // State to manage read-only status of the input
  const [updatedTaskName, setUpdatedTaskName] = useState(task.name); // State to manage the updated task name

  function changeCompleted() {
    editTask(task.id, { ...task, completed: !task.completed }); // Toggle the completed status of the task
  }

  const formattedTime = task.timestamp.toLocaleString("en-GB");
  function handleEdit() {
    if (!isReadOnly) {
      editTask(task.id, { ...task, name: updatedTaskName }); // Call editTask with the current task's ID and name
    }
    setIsReadOnly((prev) => !prev); // Set input back to read-only after editing
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={changeCompleted}
      />
      <p>{formattedTime}</p>
      <input
        type="text"
        value={updatedTaskName}
        readOnly={isReadOnly}
        onChange={(e) => setUpdatedTaskName(e.target.value)}
      />
      <button onClick={handleEdit}>{isReadOnly ? "Edit" : "Save"}</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}
