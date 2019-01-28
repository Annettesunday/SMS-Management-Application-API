import Requests from "supertest";
import { expect } from "chai";
import app from "../app";
import db from "../models/index";
import { contactSeeds } from "../seeders/index";

const api = Requests(app);

describe("Test Message functionality", () => {
  before(done => {
    db.Contact.bulkCreate(contactSeeds);
    done();
  });
  it("should send a message successfully", done => {
    api
      .post("/message")
      .send({
        message: "A simple message content 1",
        sender: "0700000000",
        receiver: "0700000001"
      })
      .end((error, res) => {
        expect(res.status).to.equal(201);
        expect(JSON.parse(res.text).message).to.equal(
          "Message has been successfully sent"
        );
        done();
      });
  });

  it("should get a message that exists successfully", done => {
    api.get("/message/1").end((error, res) => {
      expect(res.status).to.equal(200);
      expect(JSON.parse(res.text).message).to.equal(
        "A simple message content 1"
      );
      done();
    });
  });
  it("should get all the messages that have been created", done => {
    api.get("/messages").end((error, res) => {
      expect(res.status).to.equal(200);
      expect(JSON.parse(res.text).message).to.equal(
        "All messages retrieved successfully"
      );
      done();
    });
  });

  it("delete a message successfully", done => {
    api.delete("/message/1").end((error, res) => {
      console.log("My response is", res.status);
      expect(res.status).to.equal(200);
      expect(JSON.parse(res.text).message).to.equal("Message successfully deleted");
      done();
    });
  });
});
