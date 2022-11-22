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
      .post("/api/hotel")
      .send({
        name: "Hotel Las Américas Torre del Mar",
        photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/de/19/28/las-americas-torre-del.jpg?w=1200&h=-1&s=1",
        capacity: 1500,
        cityId: "63701f25d10c25267b79e291",
        userId: "6370096b26cecde13c02e04c",
      })
      .expect(res => res.success === true)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});