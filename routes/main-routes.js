const express = require('express')
const router = express.Router()
const Users = require('../controllers/http/handlers/users')
const Greetings = require('../controllers/http/handlers/greetings')
const Cars = require('../controllers/http/handlers/cars')

module.exports = router
    //for greetings-modules
    .get('/hello', Greetings.get)

    //for users-module 
    .post('/users', Users.post)
    .post('/register', Users.post)


    //for other-module
    .get('/cars', Cars.get)