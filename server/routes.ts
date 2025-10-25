import type { Express } from "express";
import { createServer, type Server } from "http";
import { SYSTEM_PROMPT } from "./prompt.js";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/ask", async (req, res) => {
    try {
      const { question } = req.body;

      // Log the API key (masked) to confirm what’s loaded
      const key = process.env.OPENROUTER_API_KEY_2;
      console.log(
        "OPENROUTER_API_KEY loaded:",
        key ? `${key.slice(0, 10)}...${key.slice(-6)}` : "(not set)"
      );

      if (!question) {
        return res.status(400).json({ message: "Missing 'question' in request body" });
      }

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY_2}`,
          "Content-Type": "application/json",
          "X-Title": "NW Portfolio Website",
        },
        body: JSON.stringify({
          model: "mistralai/mistral-small-3.2-24b-instruct:free",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: question },
          ],
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("OpenRouter API error:", errText);
        return res.status(response.status).json({ message: "Error from OpenRouter API", details: errText });
      }

      const data = await response.json();
      res.json({
        answer: data.choices?.[0]?.message?.content || "No response received.",
      });
    } catch (error) {
      console.error("Internal error in /api/ask:", error);
      res.status(500).json({ message: "Error processing question" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
