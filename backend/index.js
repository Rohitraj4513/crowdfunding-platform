import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Route for campaigns
app.get("/api/campaigns", (req, res) => {
  res.json([
    { id: 1, title: "Campaign 1", description: "Help for education." },
    { id: 2, title: "Campaign 2", description: "Medical support." }
  ]);
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
