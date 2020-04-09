const Sequelize = require('sequelize')

const db = require('../config/database')

const Opinion = db.define('opinions',{
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    message:{
        type:Sequelize.STRING
    }
})

module.exports = Opinion