// Connects the whole app
const configuration = require("./Utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const categoryRouter = require("./controller/categories")
const middleware = require("./Utils/middleware");
const logger = require("./Utils/logger");
const category = require("./models/category");
const mongoose = require("mongoose").set("strictQuery", true);
require("express-async-errors");

logger.info("connecting to Mongo");

mongoose.connect(configuration.MONGODB_URI)
    .then(() => {
        logger.info("Mongo Connection Success!");
    }).catch((error) => {
        logger.error("error connecting to MongoDB:", error.message);
    });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use("/categories", categoryRouter);
app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
module.exports = app;
