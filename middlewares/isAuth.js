const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(400).send({ msg: "Unauthorized" });
    }
    const decoded = await jwt.verify(token, process.env.secretOrKey);
    const user = await User.findById(decoded._id).select("-passWord")

    if (!user) {
      return res.status(400).send({ msg: "Unauthorized" });
    }

    req.user = user;
    console.log(decoded);
    next();
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};
