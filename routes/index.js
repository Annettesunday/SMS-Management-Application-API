import express from "express";
import Contact from "../controllers/contact";
import messageController from "../controllers/message";
import Validation from "../middleware/validation";

const Route = express.Router();
const contact = new Contact();
const validation = new Validation();

Route.get("/", (res, req) => {
  res.status(200).send({ message: "Welcome to SMS Management API" });
});

Route.post("/contact", validation.contact, contact.createContact);

Route.get("/contact/:contactId", contact.getAContact);
Route.get("/contacts", contact.getAllContacts);
// Route.put("/contact/:contactId", contact.updateContact);
Route.delete("/contact/:contactId", contact.deleteContact);

// Route.post("/message/:senderId/:receiverId", message.createMessage);
// Route.get("/message/:id", messagegetAMessage);
// Route.get("/message", message.getAllMessages);
// Route.get("/message/sent/:senderId", message.getAllSentMessages);
// Route.get(
//   "/message/received:receiverId",
//   message.getAllReceivedMessages
// );
// Route.put("/message/:id", message.updateMessage);
// Route.delete("/message/:messageId", message.deleteMessage);

export default Route;
