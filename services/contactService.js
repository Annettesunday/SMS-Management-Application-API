import db from "../models/index";

class ContactService {
  add({phoneNumber,name}) {
    return db.Contact.findOrCreate(
      {
        where: {phoneNumber},defaults: {name}
      }
    )
  }

  get(id) {
    return db.Contact.findById(id,{
      include: [
        {
          association: 'sentMessages',
        },
        {
          association: 'receivedMessages',
        },
      ],
      where: {
        data: id
      }
    });
  }
  findOne(data) {
    return db.Contact.findOne({ where: data });
  }

  getAll() {
    return db.Contact.findAll({
      include: [
        {
          association: 'sentMessages',
        },
        {
          association: 'receivedMessages',
        },
      ],
     });
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
