//variables for characters that will be used in gameArea
let playerOneIMG = document.getElementById("player1Img");
let playerTwoIMG = document.getElementById("player2Img");
let playerName1 = document.getElementById("playerName1");
let playerName2 = document.getElementById("playerName2");
let character1 = document.getElementById("character1");
let character2 = document.getElementById("character2");
let player1 = ''
let player2 = ''
let currentPlayer = ''
//card buttons
let popCultureCard = document.getElementById('popCultureCard')
let geographyCard = document.getElementById('geographyCard')
let scienceCard = document.getElementById('scienceCard')
let techCard = document.getElementById('techCard')
// variables in order to enable start btn
let startBtn = document.getElementById("startBtn");
startBtn.disabled = true;
let isCharacterSelected1 = false;
let isCharacterSelected2 = false;
let nameSubmitted1 = false;
let nameSubmitted2 = false;
  //dice variables
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  let diceImg = document.getElementById("diceImg");
  let diceBtn = document.getElementById("diceBtn");
//variables for actual game
let spaceCounter1 = document.getElementById("spaceCounter1");
let spaceCounter2 = document.getElementById("spaceCounter2");
let gameUpdater = document.getElementById("gameUpdater");
let userTurnUpdater = document.getElementById("userTurnUpdater");
let currentPlayerSpace = 0
let playerSpace1 = 0
let playerSpace2 = 0
const lastSpace = 27
//question and answer arrays; the question with the answer will be based on their index (pc = Pop culture); index number will be the same
let pcQuestions = [
  "What is the virtual currency used in Roblox",
  'Who sand the song "Shake it Off"?',
  "What social media platform features viral dance videos?",
  "In harry potter, what house is harry potter a part of?",
  "What is the name of the underwater city that Spongebob lives at?",
  'Who sang "As it Was"?',
  "Which video game features the character Pikachu?",
  "What does LOL stand for in text message?",
  "in peppa pig, what animal is Peppa’s best friend Susie?",
  "Which princess is known for her super long hair?",
  'What type of fish is Nemo in "Finding Nemo"?',
  "What princess is known for her evil step sisters?",
  "What Disney movie features a family full of superheroes?",
  'What game is known for the phrase "Victory Royale"?',
  "Which actor played Spiderman in  the first ever spiderman movie?",
  "Which actor played the character of Iron Man in the Marvel Cinematic Universe?",
  "Which musical film stars Ariana Grande and Cynthia Erivo as Galinda and Elphaba?",
  "Which famous Korean TV show revolves around Seong Gi-Hun, also known as Player 456?",
  "Who is known as the “King of Pop”?",
  "Which popular social media platform is  known for selfies?",
];
let pcAnswers = [
  "Robux",
  "Taylor Swift",
  "TikTok",
  "Gryffindor",
  "Bikini Bottom",
  "Harry Styles",
  "Pokemon",
  "Laugh Out Loud",
  "Sheep",
  "Rapunzel",
  "Clownfish",
  "Cinderella",
  "The Incredibles",
  "Fortnite",
  "Tobey Maguire",
  "Robert Downey Jr.",
  "Wicked",
  "Squid Game",
  "Michael Jackson",
  "Snapchat",
];
let sciQuestions = [
  "What is the largest mammal in the world?",
  "What body system is the liver a part of?",
  "What is the process of turning liquid into solid called?",
  "What is the fastest animal on land?",
  "What is the chemical symbol for carbon dioxide?",
  "What is the study of life called?",
  "What is the biggest bone in the human body?",
  "What is the largest planet in our solar system",
  "What do plants need to grow?",
  "What are animals that only eat other animals?",
  "What gas is most responsible for global warming",
  "What fruit did Newton use to describe gravity",
  "What is the most abundant gas in the atmosphere?",
  "What is the largest star in the solar system?",
  "What is the largest organ in the human body?",
  "What process do plants use to make food?",
  "What type of rock is formed by volcanos?",
  "What is the center of an atom?",
  "What is the basic unit of life?",
  "What is the largest ocean on planet Earth?",
];
let sciAnswers = [
  "Blue Whale",
  "Digestive System",
  "Freezing",
  "Cheetah",
  "CO2",
  "Biology",
  "Femur",
  "Jupiter",
  "Sunlight",
  "Carnivore",
  "Carbon dioxide",
  "apple",
  "Nitrogen",
  "sun",
  "skin",
  "Photosynthesis",
  "igneous rocks",
  "nucleus",
  "cell",
  "Pacific Ocean",
];
let geoQuestions = [
  "What is the tallest mountain on planet Earth?",
  'Which US city is known as "the City of Angels"',
  "Which African country is famous for the Great Pyramid?",
  "What mountain range is along the east side of the United States?",
  "What is the capital of Spain?",
  "What is the only country in the world that is also a continent?",
  "Which US state can you find the Grand Canyon?",
  "What is the worlds longest river?",
  "Which country has the highest population?",
  "what is the largest desert in the world?",
  "What leaf is on the Canadian Flag?",
  "What country is Machu Picchu located?",
  "What is the capital of Hawaii?",
  "What is the name of the river that flows through the Brazilian Rainforest?",
    "What country is the Taj Mahal located in?",
    'What is the capital of Austrailia?',
    'What is the name of this mountain-range ( Hint- Located in Europe)?',
    'What is the capital of the United Kingdom?',
    'What is the name of the largest forest in the world?',
  'What is the capital of New Jersey?'
];
let geoAnswers = [
  "Mount Everest",
  "Los Angeles",
  "Egypt",
  "Appalachian Mountains",
  "Madrid",
  "Australia",
  "Arizona",
  "Nile River",
  "India",
  "Antarctica",
  "Maple Leaf",
  "Peru",
  "Honolulu",
  "Amazon River",
    "India",
    'Canberra',
    'alps',
    'London',
    'Amazon Rainforest',
  'Trenton'
];

