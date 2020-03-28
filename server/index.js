//import express

const express=require('express')

//SetUp Express

const app = express()

app.use('/',(req,res)=>{
    res.send('Hello world in NodeJS')
})

app.listen(3000)