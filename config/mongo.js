const mongoose = require('mongoose'); //Declaracion del paquete Mongoose

const dbConnect = ()=>{
    const DB_URI = process.env.DB_URI; //Constante
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },(err,res) =>{
        //Vamos a recibir un error o una respuesta
        if(!err){
            console.log('*** Conexión correcta***')
        }else{
            console.log('***ERROR DE CONEXIÓN***')
        }
    });
    //La función devuelve una función callback
}

module.exports= dbConnect;
//Exportar función


//DB_URI: mongodb+srv://antonioenralv:xtmqNsLEfN29GH6e@cluster0.43glcut.mongodb.net/?retryWrites=true&w=majority