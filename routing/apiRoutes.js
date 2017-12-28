// LOAD DATA
// Link routes to the friend data array
var friendsData = require("../data/friends.js");
// console.log(friendsData);

// Routes
module.exports = function (app) {

  // GET route returns friend data array in JSON format
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // POST route takes in user info and compares to the friend data array
  app.post("/api/friends", function (req, res) {

    var userData = req.body;
    // console.log(userData);

    var postedScores = userData.scores;
    // console.log(postedScores);


    // Will hold the scores result after comparison of the user's scores to the existing friends array
    var matchedScoresArray = [];

    var match = 0;

    var questionDifference = 0;

    // Iterate through the friend objects contained within friends data array
    for (var i = 0; i < friendsData.length; i++) {
      var comparedFriendScores = friendsData[i].scores;

      // Iterate through the user scores and compare to each friend object scores
      for (var j = 0; j < postedScores.length; j++) {
        // console.log(questionDifference);
        questionDifference = Math.abs(parseInt(comparedFriendScores[j]) - parseInt(postedScores[j]));
      }

      matchedScoresArray.push(questionDifference);
      console.log(matchedScoresArray);

      // for (var i = 0; i < matchedScoresArray.length; i++) {
      //   if (matchedScoresArray[i] <= matchedScoresArray[match]) {
      //     match = i;
      //   }
      // }

      friendsData.push(req.body);

      // res.json(friendsData[match]);
    }

  });
};