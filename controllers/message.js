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
      return res.status(400).send({error: error.errors[0].message})
    })

  }

  getAMessage(req,res) {
    const { id } = req.params;
    messageService.get(id)
    .then((response) => {
      return res.status(200).send({message: response.message})
    })
    .catch((error) => {
      return res.status(400).send({error: error.errors[0].message})
    })
  }

  getAllMessages(req,res) {
    messageService.getAll()
    .then((response) => {
      return res.status(200).send({message: "All messages retrieved successfully",response})
    })
    .catch((error) => {
      return res.status(400).send({error: error.errors[0].message})
    })
  }

  deleteMessage(req,res) {
    const { messageId } = req.params;
    messageService.delete(messageId)
    .then((response) => {
      if(response === 0){
        return res.status(404).send({message: "Message not found"})
      }
      return res.status(200).send({message: "Message successfully deleted"})
    })
    .catch((error) => {
      return res.status(400).send({error: error.errors[0].message})
    })
  }

}
export default Message;
