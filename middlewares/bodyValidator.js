const {body, validationResult} = require("express-validator")


const registerRules =()=>[

    body("name","Name is required").notEmpty(),
    body("lastName","Last name is required").notEmpty(),
    body("passWord","Password must contain at least 6 characters").isLength({min:6,max:20}),
    body("email","Invalid email").isEmail()
]

const loginRules =()=>[
    body("passWord","Password must contain at least 6 characters").isLength({min:6,max:20}),
    body("email","Invalid email").isEmail()

]

const validator = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array().map(el=>({msg:el.msg}))})
    }
    next()
}

module.exports = {validator ,loginRules,registerRules}