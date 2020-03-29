//import express

const express=require('express')
const routes = require("./routes")
const paths=require('path')
//SetUp Express

const app = express()

//enable pug

app.set('view engine','pug')

//add viewa

app.set('views',paths.join(__dirname,'./views'))

//Load a static directory

app.use(express.static('public'))

//Show actual year
app.use((req,res,next)=>{
    const date=new Date()
    //locals are internals var of nodeJS
    //actualYear can be used on any file of this app
    res.locals.actualYear= date.getFullYear()
    return next()
})

//load routes

app.use('/',routes())

app.listen(3000)