import Contact from "../models/Message.js";

export const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const savedMessage = await Contact.create({ name, email, message });

    res.status(201).json({
      message: "Message sent successfully",
      data: savedMessage
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
