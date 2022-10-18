const {BadRequest} = require("../errors")
const jwt = require('jsonwebtoken')
const login = async (req, res) =>{
    const {username,password} = req.body
    if (!username || !password){
        throw new  BadRequest('Please provide username and pasword')
    }
    
    const id = new Date().getDate();
    
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    // console.log(username,password);
    
    res.status(200).json({msg:`user created`,token})
}

const dashboard = async (req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100)
    console.log(req.user);
    res.status(200).json({msg:`Hello ${req.user.username}`,secret:`Your numebr is ${luckyNumber}`})

    
}

module.exports = {
    login,dashboard
}