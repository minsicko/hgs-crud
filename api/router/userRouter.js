const express = require("express");
const router = express.Router();

import userController from "../controller/userController";

router.get("/all", userController.get_all_users);

router.post("/add", userController.add_user);
router.get("/:index", userController.get_user);
router.put("/update", userController.update_user);
router.delete("/:index", userController.delete_user);

module.exports = { router };
