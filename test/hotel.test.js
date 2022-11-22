const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");
const { response } = require("../app");

describe("GET /api/hotel/", function (done) {
  it("Hotel not found", function (done) {
    request(app)
      .get("/api/hotel/63716c6edd2cbad3afa942069")
      .expect(res => res.success === false)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
