const router = require('express').Router()

const GithubController = require('../controllers/github')

router.get('/github', GithubController.get)

module.exports = router