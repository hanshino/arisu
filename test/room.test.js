const request = require("supertest");
const app = require("../src/app");
const jwt = require("../src/util/jwt");
const redis = require("../src/util/redis");

describe("開房路由測試", function () {
  const token = jwt.sign({ name: "hanshino" });

  it("列出房間列表", function (done) {
    request(app).get("/api/room").expect(200).end(done);
  });

  it("開一個新的房間", async function () {
    let res = await request(app)
      .post("/api/room")
      .set("Accept", "application/json")
      .set("Authorization", `bearer ${token}`)
      .send({ boss: "tiger", number: "123456", level: 3 });

    expect(res).toHaveProperty("body");
    let { body } = res;
    expect(body).toHaveProperty("message");
    expect(body).toHaveProperty("items");
  });
});

afterAll(() => {
  cleanConnectedRedis(redis);
});

const cleanConnectedRedis = client => {
  return client.quit();
};
