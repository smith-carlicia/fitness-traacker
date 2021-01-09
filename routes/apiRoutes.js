const router = require("express").Router();
const fs = require('fs');
const db = require('../models/workout');

// get last workout

router.get('/api/workouts', (req, res) => {
    db.workouts.find({})
    .then(lastWorkout => {
        res.json(lastWorkout)
    })
    .catch(err => {
        res.json(err)
    })
});

// add exercise

router.put('/api/workouts/:id', ({body, params}, res) => {

    // const workoutId = params.id;
    // const addedExercises = [];

    db.workouts.findByIdAndUpdate(
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
    db.workouts.create()
    .then(createWorkout => res.json(createWorkout))
    .catch(err => {
        console.log("err", err)
        res.json(err)
    })
});

// get workout in range

router.get('/api/workouts/range', ({}, res) => {
    db.workouts.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});

module.exports = router;