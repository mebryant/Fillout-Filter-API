
const filterRoute = require('./app/routes/filter');
const healthRoute = require('./app/routes/health');
const swagOptions = require('./app/configs/swagger');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const express = require('express');
const app = express();

app.use(express.json());

app.use(filterRoute);
app.use(healthRoute);

// Swagger Implementation
const specs = swaggerJsdoc(swagOptions.options);

app.use(
    swagOptions.base_url,
    swaggerUi.serve,
    swaggerUi.setup(specs)
);


console.log(`Fillout Base URL: ${process.env.FILLOUT_BASE_URL}`)
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})