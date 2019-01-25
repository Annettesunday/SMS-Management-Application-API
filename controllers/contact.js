import ContactService  from "../services/contactService";

const contactService = new ContactService();


class Contact {
  createContact(req,res) {
    const { name,phoneNumber } = req.body;
    contactService.add({
      name,
      phoneNumber
    })
    .then((response) => {
      if (response[1]) {
        return res.status(201).send({message: "Contact created", response})
      }
      return res.status(409).send({message: "Contact already exists"})
    })
    .catch((error) => {
      const errorMessage = error.errors.map(value => value.message);
      return res.status(400).send({
        error: errorMessage,
      })
    })
  }

  getAContact(req,res) {
    const { contactId } = req.params;
    contactService.get({contactId})
    .then((response) => {
      if(!response) {
        return res.status(404).send({message: "Contact cannot be found"})
      }
      return res.status(200).send({message: "Contact retrieved successfully", response})
    })
    .catch((error) => {
      return res.status(400).send({
        error: "error getting contact",
      })
    })
  }

  getAllContact(req,res) {
    return res.status(200)
  }
  getAllSentMessages(req,res) {
    res.status(200);
  }

  getAllReceivedMessages(req,res) {
    res.status(200);
  }

  updateContact(req,res) {
    return res.status(200)
  }

  deleteContact(req,res) {
    return res.status(200)
  }

}
export default Contact;
