const db = require('../../data/db-config');

const checkRecipeId = async (req, res, next) => {
  try {
    const recipe = await db('recipes')
      .where('recipe_id', req.params.recipe_id)
      .first();
    if (!recipe) {
      res.status(404).json({ message: `recipe with recipe_id ${req.params.recipe_id} not found` });
    } else {
      next();
    }
  } catch(err) {
    next(err);
  };
};

module.exports = {
  checkRecipeId
}