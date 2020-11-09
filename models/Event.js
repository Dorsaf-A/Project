const mongoose =require( 'mongoose')

const Schema = mongoose.Schema

const evntSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        required:true
    },
    description: String
}) 

module.exports=mongoose.model('Evnt',evntSchema)