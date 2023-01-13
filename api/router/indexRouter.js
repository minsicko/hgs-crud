const express = require("express");
const router = express.Router();

import userRouter from "./userRouter";
import postRouter from "./postRouter";

router.use("/users", userRouter.router);
router.use("/posts", postRouter.router);

module.exports = router;
