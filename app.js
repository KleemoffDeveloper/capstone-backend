// DEPENDENCIES
require("dotenv").config();
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send({ response: true });
});

// CONTROLLERS
const chat_handler = require("./controllers/chat-handler.js");
app.use(chat_handler);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
