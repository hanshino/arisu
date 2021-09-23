const request = require("supertest");
const app = require("../src/app");

describe("Get /api/health-check", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/api/health-check")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(res => {
        res.body.status = "fully functional";
      })
      .end(err => {
        if (err) return done(err);
        return done();
      });
  });
});
