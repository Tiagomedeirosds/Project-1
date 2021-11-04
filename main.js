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


//Get Guesses
// let guesses = []; //store guesses

//Get Start Button
const startBtn = document.getElementById("start");

//Get Hint Button
const hintBtn = document.getElementById("hint");

//Get play again Button
const playAgainBtn = document.getElementById("playAgain");

//Get picture state hangman display
let SequenceImg = document.getElementById("hangDisplay");



// // Const

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// const questions = ["Before taking over at AFC Richmond, Ted Lasso previously coached American football at which American university", "What type of dog is on the AFC Richmond crest?", "Ted Lasso suffered a panic attack as Rebecca sang a karaoke version of a song from which Disney movie following Richmond's big win over Everton?", "Jamie Tartt hails from which English city?", "Mid-season signee Dani Rojas hails from which country?"];


// const answers = ["Witchita-State", "Greyhound", "Frozen", "Manchester", "Mexico"];



let questions = [
    ["Before taking over at AFC Richmond, Ted Lasso previously coached American football at which American university", "witchita state", "It's located at the south of Kansas"],
    ["What type of dog is on the AFC Richmond crest?", "greyhound", "It might have a color in the name, it might not..."],
    ["Ted Lasso suffered a panic attack as Rebecca sang a karaoke version of a song from which Disney movie following Richmond's big win over Everton?", "frozen", "🎵... Can't hold it back anymore..."],
    ["Jamie Tartt hails from which English city?", "manchester", "is one of four clubs that are part of the City Football Group."],
    ["Mid-season signee Dani Rojas hails from which country?", "mexico", "Is located in North America"]
]



// let tempQuestion = subArray[0] === "Question Number 1";
// let tempAnswer = subArray[1]=== "Answer Number 1";





//STATE

// let lives = 10;
// let guesses = [ ];
// let space = 0;
// let counter = 0;
// let gameStatus;


    //right guesses Keep remaining lives


    //wrong guesses take of -1 of the remaining lives
    //



//listerners
startBtn.addEventListener("click", getQuestion);

playAgainBtn.addEventListener("click", play);

hintBtn.addEventListener("click", getHintTxt);



keyboardEl.addEventListener('click', click)

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
       
    // click();

      keyboardEl.appendChild(letters);
      letters.appendChild(list);
    }
}
createKeyboard();

//get question
function getQuestion () {
    //Delay added to the question
    questionEl.innerText= "";
    setTimeout(function() { 
    selectedQuestion = questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
    questionEl.textContent = selectedQuestion[0];
    getAnswer();
    }, 1000);
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
    }
    for (let i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
            result.innerText = "Congrats! You Win!";
        }
    }
}
// gameStatus();


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


    // function click () {
    //     list.onclick = function () {
    //         let guess = (this.innerHTML);
    //         console.log(guess);
    //         this.setAttribute("class", "active");
    //         this.onclick = null;
    //         for (let i = 0; i < selectedQuestion[1].length; i++) {
    //           if (selectedQuestion[1][i] === guess) {
    //             guesses[i].innerHTML = guess.toUpperCase();
    //             counter += 1;
                
    //             // SequenceImg.style.backgroundImage = "url('./Assets/Seq.0" + counter + ".png')";
    //           } 
    //         }
    //         let j = (selectedQuestion[1].indexOf(guess));
    //         if (j === -1) {
    //           lives -= 1;
    //           gameStatus();
            
    //         } else {
    //           gameStatus();
    //         }
        
    //     }   
    // }





//play


  function play () {
    // selectedQuestion[0] = selectedQuestion[1][Math.floor(Math.random() * selectedQuestion[1].length)];
    // selectedQuestion[1] = selectedQuestion[0][Math.floor(Math.random() * selectedQuestion[0].length)];
    // selectedQuestion[1] = selectedQuestion[1].replace(/\s/g, "-");
    // console.log(selectedQuestion[1]);
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
    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    // getQuestion();
    // getAnswer();
    // gameStatus();
    // selectCat();
    answerEl.innerHTML = "";
    questionEl.innerText= "";
    result.innerText= "";
    SequenceImg.style.backgroundImage = "url('./Assets/Seq.00.jpg')";
  }
  play();


     
     
      



  


  























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






