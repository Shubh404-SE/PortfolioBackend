import express from "express";
import { protect } from "../middleware/auth.js";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.route("/")
  .get(getProjects)
  .post(protect, createProject);

router.route("/:id")
  .put(protect, updateProject)
  .delete(protect, deleteProject);

export default router;