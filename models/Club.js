const mongoose =require( 'mongoose')

const Schema = mongoose.Schema

const clubSchema = new Schema({
    clubName:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    description: String,
    picture: String

}) 

module.exports=mongoose.model('Club',clubSchema)