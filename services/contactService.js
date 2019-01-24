import db from '../models/index';

class contactService {
add(data) {
  return db.Contact.findOrCreate({where: data})
}

get(data) {
  return db.Contact.findOne({ where: data})
}

getAll(data) {
  return db.Contact.findAll({where: data})
}

edit(data) {
  return db.Contact.update({ where: data })
}

delete(data) {
  return db.Contact.destroy({ where: data})
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

export default contactService;