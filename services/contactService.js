import db from "../models/index";

class ContactService {
  add(data) {
    return db.Contact.findOrCreate({ where: data });
  }

  get(id) {
    return db.Contact.findById(id, { where: id });
  }
  findOne(data) {
    return db.Contact.findOne({where: data})
  }

  getAll(data) {
    return db.Contact.findAll({ where: data });
  }

  edit(id, data) {
    return db.Contact.update(data, { where: { id: id } });
  }

  delete(contactId) {
    return db.Contact.destroy({ where: { id: contactId } });
  }
  getSentMessages(data) {
    return db.Contact.findAll({
      include: [
        {
          association: "sentMessages"
        }
      ],
      where: {
        phoneNumber: data
      }
    });
  }

  getReceivedMessages(data) {
    return db.Contact.findAll({
      include: [
        {
          association: "receivedMessages"
        }
      ],
      where: {
        phoneNumber: data
      }
    });
  }
}

export default ContactService;
