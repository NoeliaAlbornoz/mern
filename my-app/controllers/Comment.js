'use strict'

const Comment = require('../models/Comment');

function getComment(req, res){
    let commentId = req.params.commentId;

    Comment.findById(commentId, (err, comment) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!comment) return res.status(404).send({message: 'THE COMMENT DOES NOT EXIST ${err}'})

    res.status(200).send({comment: comment})
    })
}

function getComments(req, res){
    Comment.find({}, (err, comments) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!comments) return res.status(404).send({message: 'THE COMMENTS DO NOT EXIST ${err}'})
    
    res.status(200).send({comments: comments})
    })
}

function saveComment(req, res){
  console.log('POST /api/comment');
  console.log(req.body);
  
  let comment = new Comment();
    comment.itineraryId = req.body.itineraryId;
    comment.userId = req.body.userId;

    comment.save((err, commentStored) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN SAVING IN THE DATABASE ${err}'})
      res.status(200).send({comment: commentStored})
    })  
}

function deleteComment(req, res){
    let commentId = req.params.commentId;

    Comment.findById(commentId, (err, comment) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE COMMENT${err}'})
  
      comment.remove(err => {
        if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE COMMENT ${err}'})
        res.status(200).send({message: 'COMMENT HAS BEEN REMOVED'})
      })
    })
}

function getCommentsByUser(req, res) {
  let userId = req.params.userId;
  Comment.find({userId}, (err, comments) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!comments) return res.status(404).send({message: 'THE COMMENTS DO NOT EXIST ${err}'})
    
    res.status(200).send({comments: comments})
    }).populate('user').populate('comments')
}

module.exports = {
    getComment,
    getComments,
    saveComment,
    deleteComment,
    getCommentsByUser
}