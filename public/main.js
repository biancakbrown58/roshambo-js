let player1Choice = ''
let player2Choice = ''

// Player 1 Rock
function handleClickRock(event) {
  const buttonClicked = event.target.value
  const choseRock = document.querySelector('.choice1')
  choseRock.textContent = buttonClicked
  player1Choice = buttonClicked
  console.log(player1Choice)
}

function handleClickPaper(event) {
  const buttonClickedP = event.target.value
  const chosePaper = document.querySelector('.choice1')
  chosePaper.textContent = buttonClickedP
}

function handleClickScissors(event) {
  const buttonClickedS = event.target.value
  const choseScissors = document.querySelector('.choice1')
  choseScissors.textContent = buttonClickedS
}
// Player 2 Rock
function handleClickRock2(event) {
  const buttonClicked = event.target.value
  const choseRock = document.querySelector('.choice2')
  choseRock.textContent = buttonClicked
  player2Choice = buttonClicked
  console.log(player2Choice)
}

// Player 2 Paper
function handleClickPaper2(event) {
  const buttonClicked = event.target.value
  const chosePaper = document.querySelector('.choice2')
  chosePaper.textContent = buttonClicked
  player2Choice = buttonClicked
  console.log(player2Choice)
}

// Player 2 Scissors
function handleClickScissors2(event) {
  const buttonClicked = event.target.value
  const choseScissors = document.querySelector('.choice2')
  choseScissors.textContent = buttonClicked
  player2Choice = buttonClicked
  console.log(player2Choice)
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

document.addEventListener('DOMContentLoaded', main)
