import dotenv from "dotenv";
dotenv.config({ path: [".env", ".env.local"] });
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import { AuthenticatedRequest, verifyToken } from "@/firebase/firebaseAuth";

// Routes
import eventsRouter from "./routes/events";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Public route
app.get("/api/public", (req, res) => {
  res.json({ message: "This route is public, no auth needed." });
});

// Protected route
app.get("/api/protected", verifyToken, (req: AuthenticatedRequest, res) => {
  res.json({
    message: "This is a protected route!",
    user: {
      uid: req.user?.uid,
      email: req.user?.email,
      name: req.user?.name,
    },
  });
});

// Init route
app.use("/api", eventsRouter);

// Example of POST route
app.post(
  "/api/protected-data",
  verifyToken,
  (req: AuthenticatedRequest, res) => {
    const data = req.body;
    res.json({ message: "Data received securely!", user: req.user, data });
  }
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
