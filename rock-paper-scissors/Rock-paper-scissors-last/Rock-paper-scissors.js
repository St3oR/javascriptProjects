//global variables
const choices = ['Rock', 'Paper', 'Scissors'];

//load back from localStorage the score turning the JSON object into javascript object, if null then default 000 object
const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`; //insert score into Score paragraph

//button function

function rock() {
    let userH = 'Rock';
    startGame(userH, rando());
}

function paper() {
    let userH = 'Paper';
    startGame(userH, rando());
}

function scissors() {
    let userH = 'Scissors';
    startGame(userH, rando());
}

function resetS() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    updateScoreElement();
    localStorage.setItem('score', JSON.stringify(score));
}

        
//insert score in score paragraph
function updateScoreElement() {
    document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`; //insert score into Score paragraph
}

//function for random computer choice

function rando() {
    let randomH = choices[Math.floor(Math.random() * choices.length)];
    return randomH;
}


//Autoplay functionality

let intervalId;
function autoPlay() {

    let autoPlayText = document.getElementById('autoPlayButton').innerHTML;

    if (autoPlayText === 'Auto Play') {
        autoPlayText = 'Stop Autoplay';
        intervalId = setInterval(() => {
            let userH = rando();
            let computerH = rando();
            startGame(userH, computerH)}, 2000);

    } else if (autoPlayText === 'Stop Autoplay') {
        autoPlayText = 'Auto Play';
        clearInterval(intervalId);
    }

    document.getElementById('autoPlayButton').innerHTML = autoPlayText;
}




//game logic and scoring logic

function startGame(userH, computerH) {
    if (userH === computerH) {
        score.ties++;
        result('draw');
    } else if (userH === "Rock") {
        if (computerH === "Paper") {
            score.losses++;
            result('lose');
        } else if (computerH === "Scissors") {
            score.wins++;
            result('win');
        }
    } else if (userH === "Paper") {
        if (computerH === "Scissors") {
            score.losses++;
            result('lose');
        } else if (computerH === "Rock") {
            score.wins++;
            result('win');
        }
    } else if (userH === "Scissors") {
        if (computerH === "Rock") {
            score.losses++;
            result('lose');
        } else if (computerH === "Paper") {
            score.wins++;
            result('win');
        }
    }


    function result(result) {
        if (result === 'win') {
            document.getElementById('result').innerHTML = `You won! You picked ${userH} and computer picked ${computerH}`;
            updateScoreElement();

        } else if (result === 'lose') {

            document.getElementById('result').innerHTML = `You lost! You picked ${userH} and computer picked ${computerH}`;
            updateScoreElement();

        } else if (result === 'draw') {

            document.getElementById('result').innerHTML = `It's a draw, you both picked ${computerH}`;  
            updateScoreElement();
        }
        
        //add to local storage the score after each game turning javascript object into JSON object
        localStorage.setItem('score', JSON.stringify(score));

    }
}
