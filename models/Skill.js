import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    language: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
      unique: true,
    },
    percentage: {
      type: Number,
      required: [true, "Skill percentage is required"],
      min: [0, "Minimum value is 0"],
      max: [100, "Maximum value is 100"],
    },
    icon: {
      type: String,
      required: [true, "Icon is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
