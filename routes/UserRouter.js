const express = require("express");
const router = express.Router();
const { addUser, getUsers,login } = require("../controller/userController");
router.post('/register', addUser);
router.get("/get-users", getUsers);
router.post('/login',login);

module.exports = router;
