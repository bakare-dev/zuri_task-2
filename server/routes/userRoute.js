const router = require("express").Router();
const Controller = require("../../controllers/Controller");
const controller = new Controller();

router.get("/users", controller.getUsers);
router.get("/user/:key", controller.getUser);
router.post("/user", controller.createUser);
router.put("/user/:id", controller.updateUser);
router.delete("/user/:id", controller.deleteUser);

module.exports = router;
