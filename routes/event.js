const express=require('express')
const router=express.Router()
const Evnt=require('../models/Event')

// add evnt
router.post("/addEvnt", async (req, res) => {
    const { title,date,description } = req.body;
    try {
        const evnt = new Evnt({ title,date,description });

        await evnt.save();
  
        const payload = {
            _id:evnt.id,
        }
  
        res.status(200).send({ msg: "Evnt added", evnt });

    } catch (error) {
      res.status(500).send({ msg: "server error" });
    }
  });

//get all evnts
router.get('/allEvnt',async (req,res)=>{
    await Evnt.find()
    .then(evnts=>res.send(evnts))
    .catch(err=>console.log(err))
})



//delete evnt
router.delete('/deleteEvnt/:_id',(req,res)=>{
    const {_id}=req.params
    Evnt.findOneAndDelete({_id})
    .then(evnts=>res.send(evnts))
    .catch(err=>console.log(err))
})

// get evnt by id
router.get("/evnt/:_id",(req,res)=>{
    const {_id}=req.params
    Evnt.findOne({_id})
    .then(evnts=>res.send(evnts))
    .catch(err=>console.log(err))
})

// edit evnt
router.put("/editEvnt/:_id",(req,res)=>{
const {_id}=req.params
const {title,date,description}=req.body

Evnt.findOneAndUpdate({_id},{title,date,description})
.then(evnts=>res.send(evnts))
.catch(err=>console.log(err))
})

module.exports=router
