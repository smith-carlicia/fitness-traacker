const router = require("express").Router();
const fs = require('fs');
const Workout = require('../models/Workout');

// get last workout

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err)
    })
});

// add exercise

router.put('/api/workouts/:id', ({body, params}, res) => {

    const workoutId = params.id;
    const addedExercises = [];

    Workout.find({_id:workoutId})
        .then(dbWorkout => {
           req.params.id
        })
        .catch(err => {
            res.json(err)
        })
});

// create workout

router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        console.log("err", err)
        res.json(err)
    })
});

// get workout in range

router.get('/api/workout/range', (req, res) => {
    Workout.find({})
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err)
    })
});

module.exports = router;