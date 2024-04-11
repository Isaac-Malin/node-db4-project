const db = require('../db-config')

function getById(recipe_id) {
  return Promise.resolve(`awesome recipe with id ${recipe_id}`)
}

module.exports = {
  getById
}