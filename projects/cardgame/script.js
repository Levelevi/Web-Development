const container=document.querySelector(".container");
let clickedcard=0;
let firstCard=0;
let secondCard=0;

function startGame(e){
    const target=e.target;
    clickedcard++;
    firstCard=(clickedcard===1)?target:firstCard;
    secondCard=(clickedcard===2)?target:secondCard;
    console.log(clickedcard);
    
}






container.addEventListener("click",startGame);