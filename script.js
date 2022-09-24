


function play(element) {
    let results = {0:"rock", 1:"paper", 2:"scissors"};
    let AIresult = Math.floor(Math.random()*100)%3;
    let btn = element.innerText;
    let Hresult = btn == 'Rock' ? 0 : btn == "Paper" ? 1 : 2;

    let result;

    if (Hresult == 0) {
        if (AIresult == 0) {
            result = "Tie";
        }
        else if (AIresult == 1) {
            result = "AI Wins";
        } else {
            result = "You Win";
        }   
    } else if (Hresult == 1) {
        if (AIresult == 0) {
            result = "You Win";
        } else if (AIresult == 1) {
            result = "Tie";
        } else {
            result = "You Lose";
        }
    } else {
        if (AIresult == 0) {
            result = "You Lose";
        } else if (AIresult == 1) {
            result = "You Win";
        } else {
            result = "Tie";
        }
    }

    document.getElementById("comp-choice").innerHTML = results[AIresult];
    document.getElementById("result").innerHTML = result;
}


let rock, paper, scissors;

rock = document.getElementById("rock");
rock.addEventListener("click", () => play(rock));

paper = document.getElementById("paper");
paper.addEventListener("click", () => play(paper));

scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => play(scissors));


// 