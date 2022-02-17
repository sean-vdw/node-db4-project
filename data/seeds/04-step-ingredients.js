const step_ingredients = [
  { step_id: 1, ingredient_id: 4, ingredient_name: 'salt', ingredient_quantity: 0.06 },
  { step_id: 2, ingredient_id: 6, ingredient_name: 'pasta', ingredient_quantity: 2.00 },
  { step_id: 3, ingredient_id: 7, ingredient_name: 'butter', ingredient_quantity: 0.5 },
  { step_id: 3, ingredient_id: 5, ingredient_name: 'cheese', ingredient_quantity: 1.25 },
  { step_id: 3, ingredient_id: 9, ingredient_name: 'seasoning', ingredient_quantity: 0.4 },
  { step_id: 5, ingredient_id: 6, ingredient_name: 'pasta', ingredient_quantity: 3.0 },
  { step_id: 7, ingredient_id: 5, ingredient_name: 'cheese', ingredient_quantity: 1.75 },
  { step_id: 7, ingredient_id: 8, ingredient_name: 'tomatoes', ingredient_quantity: 3.5 },
  { step_id: 7, ingredient_id: 9, ingredient_name: 'seasoning', ingredient_quantity: 0.75 },
  { step_id: 8, ingredient_id: 1, ingredient_name: 'flour', ingredient_quantity: 5.0 },
  { step_id: 8, ingredient_id: 2, ingredient_name: 'eggs', ingredient_quantity: 2.0 },
  { step_id: 8, ingredient_id: 3, ingredient_name: 'milk', ingredient_quantity: 1.5 },
  { step_id: 9, ingredient_id: 7, ingredient_name: 'butter', ingredient_quantity: 3.0 },
];

exports.step_ingredients = step_ingredients

exports.seed = function(knex) {
  return knex('step_ingredients').insert(step_ingredients)
};
