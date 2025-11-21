import express from "express";
import { createMessage, deleteMessage, getAllMessages } from "../controllers/messageController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/send", createMessage);
router.route("/").get(protect, getAllMessages);
router.delete("/:id", protect, deleteMessage);

export default router;