import Request from "supertest";
import { expect } from "chai";
import app from "../app";

const api = new Request(app);

describe("Welcome route", () => {
  it("should correctly load the welcome route", done => {
    api.get("/").end((error, res) => {
      expect(res.status).to.equal(200);
      expect(JSON.parse(res.text).message).to.be.equal(
        "Welcome to SMS Management application API"
      );
      done();
    });
  });
});

describe("Undefined routes", () => {
  it("should return error for undefined routes", done => {
    api.get("/undefinedRoute").end((error, res) => {
      expect(res.status).to.equal(404);
      expect(JSON.parse(res.text).message).to.be.equal(
        "This is an unvailable route. Visit / to see all routes"
      );
      done();
    });
  });
});
