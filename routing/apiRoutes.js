// LOAD DATA
// Link routes to the friend data array
var friendsData = require("../app/data/friends");
// console.log(friendsData);

// Routes
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {
    //Add Logic
  });
};