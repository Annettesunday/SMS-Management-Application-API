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
        return res.status(400).send({
          error: error.errors[0].message
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
          error: error.errors[0].message
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
          error: error.errors[0].message
        });
      });
  }
  getAllSentMessages(req, res) {
    const { phoneNumber } = req.params;
    contactService
      .getSentMessages(phoneNumber)
      .then(response => {
        if (response === 0) {
          return res
            .status(404)
            .send({ message: "Sent messages not available" });
        }
        return res.status(200).send({ response });
      })
      .catch(error => {
        return res.status(400).send({ error: error.errors[0].message});
      });
  }

  getAllReceivedMessages(req, res) {
    const { phoneNumber } = req.params;
    contactService
      .getReceivedMessages(phoneNumber)
      .then(response => {
        if (response === 0) {
          return res
            .status(404)
            .send({ message: "Received messages not available" });
        }
        return res.status(200).send({ response });
      })
      .catch(error => {
        return res.status(400).send({ error: error.errors[0].message });
      });
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
        return res.status(400).send({ error: error.errors[0].message });
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
        return res.status(400).send({ error: error.errors[0].message });
      });
  }
}
export default Contact;
