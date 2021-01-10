const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: "01/01/2021"
  },
  exercises: [{
    type: {type: String},
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
  }],
},


);


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;