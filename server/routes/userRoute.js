const router = require("express").Router();
const Controller = require("../../controllers/Controller");
const controller = new Controller();

router.get("/:key", controller.getUser);
router.post("/", controller.createUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
