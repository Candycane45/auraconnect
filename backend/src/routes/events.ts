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

// GET /api/events - fetch all events or filtered by name
router.get("/events", async (req: Request, res: Response) => {
  try {
    await connectDB();

    const { search } = req.query;

    // Build query object
    const query: any = {};
    if (search && typeof search === "string") {
      query.eventName = { $regex: search, $options: "i" }; // case-insensitive
    }

    const events = await Event.find(query).sort({ eventDate: -1 });

    return res.status(200).json({
      message: "Events fetched successfully",
      events,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /api/events/:id - fetch a single event by ID
router.get("/events/:id", async (req: Request, res: Response) => {
  try {
    await connectDB();

    const { id } = req.params;

    // Validate the ID
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid event ID" });
    }

    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    return res.status(200).json({
      message: "Event fetched successfully",
      event,
    });
  } catch (error) {
    console.error("Error fetching event:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

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
