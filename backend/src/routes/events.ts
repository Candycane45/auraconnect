import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";
import Event, { IEvent } from "../models/Event"; // Adjust path accordingly
import { v4 as uuidv4 } from "uuid";
import connectDB from "@/utils/connectDB";

const router = express.Router();

// Configure Multer Storage
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "uploads/");
  },
  filename: function (_req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = `${uuidv4()}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Define a type-safe request with Multer's file
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

// POST /api/events - create event with file upload
router.post(
  "/events",
  upload.single("eventImage"),
  async (req: MulterRequest, res: Response) => {
    try {
      await connectDB();

      const {
        eventName,
        eventDate,
        eventLocation,
        eventCategory,
        eventDescription,
        eventPrice,
        createdBy,
      } = req.body;

      if (!createdBy) {
        return res.status(400).json({ error: "Creator email is required" });
      }

      if (!req.file) {
        return res.status(400).json({ error: "Event image is required." });
      }

      const newEvent: Partial<IEvent> = {
        eventName,
        eventDate: new Date(eventDate),
        eventLocation,
        eventCategory,
        eventDescription,
        eventImage: req.file.path, // you could also use req.file.filename
        eventPrice: eventPrice ? parseFloat(eventPrice) : undefined,
        createdBy,
      };

      const createdEvent = await Event.create(newEvent);

      return res.status(201).json({
        message: "Event created successfully.",
        event: createdEvent,
      });
    } catch (error) {
      console.error("Error creating event:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

export default router;
