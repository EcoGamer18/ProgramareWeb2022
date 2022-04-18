const gameStatus = document.querySelector("#gameStatus");
const profiFound = [];

let clicked = 0;
let selectedImage = undefined;

const delay = ms => new Promise(res => setTimeout(res, ms));
const timeToWait = 1000;

const setVisible = (elem, value) => {
    elem.style.opacity = value;
}

const handleClick = (currentElement) => {
    setVisible(currentElement, 1);
    clicked++;
}

const setSelectedImage = (currentElement) => {
    selectedImage = currentElement;
}

const handleGame = async (selectedImage, currentImage) => {
    if (currentImage.src === selectedImage.src) {
        gameStatus.textContent = "You found one proful!";
        profiFound.push(currentImage.src);
        clicked = 0;
    }
    
    if (profiFound.length === 4) {
        gameStatus.textContent = "You won the game! Congratsulatcioton";
        return;
    }

    if (profiFound.includes(currentImage.src)) {
        return;
    }

    gameStatus.textContent = "Not quite the match";
    await delay(timeToWait);
    
    gameStatus.textContent = "Pick a card, any card";
    clicked = 0;
    setVisible(currentImage, 0);
    setVisible(selectedImage, 0);
}

for (const image of document.querySelectorAll("img")) {
    image.addEventListener("click", (e) => {
        if (profiFound.includes(e.target.src)) {
            return;
        }
        
        switch (clicked) {
            case 0:
                handleClick(e.target);
                setSelectedImage(e.target);
                break;
            case 1:
                handleClick(e.target);
                handleGame(selectedImage, e.target);
                break;
            default:
                break;
        }
    })
}