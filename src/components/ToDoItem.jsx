export default function ToDoItem({ data: { task } }) {
  function changeCompleted() {
    // This function would handle the change of completion status. For now, it does nothing
  }

  const formattedTime = task.timestamp.toLocaleString("en-GB");
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={changeCompleted}
      />
      <p>{formattedTime}</p>
      <input type="text" value={task.name} />

    </li>
  );
}
