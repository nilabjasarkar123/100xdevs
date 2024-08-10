/**
 * 1. Create a simple todo app that renders 3 todos
 * 2. create a todo component that accepts title description as input
 * 3. Initialize a state array that has 3 todos
 * 4. Itearate over the array to render all the todos
 * 5. A button on the top level app component to add new todo
 */

import { useState } from "react";

function App_keys() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "first title",
      description: "first desc",
    },
    {
      id: 2,
      title: "second title",
      description: "second desc",
    },
    {
      id: 3,
      title: "third title",
      description: "third desc",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: 4,
        title: "forth title",
        description: "forth desc",
      },
    ]);
    //--------------------- SAME THING CAN BE DONE USING BELLOW --------------------
    // const newTods = [];
    // for (let i = 0; i < todos.length; i++) {
    //   newTods.push(todos[i]);
    // }
    // newTods.push({
    //   id: 4,
    //   title: Math.random(),
    //   description: Math.random(),
    // });
    // setTodos(newTods);
  }
  return (
    <div>
      <button onClick={addTodo}> Add a Todo</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        ></Todo>
      ))}
    </div>
  );
}
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}
export default App_keys;
