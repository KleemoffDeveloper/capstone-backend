// DEPENDENCIES
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());

// CONTROLLERS
import chat_handler from "./controllers/chat-handler.js";
import image_handler from "./controllers/image-handler.js";

app.use(chat_handler);
app.use(image_handler);

app.get("/", (req, res) => {
  res.send({ response: true });
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
export default app;
