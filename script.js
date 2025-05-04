//variables for characters that will be used in gameArea
let playerOneIMG = document.getElementById("player1Img");
let playerName1 = document.getElementById("playerName1");
let character1 = document.getElementById("character1");

let player1 = ''
//card buttons
let popCultureCard = document.getElementById('popCultureCard')
let geographyCard = document.getElementById('geographyCard')
let scienceCard = document.getElementById('scienceCard')
let techCard = document.getElementById('techCard')
// variables in order to enable start btn
let startBtn = document.getElementById("startBtn");
startBtn.disabled = true;
let characterSelected = false;
let nameSubmitted = false;
  //dice variables
let diceImg = document.getElementById("diceImg");
let diceBtn = document.getElementById("diceBtn");
//variables for actual game
let spotCounter = document.getElementById("spaceCounter1");
let gameUpdater = document.getElementById("gameUpdater");
let userTurnUpdater = document.getElementById("userTurnUpdater");
let submitAnswerBtn = document.getElementById('submitAnswerBtn')
let currentTopic = ''
let playerSpace = 0
const lastSpace = 27
let correctAnswer = ''
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
let wheel = document.getElementById("wheel");
let spinBtn = document.getElementById("spinBtn");
let value = Math.ceil(Math.random() * 3600);
let items = [
  document.getElementById('item1'),
  document.getElementById('item2'),
  document.getElementById('item3'),
  document.getElementById('item4'),
  document.getElementById('item5')
]

