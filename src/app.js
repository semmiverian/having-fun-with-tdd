const express = require('express')
const app = express()
const mongoose = require('mongoose')

console.log(process.env.NODE_ENV)

const articleRoute = require('./route/articleRoute')

const environment = process.env.NODE_ENV || 'development'

mongoose.connect(`mongodb://localhost:27017/article-zen-fox-${environment}`)

app.use(express.urlencoded({ extended: false}))
app.use(express.json({}))

app.get('/', (req, res) => {
  res.status(200).json({message: 'trust me it works'})
})

app.use('/articles', articleRoute)

// app.listen(3000, () => {
//   console.log('App listening on port 3000!');
// });

module.exports = app