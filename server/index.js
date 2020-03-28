//import express

const express=require('express')
const routes = require("./routes")

//SetUp Express

const app = express()

//load routes

app.use('/',routes())

app.listen(3000)