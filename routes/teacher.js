const express=require('express')
const router=express.Router()
const Teacher=require('../models/Teacher')

// add teacher  
router.post("/addTeacher", async (req, res) => {
    const { name,lastName,gender,picture,level } = req.body;
    try {
        const teacher = new Teacher({ name,lastName,gender,picture,level });

        await teacher.save();
  
        const payload = {
            _id:teacher.id,
        }
  
        res.status(200).send({ msg: "Teacher added", teacher });

    } catch (error) {
      res.status(500).send({ msg: "server error" });
    }
  });

//get all teacher
router.get('/allTeacher',async (req,res)=>{
    await Teacher.find()
    .then(teacher=>res.send(teacher))
    .catch(err=>console.log(err))
})



//delete teacher
router.delete('/deleteTeacher/:_id',(req,res)=>{
    const {_id}=req.params
    Teacher.findOneAndDelete({_id})
    .then(teachers=>res.send(teachers))
    .catch(err=>console.log(err))
})

// get teacher by id
router.get("/teacher/:_id",(req,res)=>{
    const {_id}=req.params
    Teacher.findOne({_id})
    .then(teachers=>res.send(teachers))
    .catch(err=>console.log(err))
})

// edit teacher
router.put("/editTeacher/:_id",(req,res)=>{
const {_id}=req.params
const {name,lastName,gender,picture,level}=req.body

Teacher.findOneAndUpdate({_id},{name,lastName,gender,picture,level})
.then(teachers=>res.send(teachers))
.catch(err=>console.log(err))
})

module.exports=router