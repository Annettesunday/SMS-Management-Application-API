import Route from 'express';
import contactController from "../controllers/contact";
import messageController from "../controllers/message";


const Route = express.Route();

Route.get("/", (res,req) => {
  res.status(200).send({message: "Welcome to SMS Management API"})
});

Route.post("/contact", contactController.createContact);
Route.get("/contact/:contactId", contactController.getAContact);
Route.get("/contact", contactController.getAllContacts);
Route.put("/contact/:contactId",contactController.updateContact);
Route.delete("/contact/:contactId",contactController.deleteContact);


Route.post("/message/:senderId/:receiverId", messageController.createMessage);
Route.get("/message/:id", messageController.getAMessage);
Route.get("/message", messageController.getAllMessages);
Route.get("/message/sent/:senderId", messageController.getAllSentMessages);
Route.get("/message/received:receiverId", messageController.getAllReceivedMessages);
Route.put("/message/:id",messageController.updateMessage);
Route.delete("/message/:messageId",messageController.deleteMessage);


export default Route;
