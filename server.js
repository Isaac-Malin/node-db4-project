const express = require('express')
const router = require('./recipeBook/recipe-router')
const server = express()

server.use(express.json())
server.use('/api/recipes', router);


server.use((err, res, req, next) => {
  res.status(res.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = server