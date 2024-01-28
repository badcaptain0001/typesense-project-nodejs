const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://rishabh:Evlvrjg1@cluster0.owgjy.mongodb.net/movieDb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:");
});

db.on("error", (err) => {
  console.error("connection error:", err);
});
