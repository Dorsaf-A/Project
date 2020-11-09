const mongoose =require( 'mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    birthDate: String,
    gender:String,
    profilePicture:String,
    parentName:String,
    parentPhone:Number,
    note:String,
    level:Number,
    email:{
        type: String,
        required:true
    },
    passWord:{
        type: String,
        required:true
    }
}) 

module.exports=mongoose.model('Student',studentSchema)