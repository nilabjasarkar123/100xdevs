import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const buttons = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "4" },
  ];

  const [openTodo, setOpenTodo] = useState(1);
  const handleClick = (buttonId) => {
    //alert(`Button ${buttonId} clicked`);
    setOpenTodo(buttonId);
  };
  return (
    <div>
      {buttons.map((button) => (
        <button key={button.id} onClick={() => handleClick(button.id)}>
          {button.label}
        </button>
      ))}
      {/* <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick(4)}>4</button> */}
      <Todo id={openTodo}></Todo>
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(function (response) {
        setTodo(response.data.todo);
      });
  }, [id]);

  return (
    <div>
      ID: {id}
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;
/************************************************** 
function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then(function (response) {
        setTodo(response.data.todos);
      });
  }, []);


  return (
    <>
      
      {todo.map((todo) => (
        <Todo title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      {description}
    </div>
  );
}
*/
