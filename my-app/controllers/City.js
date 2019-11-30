'use strict'

const City = require('../models/City');

function getCity(req, res){
    let cityId = req.params.cityId;

    City.findById(cityId, (err, city) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!city) return res.status(404).send({message: 'THE CITY DOES NOT EXIST ${err}'})

    res.status(200).send({city: city})
    })
}

function getCities(req, res){
    City.find({}, (err, cities) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!cities) return res.status(404).send({message: 'THE CITIES DO NOT EXIST ${err}'})
    
    res.status(200).send({cities: cities})
    })
}

function saveCity(req, res){
  console.log('POST /api/city');
  console.log(req.body);
  
  let city = new City();
    city.name = req.body.name
    city.country = req.body.country
    city.img = req.body.img

    city.save((err, cityStored) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN SAVING IN THE DATABASE ${err}'})
      res.status(200).send({city: cityStored})
    })  
}

function updateCity(req, res){
    let cityId = req.params.cityId;
    let update = req.body;
  
    City.findByIdAndUpdate(cityId, update, (err, cityUpdate) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN UPDATING CITY ${err}'})
      res.status(200).send({city: cityUpdate})
    })
}

function deleteCity(req, res){
    let cityId = req.params.cityId;

    City.findById(cityId, (err, city) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE CITY ${err}'})
  
      city.remove(err => {
        if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE CITY ${err}'})
        res.status(200).send({message: 'CITY HAS BEEN REMOVED'})
      })
    })
}

module.exports = {
    getCity,
    getCities,
    saveCity,
    updateCity,
    deleteCity
}