const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const {
  validator,
  loginRules,
  registerRules,
} = require("../middlewares/bodyValidator");
const isStudent = require("../middlewares/isStudent")
const Student = require("../models/Student");

router.post("/addStudent", registerRules(), validator, async (req, res) => {
  const {  name,lastName,birthDate,gender,profilePicture,parentName,parentPhone,note,level,email,passWord } = req.body;
  try {
    let student = await Student.findOne({ email });
    if (student) {
      return res.status(400).send({ msg: "student already exists" });
    }
    student = new Student({ name,lastName,birthDate,gender,profilePicture,parentName,parentPhone,note,level,email,passWord });

    //hash password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(passWord, salt);

    student.passWord = hashedPassword;

    await student.save();

    const payload = {
        _id:student.id,
    }

    const token = await jwt.sign(payload,process.env.secretOrKey)

    res.status(200).send({ msg: "Login success", student:convert(student) ,token});

    //res.status(200).send({ msg: "student saved", student });
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
});

router.post("/loginStudent", loginRules(), validator, async (req, res) => {
  const { email, passWord } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).send({ msg: "Bad credentials" });
    }
    const isMatch = await bcrypt.compare(passWord, student.passWord);

    if (!isMatch) {
      return res.status(400).send({ msg: "Bad credentials" });
    }

    //sign the student
    const payload = {
        _id:student._id,
    }

    const token = await jwt.sign(payload,process.env.secretOrKey)

    res.send({ msg: "Login success", student ,token});
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
});

router.get("/me",isStudent,(req,res)=>{
    res.status(200).send({student:req.student})
})




//get all students
router.get('/allStudents',async (req,res)=>{
    await Student.find()
    .then(students=>res.send(students))
    .catch(err=>console.log(err))
})



//delete student
router.delete('/deleteStudent/:_id',async (req,res)=>{
    const {_id}=req.params
    await Student.findOneAndDelete({_id})
    .then(students=>res.send(students))
    .catch(err=>console.log(err))
})

// get student by id
router.get("/studentById/:_id",(req,res)=>{
    const {_id}=req.params
    Student.findOne({_id})
    .then(students=>res.send(students))
    .catch(err=>console.log(err))
})

// edit student
router.put("/editStudent/:_id",async (req,res)=>{
const {_id}=req.params
const {name,lastName,birthDate,gender,profilePicture,parentName,parentPhone,note,level,email,passWord}=req.body
try {
  const student = await Student.findOneAndUpdate({_id},{name,lastName,birthDate,gender,profilePicture,parentName,parentPhone,note,level,email,passWord})

  await student.save()
  const payload = {
      _id:student._id,
  }
  res.send({student});
} catch (error) {
  res.status(500).send({ msg: "server error" });
}
});






const convert =({name,lastName,email,_id})=>{
    name,
    lastName,
    email,
    _id
}

module.exports = router;
