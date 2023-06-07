const customeHeader = (req, res, next) =>{
    
    try{
        const apiKey = req.headers.api_key;
        if(apiKey === 'antonio-01'){
            next()
        }else{
            res.status(403)
            res.send({error: "API_KEY_INCORRECTA"})
        }
    }catch(e){
        res.status(403)
        res.send({error: "INCIDENTE_EN_CUSTOME_HEADER"})
    }
}

module.exports = customeHeader