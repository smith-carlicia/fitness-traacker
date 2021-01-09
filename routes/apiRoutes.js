const router = require("express").Router();
const fs = require('fs');
const Workout = require('../models/workout');

// get last workout

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(workoutLast => {
        res.json(workoutLast)
    })
    .catch(err => {
        res.json(err)
    })
});

// add exercise

router.put('/api/workouts/:id', ({body, params}, res) => {

    // const workoutId = params.id;
    // const addedExercises = [];

    Workout.find(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

// create workout

router.post('/api/workouts', (req, res) => {
    Workout.create(req.body)
    .then(createdWorkouts => res.json(createdWorkouts))
    .catch(err => {
        console.log("err", err)
        res.json(err)
    })
});

// get workout in range

router.get('/api/workouts/range', ({}, res) => {
    Workout.find()
    .then(workoutRange => {
        res.json(workoutRange)
    })
    .catch(err => {
        res.json(err)
    })
});

module.exports = router;