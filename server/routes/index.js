const express = require('express')

const router = express.Router()

const Travel = require('../models/Travels')
const Opinion = require('../models/Opinions')

module.exports = function(){
    router.get('/',(req,res)=>{
        
        Travel.findAll({
            limit: 3
        })
            .then(travels => res.render('index',{
                page:"Cooming Soon",
                clase:'home',
                travels
            }))
            .catch(error => console.log(error))
    })
    
    router.get('/company',(req,res)=>{
        res.render('company',{
            page:"About us"
        })
    })

    router.get('/trips',(req,res)=>{
        Travel.findAll()
            .then(travels => res.render('trips',{
                page:"Cooming Soon",
                travels
            }))
            .catch(error => console.log(error))
    })

    router.get('/trips/:id',(req,res)=>{
        Travel.findByPk(req.params.id)
            .then(travel => res.render('travel',{
                travel
            }))
            .catch(error => console.log(error))
    })

    router.get('/opinions',(req,res)=>{
        Opinion.findAll()
            .then(
                opinions => res.render('opinions',{
                        page:"Opinions",
                        opinions
                    })
            )
    })

    router.post('/opinions',(req,res)=>{
        let {name,email,message} = req.body
        let errors = []
        //Validation
        if(!name){
            errors.push(
                {'message':'Add your name'}
            )
        }
        if(!email){
            errors.push(
                {'message':'Add your E-mail'}
            )
        }
        if(!message){
            errors.push(
                {'message':'Please add your Opinion'}
            )
        }
        //Look for errors
        if(errors.length){
            //Show the page with errors
            res.render('opinions',{
                errors,
                name,
                email,
                message
            })
        }else{
            //store the data on DB
            Opinion.create({
                name,
                email,
                message
            })
            .then(opinion => res.redirect('/opinions'))
            .catch(error => console.log(error))
        }
    })

    return router
}