const router = require("express").Router();
const Controller = require("../../controllers/Controller");
const controller = new Controller();

router.get("/", (req, res) => {
    res.status(200).json({
        createuser: {
            route: "/",
            methods: ["POST"]
        },
        getuser: {
            route: "/:key", //key can be name or id
            methods: ["GET"]
        },
        updateuser: {
            route: "/:id",
            methods: ["PUT"]
        },
        deleteuser: {
            route: "/:id",
            methods: ["DELETE"]
        }
    })
    
})
router.get("/:key", controller.getUser);
router.post("/", controller.createUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
