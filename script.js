//variables for characters
let playerOneIMG = document.getElementById('player1Img')
let playerTwoIMG = document.getElementById('player2Img')
const myCarouselElement = document.querySelector('#characterSelectionPlayerOne')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})


// spinner tutorial js
let wheel = document.querySelector(".wheel");
let spinBtn = document.getElementById('spinBtn')
let value = Math.ceil(Math.random() * 3600)
function spinWheel() {
    spinBtn.disabled = true
    wheel.style.transform = "rotate(" + value + "deg)"
    value += Math.ceil(Math.random() * 3600)
}


function rollDice() {
    let diceNumber = Math.floor(Math.random()*6) + 1
    let diceImg = document.getElementById('diceImg')
    let diceBtn = document.getElementById('diceBtn')
    //disables button immediately
    diceBtn.disabled = true
    
//larger screens
    if (diceNumber === 1) {
        diceImg.src = 'imgs/dice1.png'
    } else if (diceNumber === 2) {
        diceImg.src = 'imgs/dice2.png'
    } else if (diceNumber === 3) {
        diceImg.src = 'imgs/dice3.png'
    } else if (diceNumber === 4) {
        diceImg.src = 'imgs/dice4.png'
    } else if (diceNumber === 5) {
        diceImg.src = 'imgs/dice5.png'
    } else if (diceNumber === 6) {
        diceImg.src = 'imgs/dice6.png'
    }
}
//functions before the game
//landing page to questionpage
function playGame() {
    let landingPage = document.getElementById('landingPage')
    let questionPage = document.getElementById('questionPage')
    landingPage.classList.add('d-none')
    questionPage.classList.remove('d-none')
    questionPage.classList.add('d-block')
}
//question page to either instruction page/select players page
function firstGame(answer) {
    if (answer === 'yes') {
        document.getElementById('questionPage').classList.add('d-none')
        document.getElementById('instructionPage').classList.remove('d-none')
        document.getElementById('instructionPage').classList.add('d-block')
    } else if (answer === 'no') {
        document.getElementById('questionPage').classList.add('d-none')
        document.getElementById('selectPlayersPage').classList.remove('d-none')
        document.getElementById('selectPlayersPage').classList.add('d-block')
    }
}
//if user clicks yes, instructions will pop up
function understandGame() {
    document.getElementById('instructionPage').classList.add('d-none')
    document.getElementById('selectPlayersPage').classList.remove('d-none')
    document.getElementById('selectPlayersPage').classList.add('d-block')
}
// function that allowers users to select either one or two players
function selectedPlayers(number) {
    if (number === 1) {
        document.getElementById('selectPlayerRow').classList.remove('d-none')
        document.getElementById('player2Card').classList.add('d-none')
        document.getElementById('divider1').classList.remove('d-none')
        document.getElementById('divider2').classList.remove('d-none')



    } else if (number === 2) {
        document.getElementById('selectPlayerRow').classList.remove('d-none')
        document.getElementById('player2Card').classList.add('d-block')
        document.getElementById('player1Card').classList.add('col-md-6')
        document.getElementById('player2Card').classList.remove('d-none')
        document.getElementById('divider1').classList.add('d-none')
        document.getElementById('divider2').classList.add('d-none')

    }
}
// function that chooses character
function selectCharacter(character) {
    indicators.disabled = true
    if (character === 'globe') {
        document.getElementById('player1Card').disabled = true
        playerCard.disabled = true
    } else if (character === 'lego') {
        document.getElementById('player1Card').disabled = true
        playerCard.disabled = true
    } else if (character === 'flask') {
        document.getElementById('player1Card').disabled = true
        playerCard.disabled = true
    } else if (character === 'robot') {
        document.getElementById('player1Card').disabled = true
        playerCard.disabled = true
    }
}