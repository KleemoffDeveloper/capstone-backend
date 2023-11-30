const express = require("express");
const chat_handler = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: process.env.API_KEY });

chat_handler.use(express.json());

chat_handler.get("/stream", async (req, res) => {
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
      res.write(chunk);
    }
    res.end();
  } catch (error) {
    res.status(500).write(JSON.stringify({ error: error.message }));
    res.end();
  }
});

module.exports = chat_handler;
