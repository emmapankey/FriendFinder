// LOAD DATA
// Link routes to the friend data array
var friendsData = require("../data/friends");
// console.log(friendsData);

// Routes

// GET route returns friend data array in JSON format
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

// POST route takes in user info and compares to the friend data array
  app.post("/api/friends", function (req, res) {
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores
    };

    for(var i = 0; i < newFriend.scores.length; i++) {
      
    }
    
  });
};