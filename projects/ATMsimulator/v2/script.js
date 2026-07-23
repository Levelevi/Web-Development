const container=document.querySelector(".container");
const display=document.querySelector(".display");
function thisApp(event){
    const target=event.target;
    if(target.classList.contains("btn")){
        const selectedOption=target.dataset.action;
        runAtm(selectedOption);
    }
    if(target.classList.contains(".screen-btn")){
        console.log("button clicked inside button")
    }
}

function runAtm(selectedOption){
    if(selectedOption==="deposit"){
        ui();
    };
    if(selectedOption==="withdraw"){
        console.log("yoo");
    };
    if(selectedOption==="balance"){
        console.log("yoo");
    };
}

function ui() {
    display.innerHTML = `
        <div class="transaction-form">
            <p class="form-label">Enter Amount to Deposit</p>
            <input type="number" id="transaction-amount" class="screen-input" placeholder="$0.00" min="1">
            <button id="confirm-action" class="screen-btn">Confirm</button>
        </div>
    `;
}

container.addEventListener("click",thisApp);