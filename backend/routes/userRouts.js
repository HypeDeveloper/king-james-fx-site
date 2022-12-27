const express = require('express')
const router = express.Router()
const {
    getUserData,
    registerUser,
    loginUser,
    deleteUser,
} = require("../controller/userController");

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(getUserData);

router.route("/:id").delete(deleteUser);

module.exports = router