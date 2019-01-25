import db from "../models/message";

class MessageService {
add(data) {
  return db.Message.findOrCreate({where: data})
}

get(data) {
  return db.Message.find(data)
}
getAll(data) {
  return db.Message.findAll({where: data})
}
delete(data) {
  return db.Message.destroy({where: data})
}
}

export default MessageService;
