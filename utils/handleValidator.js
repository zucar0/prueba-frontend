const { validationResult} = require("express-validators");
const validateResults = (req, res, next) =>{
    try{
        validationResult(req).throw()
        return next()
    } catch(err){
        res.status(403)
        res.send({errors: err.array()})
    }
};

module.exports = validateResults