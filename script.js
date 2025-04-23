// spinner tutorial js
let wheel = document.querySelector(".wheel");
let spinBtn = document.getElementById('spinBtn')
let value = Math.ceil(Math.random() * 3600)
function spinWheel() {
    spinBtn.disabled = true
    wheel.style.transform = "rotate(" + value + "deg)"
    value += Math.ceil(Math.random() * 3600)
}

// dice button SM = small screen version
function rollDice() {
    let diceNumber = Math.floor(Math.random()*6) + 1
    let diceImg = document.getElementById('diceImg')
    let diceBtn = document.getElementById('diceBtn')
    let diceImgSM = document.getElementById('diceImgSM')
    let diceBtnSM = document.getElementById('diceBtnSM')
    //disables button immediately
    diceBtn.disabled = true
    diceBtnSM.disabled = true
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
    //smaller screens
    if (diceNumber === 1) {
        diceImgSM.src = 'imgs/dice1.png'
    } else if (diceNumber === 2) {
        diceImgSM.src = 'imgs/dice2.png'
    } else if (diceNumber === 3) {
        diceImgSM.src = 'imgs/dice3.png'
    } else if (diceNumber === 4) {
        diceImgSM.src = 'imgs/dice4.png'
    } else if (diceNumber === 5) {
        diceImgSM.src = 'imgs/dice5.png'
    } else if (diceNumber === 6) {
        diceImgSM.src = 'imgs/dice6.png'
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
