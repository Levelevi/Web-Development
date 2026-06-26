// const thisgame=document.querySelector(".thisgame");
// const userGuess=document.querySelector(".userGuess");
// const message=document.querySelector(".message");
// const StartBtn=document.querySelector(".startBtn");
// const computer=[1,2,3,4,5,6,7,8,9,10];
// let computerGuessValue=0;
// let userGuessValue=0;
// let guessScore=0;
// let userScore=1;

// const appState={

// };
// function gameStart(event){
//     const target=event.target;
//     if(target.classList.contains("StartBtn")){
//         if(userGuess.value<1 || userGuess.value>10 || userGuess.value==""){
//             message.innerHTML="Enter number in btw 1 to 10 ";
//             return;
//         }
//         guesscompare();
//     }
// }
// function guesscompare(){
//     if(userScore===1){
//     const computerGuess=computer[Math.floor(Math.random()*computer.length)];
//     const userValue=Number(userGuess.value);
//     computerGuessValue=computerGuess;
//     userGuessValue=userGuess;
//     compare(computerGuess,userValue);
//     return;
//     }

// }
// function compare(computerGuess,userValue){
//  if(computerGuess>userValue){
//         message.innerHTML="wrong guess ur value is too low try again";
//         StartBtn.innerHTML="Try again";
//         guessScore++;
//     }
//     if(computerGuess<userValue){
//         message.innerHTML="wrong guess ur value is too high try again";
//         guessScore++
//     }
//     if(computerGuess===userValue){
        
//     }
// }


// thisgame.addEventListener("click",gameStart);
const appState={
    computerGuess:null,
    userScore:0
}
const computer=[1,2,3,4,5,6,7,8,9,10];
function ComputerGuess(){
    const computerGuessValue=computer[Math.floor(Math.random()*computer.length)]; 
    appState.computerGuess=computerGuessValue;
}
function Game(){
   
}