const elevatorContainer=document.querySelector(".elevatorContainer");
const statusDisplay=document.querySelector(".statusDisplay");
let storeData=null;
let floorNo=1;
let elevatorStatus="Idle";
let doorStatus="Closed";
let movingdirection=null;
function gameStart(event){
    const target=event.target;
    if(target.tagName==="BUTTON"){
        storeData=target;
        elevatorStart();
    }
};

function elevatorStart(){
    let currentfloorNo=Number(storeData.dataset.floor);

    if(currentfloorNo===floorNo)return;
    console.log(`this is working now and we will go to this ${currentfloorNo} no`)
}

elevatorContainer.addEventListener("click",gameStart);