const request = require("supertest");
const app = require("../src/app");
const i18n = require("../src/util/i18n");
const redis = require("../src/util/redis");

describe("無token造訪頁面測試", function () {
  it("測試 auth/me", function (done) {
    request(app)
      .get("/api/auth/me")
      .expect(403)
      .expect(res => {
        res.body.message === i18n.__("http.code.403");
      })
      .end(done);
  });

  it("測試 auth/login 取得 token", function (done) {
    request(app)
      .post("/api/auth/login")
      .send({ name: "hanshino" })
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toHaveProperty("token");
        expect(res.body.token).toMatch(/^(\w+\.){2}\w+/);
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
