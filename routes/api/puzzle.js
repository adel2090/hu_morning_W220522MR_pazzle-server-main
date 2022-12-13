const express = require("express");
const router = express.Router();

const puzzleModel = require("../../models/puzzle.model");
const puzzleValidation = require("../../validation/puzzle.validation");

router.get("/", async (req, res) => {
  try {
    const data = await puzzleModel.selectAll();

    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
router.post("/", async (req, res) => {
  try {
    const validatedValues = await puzzleValidation.validateNewPuzzleSchema(
      req.body
    );
    const newPuzzle = await puzzleModel.createPuzzle(validatedValues);
    res.status(201).json(newPuzzle);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});


//update
router.patch("/", async (req, res) => {
  try {
    const validatedValues = await puzzleValidation.validateUpdatePuzzleSchema(
      req.body
    );
    const puzzleData = await puzzleModel.updatePuzzleById(validatedValues.id,validatedValues);
    res.status(201).json(puzzleData);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});


//delete
//update
router.delete("/:id", async (req, res) => {
  try {
    const validatedValues = await puzzleValidation.validateDeletePuzzleSchema(
      req.params
    );
    const puzzleData = await puzzleModel.deletePuzzleById(validatedValues.id);
    res.json("deleted");
  } catch (err) {
    res.status(400).json({ error: err });
  }
});


module.exports = router;
