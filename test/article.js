const chai = require('chai')
const chaiHttp = require('chai-http')
const {expect} = chai
const app = require('../src/app')
const Article = require('../src/model/article')

chai.use(chaiHttp)

let token = ''

before(function (done) {
  Article
    .deleteMany({})
    .then(function () {
      done()
    })
})

after(function (done) {
  Article
    .deleteMany({})
    .then(function () {
      done()
    })
})

it('should return trust me it works when request to / with GET Request', function (done) {
  chai
    .request(app)
    .get('/')
    .end(function (err, res) {
      expect(err).to.be.null
      expect(res).to.have.status(200)

      expect(res.body.message).to.equal('trust me it works')
      done()
    })
})


describe('CRUD Articles', function () {
  before(function () {
    // Bikin token 

    // chai
    //   .post('/login')
    //   .end(function (err, res) {
    //     token = res.body.token
    //   })
  })


  it('should create a new article when request to /articles with POST request', function (done) {
    const newArticle = {
      'title': 'TDD is fun',
      'description': 'really? 🧐'
    }
    
    chai
      .request(app)
      .post('/articles')
      .send(newArticle)
      .end(function (err, res) {
        // console.log('kepanggil ga?')
        expect(err).to.be.null
        expect(res).to.have.status(201)
        
        expect(res.body).to.have.property('title')
        expect(res.body).to.have.property('description')
  
        expect(res.body.title).to.equal(newArticle.title)
        expect(res.body.description).to.equal(newArticle.description)
  
        done()
      })
  })
  
  it('should return an array of articles object when request to /articles with GET request', function (done) {
    chai
      .request(app)
      .get('/articles')
      .end(function (err, res) {
        expect(err).to.be.null
        expect(res).to.have.status(200)
  
        expect(res.body).to.be.an('array')
  
        done()
      })
  })
})