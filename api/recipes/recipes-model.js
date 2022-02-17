const db = require('../../data/db-config');

function getAll() {
  return db('recipes as r')
    .select('recipe_id', 'r.recipe_name')
};


// Select 
//     r.recipe_id, 
//     r.recipe_name,
//     r.created_at,
//     s.step_id,
//     s.step_number,
//     s.step_instructions,
//     si.ingredient_id,
//     si.ingredient_name,
//     si.ingredient_quantity
// from recipes as r
// join steps as s on s.recipe_id = r.recipe_id
// join step_ingredients as si on s.step_id = si.step_id
// where r.recipe_id = 1;

async function getById(recipe_id) {
  const rows = await db('recipes as r')
    .leftJoin('steps as st')
}


module.exports = {
  getAll,
  getById,
}