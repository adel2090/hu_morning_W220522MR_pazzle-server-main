const Joi = require("joi");

const validate = require("./validate");
const difficultyEnum = require("../enums/difficultyEnum");

const newPuzzleSchema = Joi.object({
  name: Joi.string().required().min(2).max(255).trim(),
  pcs: Joi.number().required().min(4).max(Number.MAX_SAFE_INTEGER),
  difficulty: Joi.string().valid(...difficultyEnum),
});

const updatePuzzleSchema = Joi.object({
  id: Joi.string().length(24).hex().required().trim(),
  name: Joi.string().required().min(2).max(255).trim(),
  pcs: Joi.number().required().min(4).max(Number.MAX_SAFE_INTEGER),
  difficulty: Joi.string().valid(...difficultyEnum),
});

const deletePuzzleSchema = Joi.object({
  id: Joi.string().length(24).hex().required().trim(),
 
});

const validateNewPuzzleSchema = (puzzleData) => {
  return validate(newPuzzleSchema, puzzleData);
};

const validateUpdatePuzzleSchema = (puzzleData) => {
  return validate(updatePuzzleSchema, puzzleData);
};

const validateDeletePuzzleSchema = (puzzleData) => {
  return validate(deletePuzzleSchema, puzzleData);
};

module.exports = {
  validateNewPuzzleSchema,
  validateUpdatePuzzleSchema,
  validateDeletePuzzleSchema,
};
