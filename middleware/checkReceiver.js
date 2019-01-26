import ContactService from "../services/contactService";

const contactService = new ContactService();

const checkReceiver = (req,res,next) => {
  const { receiver } = req.body;
  contactService.findOne({
    phoneNumber: receiver
  })
  .then((response) => {
    if(!response){
      return res.status(404).send({message: "Receiver cannot be found"})
    }
    req.body.receiverId = response.dataValues.id;
    next();
  })
  .catch((error) => {
    return res.status(400).send({message: "Error validating receiver"})
  })
}
export default checkReceiver;
