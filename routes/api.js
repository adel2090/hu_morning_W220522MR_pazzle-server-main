const express = require("express");
const router = express.Router();

const puzzleRouter = require("./api/puzzle");

router.use("/puzzle", puzzleRouter);

module.exports = router;
