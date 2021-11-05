// Get the remaining lives
let livesEl = document.getElementById("lives");

//get the keyboard 
const keyboardEl = document.getElementById('keyboard');

//Get Hint element
let hintEl = document.getElementById("hintTxt");
hintEl.textContent = "";


//Get Winner message
const resultEl = document.getElementById("result");


//Get questions
let questionEl = document.getElementById("question");


//Get answers 
let answerEl = document.getElementById("playerInput");


let selectedQuestion;


//Get Start Button
const startBtn = document.getElementById("start");

//Get Hint Button
const hintBtn = document.getElementById("hint");

//Get play again Button
const playAgainBtn = document.getElementById("playAgain");

//Get picture state hangman display
let SequenceImg = document.getElementById("hangDisplay");



// Const

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];




//Object => Questions index [0], Answers index [1] and Clues index [2]
let questions = [
    ["Before taking over at AFC Richmond, Ted Lasso previously coached American football at which American university", "witchita state", "It's located at the south of Kansas"],
    ["What type of dog is on the AFC Richmond crest?", "greyhound", "It might have a color in the name, it might not..."],
    ["Ted Lasso suffered a panic attack as Rebecca sang a karaoke version of a song from which Disney movie following Richmond's big win over Everton?", "frozen", "🎵... Can't hold it back anymore..."],
    ["Jamie Tartt hails from which English city?", "manchester", "is one of four clubs that are part of the City Football Group."],
    ["Mid-season signee Dani Rojas hails from which country?", "mexico", "Is located in North America"]
]


//listerners
startBtn.addEventListener("click", getQuestion);

playAgainBtn.addEventListener("click", play);

hintBtn.addEventListener("click", getHintTxt);

keyboardEl.addEventListener('click', click)



// functions

function createKeyboard() {
    letters = document.createElement('ul');
    for (let i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      keyboardEl.appendChild(letters);
      letters.appendChild(list);
    }
}
createKeyboard();

//get question
function getQuestion () {
    
    questionEl.innerText= "";
    setTimeout(function() { 
    selectedQuestion = questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
    questionEl.textContent = selectedQuestion[0];
    getAnswer();
    }, 1000);//Delay added to the question
    // reset (Play it again!)
    hintEl.innerText= "";
        
        
}

//get answer//guesses//Player input

function getAnswer () {
    console.log(answerEl);
    // reset Answer
    answerEl.innerHTML = "";
    holdGuess = document.getElementById("playerInput");
    let correct = document.createElement('ul');
    for (let i = 0; i < selectedQuestion[1].length; i++) {
        correct.setAttribute('id', 'correctLetter');
        guess = document.createElement('li');
        guess.setAttribute('id', 'guess');
        if (selectedQuestion[1][i] === " ") {
            guess.innerHTML = " ";
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



//Show game status (Lives left, winner text , loser txt)

function gameStatus () {
    livesEl.innerText = lives + " lives left";
    if (lives < 1) {
        result.innerText = "You Lose";
        result.classList.add("add-background")
        SequenceImg.style.backgroundImage = "url('./Assets/Lose.png')";
    }
    for (let i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
            result.innerText = "Congrats! You Win!";
            result.classList.add("add-background")
            SequenceImg.style.backgroundImage = "url('./Assets/Win.png')";

        }
    }
}



//click letters function

function click(e) {
    e.target.classList.add('active')
    let guess = e.target.textContent
    for (let i = 0; i < selectedQuestion[1].length; i++) {
        if (selectedQuestion[1][i] === guess) {
            console.log(guess)
            guesses[i].textContent = guess.toUpperCase();
            counter += 1;
            if (counter <= 5) {
                SequenceImg.style.backgroundImage = "url('./Assets/Seq.0" + counter + ".png')";    
            }    
        }    
    } 
    let j = (selectedQuestion[1].indexOf(guess));   
    if (j === -1) {
       lives -= 1;
       gameStatus();

    } else {  
      gameStatus();  
    }  
}

    
  //play

  function play () {
    //fisrt, this is to avoid repeating the same question
     questions = [
        ["Before taking over at AFC Richmond, Ted Lasso previously coached American football at which American university", "witchita state", "It's located at the south of Kansas"],
        ["What type of dog is on the AFC Richmond crest?", "greyhound", "It might have a color in the name, it might not..."],
        ["Ted Lasso suffered a panic attack as Rebecca sang a karaoke version of a song from which Disney movie following Richmond's big win over Everton?", "frozen", "🎵... Can't hold it back anymore..."],
        ["Jamie Tartt hails from which English city?", "manchester", "is one of four clubs that are part of the City Football Group."],
        ["Mid-season signee Dani Rojas hails from which country?", "mexico", "Is located in North America"]
    ]
    let activeEl = document.querySelectorAll(".active");
    activeEl.forEach(element => {
        element.classList.remove("active");
        
    });
    
    // reset -->
    guesses = [ ];
    counter = 0;
    lives = 10;
    space = 0;
    answerEl.innerHTML = "";
    questionEl.innerText= "";
    result.innerText= "";
    result.classList.remove("add-background");
    SequenceImg.style.backgroundImage = "url('./Assets/Seq.00.jpg')";
    hintEl.innerText= "";
    livesEl.innerText= "You start having 10 lives left.";
   
  }
  play();


     
     
      



  


  





























