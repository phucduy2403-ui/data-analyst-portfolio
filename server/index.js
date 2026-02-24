import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const result = await model.generateContent(message);
    const response = await result.response;

    res.json({
      text: response.text(),
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      text: "AI server error",
    });
  }
});

app.listen(5000, () => {
  console.log("✅ AI Server running at http://localhost:5000");
});