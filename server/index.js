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

//load routes

app.use('/',routes())

app.listen(3000)