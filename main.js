// Get the remaining lives
let livesEl = document.getElementById("lives");

//get the keyboard 
const keyboard = document.getElementById('keyboard');

//Get Hint element
let hintEl = document.getElementById("hintTxt");
hintEl.textContent = "";


//Get Winner message
const winnerMessage = document.getElementById("winner");

//Get loser message
const youLoseMessage = document.getElementById("loser");

//Get questions
let questionEl = document.getElementById("question");


//Get answers 
let answerEl = document.getElementById("playerinput");

let selectedQuestion;

//Get Guess
// let guess = //

//Get Guesses
let guesses = []; //store guesses

//Get Start Button
const startBtn = document.getElementById("start");

//Get Hint Button
const hintBtn = document.getElementById("hint");

//Get play again Button
const playAgainBtn = document.getElementById("playAgain");

//Get picture state hangman display
let hangmanDisplay =  document.getElementById("hangDisplay");



// // Const

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// const questions = ["Before taking over at AFC Richmond, Ted Lasso previously coached American football at which American university", "What type of dog is on the AFC Richmond crest?", "Ted Lasso suffered a panic attack as Rebecca sang a karaoke version of a song from which Disney movie following Richmond's big win over Everton?", "Jamie Tartt hails from which English city?", "Mid-season signee Dani Rojas hails from which country?"];


// const answers = ["Witchita-State", "Greyhound", "Frozen", "Manchester", "Mexico"];



const questions = [
    ["Before taking over at AFC Richmond, Ted Lasso previously coached American football at which American university", "Witchita-State", "It doens't start with 'K'"],
    ["What type of dog is on the AFC Richmond crest?", "Greyhound", "It might have a color in the name, it might not..."],
    ["Ted Lasso suffered a panic attack as Rebecca sang a karaoke version of a song from which Disney movie following Richmond's big win over Everton?", "Frozen", "🎵... Can't hold it back anymore..."],
    ["Jamie Tartt hails from which English city?", "Manchester", "is one of four clubs that are part of the City Football Group."],
    ["Mid-season signee Dani Rojas hails from which country?", "Mexico", "Is located in North America"]
]



// let tempQuestion = subArray[0] === "Question Number 1";
// let tempAnswer = subArray[1]=== "Answer Number 1";





//STATE

lives = 10;

    //right guesses Keep remaining lives


    //wrong guesses take of -1 of the remaining lives
    //



//listerners
startBtn.addEventListener("click", getQuestion);

playAgainBtn.addEventListener("click", getQuestion);

hintBtn.addEventListener("click", getHintTxt);

// hint.addEventListener("click", init);

// playAgain.addEventListener("click", init);

// letters.addEventListener("click", init);


// functions

// function ramdomAnswer() {
//     answers = answers[Math.floor(Math.random() * answers.length)];
// }

function createKeyboard() {
    letters = document.createElement('ul');
    for (let i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
    //   check();
      keyboard.appendChild(letters);
      letters.appendChild(list);
    }
}
createKeyboard();

//get question
function getQuestion () {
    //Delay added to the question
    questionEl.innerText= "";
    setTimeout(function() { 
    selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionEl.textContent = selectedQuestion[0]},1000);
    // reset (Play it again!)
    hintEl.innerText= "";    
     getAnswer()   
}

//get answer//guesses//Player input

function getAnswer () {
    console.log(selectedQuestion);
    holdGuess = document.getElementById("playerInput");
    let correct = document.createElement('ul');
    for (let i = 0; i < selectedQuestion[1].length; i++) {
        correct.setAttribute('id', 'correctLetter');
        guess = document.createElement('li');
        guess.setAttribute('id', 'guess');
        if (selectedQuestion[1][i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }
        guesses.push(guess);
        holdGuess.appendChild(correct);
        correct.appendChild(guess);

    }
    
}





//get hint

function getHintTxt () {
    hintEl.textContent = selectedQuestion[2]
};




  























//listeners
// startBtn.addEventListener("click", init);






//questions = [
// {"Before...." : "Whitchia State"},
// {},
// ....
// ]
// 7:00
// "Before.... "
// 7:03
// questions = ["1": "Before", "2":]
//_________________________________-
//init function

// 






