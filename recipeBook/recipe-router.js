const router = require('express').Router()

router.get('/', (req, res) => {
  res.json({
    message: "here are the recipes"
  })
})

module.exports = router