import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        // onChange={(e) => setTitle(e.target.value)}
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            console.log(json);
            alert("todo added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
