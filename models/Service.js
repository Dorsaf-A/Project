const mongoose =require( 'mongoose')

const Schema = mongoose.Schema

const serviceSchema = new Schema({
    serviceType:{
        type: String,
        required:true
    },
    price:{
        type: String,
        required:true
    },
    description: String,
}) 

module.exports=mongoose.model('Service',serviceSchema)