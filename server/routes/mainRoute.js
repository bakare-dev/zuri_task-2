const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger-output.json");

router.get("/health", (req, res) => {
  res.status(200).json({ message: "server is running fine" });
});
router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Your have reached Bakare Praise Zuri Task 2 Server",
    endpoints: "/api",
    health: "/health",
    docs: "/swagger",
  });
});

module.exports = router;
