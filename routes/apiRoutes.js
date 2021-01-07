const router = require("express").Router();
const seed = require("../seeders/seed.js");
const fs = require('fs');
  
// seed.js post and get routes

  router.post("/api/seed", ({ body }, res) => {
    seed.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/seed", (req, res) => {
    seed.find({})
      .sort({ date: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
// exercise post and get routes

router.post("/api/exercise", ({ body }, res) => {
    seed.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// index post and get routes

router.post("/api/index", ({ body }, res) => {
    seed.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// stats post and get routes

router.post("/api/stats", ({ body }, res) => {
    seed.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// workout post and get routes

router.post("/api/workout", ({ body }, res) => {
    seed.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;