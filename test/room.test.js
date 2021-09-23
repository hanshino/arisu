const request = require("supertest");
const app = require("../src/app");

describe("開房路由測試", function () {
  it("列出房間列表", function (done) {
    request(app).get("/api/room").expect(200).end(done);
  });

  it("開一個新的房間", function (done) {
    request(app)
      .post("/api/room")
      .send({ boss: "tiger", number: "123456", level: 3 })
      .set("Accept", "application/json")
      .end((err, req) => {
        console.log(req.body);
        return done();
      });
  });
});
