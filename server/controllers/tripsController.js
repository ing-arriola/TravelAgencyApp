const Travel = require('../models/Travels')
exports.queryToTravels = async (req,res)=>{
    const travels = await Travel.findAll()
        res.render('trips',{
            page:"Cooming Soon",
            travels
        })
    }

exports.queryToTravel = async (req,res)=>{
    const travel= await Travel.findByPk(req.params.id)
    res.render('travel',{
        travel
    })
}