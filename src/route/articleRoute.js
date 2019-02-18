const express = require('express')
const routes = express.Router()

const Article = require('../model/article')

routes.post('/', (req, res) => {
  // console.log(req.body)
  Article
    .create({
      title: req.body.title,
      description: req.body.description
    })
    .then(article => {
      // console.log('masuk sini 2?')
      res.status(201).json(article)
    })
    .catch(err => {
      console.log(err)

      res.status(500).json({message: err.message})
    })
})

routes.get('/', (req, res) => {
  Article
    .find({})
    .then(articles => {
      res.status(200).json(articles)
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
})

module.exports = routes