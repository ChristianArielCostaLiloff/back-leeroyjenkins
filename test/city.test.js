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

describe("DELETE /api/city", () => {
  it("Must delete a city", function (done) {
    TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODQwNDhiMGUyNDRjYmVmMDk4ZDI5NiIsIm5hbWUiOiJHZXJhbGRvIiwicGhvdG8iOiJodHRwczovL2ltZy5ldXJvcGFwcmVzcy5lcy9mb3Rvd2ViL2ZvdG9ub3RpY2lhXzIwMjAwNzI4MTQyMjI2XzQyMC5qcGciLCJyb2xlIjoiYWRtaW4iLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTYzNDI5MSwiZXhwIjoxNjY5NzIwNjkxfQ.90rlfFRM1Uj4cJioKujR_ZsN39CW5sg8PWaobg6o1zc";
    request(app)
      .delete(`/api/cities/63849c30975387f5f96da311`)
     // .auth(token, { type: "bearer" })
      .set('Authorization', `Bearer ${TOKEN}`)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
