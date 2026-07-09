const elevatorContainer=document.querySelector(".elevatorContainer");
const statusDisplay=document.querySelector(".statusDisplay");
let currentFloorNo=1;
let elevatorStatus="Idle"
let doorStatus ="closed"
let userSelectedFloor=null;

function gameStart(event){
    const target=event.target;
    if(target.tagName==="BUTTON"){
        if(doorStatus==="opening" || doorStatus==="closing" || doorStatus==="open"){
            console.log("ur log is blocked");
            return;
        }
        userSelectedFloor=target;
        if(currentFloorNo===Number(userSelectedFloor.dataset.floor)){
            console.log("u are on same floor ");
            return;
        }
        elevatorMoving();
    }
};

function elevatorMoving(){
    elevatorStatus=(Number(userSelectedFloor.dataset.floor)>currentFloorNo)?"Moving upwards":"Moving downwards";
    currentFloorNo=Number(userSelectedFloor.dataset.floor);
    doorStatus="Opening";
    ui();
}
function ui(){
   statusDisplay.innerHTML = `
  <div>ਲਿਫਟ ਦੀ ਸਥਿਤੀ: <strong>${elevatorStatus}</strong></div>
  <div>ਮੌਜੂਦਾ ਮੰਜ਼ਿਲ: <strong>${currentFloorNo}</strong></div>
  <div>ਦਰਵਾਜ਼ਾ: <strong>${doorStatus}</strong></div>
`;
}
ui();   




elevatorContainer.addEventListener("click",gameStart);