const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/city", () => {
  it("Is an array of objects", (done) => {
    request(app)
      .get("/api/city")
      .expect((response) => {
        assert.typeOf(
          response.body.response,
          "array",
          "Is not an array"
        );
        response.body.response.forEach((city) => assert.isObject(city));
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