let techQuestions = [
  "Who invented the light bulb?",
  "What does PIN stand for?",
  "What does IBM stand for?",
  "Who created Apple?",
  "What does WWW stand?",
  "What does SMS stand for?",
  "Who invented the telephone?",
  "Who invented the first airplane?",
  "What does VPN stand for?",
  "What does ATM stand for?",
  "Who created Microsoft?",
  "Chrome and Safari are types of what?",
  "What app does ByteDance Own?",
  "What company owns Instagram and Facebook?",
  "What country is Samsung from?",
  "What does LED stand for?",
];
let techAnswers = [
  "Thomas Edison",
  "Personal Identification Number",
  "International Business Machines",
  "Steve Jobs",
  "World Wide Web",
  "Short Message Service",
  "Alexander Graham Bell",
  "Wright Brothers",
  "Virtual Private Network",
  "Automated Teller Machine",
  "Bill Gates",
  "Web Browsers",
  "Tiktok",
  "Meta",
  "South Korea",
  "Light Emitting Diode",
];
//variables for board (color/number space)
let color = ['red', 'yellow', 'green', 'blue']
let topic = ['Pop Culture', 'Geography', 'Science', 'Technology']
let space = ''

// spinner tutorial js
let wheel = document.querySelector(".wheel");
let spinBtn = document.getElementById("spinBtn");
let value = Math.ceil(Math.random() * 3600);
function spinWheel() {
  spinBtn.disabled = true;
  wheel.style.transform = "rotate(" + value + "deg)";
  value += Math.ceil(Math.random() * 3600);
}
// timer tutorial
const btnStart = document.querySelector(".btn-start");
const progressBar = document.querySelector(".progress-inner");

