const express = require('express')

const router = express.Router()

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
        res.render('travels',{
            page:"Cooming Soon"
        })
    })

    return router
}