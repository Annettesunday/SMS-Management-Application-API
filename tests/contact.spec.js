import Requests from "supertest";
import { expect } from "chai";
import app from "../app";

const api =  Requests(app);

describe("Test contact functionality", () => {
  it("should create contact with the right details", done => {
    api.post("/contact")
    .send({
      phoneNumber: "0720467025",
      name: "Mom"
    })
    .end((error,res) =>{
      expect(res.status).to.equal(201);
      expect(JSON.parse(res.text).message).to.equal("Contact created");
      done();
    })
  });
  it("should not create contact with the an existing phone number", done => {
    api.post("/contact")
    .send({
      phoneNumber: "0720467025",
      name: "Annette"
    })
    .end((error,res) => {
      expect(res.status).to.equal(409);
      expect(JSON.parse(res.text).message).to.equal("Contact already exists")
    });
    done();
  })

  it("should not create contact with empty phoneNumber", done => {
    api.post("/contact")
    .send({
      phoneNumber: "",
      name: "Annette"
    })
    .end((error,res) => {
      expect(res.status).to.equal(400);
      expect(JSON.parse(res.text).message).to.equal("Please input a valid phone number");
      done();
    })
  })

  it("should not create contact with no name", done => {
    api.post("/contact")
    .send({
      phoneNumber: "0720467000",
      name: ""
    })
    .end((error,res) => {
      console.log(">>>>>>>>>>", res.body)
      expect(res.status).to.equal(400);
      expect(JSON.parse(res.text).error).to.equal("Name cannot be empty");
      done();
    })
  })

  it("should get a contact when it exists", done => {
    api.get("/contact/1")
    .end((error,res) => {
      expect(res.status).to.equal(200);
      expect(JSON.parse(res.text).message).to.equal("Contact retrieved successfully");
      done();
    })
  })


  it("should not get a contact which does not exists", done => {
    api.get("/contact/11")
    .end((error,res) => {
      expect(res.status).to.equal(404);
      expect(JSON.parse(res.text).message).to.equal("Contact cannot be found");
      done();
    })
  })


  it("should retrieve all existing contacts successfully", done => {
    api.get("/contacts")
    .end((error,res) => {
      expect(res.status).to.equal(200);
      expect(JSON.parse(res.text).message).to.equal("Contacts retrieved successfully");
      done();
    })
  })


  it("should update a specified contact successfully", done => {
    api.put("/contact/1")
    .send({
      name: "My mom",
      phoneNumber: "0721955976"
    })
    .end((error,res) => {
      console.log("OOOOOOOOPS", res.body)
      expect(res.status).to.equal(200);
      expect(JSON.parse(res.text).message).to.equal("Contact updated successfully");
      done();
    })
  })


  it("should delete a specified contact successfully", done => {
    api.delete("/contact/1")
    .end((error,res) => {
      expect (res.status).to.equal(200);
      expect(JSON.parse(res.text).message).to.equal("Contact deleted successfully");
      done();
    })
  })

})