function startTimer() {
  let interval = 30;

  let countDown = setInterval(() => {
    interval--;

    let progressWidth = (interval / 30) * 100;
    if (interval > 0) {
      checkColors(progressWidth);

      progressBar.style.width = progressWidth + "%";
    } else {
      clearInterval(countDown);
      progressBar.style.width = "0%";
    }
  }, 1000);
};
//changes color of timer
const checkColors = (width) => {
  if (width > 60) {
    progressBar.style.background = "green";
  } else if (width > 30) {
    progressBar.style.background = "yellow";
  } else {
    progressBar.style.background = "red";
  }
};
// function that randomizes dice rolls
function rollDice() {

  //disables button immediately
  diceBtn.disabled = true;

  if (diceNumber === 1) {
    diceImg.src = "imgs/dice1.png";
    currentPlayerSpace +=1
  } else if (diceNumber === 2) {
    diceImg.src = "imgs/dice2.png";
    currentPlayerSpace += 2;
  } else if (diceNumber === 3) {
    diceImg.src = "imgs/dice3.png";
    currentPlayerSpace +=3
  } else if (diceNumber === 4) {
    diceImg.src = "imgs/dice4.png";
    currentPlayerSpace +=4
  } else if (diceNumber === 5) {
    diceImg.src = "imgs/dice5.png";
    currentPlayerSpace +=5
  } else if (diceNumber === 6) {
    diceImg.src = "imgs/dice6.png";
    currentPlayerSpace +=6
  }

  if (currentPlayer === player1) {
    playerSpace1 = currentPlayerSpace;
    space = playerSpace1;
  } else {
    playerSpace2 = currentPlayerSpace;
    space = playerSpace2;
  }

  if ([1,5,9,13,17,21,25].includes(space)) {
    color = 'red'
    topic = 'Pop Culture'
    popCultureCard.disabled = false
  } else if ([2,6,10,14,18,22,26].includes(space)) {
    color = 'yellow'
    topic = 'Geography'
    geographyCard.disabled = false
  } else if ([3,7,11,15,19,23].includes(space)) {
    color = 'green'
    topic = 'Science'
    scienceCard.disabled = false
  } else if ([4,8,12,16,20,24].includes(space)) {
    color = 'blue'
    topic = 'Technology'
    techCard.disabled = false
  }
  // else if (space === 27) {
  //   endGame()
  //   }
  updateGame()
}
//functions before the game
//landing page to questionpage
function playGame() {
  let landingPage = document.getElementById("landingPage");
  let questionPage = document.getElementById("questionPage");
  landingPage.classList.add("d-none");
  questionPage.classList.remove("d-none");
  questionPage.classList.add("d-block");
}
//question page to either instruction page/select players page
function firstGame(answer) {
  if (answer === "yes") {
    document.getElementById("questionPage").classList.add("d-none");
    document.getElementById("instructionPage").classList.remove("d-none");
    document.getElementById("instructionPage").classList.add("d-block");
  } else if (answer === "no") {
    document.getElementById("questionPage").classList.add("d-none");
    document.getElementById("selectPlayersPage").classList.remove("d-none");
    document.getElementById("selectPlayersPage").classList.add("d-block");
  }
}
//if user clicks yes, instructions will pop up
function understandGame() {
  document.getElementById("instructionPage").classList.add("d-none");
  document.getElementById("selectPlayersPage").classList.remove("d-none");
  document.getElementById("selectPlayersPage").classList.add("d-block");
}
// function that allowers users to select either one or two players
function selectedPlayers(number) {
  if (number === 1) {
    document.getElementById("selectPlayerRow").classList.remove("d-none");
    document.getElementById("player2Card").classList.add("d-none");
    document.getElementById("divider1").classList.remove("d-none");
    document.getElementById("divider2").classList.remove("d-none");
  } else if (number === 2) {
    document.getElementById("selectPlayerRow").classList.remove("d-none");
    document.getElementById("player2Card").classList.add("d-block");
    document.getElementById("player1Card").classList.add("col-md-6");
    document.getElementById("player2Card").classList.remove("d-none");
    document.getElementById("divider1").classList.add("d-none");
    document.getElementById("divider2").classList.add("d-none");
  }
}
// function that chooses character
function selectCharacter(character) {
  let chosenCharacter = document.getElementById("selectedCharacter");
  if (character === "globe") {
    chosenCharacter.textContent = "You chose: Globey";
    playerOneIMG.src = "imgs/globe.png";
    character1.src = "imgs/globe.png";
  } else if (character === "lego") {
    chosenCharacter.textContent = "You chose: Blocky";
    playerOneIMG.src = "imgs/lego.png";
    character1.src = "imgs/lego.png";
  } else if (character === "flask") {
    chosenCharacter.textContent = "You chose: Fizzy";
    playerOneIMG.src = "imgs/flask.png";
    character1.src = "imgs/flask.png";
  } else if (character === "robot") {
    chosenCharacter.textContent = "You chose: Botty";
    playerOneIMG.src = "imgs/robot.png";
    character1.src = "imgs/robot.png";
  }
  isCharacterSelected1 = true;
  startGameEnable();
}

