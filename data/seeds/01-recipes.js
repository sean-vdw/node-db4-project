
const recipes = [
  { recipe_name: 'Mac and Cheese' },
  { recipe_name: 'Lasagna' },
  { recipe_name: 'Waffles' },
];

exports.recipes = recipes;

exports.seed = function(knex) {
  return knex('recipes').insert(recipes)
};
