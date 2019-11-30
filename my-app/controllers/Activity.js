'use strict'

const Activity = require('../models/Activity');

function getActivity(req, res){
    let activityId = req.params.activityId;

    Activity.findById(activityId, (err, activity) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!activity) return res.status(404).send({message: 'THE ACTIVITY DOES NOT EXIST ${err}'})

    res.status(200).send({activity: activity})
    })
}

function getActivities(req, res){
    Activity.find({}, (err, activities) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!activities) return res.status(404).send({message: 'THE ACTIVITIES DO NOT EXIST ${err}'})
    
    res.status(200).send({activities: activities})
    })
}

function getActivitiesByItinerary(req, res) {
  let itineraryId = req.params.itineraryId;
  Activity.find({itineraryId}, (err, activities) => {
    if(err) return res.status(500).send({message: 'ERROR WHEN PERFORMING THE REQUEST ${err}'})
    if(!activities) return res.status(404).send({message: 'THE ACTIVITIES DO NOT EXIST ${err}'})
    
    res.status(200).send({activities: activities})
    })
}

function saveActivity(req, res){
  console.log('POST /api/activity');
  console.log(req.body);
  
  let activity = new Activity();
    activity.title = req.body.title
    activity.img = req.body.img
    activity.itineraryId = req.body.itineraryId
    
    activity.save((err, activityStored) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN SAVING IN THE DATABASE ${err}'})
      res.status(200).send({activity: activityStored})
    })  
}

function updateActivity(req, res){
    let activityId = req.params.activityId;
    let update = req.body;
  
    Activity.findByIdAndUpdate(activityId, update, (err, activityUpdate) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN UPDATING ACTIVITY ${err}'})
      res.status(200).send({activity: activityUpdate})
    })
}

function deleteActivity(req, res){
    let activityId = req.params.activityId;

    Activity.findById(activityId, (err, activity) => {
      if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE ACTIVITY ${err}'})
  
      activity.remove(err => {
        if(err) return res.status(500).send({message: 'ERROR WHEN DELETING THE ACTIVITY ${err}'})
        res.status(200).send({message: 'ACTIVITY HAS BEEN REMOVED'})
      })
    })
}

module.exports = {
    getActivity,
    getActivities,
    getActivitiesByItinerary,
    saveActivity,
    updateActivity,
    deleteActivity
}
