const express = require('express')
const router = express.Router()
const Users = require('../controllers/http/handlers/users')
const Greetings = require('../controllers/http/handlers/greetings')
const Cars = require('../controllers/http/handlers/cars')
const FeaturedCar = require('../controllers/http/handlers/featured_cars')
const Accounts = require('../controllers/http/handlers/account')

module.exports = router
    //for greetings-modules
    .get('/hello', Greetings.get)

    //for users-module 
    .post('/users', Users.post)
    // .post('/register', Users.post)


    //for other-module
    .get('/cars', Cars.get)

    //featured cars
    .get('/featured-car', FeaturedCar.get)

    //accounts
    .post('/register', Accounts.post)