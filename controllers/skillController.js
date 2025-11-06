import Skill from "../models/Skill.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getSkills = asyncHandler(async (req, res) => {
  const skills = await Skill.find().sort({ createdAt: -1 });
  res.json(skills);
});

export const addSkill = asyncHandler(async (req, res) => {
  const { language, percentage, icon } = req.body;

  if (!language || !percentage || !icon)
    return res.status(400).json({ message: "All fields are required" });

  const existing = await Skill.findOne({ language });
  if (existing) return res.status(400).json({ message: "Skill already exists" });

  const skill = await Skill.create({ language, percentage, icon });
  res.status(201).json(skill);
});


export const updateSkill = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { language, percentage, icon } = req.body;

  const skill = await Skill.findById(id);
  if (!skill) return res.status(404).json({ message: "Skill not found" });

  skill.language = language || skill.language;
  skill.percentage = percentage || skill.percentage;
  skill.icon = icon || skill.icon;

  const updatedSkill = await skill.save();
  res.json(updatedSkill);
});

export const deleteSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  if (!skill) return res.status(404).json({ message: "Skill not found" });

  await skill.deleteOne();
  res.json({ message: `${skill.language} deleted successfully` });
});
