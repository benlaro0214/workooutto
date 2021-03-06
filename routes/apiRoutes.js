const Workout = require("../models/workout.js");

module.exports = function (app) {

//app.get and apt.post go here.

app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
          
          res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
  });

//app.put and app.get go here

app.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
        .then(dbWorkout => {
          res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

}; // End of Export


