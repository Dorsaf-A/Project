const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const {
  validator,
  loginRules,
  registerRules,
} = require("../middlewares/bodyValidator");
const isAuth = require("../middlewares/isAuth")
const User = require("../models/User");

router.post("/register", registerRules(), validator, async (req, res) => {
  const { name, lastName, email, passWord } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ msg: "User already exists" });
    }
    user = new User({ name, lastName, email, passWord });

    //hash password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(passWord, salt);

    user.passWord = hashedPassword;

    await user.save();

    const payload = {
        _id:user.id,
    }

    const token = await jwt.sign(payload,process.env.secretOrKey)

    res.status(200).send({ msg: "Login success", user:convert(user) ,token});

    //res.status(200).send({ msg: "user saved", user });
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
});

router.post("/login", loginRules(), validator, async (req, res) => {
  const { email, passWord } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: "Bad credentials" });
    }
    const isMatch = await bcrypt.compare(passWord, user.passWord);

    if (!isMatch) {
      return res.status(400).send({ msg: "Bad credentials" });
    }

    //sign the user
    const payload = {
        _id:user.id,
    }

    const token = await jwt.sign(payload,process.env.secretOrKey)

    res.send({ msg: "Login success",user ,token});
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
});

router.get("/me",isAuth,(req,res)=>{
    res.status(200).send({user:req.user})
})


const convert =({name,lastName,email,_id})=>{
    name,
    lastName,
    email,
    _id
}

module.exports = router;
