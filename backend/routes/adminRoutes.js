const express = require("express");
const router = express.Router();
const {
    loginAdmin,
    createToken,
    getAllUsers,
    deleteUser,
} = require("../controller/adminController");
const protectAdmin = require("../middleware/authMiddleware");

router.post("/", createToken);
router.post("/login", loginAdmin);
router.get("/me", protectAdmin, getAllUsers);

router.route("/:id").delete(deleteUser);

module.exports = router;
