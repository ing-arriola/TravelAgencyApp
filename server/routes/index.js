const express = require('express')

const router = express.Router()

const Travel = require('../models/Travels')

module.exports = function(){
    router.get('/',(req,res)=>{
        res.render('index')
    })
    
    router.get('/company',(req,res)=>{
        res.render('company',{
            page:"About us"
        })
    })

    router.get('/travels',(req,res)=>{
        Travel.findAll()
            .then(travels => res.render('travels',{
                page:"Cooming Soon",
                travels
            }))
            .catch(error => console.log(error))
    })

    return router
}