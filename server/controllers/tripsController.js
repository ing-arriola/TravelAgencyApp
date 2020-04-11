const Travel = require('../models/Travels')
exports.queryToTravels = (req,res)=>{
    Travel.findAll()
        .then(travels => res.render('trips',{
            page:"Cooming Soon",
            travels
        }))
        .catch(error => console.log(error))
    }

exports.queryToTravel = (req,res)=>{
    Travel.findByPk(req.params.id)
        .then(travel => res.render('travel',{
            travel
        }))
        .catch(error => console.log(error))
}