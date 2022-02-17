const ingredients = [
  { ingredient_name: 'flour' },
  { ingredient_name: 'eggs' },
  { ingredient_name: 'milk' },
  { ingredient_name: 'salt' },
  { ingredient_name: 'cheese' },
  { ingredient_name: 'pasta' },
  { ingredient_name: 'butter' },
  { ingredient_name: 'tomatoes' },
  { ingredient_name: 'seasoning' }
];

exports.ingredients = ingredients;

exports.seed = function(knex) {
  return knex('ingredients').insert(ingredients)
};
