# FriendFinder

This app can be found at https://friendfinder-57538.herokuapp.com/

## Friend Matching Application Using a Compatibility Survey

* Users complete a 10 question survey. Answers are on a scale of 1-5 based on how much the user agrees or disagrees with a question.

* The application takes in results from users' surveys then compares their results with those from all other users. The application then displays the name and picture of the user with the best overall match.

## Compatibility Logic

#### The user's most compatible friend is determined based on the following:

* Each user's results are converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).


* Then the difference between the current user's scores are compared against those from other users, question by question. The absolute value of the score differences for each question are added up to calculate the ```totalDifference```.

    * Example: 
        * User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        * User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
        * Total Difference: 2 + 1 + 2 = 5

* The most compatible friend will be the user with the least amount of difference.

* Once the current user's closest match has been determined, the result is displayed in the form of a modal pop-up showing the name and picture of the friend match.

## Getting Started

First clone this repository:

```
https://github.com/emmapankey/FriendFinder.git
```

### Prerequisites

#### Node.js and npm
Go to the Node.js site: https://nodejs.org/en. Click the download button, and run through the installation file.
When you install node.js, npm is automatically installed.
To check if you have Node.js installed, run this command in your terminal:
```
node -v
```
To confirm that you have npm installed you can run this command in your terminal:
```
npm -v
```

#### Installing Node Packages


In the terminal execute the following command:

```
npm install
```

## Run

To run the application and connect to the Express server execute the following command in the server.js file:

```
node server.js
```

## Author

**Emma Pankey** (https://github.com/emmapankey)


## Technologies Used

* Javascript and jQuery
* Node.js
* Express.js to handle routing
* npm packages:
	* express
    * body-parser
    * path

