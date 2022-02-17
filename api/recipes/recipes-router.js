const express = require('express');
// Middleware here...
const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Recipes.getAll()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(next);
});



module.exports = router;