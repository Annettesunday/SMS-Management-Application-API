class Validation {
  contact(req, res, next) {
    const { phoneNumber } = req.body;
    const RE = new RegExp(/^[\d]+$/);
    if(!RE.test(phoneNumber)) {
      return res.status(400).send({message: "Please input a valid phone number"})
    }
    else if (phoneNumber.toString().trim().length !== 10) {
      return res.status(400).send({message: 'Phone number must be 10 digits'})
    }

    else {
      next();
    }
  }

}

export default Validation;
