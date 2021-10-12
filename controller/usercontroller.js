const Users = require('../model/UserSchema');
const jwt = require('jsonwebtoken');

//To create a new user:

const create_user = async (req,res) => {
  const user = new Users({
    Name : req.body.Name,
    Email: req.body.Email,
    Password : req.body.Password,
    BloodGroup: req.body.BloodGroup,
    AvailableStatus: req.body.AvailableStatus
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser)
  }
  catch(error){
    res.status(400).send(error)
  }
}

// for Login in :

const login_user = (req,res) =>{
  var Email = req.body.Email
  var Password = req.body.Password
  Users.find({Email:Email,Password:Password})
  .exec()
  .then((user)=>{
    if(Object.keys(user).length !== 0){
      const token=jwt.sign({Email},'xyz')
    res.status(201).json({
      message:'You are logged in successfully',
      User:user,
      Token:token
    });
    }else{
      res.send('Invaid username or password..')
    }
  })
  .catch((err)=>{
    res.json({
      Error:err
    })
  })
}

module.exports = {
  create_user,
  login_user
}