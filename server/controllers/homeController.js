const Travel = require('../models/Travels')
const Opinion = require('../models/Opinions')
exports.queryToDB= (req,res)=>{
    const promises=[] //Array of promises in order to get data from two queries and pass the results to the view
    
    promises.push(
        Travel.findAll({
            limit: 3
        })
    )

    promises.push(
        Opinion.findAll({
            limit: 3
        })
    )

    //Execute the promises

    const result=Promise.all(promises)
    
    result.then(result => res.render('index',{
            page:"Cooming Soon",
            clase:'home',
            travels: result[0],
            opinions: result[1]
        }))
        .catch(error => console.log(error))
}