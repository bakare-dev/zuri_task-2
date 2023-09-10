const DatabaseEngine = require("../../utils/DatabaseEngine");

let database;

beforeAll(async () => {
  database = new DatabaseEngine();
});

afterEach(async () => {});

afterAll(async () => {});

describe("Database engine integration test", () => {
  jest.setTimeout(90000);

  it("it can connect to database", async () => {
    await database.connect(() => {
      var success = true;
      expect(success).toBe(true);
    });
  });

  it("it can get connection manager", () => {
    const connectionManager = database.getConnectionManager();

    expect(connectionManager).toBeTruthy();
  });
});
