'use strict'

const User = require('../models/User');
//const bcrypt = require('bcryptjs');

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

  //const hashedPassword = bcrypt.hashSync(req.body.userFormData.password, 10) 

  let user = new User();
    user.username = req.body.username
    user.password = req.body.password
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

module.exports = {
    getUser,
    getUsers,
    saveUser,
    updateUser,
    deleteUser,
    //loginUser
}