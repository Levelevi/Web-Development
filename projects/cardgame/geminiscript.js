const container = document.querySelector(".container");

// Game State Tracking variables
let cardClickedCount = 0;
let firstCardElement = null;
let secondCardElement = null;

function gameStart(event) {
    const target = event.target;
    
    // Safety checks: Make sure they clicked a card, and it's not ALREADY flipped open
    if (!target.classList.contains("box") || target.classList.contains("flipped")) {
        return;
    }

    // Reveal the card visually
    target.classList.add("flipped");
    target.textContent = target.dataset.cardValue; // Show the hidden letter

    cardClickedCount++;

    if (cardClickedCount === 1) {
        // Track the first card element itself, not just the string value
        firstCardElement = target; 
    } 
    else if (cardClickedCount === 2) {
        secondCardElement = target;
        
        // Block further clicks temporarily while checking the match
        compareValue();
    }
}

function compareValue() {
    const firstValue = firstCardElement.dataset.cardValue;
    const secondValue = secondCardElement.dataset.cardValue;

    if (firstValue === secondValue) {
        console.log("It's a Match!");
        // Keep them open, clear trackers for the next turn
        resetTurn();
    } else {
        console.log("Not a Match!");
        
        // Wait 1 second so the player can actually see the mistake, then flip back
        setTimeout(() => {
            firstCardElement.classList.remove("flipped");
            secondCardElement.classList.remove("flipped");
            firstCardElement.textContent = "?";
            secondCardElement.textContent = "?";
            
            resetTurn();
        }, 1000);
    }
}

function resetTurn() {
    cardClickedCount = 0;
    firstCardElement = null;
    secondCardElement = null;
}

container.addEventListener("click", gameStart);