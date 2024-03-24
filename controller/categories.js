
const categoriesRouter = require("express").Router();
const Category = require("../models/category")
const express = require("express");
const app = express();
app.use(express.json());

categoriesRouter.get("/", async (request, response) => {
    const categories = await Category.find({})
    response.json(categories);
});


module.exports = categoriesRouter;