function selectCharacter2(character) {
  let chosenCharacter = document.getElementById("selectedCharacter2");
  if (character === "globe") {
    chosenCharacter.textContent = "You chose: Globey";
    playerTwoIMG.src = "imgs/globe.png";
    character2.src = "imgs/globe.png";
  } else if (character === "lego") {
    chosenCharacter.textContent = "You chose: Blocky";
    playerTwoIMG.src = "imgs/lego.png";
    character2.src = "imgs/lego.png";
  } else if (character === "flask") {
    chosenCharacter.textContent = "You chose: Fizzy";
    playerTwoIMG.src = "imgs/flask.png";
    character2.src = "imgs/flask.png";
  } else if (character === "robot") {
    chosenCharacter.textContent = "You chose: Botty";
    playerTwoIMG.src = "imgs/robot.png";
    character2.src = "imgs/robot.png";
  }
  isCharacterSelected2 = true;
  startGameEnable();
}
//function to get user's name
function submitName(player) {
  let name1 = "";
  let name2 = "";
  if (player === "user1") {
    name1 = document.getElementById("playerOneName").value;
    document.getElementById("userName1").textContent = name1;
    playerName1.textContent = name1;
    nameSubmitted1 = true;
  } else if (player === "user2") {
    name2 = document.getElementById("playerTwoName").value;
    document.getElementById("userName2").textContent = name2;
    playerName2.textContent = name2;
    nameSubmitted2 = true;
  }
  startGameEnable();
}
//function that will enable the start game button
function startGameEnable() {
  if (
    isCharacterSelected1 &&
      nameSubmitted1 &&
      isCharacterSelected2 &&
      nameSubmitted2) {
    startBtn.disabled = false;
    character2.classList.remove('d-none')
    character2.classList.add('d=block')
    document.getElementById('player2gameCard').classList.remove('d-none')
  } else if ((isCharacterSelected1 &&
    nameSubmitted1) && (!isCharacterSelected2 && !nameSubmitted2)) {
    startBtn.disabled = false;
    character2.classList.add('d-none')
    
    } else {
    startBtn.disabled = true;
  }
}
//page switches from select players page to the game area to begin the game
function startGame() {
  currentPlayer = player1
  document.getElementById("selectPlayersPage").classList.add("d-none");
  document.getElementById("everythingBeforeGameRow").classList.add("d-none");
  document.getElementById("gameArea").classList.remove("d-none");
  document.getElementById("gameArea").classList.add("d-block");
  popCultureCard.disabled = true
  geographyCard.disabled = true
  scienceCard.disabled = true
  techCard.disabled = true
  
  userTurnUpdater.textContent = `${playerName1.textContent}'s Turn`
  gameUpdater.textContent = `Roll the Dice`

}

function updateGame() {
  gameUpdater.textContent = `You rolled ${diceNumber}. You landed on a ${color} space. Click the ${topic} card for your question.`
}

function giveQuestion(topicCard) {
  let question, answer;
  if (topicCard === 'popculture') {
    const questionIndex = Math.floor(Math.random() * pcQuestions.length)
    question = pcQuestions[questionIndex]
    answer = pcAnswers[questionIndex]
  } else if (topicCard === 'geography') {
    const questionIndex = Math.floor(Math.random() * geoQuestions.length)
    question = geoQuestions[questionIndex]
    answer = geoAnswers[questionIndex]
  } else if (topicCard === 'science') {
    const questionIndex = Math.floor(Math.random() * sciQuestions.length)
    question = sciQuestions[questionIndex]
    answer = sciAnswers[questionIndex]
  } else if (topicCard === 'technology') {
    const questionIndex = Math.floor(Math.random() * techQuestions.length)
    question = techQuestions[questionIndex]
    answer = techAnswers[questionIndex]
  }

  const questionPopUp = document.getElementById('questionPopUp');
  questionPopUp.classList.remove('d-none');
  questionPopUp.classList.add('d-block');
  document.getElementById('userQuestion').textContent = `${currentPlayer}'s Question`;
  document.getElementById('question').textContent = question;

}