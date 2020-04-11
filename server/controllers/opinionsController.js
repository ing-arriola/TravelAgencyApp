const Opinion = require('../models/Opinions')

exports.insertOpinions = (req,res)=>{
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
}

exports.showOpinions = (req,res)=>{
    Opinion.findAll()
        .then(
            opinions => res.render('opinions',{
                    page:"Opinions",
                    opinions
                })
        )
}