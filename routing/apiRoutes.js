// LOAD DATA
// Link routes to the friend data array
var friendsData = require("../data/friends.js");
// console.log(friendsData);

// Routes

// GET route returns friend data array in JSON format
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

// POST route takes in user info and compares to the friend data array
  app.post("/api/friends", function (req, res) {
    // User's scores
    var userScores = req.body.scores;

    // Will hold the scores result after comparison of the user's scores to the existing friends array
    var matchedScoresArray = [];

    var match = 0;

    // Iterate through the friend objects contained within friends data array
    for (var i = 0; i < friendsData.length; i++) {
      var questionDifference = 0;
      var comparedFriendScores = friendsData[i].scores;

      // Iterate through the user scores and compare to each friend object scores
        for (var j = 0; j < comparedFriendScores.length; j++)
          questionDifference = Math.abs(parseInt(userScores[i].scores) - parseInt(comparedFriendScores[j]));

    }

    matchedScoresArray.push(questionDifference);

    for (var i = 0; i < matchedScoresArray.length; i++) {
      if(matchedScoresArray[i] <= matchedScoresArray[match]) {
        match = i;
      }
    }
    
    friendsData.push(req.body);

    res.json(friendsData[match]);

  });
};