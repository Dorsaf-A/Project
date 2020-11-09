const mongoose =require( 'mongoose')

const Schema = mongoose.Schema

const teacherSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    picture: String,
    level:{
        type: String,
        required:true
    }
}) 

module.exports=mongoose.model('Teacher',teacherSchema)