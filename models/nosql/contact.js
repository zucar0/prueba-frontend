const mongoose = require("mongoose")

const ContactScheme = new mongoose.Schema(
    {
        //Se declara toda al estructura del objeto
        name:{
            type:String
        },
        number:{
            type:Number
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true //Va a ser un tipo de dato único
        }
    },
    {
        //Campos para el manejo de las marcas de tiempo (creación y actualización)
        timeStamps:true,
        versionKey:false, 
     }
);

//Exportación del modelo de Mongose referente a la colección (db nosql)
module.exports = mongoose.model("contacts", ContactScheme)