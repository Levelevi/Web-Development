const thisgame=document.querySelector(".thisgame");
const result=document.querySelector(".result");
const score=document.querySelector(".score");
const computer=["Rock","Paper","Scissor"];
let computerScore=0;
let userScore=0;
let draw=0;
function gameStart(event){
    const target=event.target;
    if(target.classList.contains("btn")){
        let userChoice=target.dataset.choice;
        compareChoice(userChoice);
    }
};
function compareChoice(userChoice){
    let computerChoice = computer[Math.floor(Math.random() * computer.length)];
    console.log(`computer choice ${computerChoice}`);
    console.log(`user choice ${userChoice}`);
    if(computerChoice==="Rock" || userChoice==="Scissor"){
        computerScore++;
        return;
    }
    if(computerChoice==="Paper" || userChoice==="Rock"){
       computerScore++;
       return; 
    }
    if(computerChoice==="Scissor" || userChoice==="Paper"){
        computerScore++;
        return;
    }
    if(computerChoice==="Rock" || userChoice==="Paper"){
        userScore++;
        return;
    }
    if(computerChoice==="Paper" || userChoice==="Scissor"){
       userScore++;
       return; 
    }
    if(computerChoice==="Scissor" || userChoice==="Rock"){
        userScore++;
        return;
    }
    if(computerChoice==="Rock" || userChoice==="Rock"){
       draw++;
        return;
    }
    if(computerChoice==="Paper" || userChoice==="Paper"){
       draw++;
        
       return; 
    }
    if(computerChoice==="Scissor" || userChoice==="Scissor"){
        draw++;  
        return;
    }
    console.log(`computer score${computerScore}`);
    console.log(`user score${userScore}`);
    console.log(`draw${draw}`);
}

// function Ui(){
    
// }




thisgame.addEventListener("click",gameStart);