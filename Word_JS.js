const buttons = document.querySelector(".btn");
const show = document.querySelector(".message");
const inputs = document.querySelector("input");
const ins = document.querySelector(".pin");
//const alll = document.querySelector(".all");
const words = ["blue", "green", "red", "yellow", "black", "white", "brown", "purple", "orange", "grey"];
let Start = false;
let actual;
let splits;
let joining;
let count = 0;
buttons.addEventListener("click", function () {
    document.querySelector(".all").style.margin = "100px 20px 100px 550px";

    if (!Start) {
        Start = true;
        ins.innerHTML = "";
        buttons.innerHTML = "GUESS";
        createWord();
        show.innerHTML = joining;
        console.log(show.innerHTML);
    }

    else {
        console.log(show.innerHTML);
        let vor = inputs.value;
        count++;

        if (vor === actual) {
            buttons.innerHTML = "RESTART";
            show.innerHTML = "";
            inputs.value = "";
            if (count == 1) {
                ins.innerHTML = "CORRECT!" + "<br>" + " The answer was : " + vor + "<br>" + " You Guessed the word in " + count + " Round.";
            }
            else {
                ins.innerHTML = "CORRECT!" + "<br>" + " The answer was : " + vor + "<br>" + " You Guessed the word in " + count + " Rounds.";
            }
            Start = false;
            count = 0;
            inputs.classList.toggle("demo");

            // restartGame();
        }
        else {
            ins.innerHTML = " ' " + vor + " ' " + " is wrong.";
            inputs.value = "";
        }
    }
})

function createWord() {
    inputs.classList.toggle("demo");
    inputs.style.backgroundColor = "White";
    const computerChoice = Math.floor(Math.random() * words.length);
    actual = words[computerChoice];
    splits = actual.split("");
    for (let i in splits) {
        let temp = splits[i];
        let rand = Math.floor(Math.random() * splits.length);
        let num = splits;
        splits[i] = num[rand];
        num[rand] = temp;
    }
    joining = splits.join("");
}
