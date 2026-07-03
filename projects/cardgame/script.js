const container= document.querySelector(".container");
let cardclicked=0;
let firstcard=0;
let secondcard=0;
function gameStart(event){
    const target=event.target;
    if(target.classList.contains("box")){
        ui(target);
    }
}
function ui(boxElement){
    cardclicked++;
    boxElement.innerHTML=boxElement.dataset.cardValue;
    firstcard=(cardclicked===1)?boxElement:firstcard;
    secondcard=(cardclicked===2)?boxElement:secondcard;
    if(cardclicked>=2){
        cardclicked=0;
        compareData(boxElement);
    }
}
function compareData(boxElement){
    console.log(" is this called ?")
    if(firstcard.dataset.cardValue===secondcard.dataset.cardValue){
        console.log("these are same cards ")
    }
}

container.addEventListener("click",gameStart);