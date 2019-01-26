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
delete(data) {
  return db.Message.destroy({where: data})
}
}

export default MessageService;
