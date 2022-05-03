$(document).ready(function(){
    var gameStatus = $("<p class='gameStatus'></p>").text("Pick a card, any card"); 
    $("body").append(gameStatus); 
    const profiFound = [];

    let clicked = 0;
    let selectedImage = undefined;

    const delay = ms => new Promise(res => setTimeout(res, ms));
    const timeToWait = 1000;

    const setVisible = (elem, value) => {
        $(elem).css("opacity", value);
    }

    const handleClick = (currentElement) => {
        setVisible(currentElement, 1);
        clicked++;
    }

    const setSelectedImage = (currentElement) => {
        selectedImage = currentElement;
    }

    const handleGame = async (selectedImage, currentImage) => {
        if (currentImage.text() === selectedImage.text()) {
            gameStatus.text("You found one floare!");
            profiFound.push(currentImage.text());
            clicked = 0;
        }
        
        if (profiFound.length === 4) {
            gameStatus.textContent = "You won the game! Congratsulatcioton";
            return;
        }

        if (profiFound.includes(currentImage.text())) {
            return;
        }

        gameStatus.text("Not quite the match");
        await delay(timeToWait);
        
        gameStatus.text("Pick a card, any card");
        clicked = 0;
        setVisible(currentImage, 0);
        setVisible(selectedImage, 0);
    }

    for (const image of $(document).find("td")) {
        image.addEventListener("click", (e) => {
            if (profiFound.includes($(e.target).text())) {
                return;
            }
            
            switch (clicked) {
                case 0:
                    handleClick($(e.target));
                    setSelectedImage($(e.target));
                    break;
                case 1:
                    handleClick($(e.target));
                    handleGame(selectedImage, $(e.target));
                    break;
                default:
                    break;
            }
        })  
    }
});