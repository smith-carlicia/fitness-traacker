const path = require("path");
const router = require ("express").Router();

// main page route

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

// exercise route

router.get("/exercise", function(req, res){
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

// stats route

router.get("/stats", function(req, res){
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

// workout route

router.post("/workout", function(req, res){
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});


module.exports = router;