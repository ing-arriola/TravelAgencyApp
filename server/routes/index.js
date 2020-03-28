const express = require('express')

const router = express.Router()

module.exports = function(){
    router.get('/',(req,res)=>{
        res.send('Hello world in NodeJS')
    })
    
    router.get('/company',(req,res)=>{
        res.send('Our company')
    })

    return router
}