import ContactService from "../services/contactService";

const contactService = new ContactService();

class Contact {
  createContact(req, res) {
    const { name, phoneNumber } = req.body;
    contactService
      .add({
        name,
        phoneNumber
      })
      .then(response => {
        if (response[1]) {
          return res.status(201).send({ message: "Contact created", response });
        }
        return res.status(409).send({ message: "Contact already exists" });
      })
      .catch(error => {
        const errorMessage = error.errors.map(value => value.message);
        return res.status(400).send({
          error: errorMessage
        });
      });
  }

  getAContact(req, res) {
    const { contactId } = req.params;
    contactService
      .get(contactId)
      .then(response => {
        if (!response) {
          return res.status(404).send({ message: "Contact cannot be found" });
        }
        return res
          .status(200)
          .send({ message: "Contact retrieved successfully", response });
      })
      .catch(error => {
        return res.status(400).send({
          error: "error getting contact"
        });
      });
  }

  getAllContacts(req, res) {
    contactService
      .getAll()
      .then(response => {
        if (response) {
          return res
            .status(200)
            .send({ message: "Contacts retrieved successfully", response });
        }
      })
      .catch(error => {
        res.status(400).send({
          error: "Error retrieving contacts"
        });
      });
  }
  getAllSentMessages(req, res) {
    res.status(200);
  }

  getAllReceivedMessages(req, res) {
    res.status(200);
  }

  updateContact(req, res) {
    const { name, phoneNumber } = req.body;
    const { contactId } = req.params;
    contactService
      .edit(contactId, { name, phoneNumber })
      .then(([response]) => {
        if (!response) {
          return res.status(404).send({ message: "Contact cannot be found" });
        }
        res.status(200).send({ message: "Contact updated successfully" });
      })
      .catch(error => {
        return res.status(400).send({ error: "Error updating contact"});
      });
  }

  deleteContact(req, res) {
    const { contactId } = req.params;
    contactService
      .delete(contactId)
      .then(response => {
        if (response) {
          return res
            .status(200)
            .send({ message: "Contact deleted successfully" });
        }
        res.status(404).send({ message: "Contact does not exist" });
      })
      .catch(error => {
        return res.status(400).send({ error: "Error deleting contact" });
      });
  }
}
export default Contact;
