const express = require('express')
const router = express.Router()
const {
    getUserData,
    registerUser,
    loginUser,
    deleteUser,
} = require("../controller/userController");
const protect = require('../middleware/authMiddleware')


router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect,getUserData);

router.route("/:id").delete(deleteUser);

module.exports = router