// 1. HTML ਐਲੀਮੈਂਟਸ ਸਿਲੈਕਟ ਕੀਤੇ
const container = document.querySelector(".container");

// 2. ਗੇਮ ਦੀ ਸਟੇਟ (State) ਨੂੰ ਸੰਭਾਲਣ ਲਈ ਵੇਰੀਏਬਲਸ
let cardClicked = 0;
let firstCard = null;  // ਇੱਥੇ ਪੂਰਾ ਪਹਿਲਾ HTML ਬਾਕਸ ਸੇਵ ਹੋਵੇਗਾ
let secondCard = null; // ਇੱਥੇ ਪੂਰਾ ਦੂਜਾ HTML ਬਾਕਸ ਸੇਵ ਹੋਵੇਗਾ

// 3. ਮੇਨ ਫੰਕਸ਼ਨ - ਜਦੋਂ ਕਿਸੇ ਵੀ ਚੀਜ਼ 'ਤੇ ਕਲਿੱਕ ਹੁੰਦਾ ਹੈ
function gameStart(event) {
    const target = event.target;
    
    // ਇਹ ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ ਕਲਿੱਕ 'box' ਕਲਾਸ ਵਾਲੇ ਐਲੀਮੈਂਟ 'ਤੇ ਹੀ ਹੋਇਆ ਹੈ
    if (target.classList.contains("box")) {
        
        // ਬੱਗ ਤੋਂ ਬਚਾਅ: ਜੇ ਕਾਰਡ ਪਹਿਲਾਂ ਹੀ ਖੁੱਲ੍ਹ ਚੁੱਕਾ ਹੈ, ਤਾਂ ਦੁਬਾਰਾ ਕਲਿੱਕ ਨਾ ਮੰਨੋ
        if (target === firstCard || target.innerHTML !== "") {
            return; 
        }

        const cardData = target.dataset.cardValue;
        target.innerHTML = cardData; // ਬਾਕਸ ਦੇ ਅੰਦਰ ਵੈਲਿਊ ਦਿਖਾਓ
        
        console.log(`user clicked card value is ${cardData}`);
        
        // ਬਾਕਸ (target) ਅਤੇ ਉਸਦੀ ਵੈਲਿਊ (cardData) ਨੂੰ ਅੱਗੇ ਭੇਜੋ
        checkCard(target, cardData);
    }
}

// 4. ਇਹ ਫੰਕਸ਼ਨ ਕਲਿੱਕ ਕੀਤੇ ਕਾਰਡਾਂ ਨੂੰ ਗਿਣਦਾ ਅਤੇ ਸੇਵ ਕਰਦਾ ਹੈ
function checkCard(boxElement, cardData) {
    if (cardClicked >= 2) {
        return; // ਜੇ ਪਹਿਲਾਂ ਹੀ 2 ਕਾਰਡ ਖੁੱਲ੍ਹੇ ਹਨ, ਤਾਂ ਹੋਰ ਕਲਿੱਕ ਨਾ ਲਵੋ
    }
    
    cardClicked++;

    if (cardClicked === 1) {
        firstCard = boxElement; // ਪਹਿਲਾ ਬਾਕਸ ਸੇਵ ਕੀਤਾ
    } else if (cardClicked === 2) {
        secondCard = boxElement; // ਦੂਜਾ ਬਾਕਸ ਸੇਵ ਕੀਤਾ
        
        // ਹੁਣ 2 ਕਾਰਡ ਹੋ ਗਏ ਹਨ, ਦੋਵਾਂ ਦੀ ਤੁਲਨਾ (compare) ਕਰੋ
        compareValue();
    }
}

// 5. ਇਹ ਫੰਕਸ਼ਨ ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ ਵੈਲਿਊ ਮੈਚ ਹੋਈ ਜਾਂ ਨਹੀਂ
function compareValue() {
    console.log("compareValue function is called");
    
    // ਦੋਵਾਂ ਬਾਕਸਾਂ ਦੀ dataset ਵੈਲਿਊ ਆਪਸ ਵਿੱਚ ਮਿਲਾਓ
    if (firstCard.dataset.cardValue === secondCard.dataset.cardValue) {
        console.log("The values match!");
        
        // ਮੈਚ ਹੋਣ 'ਤੇ ਕਾਰਡ ਖੁੱਲ੍ਹੇ ਰਹਿਣਗੇ, ਅਸੀਂ ਬੱਸ ਅਗਲੀ ਵਾਰੀ ਲਈ ਰੀਸੈੱਟ ਕਰਾਂਗੇ
        resetTurn();
    } 
    else {
        console.log("The values don't match");
        
        // 1 ਸੈਕਿੰਡ (1000ms) ਦਾ ਟਾਈਮ ਦਿਓ ਤਾਂ ਜੋ ਯੂਜ਼ਰ ਦੇਖ ਸਕੇ, ਫਿਰ ਬੰਦ ਕਰੋ
        setTimeout(() => {
            firstCard.innerHTML = "";  // ਪਹਿਲਾ ਕਾਰਡ ਲੁਕਾਓ
            secondCard.innerHTML = ""; // ਦੂਜਾ ਕਾਰਡ ਲੁਕਾਓ
            resetTurn();               // ਅਗਲੀ ਵਾਰੀ ਲਈ ਰੀਸੈੱਟ ਕਰੋ
        }, 1000);
    }
}

// 6. ਹਰੇਕ ਵਾਰੀ (turn) ਤੋਂ ਬਾਅਦ ਵੇਰੀਏਬਲਸ ਨੂੰ ਖਾਲੀ ਕਰਨ ਲਈ ਫੰਕਸ਼ਨ
function resetTurn() {
    cardClicked = 0;
    firstCard = null;
    secondCard = null;
}

// 7. ਕੰਟੇਨਰ 'ਤੇ ਕਲਿੱਕ ਇਵੈਂਟ ਲਿਸਨਰ ਲਗਾਇਆ (Event Delegation)
container.addEventListener("click", gameStart);
