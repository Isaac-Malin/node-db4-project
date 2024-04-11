/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').truncate()
  await knex('recipes').insert([
    {recipe_name: 'Chicken and Rice'},
    {recipe_name: 'Lemon Chicken and Rice'},
    {recipe_name: 'Teriyaki Chicken Rice Bowls'}
  ]);

  await knex('steps').truncate()
  await knex('steps').insert([
    
  ]);

  await knex('ingredients').truncate()
  await knex('ingredients').insert([

  ]);

  await knex('step_ingredients').truncate()
  await knex('step_ingredients').insert([
    
  ]);
};
