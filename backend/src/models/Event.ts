import mongoose, { Document, Schema } from "mongoose";

export interface IEvent extends Document {
  eventName: string;
  eventDate: Date;
  eventLocation: string;
  eventCategory: string;
  eventDescription: string;
  eventImage: string;
  createdBy: string; // 🆕 Email of the creator
  eventPrice?: number;
}

const EventSchema = new Schema<IEvent>(
  {
    eventName: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventLocation: { type: String, required: true },
    eventCategory: { type: String, required: true },
    eventDescription: { type: String, required: true },
    eventImage: { type: String, required: true },
    eventPrice: { type: Number },
    createdBy: { type: String, required: true }, // 🆕
  },
  { timestamps: true }
);

export default mongoose.models.Event ||
  mongoose.model<IEvent>("Event", EventSchema);
