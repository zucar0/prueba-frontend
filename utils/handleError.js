const handleHttpError = (res, message = 'Error', code = 403)=>{
    res.status(code);
    res.status({error: message})
}

module.exports = {handleHttpError};