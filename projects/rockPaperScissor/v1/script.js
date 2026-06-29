const thisgame=document.querySelector(".thisgame");

const computer=
function gameStart(event){
    const target=event.target;
    if(target.classList.contains("btn")){
        let userChoice=target.dataset.choice;
        console.log(userChoice);
        compareChoice(userChoice);
    }
};
function compareChoice(userChoice){
    
}





thisgame.addEventListener("click",gameStart);