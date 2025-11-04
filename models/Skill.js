import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    language: { type: String, required: true },
    percentage: { type: Number, required: true },
    icon: String,
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
