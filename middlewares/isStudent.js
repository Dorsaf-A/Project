const jwt = require("jsonwebtoken");
const Student = require("../models/Student");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(400).send({ msg: "Unauthorized" });
    }
    const decoded = await jwt.verify(token, process.env.secretOrKey);
    const student = await Student.findById(decoded._id).select("-passWord")

    if (!student) {
      return res.status(400).send({ msg: "Unauthorized" });
    }

    req.student = student;
    console.log(decoded);
    next();
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};