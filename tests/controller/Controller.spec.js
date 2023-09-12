const Server = require("../../server/Server");
const request = require("supertest");

let server;
beforeAll(async () => {
  server = new Server();
});

afterEach(async () => {});

afterAll(async () => {});

describe("User Route Controller Test", () => {
  jest.setTimeout(90000);
  let entityId;
  let entityName;

  test("User controller can create", (done) => {
    const user = {
      name: "Test User Zuri",
    };

    request(server.getServerApp())
      .post("/api")
      .expect("Content-Type", /json/)
      .send(user)
      .expect(200)
      .expect((res) => {
        expect(res.body.id).not.toBeNaN();
      })
      .end((err, res) => {
        if (err) return done(err);
        entityId = res.body.user.id;
        entityName = res.body.user.name;
        return done();
      });
  });

  test("User controller can get one user by name", (done) => {
    request(server.getServerApp())
      .get(`/api/${entityName}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body.id).not.toBeNaN();
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test("User controller can get one user by id", (done) => {
    request(server.getServerApp())
      .get(`/api/${entityId}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body.id).not.toBeNaN();
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test("User controller can update", (done) => {
    const user = {
      name: "Test User Zuri Update",
    };

    request(server.getServerApp())
      .put(`/api/${entityId}`)
      .expect("Content-Type", /json/)
      .send(user)
      .expect(200)
      .expect((res) => {
        expect(res.body.message).toBe("user details updated successfully");
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test("User controller can delete", (done) => {
    request(server.getServerApp())
      .delete(`/api/${entityId}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body.message).toBe("user deleted successfully");
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
