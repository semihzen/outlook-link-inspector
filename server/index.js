require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/analyze", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required." });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    You are an AI security assistant. Analyze the following website and tell me if it is trustworthy, if it might be phishing
     and if it has an official license or security certificate.

       Website: ${url}

     Return your answer in a short and clear summary, no more than 5 lines. Do not add explanations or steps.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    res.json({ analysis: text.trim() });

  } catch (err) {
    console.error(" Gemini API Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Gemini analysis failed." });
  }
});

app.listen(PORT, () => {
  console.log(` Gemini AI Server running at http://localhost:${PORT}`);
});