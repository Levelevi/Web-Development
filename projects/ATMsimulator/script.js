const atmContainer=document.querySelector(".atmcontainer");

function atmSimulator(event){
    const target=event.target;
    if(target.classList.contains("Deposit")){
        depositBtn();
        return;
    }
      if(target.classList.contains("withDraw")){
        withDraw();
        return;
    }
      if(target.classList.contains("checkBalance")){
        checkBalance();
        return;
    }
}
function depositBtn(){

}




atmContainer.addEventListener("click",atmSimulator);