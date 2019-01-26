import ContactService from "../services/contactService";

const contactService = new ContactService();

const checkSender = (req,res,next) => {
  const { sender } = req.body;
  contactService.findOne({
    phoneNumber: sender
  })
  .then((response) => {
    if(!response){
      return res.status(404).send({message: "Sender cannot be found"})
    }
    req.body.senderId = response.dataValues.id;
    next();
  })
  .catch((error) => {
    return res.status(400).send({message: "Error validating sender"})
  })
}
export default checkSender;
