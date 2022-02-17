const steps = [
  { step_number: 1, step_instructions: 'Salt pot of water and bring to a boil', recipe_id: 1 },
  { step_number: 2, step_instructions: 'Add pasta to boiling water and boil for 8 minutes', recipe_id: 1 },
  { step_number: 3, step_instructions: 'Strain pasta, add butter, cheese and seasoning', recipe_id: 1 },
  { step_number: 4, step_instructions: 'Stir for another 2 mins and serve', recipe_id: 1 },
  { step_number: 1, step_instructions: 'Boil fresh pasta for 3 minutes', recipe_id: 2 },
  { step_number: 2, step_instructions: 'Line baking dish with boiled pasta', recipe_id: 2 },
  { step_number: 3, step_instructions: 'Add in cheese, tomatoes, and seasoning and bake for 45 mins at 375 degrees', recipe_id: 2 },
  { step_number: 1, step_instructions: 'Mix flour, eggs, and milk in a bowl', recipe_id: 3 },
  { step_number: 2, step_instructions: 'heat butter in a pan', recipe_id: 3 },
  { step_number: 3, step_instructions: 'Add desired amount of batter to pan and cook til golden brown', recipe_id: 3 },
];

exports.steps = steps;

exports.seed = function(knex) {
  return knex('steps').insert(steps)
};
