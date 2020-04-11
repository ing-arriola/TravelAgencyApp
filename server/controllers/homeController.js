const Travel = require('../models/Travels')
const Opinion = require('../models/Opinions')
exports.queryToDB= async (req,res)=>{
    
    const travels = await Travel.findAll({limit: 3})
    const opinions = await Opinion.findAll({limit: 3})
    res.render('index',{
        page:"Cooming Soon",
        clase:'home',
        travels,
        opinions
    })
}