import ToDoItem from "./ToDoItem.jsx";

export default function ToDoList({ data: { todoData } }) {

    if (todoData.length === 0) {
        return <h3>No tasks available. Please add a task to begin.</h3>;
    }

    return (
        <ul>
            <h2>To-Do List Overview</h2>
            {todoData.map((task) => {
                return <ToDoItem key={task.id} data={task} />;
            })}
        </ul>
    );
}
