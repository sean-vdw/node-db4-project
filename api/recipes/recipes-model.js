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
    .leftJoin('steps as s', 's.recipe_id', '=', 'r.recipe_id')
    .where('r.recipe_id', recipe_id)
    .select('s.*', 'r.*')
    .orderBy('s.step_number');

  const result = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    steps: rows[0].step_id
      ? rows.map(row => ({ step_id: row.step_id, step_number: row.step_number, instructions: row.step_instructions}))
      : []
  };
  return result;
};


module.exports = {
  getAll,
  getById,
}