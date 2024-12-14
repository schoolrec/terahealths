// index.js
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//endpoint to interact with Grok API
app.post("/api/grok", async (req, res) => {
  const userInput = req.body.message;

  try {
   
    const response = await axios.post("", {
      headers: {
        Authorization: `Bearer ${process.env.GROK_API_KEY}`,
      },
      data: {
        query: userInput,
      },
    });

    res.json({
      botResponse: response.data,
    });
  } catch (error) {
    console.error("Error interacting with the Grok API:", error);
    res.status(500).send("Error communicating with the API.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
