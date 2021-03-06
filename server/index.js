//import express
const express=require('express')
const paths=require('path')
const bodyParser=require('body-parser')
const routes = require("./routes")
const configs=require('./config')

require('dotenv').config({path: 'variables.env'})


//db.authenticate()
//    .then(()=>console.log('Db connected'))
//    .catch(error=>console.error(error))

//SetUp Express

const app = express()

//enable pug

app.set('view engine','pug')

//add viewa

app.set('views',paths.join(__dirname,'./views'))

//Load a static directory

app.use(express.static('public'))

//Check if the enviroment is dev or prod

const config=configs[app.get('env')]

//var for website
app.locals.title=config.sitename

//Show actual year
app.use((req,res,next)=>{
    const date=new Date()
    //locals are internals var of nodeJS
    //actualYear can be used on any file of this app
    res.locals.actualYear= date.getFullYear()
    res.locals.ruta=req.path
    return next()
})

app.use(bodyParser.urlencoded({extended:true}))

//load routes

app.use('/',routes())

//Host & port for the App, these could be dinamically assigned
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || '3000'
app.listen(port,host, ()=> {
    console.log('App is up')
})