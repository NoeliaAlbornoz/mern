'use strict'

const Itinerary = require('../models/Itinerary');

function getItinerary(req, res){
    let itineraryId = req.params.itineraryId;

    Itinerary.findById(itineraryId, (err, itinerary) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!itinerary) return res.status(404).send({message: 'THE ITINERARY DOES NOT EXIST ${err}'})

    res.status(200).send({itinerary: itinerary})
    }).populate('city').populate('activities')
}

function getItineraries(req, res){
    Itinerary.find({}, (err, itineraries) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!itineraries) return res.status(404).send({message: 'THE ITINERARIES DO NOT EXIST ${err}'})
    
    res.status(200).send({itineraries: itineraries})
    }).populate('city').populate('activities')
}

function getItinerariesByCity(req, res) {
  let cityId = req.params.cityId;
  Itinerary.find({cityId}, (err, itineraries) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!itineraries) return res.status(404).send({message: 'THE ITINERARIES DO NOT EXIST ${err}'})
    
    res.status(200).send({itineraries: itineraries})
    }).populate('city').populate('activities')
}

function saveItinerary(req, res){
  console.log('POST /api/itinerary');
  console.log(req.body);
  
  let itinerary = new Itinerary();
    itinerary.title = req.body.title
    itinerary.profilePic = req.body.profilePic
    itinerary.likes = req.body.likes
    itinerary.duration = req.body.duration
    itinerary.price = req.body.price
    itinerary.cityId = req.body.cityId
    itinerary.city = req.body.city
    itinerary.activities = req.body.activities

    itinerary.save((err, itineraryStored) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN SAVING IN THE DATABASE ${err}'})
      res.status(200).send({itinerary: itineraryStored})
    })  
}

function updateItinerary(req, res){
    let itineraryId = req.params.itineraryId;
    let update = req.body;
  
    Itinerary.findByIdAndUpdate(itineraryId, update, (err, itineraryUpdate) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN UPDATING ITINERARY ${err}'})
      res.status(200).send({itinerary: itineraryUpdate})
    })
}

function deleteItinerary(req, res){
    let itineraryId = req.params.itineraryId;

    Itinerary.findById(itineraryId, (err, itinerary) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE ITINERARY ${err}'})
  
      itinerary.remove(err => {
        if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE ITINERARY ${err}'})
        res.status(200).send({message: 'ITINERARY HAS BEEN REMOVED'})
      })
    })
}

module.exports = {
    getItinerary,
    getItineraries,
    getItinerariesByCity,
    saveItinerary,
    updateItinerary,
    deleteItinerary
}
