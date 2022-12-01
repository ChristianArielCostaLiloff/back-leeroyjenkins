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
    TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODQwNDhiMGUyNDRjYmVmMDk4ZDI5NiIsIm5hbWUiOiJHZXJhbGRvIiwicGhvdG8iOiJodHRwczovL2kuYmxvZ3MuZXMvYzM2YWM2L2YuZWxjb25maWRlbmNpYWwuY29tX29yaWdpbmFsXzAzY19mZjRfMjU1XzAzY2ZmNDI1NWMyYTIxMGJhODZhMjZlOTcxYjY5NDlkLzQ1MF8xMDAwLmpwZWciLCJyb2xlIjoiYWRtaW4iLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTg4OTY0NywiZXhwIjoxNzAxNDI1NjQ3fQ.wOQvZnFRZYeOSbpH9tmwh6PZ3ry9lz1jGfszyDwihJ0";
    request(app)
      .post("/api/hotel/")
      .set('Authorization', `Bearer ${TOKEN}`)
      .send({
        name: "Hotel Test",
        photo: "http://test.test",
        capacity: 1500,
        cityId: "638491ac2db464d85a7d6ce6",
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

describe("DELETE /api/hotel", () => {
  it("Must delete a hotel", function (done) {
    this.timeout(10000);
    TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODQwNDhiMGUyNDRjYmVmMDk4ZDI5NiIsIm5hbWUiOiJHZXJhbGRvIiwicGhvdG8iOiJodHRwczovL2kuYmxvZ3MuZXMvYzM2YWM2L2YuZWxjb25maWRlbmNpYWwuY29tX29yaWdpbmFsXzAzY19mZjRfMjU1XzAzY2ZmNDI1NWMyYTIxMGJhODZhMjZlOTcxYjY5NDlkLzQ1MF8xMDAwLmpwZWciLCJyb2xlIjoiYWRtaW4iLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTg4OTY0NywiZXhwIjoxNzAxNDI1NjQ3fQ.wOQvZnFRZYeOSbpH9tmwh6PZ3ry9lz1jGfszyDwihJ0";
    request(app)
      .delete(`/api/hotel/637c5aebb683802daad95893`)
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
