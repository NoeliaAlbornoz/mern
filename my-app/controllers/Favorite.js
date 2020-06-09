'use strict'

const Favorite = require('../models/Favorite');

function getFavorite(req, res){
    let favoritesId = req.params.favoritesId;

    Favorites.findById(favoritesId, (err, favorite) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!favorite) return res.status(404).send({message: 'THE FAVORITE DOES NOT EXIST ${err}'})

    res.status(200).send({favorite: favorite})
    })
}

function getFavorites(req, res){
    Favorite.find({}, (err, favorites) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!favorites) return res.status(404).send({message: 'THE FAVORITES DO NOT EXIST ${err}'})
    
    res.status(200).send({favorites: favorites})
    })
}

function saveFavorite(req, res){
  console.log('POST /api/favorite');
  console.log(req.body);
  
  let favorite = new Favorite();
    favorite.itineraryId = req.body.itineraryId;
    favorite.userId = req.body.userId;

    favorite.save((err, favoriteStored) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN SAVING IN THE DATABASE ${err}'})
      res.status(200).send({favorite: favoriteStored})
    })  
}

function deleteFavorites(req, res){
    let favoritesId = req.params.favoritesId;

    Favorites.findById(favoritesId, (err, favorite) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE FAVORITE${err}'})
  
      favorite.remove(err => {
        if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE FAVORITE ${err}'})
        res.status(200).send({message: 'FAVORITE HAS BEEN REMOVED'})
      })
    })
}

function getFavoritesByUser(req, res) {
  let userId = req.params.userId;
  Favorite.find({userId}, (err, favorites) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!favorites) return res.status(404).send({message: 'THE FAVORITES DO NOT EXIST ${err}'})
    
    res.status(200).send({favorites: favorites})
    }).populate('user').populate('favorites')
}

module.exports = {
    getFavorite,
    getFavorites,
    saveFavorite,
    deleteFavorites,
    getFavoritesByUser
}