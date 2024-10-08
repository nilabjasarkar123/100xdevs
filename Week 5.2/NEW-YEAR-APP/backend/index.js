const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you send wrong input",
    });
    return;
  }

  // put in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({}); // Correct model name and uncomment this line
  res.json({
    todos: todos, // Send the actual todos
  });
});
app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you send wrong input",
    });
    return;
  }

  //update todo
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "todo marked as completed",
  });
});
app.listen(port);
