// list of players with their scores
userArray = [
  { name: 'Max', score: 6 },
  { name: 'Bella', score: 2 },
  { name: 'Cooper', score: 3 },
]
//variables used within multipule functions
let userName
let userGuess
userGuess = Number(userGuess)
let computerNumber
let guesses = 0
let user
const min = 1
const max = 20
let difference = 0

function playGame() {
  //asks for name, makes a random number from 1-20 and then continues to ask the user for a number until they guess the numver right
  guesses = 0
  playerName()
  if (userName.match(/^[a-zA-Z]+$/)) {
    randomNumber()

    compareNumbers()

    score()
  } else {
    alert('name not valid')
  }
}

function playerName() {
  //get user name
  userName = prompt('What is your name?')
  userName = userName.trim()
}

function randomNumber() {
  //get random number
  computerNumber = Math.floor(Math.random() * (max - min + min) + min)
}

function compareNumbers() {
  //  runs code until the user guesses the number correct
  while (computerNumber != userGuess) {
    difference = 0
    //gets guess from user
    userGuess = prompt('What number do you guess?')

    //verifies user guess
    if (userGuess.match(/^([1-9]|1[0-9]|20)$/)) {
      // see how many guesses have been said
      guesses = guesses + 1
      difference = computerNumber - userGuess
      difference = Math.abs(difference)
      hotVsCold()
    } else {
      alert('input not valid')
    }
  }
}

function hotVsCold() {
  // comparees the difference between the number guessed and the real number and shows the user how far away they are
  if (difference == 0) {
    alert('yay !!!!')
  } else if (difference <= 2) {
    alert('boiling')
  } else if (difference <= 5) {
    alert('hot')
  } else if (difference <= 9) {
    alert('warm')
  } else if (difference <= 14) {
    alert('cold')
  } else if (difference >= 15) {
    alert('freezing')
  }
}

function score() {
  //show number of guesses
  alert('you got the number correct after ' + guesses + ' guesses')

  //combines user information
  user = {
    name: userName,
    score: guesses,
  }
  //adds user information to score board
  userArray.push(user)
}

function scoreBoard() {
  //shows name and score of every user in the array
  for (user of userArray) {
    alert(user.name + ', ' + user.score)
  }
}
