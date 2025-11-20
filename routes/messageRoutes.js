import express from "express";
import { createMessage, getAllMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", createMessage);
router.get("/", getAllMessages);

export default router;