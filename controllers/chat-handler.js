import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.API_KEY });

const chat_handler = express();
chat_handler.use(express.json());

chat_handler.post("/response", async (req, res) => {
  try {
    console.log(13,"text request.");
    const messages = req.body;
    // Send to OpenAI API
    const response = await openai.chat.completions.create({
      messages: messages,
      temperature: 1,
      model: "gpt-3.5-turbo",
    });
    if (response.error) res.status(500).send({ error: response.error });
    else res.send(response.choices[0].message);
  } catch (error) {
    console.error(error);
  }
  
});

export default chat_handler;
