const express = require("express");
const rateLimit = require("express-rate-limit");

const exampleMiddleware1 = require("../middleware/exampleMiddleare1");

const exampleController1 = require("../Controllers/Route1/exampleController1.js");

const Router = express.Router({
    strict:false
});

Router.get("/exampleEndpoint1", async(req, res) => {

})

module.exports = Router;