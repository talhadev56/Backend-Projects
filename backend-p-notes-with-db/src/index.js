const express = require("express");
const app = express();
const { notesModel } = require("../db/db");

app.use(express.json())
app.get("/", (req, res) => {
  res.send("hello g");
});

app.post("/create", async (req, res) => {
  const data = req.body;
  const createdNote = await notesModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({
    message: "notes created succesfully",
  });
});

app.get("/notes", async (req, res) => {
  const feachedNotes = await notesModel.find();

  res.status(200).json({
    message: "notes feached succesfully",
    feachedNotes: feachedNotes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  const createdUser = await notesModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "notes deleted",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id
  const title = req.body.title
  const description = req.body.description

  const createdUser = await notesModel.findOneAndUpdate(
    { _id: id },
    { description: description,title:title },
    { new: true }
  );

  res.status(200).json({
    message: "notes updated",
  });
});

module.exports = app;
