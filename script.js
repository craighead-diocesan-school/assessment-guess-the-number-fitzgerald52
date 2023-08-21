userArray = [
  { name: 'Max', score: 6 },
  { name: 'Bella', score: 2 },
  { name: 'Cooper', score: 3 },
]
let userName
let userGuess
let guesses = 0
let user
const min = 1
const max = 20

function playGame() {
  let guesses = 0
  //get user name
  userName = prompt('What is your name?')

  //get random number
  let computerNumber = Math.floor(Math.random() * (max - min + min) + min)

  alert(computerNumber)

  // compare guess with number while loop
  while (computerNumber != userGuess) {
    //gets guess from user
    userGuess = prompt('What number do you guess?')

    //verifies guess
    if (userGuess.match(/^([1-9]|1[0-9]|20)$/)) {
      // see how many times it has taken
      guesses = guesses + 1
    } else {
      alert('input not valid')
    }
  }

  //show number of guesses
  alert('you got the number correct after ' + guesses + ' guesses')

  //makes object
  user = {
    //lets user input in name
    name: userName,
    //score of game
    score: guesses,
  }
  userArray.push(user)
}

function scoreBoard() {
  for (let user of userArray) {
    alert(user.name + ', ' + user.score)
  }
}
