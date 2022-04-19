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
    if (currentImage.innerHTML === selectedImage.innerHTML) {
        gameStatus.textContent = "You found one numar!";
        profiFound.push(currentImage.innerHTML);
        clicked = 0;
    }
    
    if (profiFound.length === 4) {
        gameStatus.textContent = "You won the game! Congratsulatcioton";
        return;
    }

    if (profiFound.includes(currentImage.innerHTML)) {
        return;
    }

    gameStatus.textContent = "Not quite the match";
    await delay(timeToWait);
    
    gameStatus.textContent = "Pick a card, any card";
    clicked = 0;
    setVisible(currentImage, 0);
    setVisible(selectedImage, 0);
}

for (const numar of document.querySelectorAll("td")) {
    numar.addEventListener("click", (e) => {
        if (profiFound.includes(e.target.innerHTML)) {
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