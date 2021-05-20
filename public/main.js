let playerChoice = ''

function handleClick(event) {
  const buttonClicked = event.target.value
  const choseRock = document.querySelector('.choice1')
  choseRock.textContent = buttonClicked
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

function main() {
  const choiceR = document.querySelector('.player1 button.rock')
  choiceR.addEventListener('click', handleClick)

  const choiceP = document.querySelector('.player1 button.paper')
  choiceP.addEventListener('click', handleClickPaper)

  const choiceS = document.querySelector('.player1 button.scissors')
  choiceS.addEventListener('click', handleClickScissors)
}

document.addEventListener('DOMContentLoaded', main)
