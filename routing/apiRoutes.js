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
    console.log(postedScores);

    // Initialize to 0
    var questionDifference = 0;
    // Will hold all the friend scores to be compared
    var comparedScoresArray = [];

    // Iterate through the friends data array (all the friends)
    for (var i = 0; i < friendsData.length; i++) {
      var comparedFriendScores = friendsData[i].scores;

      // Iterate through the scores from individual friend objects
      for (var j = 0; j < comparedFriendScores.length; j++) {
        // Here the user scores are converted back to integers
        // The absolute value of the friend and user scores are compared and the differences are stored
        questionDifference =  Math.abs(parseInt(comparedFriendScores[j]) - parseInt(postedScores[j]));
      }

      // Question differences between the user and each friend being compared are pushed to an array
      comparedScoresArray.push(questionDifference);
      questionDifference = 0;
    }

    // The best friend match has the minimum score difference
    var bestMatch = friendsData[comparedScoresArray.indexOf(Math.min.apply(null, comparedScoresArray))];

    // Send the best matched friend to the client
    res.send(bestMatch);

    friendsData.push(req.body);

  });
};