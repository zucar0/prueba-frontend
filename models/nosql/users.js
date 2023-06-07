const mongoose = require("mongose")

const UserScheme = new mongoose.Schema(
    {
        //Se declara toda al estructura del objeto
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true //Va a ser un tipo de dato único
        },
        password:{
            type:String
        },
        role:{
            type:["user","admin"],
            default: "user",
        }
    },
    {
        //Campos para el manejo de las marcas de tiempo (creación y actualización)
        timeStamps:true,
        versionKey:false, 
     }
);

//Exportación del modelo de Mongose referente a la colección (db nosql)
module.exports = mongoose.model("users", UserScheme)