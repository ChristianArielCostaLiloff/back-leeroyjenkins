const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/city", () => {
  it("Is an array of objects", (done) => {
    request(app)
      .get("/api/city")
      .expect((response) => {
        assert.typeOf(response.body.response, "array", "Is not an array");
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

describe("POST /api/city", () => {
  it("Name field is string", (done) => {
    request(app)
      .post("/api/city")
      .send({
        name: "Valencia",
        continent: "Europe",
        photo: "https://img2.rtve.es/i/?w=1600&i=1602241477802.jpg",
        population: 789722,
        userId: "6370096b26cecde13c02e04b",
      })
      .expect((response) => {
        assert.isString(response.request._data.name);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
  it("Error when unable to create a city", (done) => {
    request(app)
      .post("/api/city")
      .send({
        continent: "Europe",
        photo: "https://img2.rtve.es/i/?w=1600&i=1602241477802.jpg",
        population: 789722,
        userId: "6370096b26cecde13c02e04b",
      })
      .expect((res) => res.success === false)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
