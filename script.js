// list of players with their scores
userArray = [
  { name: 'Max', score: 6 },
  { name: 'Bella', score: 2 },
  { name: 'Cooper', score: 3 },
]
//variables used within both functions
let userName
let userGuess
let guesses = 0
let user
const min = 1
const max = 20

function playGame() {
  //asks for name, makes a random number from 1-20 and then continues to ask the user for a number until they guess the numver right
  let guesses = 0

  //get user name
  userName = prompt('What is your name?')

  //get random number
  let computerNumber = Math.floor(Math.random() * (max - min + min) + min)

  //  runs code until the user guesses the number correct
  while (computerNumber != userGuess) {
    //gets guess from user
    userGuess = prompt('What number do you guess?')

    //verifies guess
    if (userGuess.match(/^([1-9]|1[0-9]|20)$/)) {
      // see how many guesses have been said
      guesses = guesses + 1
    } else {
      alert('input not valid')
    }
  }

  //show number of guesses
  alert('you got the number correct after ' + guesses + ' guesses')

  //combines user information
  user = {
    //lets user input in name
    name: userName,
    //score of game
    score: guesses,
  }
  //adds user information to score board
  userArray.push(user)
}

function scoreBoard() {
  //shows name and score of every user in the array
  for (let user of userArray) {
    alert(user.name + ', ' + user.score)
  }
}
