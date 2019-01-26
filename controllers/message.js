import MessageService from "../services/messageService";

const messageService = new MessageService();


class Message
{
  createMessage(req,res) {
    const {sender, receiver, senderId, receiverId, message } = req.body;
    messageService.add({sender, receiver,senderId, receiverId,message,  status:'sent'})
    .then((response ) => {
        return res.status(201).send({message: "Message has been successfully sent"})
    })
    .catch((error) => {
      return res.status(400).send({error: "Error sending message"})
    })

  }

  getAMessage(req,res) {
    const { id } = req.params;
    messageService.get(id)
    .then((response) => {
      return res.status(200).send({message: response.message})
    })
    .catch((error) => {
      return res.status(400).send({error: "Error getting Message"})
    })
  }

  getAllMessages(req,res) {
    messageService.getAll()
    .then((response) => {
      return res.status(200).send({message: "All messages retrieved successfully",response})
    })
    .catch((error) => {
      return res.status(400).send({error: "Error getting all messages"})
    })
  }

  deleteMessage(req,res) {
    res.status(200);
  }

}
export default Message;
