// DEPENDENCIES
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
import express from "express";

// CONFIGURATION
const app = express();

// MIDDLEWARE
// app.use(
//   cors({
//     origin: "https://pathfinder-game.netlify.app/",
//   })
// );

app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
  res.send({ response: true });
});

// CONTROLLERS
import chat_handler from "./controllers/chat-handler.js";
app.use(chat_handler);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
export default app;
