'use strict'

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const key = require("../config/config")

function getUser(req, res){
    let userId = req.params.userId;

    User.findById(userId, (err, user) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!user) return res.status(404).send({message: 'THE USER DOES NOT EXIST ${err}'})

    res.status(200).send({user: user})
    })
}

function getUsers(req, res){
    User.find({}, (err, users) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!users) return res.status(404).send({message: 'THE USERS DO NOT EXIST ${err}'})
    
    res.status(200).send({users: users})
    })
}

function saveUser(req, res){
  console.log('POST /api/user');
  console.log(req.body);

  if(
     req.body.username == "" ||
     req.body.password == "" ||
     req.body.email == "" )  return res.send({message:"Please complete all the fields"});

     User.findOne({username: req.body.username}).then((user)=> {
        if(user!==null) return res.send({message: "the username already exists"}) // if username exists, provide error
          console.log(req.file)
        })
        
        const hashedPassword = bcrypt.hashSync(req.body.password, 10) 

        let user = new User();
          user.username = req.body.username
          user.password = hashedPassword
          user.email = req.body.email
          user.firstname = req.body.firstname
          user.lastname = req.body.lastname

      user.save((err, userStored) => {
        if(err) return res.status(500).send({message: 'ERROR WHEN SAVING IN THE DATABASE ${err}'})
        res.status(200).send({user: userStored})
      });
}

function updateUser(req, res){
    let userId = req.params.userId;
    let update = req.body;
  
    User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN UPDATING USER ${err}'})
      res.status(200).send({user: userUpdate})
    })
}

function deleteUser(req, res){
    let userId = req.params.userId;

    User.findById(userId, (err, user) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE USER ${err}'})
  
      user.remove(err => {
        if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE USER ${err}'})
        res.status(200).send({message: 'USER HAS BEEN REMOVED'})
      })
    })
}

function loginUser(req, res){

  User.findOne({username: req.body.username})
  .then((user)=> {
      console.log(user)
      if (user==null) {//if user don't exist
          return res.status(500).send('Enter a valid username'); 
      } else { //if user exists, compare pass with hash
          if (bcrypt.compareSync(req.body.password, user.password)) { //if true
              const payload = {
                  id: user.id,
                  username: user.username,
              };
              const options = {expiresIn: 2592000};
              jwt.sign(
              payload,
              key.secretOrKey,
              options,
              (err, token) => {
                  if(err){
                   return res.json({
                      success: false,
                      token: "There was an error"
                  });
                  }else {
                   return res.json({
                      success: true,
                      token: token
                  });
                  }
              }
              )
          } else {
              return res.status(400).send({message: "wrong password"}); 
          }
      }      
  })
  .catch((err) => { 
  res.json(err).status(500)
  }) 
}  

 //login user data w google
 //const userRedirect = (req, res) => {
  //const payload = {
      //id: req.user.id,
      //username: req.user.username,
      
  //};
  //const options = {expiresIn: 2592000};
  
  //jwt.sign(
  //payload,
  //key.secretOrKey,
  //options,
  //(err, token) => {
      //if(err){
       //return res.json({
          //payload:payload,
         // success: false,
          //token: "There was an error",
      //});
      //}else {
          // res.json({
          // payload: payload,
          // success: true,
          // token: token});
          // console.log(res)
          //res.redirect(`http://localhost:3000/profile/${token}`) 
     // }
  //}
  //)
//};

//const getUserGoogle = (req,res) =>{
  //let userRequested = req.params._id;  
  //User
  //.findOne({_id:userRequested})
  //.then((user)=>{res.json(user).status(204)}
//)}; 

module.exports = {
    getUser,
    getUsers,
    saveUser,
    updateUser,
    deleteUser,
    loginUser
    //userRedirect,
    //getUserGoogle
}