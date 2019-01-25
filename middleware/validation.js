class Validation {
  contact(req, res, next) {
    const { name, phoneNumber } = req.body;
    const RE = new RegExp(/^[\d]+$/);
    if(!RE.test(phoneNumber)) {
      return res.status(400).send({message: "Phone number should not special characters e.g - or ."})
    }
    else if (!name || name.trim().length === 0) {
      return res.status(400).send({message: 'Name must be specified'});
    } else if (!phoneNumber || phoneNumber.toString().trim().length !== 10) {
      return res.status(400).send({message: 'Phone number must be 10 digits'})
    }

    else {
      next();
    }
  }

}

export default Validation;
