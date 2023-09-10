const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Zuri Task 2",
      version: "1.0.0",
      description: "Bakare Praise",
    },
  },
  apis: ["../server/routes/mainRoute", "../server/routes/userRoute"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
