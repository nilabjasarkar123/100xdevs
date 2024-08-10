import { useState,  } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { memo } from "react";

function App() {
  const [title, setTitle] = useState("my name is Nilabja");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  return (
    <>
      <button onClick={() => updateTitle()}>
        click me to change the title
      </button>
      <Header title={title}></Header>
      <Header title="Ramen"></Header>
      <Header title="Ramen1"></Header>
    </>
  );
}


const Header = memo(function ({ title }) {
  return <div>{title}</div>;
})

export default App;

/************************Rerenduring stops if we change the header*************************************** */
/*
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title="Ramen"></Header>
      <Header title="Ramen1"></Header>
    </>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("my name is Nilabja");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  } 
  return (
    <>
      <button onClick={() => updateTitle()}>
        click me to change the title
      </button>
      <Header title={title}></Header>
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
*/
