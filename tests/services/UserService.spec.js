const UserService = require("../../services/UserService");

let userService;
beforeAll(async () => {
  userService = new UserService();
});

afterEach(async () => {});

afterAll(async () => {});

describe("User Service class test", () => {
  jest.setTimeout(30000);
  let entityId;
  let entityName;

  it("it can create user", async () => {
    const user = {
      name: "Test User Zuri",
    };

    const testResponse = await userService.create(user);

    entityId = testResponse.id;
    entityName = testResponse.name;

    expect(testResponse.id).toBeGreaterThan(0);
  });

  it("it can get user by name", async () => {
    const testResponse = await userService.findOneByCondition({
      name: entityName,
    });

    expect(testResponse.id).toBeGreaterThan(0);
  });

  it("it can update user details", async () => {
    const user = {
      name: "Test User Zuri Update",
    };

    await userService.update(entityId, user);

    const checkUpdate = await userService.findById(entityId);

    expect(checkUpdate.name).toBe(user.name);
  });

  it("it can get user by id", async () => {
    const testResponse = await userService.findById(entityId);

    expect(testResponse.id).toBeGreaterThan(0);
  });

  it("it can get all users", async () => {
    const query = {
      page: 0,
      size: 50,
    };
    const testResponse = await userService.fetchAll(query);

    expect(testResponse.count).not.toBeNaN();
  });

  it("it can delete user", async () => {
    await userService.delete(entityId);

    const checkIfDeleted = await userService.findById(entityId);

    expect(checkIfDeleted[0]).toBeUndefined();
  });
});
