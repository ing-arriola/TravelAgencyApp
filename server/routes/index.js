const express = require('express')

const router = express.Router()

module.exports = function(){
    router.get('/',(req,res)=>{
        res.render('index')
    })
    
    router.get('/company',(req,res)=>{
        res.render('company')
    })

    return router
}