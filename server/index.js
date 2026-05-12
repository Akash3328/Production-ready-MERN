import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "http://localhost:4000",
      // prodution url
    ],
    credentials: true,
  }),
);

// API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from sky farm " });
});

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT} `),
);
