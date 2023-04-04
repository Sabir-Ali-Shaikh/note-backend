import mongoose from "mongoose";
import express, { Router } from "express";

import { addNoteData, getNoteData, delNoteData } from "./modules/function.js";

const route = express.Router();
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello server is running");
});

app.get("/create", (req, res) => {
  res.send("This is Create Function");
});

app.get("/read", (req, res) => {
  //   res.send("This is read Function");
  getNoteData().then((doc) => {
    res.send(doc);
  });
});
app.listen(port, () => {
  console.log(`Server Created and listening on port ${port}`);
});

mongoose
  .connect(
    `mongodb+srv://sabir:1234@cluster0.wkoexdd.mongodb.net/noteapp?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Database  connected");
  })
  .catch((err) => {
    console.log(err);
  });

// const title = "book fare";
// const description = "this is test push";

// const res = await addNoteData(title, description);

// route.post("/create", addNoteData);
// route.get("/get", getNoteData);
// route.post("/delete", delNoteData);
