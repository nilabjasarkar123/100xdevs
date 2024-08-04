import { useState } from "react";
import { CreateTodo } from "./component/CreateTodo";
import { Todos } from "./component/Todos";
// import { set } from "mongoose";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
