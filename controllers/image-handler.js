import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.API_KEY });

const image_handler = express();
image_handler.use(express.json());

image_handler.post("/image", async (req, res) => {
  let m_prompt = req.body.content;

  if (m_prompt.trim() === "" || !m_prompt) {
    res.send({
      content:
        "https://github.com/KleemoffDeveloper/pathfinder-experimental-public/blob/main/src/assets/PathFinder-small.png?raw=true",
    });
  }

  const imageResponse = await openai.images.generate({
    model: "dall-e-3",
    prompt: m_prompt,
    n: 1,
    size: "1024x1024",
  });

  if (response.error) {
    res.status(500).send({ error: response.error });
  } else {
    res.send({ content: imageResponse.data[0].url });
  }
});

export default image_handler;
