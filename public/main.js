let player1Choice = ''
let player2Choice = ''

const choseRock1 = document.querySelector('.choice1')
const choseRock2 = document.querySelector('.choice2')
const chosePaper = document.querySelector('.choice1')
const chosePaper2 = document.querySelector('.choice2')
const choseScissors = document.querySelector('.choice1')
const choseScissors2 = document.querySelector('.choice2')

// Player 1 Rock
function handleClickRock(event) {
  const buttonClicked = event.target.value
  choseRock1.textContent = buttonClicked
  player1Choice = buttonClicked
}

// Player 1 Paper
function handleClickPaper(event) {
  const buttonClickedP = event.target.value
  chosePaper.textContent = buttonClickedP
  player1Choice = buttonClickedP
}

// Player 1 Scissors
function handleClickScissors(event) {
  const buttonClickedS = event.target.value
  choseScissors.textContent = buttonClickedS
  player1Choice = buttonClickedS
}
// Player 2 Rock
function handleClickRock2(event) {
  const buttonClicked = event.target.value
  choseRock2.textContent = buttonClicked
  player2Choice = buttonClicked
  if (player1Choice === 'Rock' && player2Choice === 'Rock') {
    window.alert('Tie!')
    // player1Choice = document.querySelector('img .rockImg').className
  } else if (player1Choice === 'Paper' && player2Choice === 'Rock') {
    window.alert('Paper covers rock. Player 1 wins')
  } else if (player1Choice === 'Scissors' && player2Choice === 'Rock') {
    window.alert('Rock smashes Scissors. Player 2 wins')
  } else {
    console.log('Player 1 choose')
  }
}

// Player 2 Paper
function handleClickPaper2(event) {
  const buttonClicked = event.target.value
  chosePaper2.textContent = buttonClicked
  player2Choice = buttonClicked
  if (player1Choice === 'Rock' && player2Choice === 'Paper') {
    window.alert('Paper covers rock. Player 2 wins')
  } else if (player1Choice === 'Scissors' && player2Choice === 'Paper') {
    window.alert('Scissors cuts paper. Player 1 wins')
  } else {
    window.alert('Tie!')
  }
}

// Player 2 Scissors
function handleClickScissors2(event) {
  const buttonClicked = event.target.value
  choseScissors2.textContent = buttonClicked
  player2Choice = buttonClicked
  if (player1Choice === 'Rock' && player2Choice === 'Scissors') {
    window.alert('Rock smashes scissors. Player 1 wins.')
  } else if (player1Choice === 'Paper' && player2Choice === 'Scissors') {
    window.alert('Scissors cuts paper. Player 2 wins')
  } else {
    window.alert('Tie!')
  }
}

function main() {
  // Player 1
  // Rock
  const choiceR = document.querySelector('.player1 button.rock')
  choiceR.addEventListener('click', handleClickRock)

  // Paper
  const choiceP = document.querySelector('.player1 button.paper')
  choiceP.addEventListener('click', handleClickPaper)

  // Scissors
  const choiceS = document.querySelector('.player1 button.scissors')
  choiceS.addEventListener('click', handleClickScissors)

  // Player 2
  // Rock
  const choiceR2 = document.querySelector('.player2 button.rock')
  choiceR2.addEventListener('click', handleClickRock2)

  // Paper
  const choiceP2 = document.querySelector('.player2 button.paper')
  choiceP2.addEventListener('click', handleClickPaper2)

  // Scissors
  const choiceS2 = document.querySelector('.player2 button.scissors')
  choiceS2.addEventListener('click', handleClickScissors2)
}
// document
//   .querySelector('img.rockImg')
//   .addEventListener('click', handleClickRock2)

document.addEventListener('DOMContentLoaded', main)
