const request = require("supertest");
const app = require("../src/app");
const redis = require("../src/util/redis");

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

afterAll(async () => {
  await cleanConnectedRedis(redis);
});

const cleanConnectedRedis = client => {
  return client.quit();
};
