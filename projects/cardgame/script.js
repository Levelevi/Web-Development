const container=document.querySelector(".container");
let cardflipedvalue=0;
let firstcardValue=0;
let secondcardValue=0;
function gameStart(event){
    const target=event.target;
    if(target.classList.contains("box")){
        if(cardflipedvalue>=2){
            return;
        }
        cardflipedvalue++;
        const value=target.dataset.cardValue;
        target.innerHTML=value;
        firstcardValue=(cardflipedvalue===1)?value:firstcardValue;
        secondcardValue=(cardflipedvalue===2)?value:secondcardValue;
        console.log(value);
        console.log(`first card${firstcardValue} second card ${secondcardValue}`);
        if(cardflipedvalue>=2){
          comparedata();
        }
        }
}
 function comparedata(){
            if(firstcardValue===secondcardValue){
                console.log("matched");
            }else{
                console.log("try again");
            }
        }

container.addEventListener("click",gameStart);