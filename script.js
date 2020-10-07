let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    // ES6 Template String
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord}. You win!`;
}

function lose(user, comp) {
    compScore++;
    compScore_span.innerHTML = compScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(comp)}${smallCompWord}. You lost!`;
}

function draw(user, comp) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(comp)}${smallCompWord}. It's a draw!`;
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();