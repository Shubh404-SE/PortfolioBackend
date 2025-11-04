import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    image: String,
    github: String,
    live: String,
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);