let btn = document.querySelector("#btn");
let input = document.querySelector("#user-guess");
let wrongMsg = document.querySelector(".msg1")
let correctMsg = document.querySelector(".msg2");
let chance = document.querySelector("#chance");
let score = document.querySelector("#score");

let marks = 0;
let guess = 10;
let random = randomNumber();

// generating random number from 1-10
function randomNumber(){
    return Math.floor(Math.random()*10)+1;
}


chance.innerHTML= `Chance : ${guess}`;
chance.style.color= `red`;
score.innerHTML= `Score : ${marks}`;
score.style.color= `green`;



btn.addEventListener("click", ()=>{
    if(input.value < 1 || input.value > 10){
        alert("Please enter a number between 1 and 10");
        input.value = "";
        return;
    }

    if(input.value <  randomNumber() ){
        ;
        wrongMsg.innerHTML = "Guess is less than original number";
        input.value="";
        setTimeout(() => {
            wrongMsg.innerHTML = "";
        }, 1000);
        guess--;
        chance.innerHTML= `Chance : ${guess}`
        
    }else if(input.value > randomNumber()){
        ;
        input.value="";
        wrongMsg.innerHTML = "Guess is high than original number";
        setTimeout(() => {
            wrongMsg.innerHTML = "";
        }, 1000);
        guess--;
        chance.innerHTML= `Chance : ${guess}`


    }else{
        wrongMsg.innerHTML = "Wohhh....Your guess is correct...!";
        wrongMsg.style.color = "green";
        setTimeout(() => {
            wrongMsg.innerHTML = "";
            wrongMsg.style.color = "red";
        }, 4000);
        input.value="";

        marks++;    
        score.innerHTML= `Score : ${marks}`;
         guess--;
        chance.innerHTML= `Chance : ${guess}`

    }

    if(guess === 0){
        wrongMsg.innerHTML = "Game Over...";
        wrongMsg.style.color = "red";
        btn.disabled = true;
        input.disabled = true;

    }
});

a