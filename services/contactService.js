import db from '../models/index';

class ContactService {
add(data) {
  return db.Contact.findOrCreate({where: data})
}

get(contactId) {
  return db.Contact.findById(contactId,{ where: contactId})
}

getAll(data) {
  return db.Contact.findAll({where: data})
}

edit(data) {
  return db.Contact.update({ where: data })
}

delete(contactId) {
  return db.Contact.destroy({ where: {id: contactId}})
}
getSentMessages(data) {
  return db.Contact.findAll({
    include: [{
      association: 'sentMessages',
    }],
    where: {
      phoneNumber: data
    }
  });
}

getSReceivedMessages(data) {
  return db.Contact.findAll({
    include: [{
      association: 'receivedMessages',
    }],
    where: {
      phoneNumber: data
    }
  });
}

}

export default ContactService;