// timer tutorial (youtube link in html)
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
  let diceNumber = Math.floor(Math.random() * 6) + 1;

  //disables button immediately
  diceBtn.disabled = true;

  if (diceNumber === 1) {
    diceImg.src = "imgs/dice1.png";
    playerSpace +=1
  } else if (diceNumber === 2) {
    diceImg.src = "imgs/dice2.png";
    playerSpace += 2;
  } else if (diceNumber === 3) {
    diceImg.src = "imgs/dice3.png";
    playerSpace +=3
  } else if (diceNumber === 4) {
    diceImg.src = "imgs/dice4.png";
    playerSpace +=4
  } else if (diceNumber === 5) {
    diceImg.src = "imgs/dice5.png";
    playerSpace +=5
  } else if (diceNumber === 6) {
    diceImg.src = "imgs/dice6.png";
    playerSpace +=6
  }

  if (currentPlayer === player1) {
    playerSpace1 = playerSpace;
    space = playerSpace1;
  } else {
    playerSpace1 = playerSpace;
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
  gameUpdater.textContent = `You rolled ${diceNumber}. You landed on a ${color} space. Click the ${topic} card for your question.`

  // else if (space === 27) {
  //   endGame()
  //   }
  spaceCounter()
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
    document.getElementById("characterSelectionPage").classList.remove("d-none");
    document.getElementById("characterSelectionPage").classList.add("d-block");
  }
}
//if user clicks yes, instructions will pop up
function understandGame() {
  document.getElementById("instructionPage").classList.add("d-none");
  document.getElementById("characterSelectionPage").classList.remove("d-none");
  document.getElementById("characterSelectionPage").classList.add("d-block");
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
  characterSelected = true;
  startGameEnable();
}
//function to get user's name
function submitName(player) {
  let name1 = "";
  if (player === "user1") {
    name1 = document.getElementById("playerOneName").value;
    document.getElementById("userName1").textContent = name1;
    playerName1.textContent = name1;
    nameSubmitted = true;
  }
  startGameEnable();
}
//function that will enable the start game button
function startGameEnable() {
  if (nameSubmitted === true && characterSelected === true) {
    startBtn.disabled = false
  } else {
    startBtn.disabled = true;
  }
}
//page switches from select players page to the game area to begin the game
function startGame() {
  currentPlayer = player1
  document.getElementById("characterSelectionPage").classList.add("d-none");
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

//adding event listeners so  when card is called, this topic will show up
popCultureCard.addEventListener("click", function() {
  giveQuestion('popculture');
});

geographyCard.addEventListener("click", function() {
  giveQuestion('geography');
});

scienceCard.addEventListener("click", function() {
  giveQuestion('science');
});

techCard.addEventListener("click", function() {
  giveQuestion('technology');
});


function giveQuestion(topicCard) {
  let question = ''
  if (topicCard === 'popculture') {
    currentTopic = 'popculture'//set topic as pop culture
    const questionIndex = Math.floor(Math.random() * pcQuestions.length)
    question = pcQuestions[questionIndex]
    correctAnswer = pcAnswers[questionIndex]
  } else if (topicCard === 'geography') {
    currentTopic = 'geography'
    const questionIndex = Math.floor(Math.random() * geoQuestions.length)
    question = geoQuestions[questionIndex]
    correctAnswer = geoAnswers[questionIndex]
  } else if (topicCard === 'science') {
    currentTopic = 'science'
    const questionIndex = Math.floor(Math.random() * sciQuestions.length)
    question = sciQuestions[questionIndex]
    correctAnswer = sciAnswers[questionIndex]
  } else if (topicCard === 'technology') {
    currentTopic = 'technology'
    const questionIndex = Math.floor(Math.random() * techQuestions.length)
    question = techQuestions[questionIndex]
    correctAnswer = techAnswers[questionIndex]
  }
//displaying bits when function is called
  const questionPopUp = document.getElementById('questionPopUp');
  questionPopUp.classList.remove('d-none');
  questionPopUp.classList.add('d-block');
  document.getElementById('gameRow').classList.add('d-none')
  document.getElementById('userQuestion').textContent = `${currentPlayer}'s Question`;
  document.getElementById('question').textContent = question;

  startTimer()

}
function submitResponse() {
  let userResponse = document.getElementById('userResponse').value.trim().toLowerCase()
  let nextBtn = document.getElementById('nextBtn')
  let punishmentBtn = document.getElementById('punishmentBtn')
  let result = document.getElementById('result')
  let isCorrect = false
//array that will get the answers based on the topic thats chosen
  let answers = []
  // button disabled immediately
  submitAnswerBtn.disabled = true
  if (currentTopic === 'popculture') {
  answers = pcAnswers
  } else if (currentTopic === 'geography') {
    answers = geoAnswers
} else if (currentTopic === 'science') {
  answers = sciAnswers
} else if (currentTopic === 'technology') {
  answers = techAnswers
}

  //loop that goes through answers
  for (let a = 0; a < answers.length; a++){
    if (userResponse === answers[a].toLowerCase()) {
      isCorrect = true;
      break
    }
  }

  if (userResponse === correctAnswer.toLowerCase()) {
    isCorrect = true;
  }

  if (isCorrect) {
    nextBtn.classList.remove('d-none');
    punishmentBtn.classList.add('d-none');
    result.textContent = `Well done! The correct answer is ${correctAnswer}.`
} else {
  // Incorrect answer: Show Punishment Wheel button
  nextBtn.classList.add('d-none');
  punishmentBtn.classList.remove('d-none');
  result.textContent = `Yikes! The correct answer is ${correctAnswer}.`
}

}
function revealPunishment() {
  document.getElementById('questionPopUp').classList.add('d-none')
  document.getElementById('questionPopUp').classList.remove('d-block')
  document.getElementById('punishmentWheelPage').classList.remove('d-none')
  document.getElementById('punishmentWheelPage').classList.add('d-block')
  document.getElementById('punishNextBtn').classList.add('d-none')
  wheel.classList.remove('d-none')
  spinBtn.classList.remove('d-none')

}
//function that returns everything back to normal
function nextTurn() {
  document.getElementById('questionPopUp').classList.remove('d-block')
  document.getElementById('questionPopUp').classList.add('d-none')
  document.getElementById('punishmentWheelPage').classList.add('d-none')
  document.getElementById('punishmentWheelPage').classList.remove('d-block')
  document.getElementById('gameRow').classList.remove('d-none')
  diceBtn.disabled = false
  document.getElementById('result').textContent = ''
  document.getElementById('punishmentUpdate').textContent = ''
  nextBtn.classList.add('d-none')
  punishmentBtn.classList.add('d-none')
  gameUpdater.textContent = 'Roll the dice.'
  submitAnswerBtn.disabled = false
}

function spaceCounter() {
  spotCounter.textContent = `${27 - playerSpace} Spaces to the crown!`
}

//tutorial from youtube (link in html)
function spinWheel() {
  spinBtn.disabled = true;

  let rotation = value;
  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = "rotate(" + rotation + "deg)";

  value += Math.ceil(Math.random() * 3600); // increase for next spin

  setTimeout(() => {
    value += Math.ceil(Math.random() * 3600);
    const numberOfSegments = items.length;
    const degreesPerSegment = 360 / numberOfSegments;
    const currentRotation = value % 360; 
    const selectedIndex = Math.floor(currentRotation / degreesPerSegment);

    const punishment = items[selectedIndex].innerText.trim();
    punishmentUpdate = document.getElementById('punishmentUpdate');
    punishmentUpdate.textContent = `Your punishment is ${punishment}!`;

    // Apply punishment
    if (punishment === items[0].innerText.trim()) {
      playerSpace -= 10;
    } else if (punishment === items[1].innerText.trim()) {
      playerSpace -= 2;
    } else if (punishment === items[2].innerText.trim()) {
      playerSpace -= 0;
    } else if (punishment === items[3].innerText.trim()) {
      playerSpace = 0;
    } else if (punishment === items[4].innerText.trim()) {
      playerSpace -= 5;
    }

    if (playerSpace > lastSpace) {
      playerSpace = lastSpace;
    }
    if (playerSpace < 0) {
      playerSpace = 0;
    }

    spaceCounter();

    wheel.classList.add('d-none');
    spinBtn.classList.add('d-none');
    document.getElementById('punishNextBtn').classList.remove('d-none')
  }, 4200);
}