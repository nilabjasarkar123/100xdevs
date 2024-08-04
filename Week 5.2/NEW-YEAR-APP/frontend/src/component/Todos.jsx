import { useState } from "react";
/**
 todos  = [
 {
    title : "gym",
    description : "go to gym",
 }
 ]
 */
export function Todos({ todos }) {
  const [localTodos, setLocalTodos] = useState(todos);
  const handleMarkAsCompleted = async (todoId) => {
    // Send request to mark todo as completed
    const response = await fetch(
      `http://localhost:3000/todos/${todoId}/completed`,
      {
        method: "PUT",
      }
    );

    if (response.ok) {
      // Update local state to mark todo as completed
      setLocalTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === todoId ? { ...todo, completed: true } : todo
        )
      );
    } else {
      console.error("Failed to mark todo as completed");
    }
  };
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <button onClick={() => handleMarkAsCompleted(todo._id)}>
              {todo.completed == true ? "completed" : "mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
