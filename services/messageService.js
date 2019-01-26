import db from "../models/index";

class MessageService {
add(data) {
  return db.Message.create(data)
}

get(id) {
  return db.Message.findById(id, { where: id})
}
getAll(data) {
  return db.Message.findAll({where: data})
}
delete(messageId) {
  return db.Message.destroy({where: {id: messageId}})
}
}

export default MessageService;
