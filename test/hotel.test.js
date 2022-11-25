const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/hotel/", function (done) {
  it("Hotel not found (404)", function (done) {
    request(app)
      .get("/api/hotel/63716c6edd2cbad3afa94209")
      .expect(404)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("POST /api/hotel", () => {
  it("Capacity field is a number", (done) => {
    request(app)
      .post("/api/hotel")
      .send({
        capacity: 789722,
      })
      .expect((response) => {
        assert.isNumber(response.request._data.capacity);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
  it("Hotel created successfully (201)", (done) => {
    request(app)
      .post("/api/hotel/")
      .send({
        name: "Hotel Las america Torre del Mare",
        photo: ["http://test.test", "http://test.test", "http://test.test"],
        capacity: 1500,
        cityId: "636d975fff2f61c6a45710b2",
        userId: "636d82c86529ebe93bbef921",
      })
      .expect(201)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
