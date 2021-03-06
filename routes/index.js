import express from "express";
import Contact from "../controllers/contact";
import Message from "../controllers/message";
import Validation from "../middleware/validation";
import checkSender from "../middleware/checkSender";
import checkReceiver from "../middleware/checkReceiver";

const Route = express.Router();
const contact = new Contact();
const validation = new Validation();
const message = new Message();


Route.post("/contact", validation.contact, contact.createContact);

Route.get("/contact/:contactId", contact.getAContact);
Route.get("/contacts", contact.getAllContacts);
Route.put("/contact/:contactId", validation.contact, contact.updateContact);
Route.delete("/contact/:contactId", contact.deleteContact);

Route.post("/message", checkSender, checkReceiver,message.createMessage);
Route.get("/message/:id", message.getAMessage);
Route.get("/messages", message.getAllMessages);
Route.get("/message/sentMessages/:phoneNumber", contact.getAllSentMessages);
Route.get("/message/receivedMessages/:phoneNumber",contact.getAllReceivedMessages);
Route.delete("/message/:messageId", message.deleteMessage);

export default Route;
