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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODQwNDhiMGUyNDRjYmVmMDk4ZDI5NiIsIm5hbWUiOiJHZXJhbGRvIiwicGhvdG8iOiJodHRwczovL2kuYmxvZ3MuZXMvYzM2YWM2L2YuZWxjb25maWRlbmNpYWwuY29tX29yaWdpbmFsXzAzY19mZjRfMjU1XzAzY2ZmNDI1NWMyYTIxMGJhODZhMjZlOTcxYjY5NDlkLzQ1MF8xMDAwLmpwZWciLCJyb2xlIjoiYWRtaW4iLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTg4OTY0NywiZXhwIjoxNzAxNDI1NjQ3fQ.wOQvZnFRZYeOSbpH9tmwh6PZ3ry9lz1jGfszyDwihJ0";
    request(app)
      .delete(`/api/city/638491ac2db464d85a7d6ce6`)
      //.auth(TOKEN, { type: "bearer" })
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
