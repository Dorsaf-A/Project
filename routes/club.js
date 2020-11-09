const express=require('express')
const router=express.Router()
const Club=require('../models/Club')

// add club
router.post("/addClub", async (req, res) => {
    const { clubName,price,description,picture } = req.body;
    try {
        const club = new Club({ clubName,price,description,picture });

        await club.save();
  
        const payload = {
            _id:club.id,
        }
  
        res.status(200).send({ msg: "Club saved", club });
  
      //res.status(200).send({ msg: "user saved", user });
    } catch (error) {
      res.status(500).send({ msg: "server error" });
    }
  });

//get all clubs
router.get('/allClubs',async (req,res)=>{
    await Club.find()
    .then(clubs=>res.send(clubs))
    .catch(err=>console.log(err))
})



//delete club
router.delete('/deleteClub/:_id',async (req,res)=>{
    const {_id}=req.params
    await Club.findOneAndDelete({_id})
    .then(clubs=>res.send(clubs))
    .catch(err=>console.log(err))
})

// get club by id
router.get("/club/:_id",async (req,res)=>{
    const {_id}=req.params
    await Club.findOne({_id})
    .then(clubs=>res.send(clubs))
    .catch(err=>console.log(err))
})

// edit club
router.put("/editClub/:_id",async (req,res)=>{
const {_id}=req.params
const {clubName,price,description,picture}=req.body

await Club.findOneAndUpdate({_id},{clubName,price,description,picture})
.then(clubs=>res.send(clubs))
.catch(err=>console.log(err))
})


module.exports=router
