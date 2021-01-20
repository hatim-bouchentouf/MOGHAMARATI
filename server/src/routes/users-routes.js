const express = require("express");

const usersController = require("../controllers/users-controllers");

const router = express.Router();

router.get("/", usersController.getUsers);

router.post("/signUp", usersController.signup);

router.post("/login", usersController.login);

module.exports = router;
