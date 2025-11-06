import express from "express";
import {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/")
  .get(getSkills)      
  .post(protect, addSkill);  

router.route("/:id")
  .put(protect, updateSkill)
  .delete(protect, deleteSkill);

export default router;