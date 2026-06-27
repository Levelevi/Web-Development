const thisgame=document.querySelector(".thisgame");
const StartBtn=document.querySelector(".StartBtn");
const userGuess=document.querySelector(".userGuess");
const message=document.querySelector(".message");
let guess=document.querySelector(".guess");
let guessCounterValue=0;
const computer=[1,2,3,4,5,6,7,8,9,10];
let computerGuessData=0;

function computerGuess(){
    const computerGuessValue=computer[Math.floor(Math.random()*computer.length)];
    computerGuessData=computerGuessValue;
    console.log(`computer guess ${computerGuessData}`);
}

thisgame.addEventListener("click",(event)=>{
    const target=event.target;
    if(target.classList.contains("StartBtn")){
        if(userGuess.value>10 || userGuess.value<1 || userGuess.value===""){
         message.innerHTML="Enter a valid number btw 1 to 10";   
         return;
        }
        const userGuessValue=Number(userGuess.value);
        compareData(userGuessValue);
    }
});
function compareData(userGuessValue){
    guessCounterValue++;
    StartBtn.innerHTML="Guess Again"
    let userValue=userGuessValue;
    let computerValue=computerGuessData;
    if(computerValue>userValue){
        message.innerHTML="ur number is too low"
    }
    if(computerValue<userValue){
        message.innerHTML="ur number is too high"
    }
    if(computerValue===userValue){
        message.innerHTML="ur number is correct "
        console.log(`ur number is correct`)
        StartBtn.innerHTML="Play Again"
        guess.innerHTML=0;
        userGuess.value="";
        guessCounterValue=0;
        computerGuess();
    }
    userGuess.value="";
    guess.innerHTML=guessCounterValue;

}
computerGuess();