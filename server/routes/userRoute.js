const router = require("express").Router();
const Controller = require("../../controllers/Controller");
const controller = new Controller();

router.get("/", (req, res) => {
    res.status(200).json({
        getusers: {
            route: "/users",
            methods: ["GET"]
        },
        createuser: {
            route: "/user",
            methods: ["POST"]
        },
        getuser: {
            route: "/user/:key", //key can be name or id
            methods: ["GET"]
        },
        updateuser: {
            route: "/user/:id",
            methods: ["PUT"]
        },
        deleteuser: {
            route: "/user/:id",
            methods: ["DELETE"]
        }
    })
    
})
router.get("/users", controller.getUsers);
router.get("/user/:key", controller.getUser);
router.post("/user", controller.createUser);
router.put("/user/:id", controller.updateUser);
router.delete("/user/:id", controller.deleteUser);

module.exports = router;
