const express = require("express");
// ...
const authController = require("./lib/authController");
const app = (module.exports = express());

app.post("/login", authController.login);
app.get("/checkToken", authController.checkToken);

// ...
