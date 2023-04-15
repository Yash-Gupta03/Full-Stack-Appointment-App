const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.use("/add-user", userController.addUser);
router.use("/fetch-users", userController.fetchUsers);
router.use("/delete-user/:userId", userController.deleteUser);

module.exports = router;
