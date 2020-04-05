const Sequelize = require('sequelize')

const db = require('../config/database')

const Travel = db.define('travel',{
    tittle:{
        type:Sequelize.STRING
    },
    price:{
        type:Sequelize.STRING
    },
    start_date:{
        type:Sequelize.DATE
    },
    end_date:{
        type:Sequelize.DATE
    }
    ,
    image:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    }
    ,
    availables:{
        type:Sequelize.STRING
    }
})

module.exports = Travel