import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.API_KEY });

const chat_handler = express.Router();
chat_handler.use(express.json());

chat_handler.post("/stream", async (req, res) => {
  try {
    const messages = req.body;

    const temperature = 0.6;
    const model = "gpt-3.5-turbo-16k";

    // Send to OpenAI API
    const response = await openai.chat.completions.create({
      messages: messages,
      temperature: temperature,
      model: model,
      stream: true,
    });

    // Handle OpenAI stream
    for await (const chunk of response) {
      res.write(JSON.stringify(chunk));
    }
    res.end();
  } catch (error) {
    res.status(500).write(JSON.stringify({ error: error.message }));
    res.end();
  }
});

export default chat_handler;
