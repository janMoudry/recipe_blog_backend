const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const mongoURL = process.env.MONGO_CONNECT;

mongoose
  .connect(mongoURL)
  .then(() => {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log("enjoy hacking");
      console.log(`server running on ${port}`);
    });
  })
  .catch((err: Error) => console.log(err));
app.use(cors({ origin: true, credentials: true }));

app.options(
  "*",
  cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 }),
);

const test: () => Promise<void> = require("./api/test");
const saveRecipe: () => Promise<void> = require("./api/saveRecipe");
const getRecipesByCatogory: () => Promise<void> = require("./api/getRecipesByCatogory");

app.get("/", test);
app.get("/saveRecipe", saveRecipe);
app.get("/getRecipesByCategory", getRecipesByCatogory);
