import express from "express";
import axios from "axios";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Endpoint to fetch map style from MapTiler
app.get("/api/map", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.TILES_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching map style:", error);
    res.status(500).json({ error: "Error fetching map style" });
  }
});

// Serve your React frontend (assuming it's built and located in the 'build' folder)
app.use(express.static("build"));

// Catch-all route to serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
