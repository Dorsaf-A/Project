const express=require('express')
const router=express.Router()
const Service=require('../models/Service')

// add service  
router.post("/addService", async (req, res) => {
    const { type,price,description } = req.body;
    try {
        const service = new Service({ type,price,description });

        await service.save();
  
        const payload = {
            _id:service.id,
        }
  
        res.status(200).send({ msg: "Service added", service });

    } catch (error) {
      res.status(500).send({ msg: "server error" });
    }
  });

//get all services
router.get('/allServices',async (req,res)=>{
    await Service.find()
    .then(services=>res.send(services))
    .catch(err=>console.log(err))
})



//delete service
router.delete('/deleteService/:_id',(req,res)=>{
    const {_id}=req.params
    Service.findOneAndDelete({_id})
    .then(services=>res.send(services))
    .catch(err=>console.log(err))
})

// get service by id
router.get("/service/:_id",(req,res)=>{
    const {_id}=req.params
    Service.findOne({_id})
    .then(services=>res.send(services))
    .catch(err=>console.log(err))
})

// edit service
router.put("/editService/:_id",(req,res)=>{
const {_id}=req.params
const {type,price,description}=req.body

Service.findOneAndUpdate({_id},{type,price,description})
.then(services=>res.send(services))
.catch(err=>console.log(err))
})

module.exports=router