


function play(element) {
    let results = {0:"rock", 1:"paper", 2:"scissors"};
    let AIresult = Math.floor(Math.random()*3)%3;
    let btn = element.innerText;
    let Hresult = btn == 'Rock' ? 0 : btn == "Paper" ? 1 : 2;

    let value;
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

    document.getElementById("comp-choice").textContent = results[AIresult];
    document.getElementById("result").textContent = result;


    if (result == "You Win") {
        document.getElementById("PC").textContent++;
        // document.getElementById("PC").textContent = +value + 1;
    } else if (result == "You Lose") {
        document.getElementById("CPU").textContent++;
        // document.getElementById("CPU").textContent = +value + 1;
    }

}

function reset_score() {
    document.getElementById("PC").textContent = 0;
    document.getElementById("CPU").textContent = 0;
}


let rock, paper, scissors, reset;

rock = document.getElementById("rock");
rock.addEventListener("click", play);

paper = document.getElementById("paper");
paper.addEventListener("click", play);

scissors = document.getElementById("scissors");
scissors.addEventListener("click", play);

reset = document.getElementById("reset");
reset.addEventListener("click", reset_score);

// 