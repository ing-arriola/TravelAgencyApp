const express = require('express')

const router = express.Router()


const companyController = require('../controllers/companyController')
const homeController = require('../controllers/homeController')
const tripsController = require('../controllers/tripsController')
const opinionsController = require('../controllers/opinionsController')
module.exports = function(){
    router.get('/',homeController.queryToDB)
    
    router.get('/company',companyController.infoCompany)

    router.get('/trips',tripsController.queryToTravels)

    router.get('/trips/:id', tripsController.queryToTravel)

    router.get('/opinions',opinionsController.showOpinions)

    router.post('/opinions',opinionsController.insertOpinions)

    return router
}