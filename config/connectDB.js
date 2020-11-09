const mongoose = require('mongoose')
require("dotenv").config({path : "./config/.env"})

module.exports = async function (){
    mongoose.connect(process.env.MONGOURI,{ useNewUrlParser: true , useUnifiedTopology: true })
    .then(()=>console.log('DB connected'))
    .catch(err=>console.log(err))
}